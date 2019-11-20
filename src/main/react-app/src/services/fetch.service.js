class FetchService {

    get(url) {
        return new Promise(resolve => {
            return fetch(process.env.REACT_APP_BASE_API_URL + url, {
                method: "GET",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {},
                redirect: "follow",
                referrer: "no-referrer"
            }).then(function (response) {
                resolve(response.json());
            });
        });
    };

    post(url, data) {
        return new Promise(resolve => {
            return fetch(process.env.REACT_APP_BASE_API_URL + url, {
                method: "POST",
                mode: "cors",
                cache: "no-cache",
                credentials: "same-origin",
                headers: {
                    "Content-Type": "application/json",
                },
                redirect: "follow",
                referrer: "no-referrer",
                body: JSON.stringify(data),
            }).then(function (response) {
                resolve(response.json());
            });
        });
    };

}

const fetchService = new FetchService();

export default fetchService;