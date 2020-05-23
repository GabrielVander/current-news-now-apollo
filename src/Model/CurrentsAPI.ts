import axios from "axios";
import { environment } from "../environment";

class CurrentsAPI {
    private static BASE_API_URL = 'https://api.currentsapi.services/v1';
    private static LATEST_NEWS_URL = '/latest-news';
    private static instance = axios.create({
        baseURL: CurrentsAPI.BASE_API_URL,
        timeout: environment.api.timeout,
        headers: {'Authorization': environment.api.key}
    });

    static async latestNews() {
        return this.instance.get(this.LATEST_NEWS_URL);
    }
}

export default CurrentsAPI;
