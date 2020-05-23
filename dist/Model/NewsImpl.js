"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
let NewsImpl = (() => {
    let NewsImpl = class NewsImpl {
        constructor(id, title, image, published, description, category, author) {
            this._id = id;
            this._title = title;
            this._image = image;
            this._published = published;
            this._description = description;
            this._category = category;
            this._author = author;
        }
        get id() {
            return this._id;
        }
        set id(value) {
            this._id = value;
        }
        get title() {
            return this._title;
        }
        set title(value) {
            this._title = value;
        }
        get image() {
            return this._image;
        }
        set image(value) {
            this._image = value;
        }
        get published() {
            return this._published;
        }
        set published(value) {
            this._published = value;
        }
        get description() {
            return this._description;
        }
        set description(value) {
            this._description = value;
        }
        get category() {
            return this._category;
        }
        set category(value) {
            this._category = value;
        }
        get author() {
            return this._author;
        }
        set author(value) {
            this._author = value;
        }
    };
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], NewsImpl.prototype, "_id", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], NewsImpl.prototype, "_title", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], NewsImpl.prototype, "_image", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], NewsImpl.prototype, "_published", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], NewsImpl.prototype, "_description", void 0);
    __decorate([
        type_graphql_1.Field(() => [String]),
        __metadata("design:type", Array)
    ], NewsImpl.prototype, "_category", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], NewsImpl.prototype, "_author", void 0);
    NewsImpl = __decorate([
        type_graphql_1.ObjectType(),
        __metadata("design:paramtypes", [String, String, String, String, String, Array, String])
    ], NewsImpl);
    return NewsImpl;
})();
exports.default = NewsImpl;
