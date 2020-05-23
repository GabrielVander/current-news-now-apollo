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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const type_graphql_1 = require("type-graphql");
const NewsImpl_1 = __importDefault(require("../Model/NewsImpl"));
const CurrentsAPI_1 = __importDefault(require("../Model/CurrentsAPI"));
const NewsResultImpl_1 = __importDefault(require("../Model/NewsResultImpl"));
const NewsResultMapper_1 = __importDefault(require("../Mapper/NewsResultMapper"));
let NewsResolver = (() => {
    let NewsResolver = class NewsResolver {
        async latestNews() {
            const result = await CurrentsAPI_1.default.latestNews();
            let newsResult = result.data;
            return NewsResultMapper_1.default.newsResultToNewsResultImpl(newsResult);
        }
    };
    __decorate([
        type_graphql_1.Query(() => NewsResultImpl_1.default),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", Promise)
    ], NewsResolver.prototype, "latestNews", null);
    NewsResolver = __decorate([
        type_graphql_1.Resolver(NewsImpl_1.default)
    ], NewsResolver);
    return NewsResolver;
})();
exports.default = NewsResolver;
