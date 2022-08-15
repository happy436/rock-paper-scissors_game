import httpService from "./http.service";

const gameDataEndPoint = "gameData/";

const gameDataService = {
    get: async () => {
        const { data } = await httpService.get(gameDataEndPoint);
        return data;
    }
};

export default gameDataService;
