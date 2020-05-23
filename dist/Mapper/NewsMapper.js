"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const NewsImpl_1 = __importDefault(require("../Model/NewsImpl"));
class NewsMapper {
    static NewsToNewsImpl(news) {
        return new NewsImpl_1.default(news.id, news.title, news.image, news.url, news.published, news.description, news.category, news.author);
    }
}
exports.default = NewsMapper;
