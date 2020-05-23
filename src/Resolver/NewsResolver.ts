import { Query, Resolver } from "type-graphql";
import NewsImpl from "../Model/NewsImpl";
import CurrentsAPI from "../Model/CurrentsAPI";
import NewsResultImpl from "../Model/NewsResultImpl";
import NewsResult from "../Model/NewsResult";
import NewsResultMapper from "../Mapper/NewsResultMapper";

@Resolver(NewsImpl)
class NewsResolver {
    @Query(() => NewsResultImpl)
    async latestNews() {
        const result = await CurrentsAPI.latestNews();
        let newsResult: NewsResult = result.data;
        return NewsResultMapper.newsResultToNewsResultImpl(newsResult);
    }
}

export default NewsResolver;
