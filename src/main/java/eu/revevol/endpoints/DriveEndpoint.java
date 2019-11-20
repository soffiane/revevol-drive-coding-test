package eu.revevol.endpoints;

import com.google.api.server.spi.config.Api;
import com.google.api.server.spi.config.ApiMethod;
import com.google.api.server.spi.config.Named;
import com.google.api.server.spi.response.NotFoundException;
import com.google.api.services.drive.model.FileList;
import com.google.inject.Inject;
import eu.revevol.services.DriveService;
import lombok.extern.slf4j.Slf4j;

import java.io.IOException;

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

    // View file

}
