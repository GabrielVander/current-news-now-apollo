import News from "../Model/News";
import NewsImpl from "../Model/NewsImpl";

class NewsMapper {
    static NewsToNewsImpl(news: News): NewsImpl{
        return new NewsImpl(
            news.id,
            news.title,
            news.image,
            news.published,
            news.description,
            news.category,
            news.author
        );
    }
}

export default NewsMapper;
