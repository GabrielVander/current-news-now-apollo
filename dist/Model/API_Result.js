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
const News_1 = __importDefault(require("./News"));
const type_graphql_1 = require("type-graphql");
let API_Result = (() => {
    let API_Result = class API_Result {
        constructor(status, news, page) {
            this._status = status;
            this._news = news;
            this._page = page;
        }
        get status() {
            return this._status;
        }
        set status(value) {
            this._status = value;
        }
        get news() {
            return this._news;
        }
        set news(value) {
            this._news = value;
        }
        get page() {
            return this._page;
        }
        set page(value) {
            this._page = value;
        }
    };
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", String)
    ], API_Result.prototype, "_status", void 0);
    __decorate([
        type_graphql_1.Field(() => [News_1.default]),
        __metadata("design:type", Array)
    ], API_Result.prototype, "_news", void 0);
    __decorate([
        type_graphql_1.Field(),
        __metadata("design:type", Number)
    ], API_Result.prototype, "_page", void 0);
    API_Result = __decorate([
        type_graphql_1.ObjectType(),
        __metadata("design:paramtypes", [String, Array, Number])
    ], API_Result);
    return API_Result;
})();
exports.default = API_Result;
