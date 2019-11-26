package eu.revevol.endpoints;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.response.NotFoundException;
import com.google.api.services.drive.model.File;
import com.google.api.services.drive.model.FileList;
import com.google.inject.Inject;
import eu.revevol.services.DriveService;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@Api(description = "Revevol Drive Coding")
public class DriveEndpoint {

    @Inject
    private DriveService driveService;

    @ApiMethod(
            path = "list/{folderId}",
            httpMethod = ApiMethod.HttpMethod.GET
    )
    public FileList list(@Named("folderId") String folderId) throws NotFoundException {
        try {
            return driveService.list(folderId);
        } catch (IOException e) {
            throw new NotFoundException(e.getMessage());
        }
    }

    // Filter files
    @ApiMethod(
            path = "filter/{folderId}/{fileName}",
            httpMethod = ApiMethod.HttpMethod.GET
    )
    public FileList filter(@Named("folderId") String folderId,@Named("fileName") String fileName) throws NotFoundException {
        try {
            FileList fileList = driveService.list(folderId);
            List<File> filteredList = fileList.getFiles().stream()
                    .filter(file -> file.getName().contains(fileName))
                    .collect(Collectors.toList());;
            FileList result = new FileList();
            return result.setFiles(filteredList);
        } catch (IOException e) {
            throw new NotFoundException(e.getMessage());
        }
    }
    // View file
    @ApiMethod(
            path = "find/{fileId}",
            httpMethod = ApiMethod.HttpMethod.GET
    )
    public File find(@Named("fileId") String fileId) throws NotFoundException {
        try {
            return driveService.get(fileId);
        } catch (IOException e) {
            throw new NotFoundException(e.getMessage());
        }
    }

}
