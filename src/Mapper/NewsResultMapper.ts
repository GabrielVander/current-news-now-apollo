import NewsResult from "../Model/NewsResult";
import NewsResultImpl from "../Model/NewsResultImpl";
import News from "../Model/News";
import NewsMapper from "./NewsMapper";

class NewsResultMapper {
    static newsResultToNewsResultImpl(newsResult: NewsResult) {
        return new NewsResultImpl(
            newsResult.status,
            newsResult.news.map((news: News) => NewsMapper.NewsToNewsImpl(news)),
            newsResult.page);
    }
}

export default NewsResultMapper;
