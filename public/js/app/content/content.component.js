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
var ContentComponent = (function () {
    function ContentComponent(contentService, gS) {
        this.contentService = contentService;
        this.gS = gS;
        this.selectedArea = 'info';
        this.content = this.gS.getContent();
    }
    ContentComponent.prototype.ngOnInit = function () {
    };
    ContentComponent.prototype.selectArea = function (selection) {
        this.selectedArea = selection;
    };
    return ContentComponent;
}());
ContentComponent = __decorate([
    core_1.Component({
        selector: 'content',
        providers: [content_service_1.ContentService],
        templateUrl: '/templates/content/content.html'
    }),
    __metadata("design:paramtypes", [content_service_1.ContentService, global_service_1.GlobalService])
], ContentComponent);
exports.ContentComponent = ContentComponent;
