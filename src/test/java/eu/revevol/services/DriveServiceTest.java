package eu.revevol.services;

import com.google.api.services.drive.model.File;
import com.google.api.services.drive.model.FileList;
import com.google.inject.Guice;
import com.google.inject.Injector;
import org.assertj.core.api.Assertions;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import java.io.IOException;
import java.util.UUID;

public class DriveServiceTest {

    private DriveService driveService;

    @BeforeClass
    public void setUp() {
        Injector injector = Guice.createInjector();
        driveService = injector.getInstance(DriveService.class);
    }

    @Test
    public void should_list_files_in_root() throws IOException {
        // GIVEN
        String folderId = "root";
        // WHEN
        FileList root = driveService.list(folderId);
        // THEN
        Assertions.assertThat(root.getFiles())
                .hasSize(8);
    }

    @Test(expectedExceptions = IOException.class)
    public void should_failed_to_list_other_than_list() throws IOException {
        // GIVEN
        String folderId = UUID.randomUUID().toString();
        // WHEN
        FileList root = driveService.list(folderId);
    }

    @Test
    public void should_get_a_file_by_id() throws IOException {
        // GIVEN
        String fileId = "1dapQ9eVgjJzrjMwmB33Wj9MIygoMGcd0";
        // WHEN
        File file = driveService.get(fileId);
        // THEN
        Assertions.assertThat(file)
                .isNotNull();
    }

    @Test(expectedExceptions = IOException.class)
    public void should_failed_get_a_file_by_id() throws IOException {
        // GIVEN
        String fileId = UUID.randomUUID().toString();
        // WHEN
        File file = driveService.get(fileId);
    }

}