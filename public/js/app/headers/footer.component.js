"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var ngFooter = (function () {
    function ngFooter() {
    }
    return ngFooter;
}());
ngFooter = __decorate([
    core_1.Component({
        selector: 'ng-footer',
        template: "\n  <div class=\"footerfix\"></div>\n  <footer>\n    <div>\n      Copyright &copy; Jesus Juan Aguilar - 2017\n    </div>\n\t</footer>\n  ",
        styles: []
    })
], ngFooter);
exports.ngFooter = ngFooter;
