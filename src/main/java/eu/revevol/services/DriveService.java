package eu.revevol.services;

import com.google.api.client.json.JsonObjectParser;
import com.google.api.client.json.jackson2.JacksonFactory;
import com.google.api.services.drive.model.File;
import com.google.api.services.drive.model.FileList;
import lombok.NonNull;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.Optional;

/**
 * Mock class to Drive, candidate must not update this class but work
 * around it
 */
@Slf4j
public class DriveService {

    /**
     * Will list the files from the a folder in Drive
     *
     * @param folderId - the id of a folder (example : root)
     * @return a FileList containing a list of files
     * @throws IOException - If the folder is not found
     */
    public FileList list(@NonNull String folderId) throws IOException {
        log.info("Will get the files for folder {}", folderId);
        try {
            InputStream inputStream = getFileAsInputStream(folderId + ".json");
            return loadFromFile(FileList.class, inputStream);
        } catch (Exception e) {
            throw new IOException("Impossible to list files in the folder " + folderId);
        }
    }

    /**
     * Will get a file from Drive
     *
     * @param fileId - the id of a file
     * @return a File from Drive
     * @throws IOException - If the file is not found
     */
    public File get(@NonNull String fileId) throws IOException {
        log.info("Will get the file {}", fileId);
        try {
            InputStream inputStream = getFileAsInputStream(fileId + ".json");
            return loadFromFile(File.class, inputStream);
        } catch (Exception e) {
            throw new IOException("Impossible to get the file " + fileId);
        }
    }

    private InputStream getFileAsInputStream(@NonNull String fileName) {
        return Optional.ofNullable(Thread.currentThread()
                .getContextClassLoader()
                .getResourceAsStream(fileName))
                .orElseThrow(() -> new IllegalStateException("Impossible to get " + fileName));
    }

    private <T> T loadFromFile(Class<T> tClass, InputStream inputStream) {
        JsonObjectParser jsonObjectParser = new JsonObjectParser(JacksonFactory.getDefaultInstance());
        try {
            return jsonObjectParser.parseAndClose(inputStream, StandardCharsets.UTF_8, tClass);
        } catch (IOException e) {
            e.printStackTrace();
        }
        return null;
    }

}
