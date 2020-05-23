"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NewsResultImpl_1 = __importDefault(require("../Model/NewsResultImpl"));
const NewsMapper_1 = __importDefault(require("./NewsMapper"));
class NewsResultMapper {
    static newsResultToNewsResultImpl(newsResult) {
        return new NewsResultImpl_1.default(newsResult.status, newsResult.news.map((news) => NewsMapper_1.default.NewsToNewsImpl(news)), newsResult.page);
    }
}
exports.default = NewsResultMapper;
