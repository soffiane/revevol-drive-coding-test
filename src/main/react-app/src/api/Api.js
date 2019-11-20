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

}

export const api = new Api();
