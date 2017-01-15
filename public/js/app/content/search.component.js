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
var core_1 = require("@angular/core");
var content_service_1 = require("../service/content.service");
var global_service_1 = require("../service/global.service");
var router_1 = require("@angular/router");
var SearchComponent = (function () {
    function SearchComponent(contentService, router, gS) {
        this.contentService = contentService;
        this.router = router;
        this.gS = gS;
        this.allAvailableContent = [];
        this.newImbdId = undefined;
        this.nameToFind = '';
        this.numberToShow = 20;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.contentService.get().subscribe(function (content) {
            _this.allAvailableContent = content;
        });
    };
    SearchComponent.prototype.createContent = function () {
        var _this = this;
        if (this.newImbdId !== undefined && this.newImbdId !== '') {
            this.contentService.create({ imbdid: this.newImbdId }).subscribe(function (content) {
                _this.allAvailableContent.push(content);
            });
        }
    };
    SearchComponent.prototype.find = function ($event) {
        var _this = this;
        this.contentService.get(this.nameToFind).subscribe(function (content) {
            _this.allAvailableContent = content;
        });
    };
    SearchComponent.prototype.seeContent = function (index) {
        this.gS.setContent(this.allAvailableContent[index]);
        this.router.navigate(['c']);
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    core_1.Component({
        selector: 'search',
        providers: [content_service_1.ContentService],
        templateUrl: '/templates/content/search.html'
    }),
    __metadata("design:paramtypes", [content_service_1.ContentService, router_1.Router, global_service_1.GlobalService])
], SearchComponent);
exports.SearchComponent = SearchComponent;
