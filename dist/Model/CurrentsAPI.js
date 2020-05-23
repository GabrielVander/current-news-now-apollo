"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const environment_1 = require("../environment");
let CurrentsAPI = (() => {
    class CurrentsAPI {
        static async latestNews() {
            return this.instance.get(this.LATEST_NEWS_URL);
        }
    }
    CurrentsAPI.BASE_API_URL = 'https://api.currentsapi.services/v1';
    CurrentsAPI.LATEST_NEWS_URL = '/latest-news';
    CurrentsAPI.instance = axios_1.default.create({
        baseURL: CurrentsAPI.BASE_API_URL,
        timeout: environment_1.environment.api.timeout,
        headers: { 'Authorization': environment_1.environment.api.key }
    });
    return CurrentsAPI;
})();
exports.default = CurrentsAPI;
