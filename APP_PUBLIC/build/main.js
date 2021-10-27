(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/about/about.component.css":
/*!*******************************************!*\
  !*** ./src/app/about/about.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/about/about.component.html":
/*!********************************************!*\
  !*** ./src/app/about/about.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>About my site</h1>\n<p>I'm You-Sheng, a full-stack developer.</p>"

/***/ }),

/***/ "./src/app/about/about.component.ts":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AboutComponent = /** @class */ (function () {
    function AboutComponent() {
    }
    AboutComponent.prototype.ngOnInit = function () {
    };
    AboutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-about',
            template: __webpack_require__(/*! ./about.component.html */ "./src/app/about/about.component.html"),
            styles: [__webpack_require__(/*! ./about.component.css */ "./src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _home_list_home_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home-list/home-list.component */ "./src/app/home-list/home-list.component.ts");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./about/about.component */ "./src/app/about/about.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _framework_framework_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./framework/framework.component */ "./src/app/framework/framework.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _create_create_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./create/create.component */ "./src/app/create/create.component.ts");
/* harmony import */ var _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./details-page/details-page.component */ "./src/app/details-page/details-page.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _home_list_home_list_component__WEBPACK_IMPORTED_MODULE_3__["HomeListComponent"],
                _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _framework_framework_component__WEBPACK_IMPORTED_MODULE_7__["FrameworkComponent"],
                _create_create_component__WEBPACK_IMPORTED_MODULE_11__["CreateComponent"],
                _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_12__["DetailsPageComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot([
                    {
                        path: '',
                        component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_5__["HomepageComponent"]
                    },
                    {
                        path: 'about',
                        component: _about_about_component__WEBPACK_IMPORTED_MODULE_4__["AboutComponent"]
                    },
                    {
                        path: 'create',
                        component: _create_create_component__WEBPACK_IMPORTED_MODULE_11__["CreateComponent"]
                    },
                    {
                        path: 'food/:foodid',
                        component: _details_page_details_page_component__WEBPACK_IMPORTED_MODULE_12__["DetailsPageComponent"]
                    }
                ])
            ],
            providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_9__["APP_BASE_HREF"], useValue: '/' }],
            bootstrap: [_framework_framework_component__WEBPACK_IMPORTED_MODULE_7__["FrameworkComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/create/create.component.css":
/*!*********************************************!*\
  !*** ./src/app/create/create.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWF0ZS9jcmVhdGUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/create/create.component.html":
/*!**********************************************!*\
  !*** ./src/app/create/create.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n  <div class=\"\">\n    <h1>Add a new song</h1>\n  </div>\n  <div class=\"\">\n    <div class=\"col\" style=\"margin-bottom:16px\">\n      <form (ngSubmit)=\"createNewSong(newSong)\">\n        <div class=\"form-group\">\n          <label for=\"name\">Name: </label>\n          <input [(ngModel)]=\"newSong.name\" id=\"name\" name=\"name\" class=\"form-control\" required=\"required\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"artists\">Artist: </label>\n          <input [(ngModel)]=\"newSong.artists\" id=\"artists\" name=\"artists\" class=\"form-control\" required=\"required\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"length\">Length in second: </label>\n          <input [(ngModel)]=\"newSong.length\" id=\"length\" name=\"length\" class=\"form-control\" required=\"required\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"releaseYear\">Release Year: </label>\n          <input [(ngModel)]=\"newSong.releaseYear\" id=\"releaseYear\" name=\"releaseYear\" class=\"form-control\"\n            required=\"required\">\n        </div>\n        <br>\n        <button class=\"btn btn-default\" type=\"submit\">Create</button>\n      </form>\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/create/create.component.ts":
/*!********************************************!*\
  !*** ./src/app/create/create.component.ts ***!
  \********************************************/
/*! exports provided: CreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateComponent", function() { return CreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _song_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../song-data.service */ "./src/app/song-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateComponent = /** @class */ (function () {
    function CreateComponent(FoodDataService, router) {
        this.FoodDataService = FoodDataService;
        this.router = router;
        this.newSong = {
            name: '',
            artists: [],
            rating: 0
        };
    }
    CreateComponent.prototype.ngOnInit = function () {
    };
    CreateComponent.prototype.createNewSong = function (newSong) {
        var _this = this;
        this.FoodDataService.createFood(newSong).then(function () {
            _this.router.navigate(['/']);
        });
    };
    CreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-create',
            template: __webpack_require__(/*! ./create.component.html */ "./src/app/create/create.component.html"),
            styles: [__webpack_require__(/*! ./create.component.css */ "./src/app/create/create.component.css")],
            providers: [_song_data_service__WEBPACK_IMPORTED_MODULE_1__["FoodDataService"]]
        }),
        __metadata("design:paramtypes", [_song_data_service__WEBPACK_IMPORTED_MODULE_1__["FoodDataService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], CreateComponent);
    return CreateComponent;
}());



/***/ }),

/***/ "./src/app/details-page/details-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/details-page/details-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"newSong\">\n  <div *ngIf=\"!editing\">\n    <div class=\"\">\n      <h1>{{newSong.name}}</h1>\n    </div>\n    <div class=\"\">\n      <div class=\"col\" style=\"margin-bottom:16px\"><span>Artists: </span>\n        <span *ngFor=\"let artist of newSong.artists\"\n          style=\"background-color:#d0d0d0; margin-right:5px; padding:2px 5px\">{{artist}}</span>\n      </div>\n    </div>\n    <div class=\"\">\n      <div class=\"col\">\n        <span *ngFor=\"let star of newSong.stars\">{{star}}</span>\n      </div>\n    </div>\n    <div class=\"\">\n      <div class=\"col\">\n        <div>Length: {{newSong.min}}:{{newSong.sec}}</div>\n      </div>\n    </div>\n    <div class=\"\" style=\"margin-bottom:16px\">\n      <div class=\"col\">\n        <div>Release Year: {{newSong.releaseYear}}</div>\n      </div>\n    </div>\n    <div style=\"margin-bottom:24px\">\n      <button class=\"btn btn-primary\" (click)=\"edit(true)\">Edit</button>\n      <button class=\"btn btn-danger\" (click)=\"delete(newSong)\" style=\"margin-left:14px\">Delete</button>\n    </div>\n  </div>\n  \n  <div *ngIf=\"editing\">\n    <div class=\"\">\n      <h1>{{newSong.name}}</h1>\n      <div class=\"col\" style=\"margin-bottom:16px\">\n        <form (ngSubmit)=\"update(updateSong)\">\n          <div class=\"form-group\">\n            <label for=\"name\">Name: </label>\n            <input [(ngModel)]=\"updateSong.name\" id=\"name\" name=\"name\" class=\"form-control\" required=\"required\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"artists\">Artist: </label>\n            <input [(ngModel)]=\"updateSong.artists\" id=\"artists\" name=\"artists\" class=\"form-control\" required=\"required\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"length\">Length in second: </label>\n            <input [(ngModel)]=\"updateSong.length\" id=\"length\" name=\"length\" class=\"form-control\" required=\"required\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"releaseYear\">Release Year: </label>\n            <input [(ngModel)]=\"updateSong.releaseYear\" id=\"releaseYear\" name=\"releaseYear\" class=\"form-control\"\n              required=\"required\">\n          </div>\n          <br>\n          <div style=\"margin-bottom:14px\">\n            <button class=\"btn btn-success\" type=\"submit\">Save</button>\n            <button class=\"btn btn-default\" (click)=\"edit(false)\" style=\"margin-left:14px\">Cancel</button>\n          </div>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/details-page/details-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/details-page/details-page.component.ts ***!
  \********************************************************/
/*! exports provided: DetailsPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailsPageComponent", function() { return DetailsPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _song_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../song-data.service */ "./src/app/song-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DetailsPageComponent = /** @class */ (function () {
    function DetailsPageComponent(FoodDataService, route, router) {
        this.FoodDataService = FoodDataService;
        this.route = route;
        this.router = router;
    }
    DetailsPageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (params) { return _this.FoodDataService.getSingleFood(params['foodid']); }))
            .subscribe(function (newSong) {
            _this.newSong = newSong;
            _this.newSong.min = Math.floor(newSong.length / 60);
            _this.newSong.sec = pad(newSong.length % 60, 2);
            _this.newSong.stars = ['☆', '☆', '☆', '☆', '☆'];
            for (var i = 0; i < newSong.rating; i++) {
                _this.newSong.stars[i] = '★';
            }
            _this.editing = false;
            function pad(input, length) {
                return Array(length - Math.floor(Math.log10(input))).join('0') + input;
            }
        });
    };
    DetailsPageComponent.prototype.edit = function (editing) {
        var _a = this.newSong, name = _a.name, artists = _a.artists, length = _a.length, releaseYear = _a.releaseYear, _id = _a._id;
        this.updateSong = { name: name, artists: artists, length: length, releaseYear: releaseYear, _id: _id };
        this.editing = editing;
    };
    DetailsPageComponent.prototype.update = function (updateSong) {
        var _this = this;
        this.FoodDataService.updateFood(updateSong).then(function () {
            _this.ngOnInit();
        });
    };
    DetailsPageComponent.prototype.delete = function (updateSong) {
        var _this = this;
        this.FoodDataService.deleteFood(updateSong).then(function () {
            _this.router.navigate(['/']);
        });
    };
    DetailsPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-details-page',
            template: __webpack_require__(/*! ./details-page.component.html */ "./src/app/details-page/details-page.component.html"),
            styles: [],
            providers: [_song_data_service__WEBPACK_IMPORTED_MODULE_1__["FoodDataService"]]
        }),
        __metadata("design:paramtypes", [_song_data_service__WEBPACK_IMPORTED_MODULE_1__["FoodDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], DetailsPageComponent);
    return DetailsPageComponent;
}());



/***/ }),

/***/ "./src/app/framework/framework.component.css":
/*!***************************************************!*\
  !*** ./src/app/framework/framework.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZyYW1ld29yay9mcmFtZXdvcmsuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/framework/framework.component.html":
/*!****************************************************!*\
  !*** ./src/app/framework/framework.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"navbar-header\"></div>\n  <ul class=\"nav navbar-nav\" style=\"padding-left:15px\">\n    <li class=\"nav-item\"><a routerLink=\"\">Songs</a></li>\n    <li class=\"nav-item\"><a routerLink=\"about\">About</a></li>\n    <li class=\"nav-item\"><a routerLink=\"create\">Create</a></li>\n  </ul>\n</nav>\n<div class=\"panel panel-default\" style=\"padding:0 15px;\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/framework/framework.component.ts":
/*!**************************************************!*\
  !*** ./src/app/framework/framework.component.ts ***!
  \**************************************************/
/*! exports provided: FrameworkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FrameworkComponent", function() { return FrameworkComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FrameworkComponent = /** @class */ (function () {
    function FrameworkComponent() {
    }
    FrameworkComponent.prototype.ngOnInit = function () {
    };
    FrameworkComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-framework',
            template: __webpack_require__(/*! ./framework.component.html */ "./src/app/framework/framework.component.html"),
            styles: [__webpack_require__(/*! ./framework.component.css */ "./src/app/framework/framework.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FrameworkComponent);
    return FrameworkComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>{{content.title}}</h1>"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "content", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/home-list/home-list.component.css":
/*!***************************************************!*\
  !*** ./src/app/home-list/home-list.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUtbGlzdC9ob21lLWxpc3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/home-list/home-list.component.html":
/*!****************************************************!*\
  !*** ./src/app/home-list/home-list.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"list-group\">\r\n  <li class=\"list-group-item\" *ngFor=\"let song of songs\">\r\n    <a routerLink=\"{{'food/' + song._id}}\">[{{song.artists}}] {{song.name}}</a>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/home-list/home-list.component.ts":
/*!**************************************************!*\
  !*** ./src/app/home-list/home-list.component.ts ***!
  \**************************************************/
/*! exports provided: HomeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeListComponent", function() { return HomeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _song_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../song-data.service */ "./src/app/song-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeListComponent = /** @class */ (function () {
    function HomeListComponent(foodService) {
        this.foodService = foodService;
    }
    HomeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.foodService
            .getFoods()
            .then(function (songs) {
            _this.songs = songs.map(function (song) {
                return song;
            });
        });
    };
    HomeListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-list',
            template: __webpack_require__(/*! ./home-list.component.html */ "./src/app/home-list/home-list.component.html"),
            styles: [__webpack_require__(/*! ./home-list.component.css */ "./src/app/home-list/home-list.component.css")],
            providers: [_song_data_service__WEBPACK_IMPORTED_MODULE_1__["FoodDataService"]]
        }),
        __metadata("design:paramtypes", [_song_data_service__WEBPACK_IMPORTED_MODULE_1__["FoodDataService"]])
    ], HomeListComponent);
    return HomeListComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWVwYWdlL2hvbWVwYWdlLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Music list</h1>\n<app-home-list></app-home-list>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
        this.pageContent = {
            header: {
                title: 'My Food List',
                body: ''
            }
        };
    }
    HomepageComponent.prototype.ngOnInit = function () {
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/song-data.service.ts":
/*!**************************************!*\
  !*** ./src/app/song-data.service.ts ***!
  \**************************************/
/*! exports provided: FoodDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FoodDataService", function() { return FoodDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FoodDataService = /** @class */ (function () {
    function FoodDataService(http) {
        this.http = http;
        this.foodsUrl = 'http://localhost:3000/api/songs';
    }
    // get("/api/foods")
    FoodDataService.prototype.getFoods = function () {
        return this.http.get(this.foodsUrl)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    FoodDataService.prototype.getSingleFood = function (foodId) {
        return this.http.get(this.foodsUrl + '/' + foodId)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    FoodDataService.prototype.createFood = function (newFood) {
        return this.http.post(this.foodsUrl, newFood)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    FoodDataService.prototype.updateFood = function (newFood) {
        return this.http.put(this.foodsUrl + '/' + newFood['_id'], newFood)
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    FoodDataService.prototype.deleteFood = function (newFood) {
        return this.http.delete(this.foodsUrl + '/' + newFood['_id'])
            .toPromise()
            .then(function (response) { return response; })
            .catch(this.handleError);
    };
    FoodDataService.prototype.handleError = function (error) {
        console.log("error");
    };
    FoodDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], FoodDataService);
    return FoodDataService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yoush\Desktop\conestoga\Database_Connectivity\individual_project\APP_PUBLIC\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map