import {Field, ObjectType} from "type-graphql";
import News from "./News";

@ObjectType()
class NewsImpl implements News {
    @Field() private _id: string;

    @Field() private _title: string;

    @Field() private _image: string;

    @Field() private _published: string;

    @Field() private _description: string;

    @Field(() => [String]) private _category: [string];

    @Field() private _author: string;

    constructor(
        id: string,
        title: string,
        image: string,
        published: string,
        description: string,
        category: [string],
        author: string
    ) {
        this._id = id;
        this._title = title;
        this._image = image;
        this._published = published;
        this._description = description;
        this._category = category;
        this._author = author;
    }

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get image(): string {
        return this._image;
    }

    set image(value: string) {
        this._image = value;
    }

    get published(): string {
        return this._published;
    }

    set published(value: string) {
        this._published = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get category(): [string] {
        return this._category;
    }

    set category(value: [string]) {
        this._category = value;
    }

    get author(): string {
        return this._author;
    }

    set author(value: string) {
        this._author = value;
    }
}

export default NewsImpl;
