import News from "./News";

interface NewsResult {
    status: string;
    news: News[];
    page: number;
}

export default NewsResult;