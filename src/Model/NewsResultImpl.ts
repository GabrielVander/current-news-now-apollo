import NewsImpl from "./NewsImpl";
import { Field, ObjectType } from "type-graphql";
import NewsResult from "./NewsResult";

@ObjectType()
class NewsResultImpl implements NewsResult {
    @Field()
    private _status: string;
    @Field(() => [NewsImpl])
    private _news: NewsImpl[];
    @Field()
    private _page: number;

    constructor(status: string, news: NewsImpl[], page: number) {
        this._status = status;
        this._news = news;
        this._page = page;
    }

    get status(): string {
        return this._status;
    }

    set status(value: string) {
        this._status = value;
    }

    get news(): NewsImpl[] {
        return this._news;
    }

    set news(value: NewsImpl[]) {
        this._news = value;
    }

    get page(): number {
        return this._page;
    }

    set page(value: number) {
        this._page = value;
    }
}

export default NewsResultImpl;
