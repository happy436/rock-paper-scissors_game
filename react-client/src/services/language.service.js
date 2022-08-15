import httpService from "./http.service";

const languageEndPoint = "language/";

const languageService = {
    get: async () => {
        const { data } = await httpService.get(languageEndPoint);
        return data;
    }
};

export default languageService;
