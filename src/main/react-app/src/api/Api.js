import fetchService from "../services/fetch.service";

class Api {

    list(folderId) {
        let url = "/list/{folderId}"
            .replace("{folderId}", folderId);

        return new Promise((resolve, reject) => {
            fetchService.get(url).then(response => {
                if (response.error) {
                    reject();
                } else {
                    resolve(response);
                }
            }).catch(() => reject());
        });
    }

    filter(folderId, fileName) {
        let url = "/filter/{folderId}/{fileName}"
            .replace("{folderId}", folderId)
            .replace("{fileName}", fileName);

        return new Promise((resolve, reject) => {
            fetchService.get(url).then(response => {
                if (response.error) {
                    reject();
                } else {
                    resolve(response);
                }
            }).catch(() => reject());
        });
    }

    find(fileId) {
        let url = "/find/{fileId}"
            .replace("{fileId}", fileId);

        return new Promise((resolve, reject) => {
            fetchService.get(url).then(response => {
                if (response.error) {
                    reject();
                } else {
                    resolve(response);
                }
            }).catch(() => reject());
        });
    }

}

export const api = new Api();
