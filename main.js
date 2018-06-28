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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _news_feed_news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-feed/news-feed/news-feed.component */ "./src/app/news-feed/news-feed/news-feed.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// define the routes
var routes = [
    { path: '', redirectTo: 'Nachrichten', pathMatch: 'full' },
    { path: 'Nachrichten', component: _news_feed_news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_2__["NewsFeedComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]
            ],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n  position: absolute;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.mat-sidenav-container {\r\n  flex: 1;\r\n}\r\n\r\n#page-title {\r\n   margin: 0 auto;\r\n   font-size: 30px;\r\n }\r\n\r\n.spacer {\r\n   width: 40px;\r\n }\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- wrap whole page -->\n<div class=\"page-container\">\n  <!-- toolbar with heading -->\n<mat-toolbar color=\"primary\" class=\"mat-elevation-z3\">\n  <button mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n  <h1 id=\"page-title\" >{{title}}</h1>\n  <span class=\"spacer\"></span>\n</mat-toolbar>\n\n<mat-sidenav-container class=\"mat-sidenav-container\">\n  <!-- navigation menu -->\n  <mat-sidenav #snav mode=\"over\" >\n    <mat-nav-list>\n      <a mat-list-item routerLink=\"/Nachrichten\" >\n        <mat-icon svgIcon=\"news\" color=\"primary\"></mat-icon>\n        Nachrichten\n      </a>\n      <mat-divider></mat-divider>\n      <a mat-list-item routerLink=\"/Campus-Karte\" >\n        <mat-icon color=\"primary\">map</mat-icon>\n        Campus-Karte\n      </a>\n      <mat-divider></mat-divider>\n      <a mat-list-item routerLink=\"/Personensuche\" >\n        <mat-icon svgIcon=\"searchPerson\" color=\"primary\"></mat-icon>\n        Personensuche\n      </a>\n      <mat-divider></mat-divider>\n    </mat-nav-list>\n  </mat-sidenav>\n\n  <!-- wrapper for page content -->\n  <mat-sidenav-content>\n    <router-outlet>\n      <!-- page content inserted from router -->\n    </router-outlet>\n  </mat-sidenav-content>\n</mat-sidenav-container>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Studierendenportal';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
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
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _news_feed_news_feed_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./news-feed/news-feed.module */ "./src/app/news-feed/news-feed.module.ts");
/* harmony import */ var _news_feed_news_feed_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./news-feed/news-feed.service */ "./src/app/news-feed/news-feed.service.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/fesm5/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/* App root */

/* Feature Modules */



/* Routing Module */




var AppModule = /** @class */ (function () {
    function AppModule(iconRegistry, sanitizer) {
        iconRegistry.addSvgIcon('news', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/newspaper.svg'))
            .addSvgIcon('searchPerson', sanitizer.bypassSecurityTrustResourceUrl('assets/icons/account-search-outline.svg'));
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_5__["CoreModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatButtonToggleModule"],
                _news_feed_news_feed_module__WEBPACK_IMPORTED_MODULE_6__["NewsFeedModule"],
                _angular_service_worker__WEBPACK_IMPORTED_MODULE_10__["ServiceWorkerModule"].register('/ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_11__["environment"].production })
            ],
            providers: [_news_feed_news_feed_service__WEBPACK_IMPORTED_MODULE_7__["NewsFeedService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconRegistry"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["DomSanitizer"]])
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_feed_news_feed_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../news-feed/news-feed.service */ "./src/app/news-feed/news-feed.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var CoreModule = /** @class */ (function () {
    function CoreModule(parentModule) {
        if (parentModule) {
            throw new Error('CoreModule is already loaded. Import it in the AppModule only');
        }
    }
    CoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"]
            ],
            declarations: [],
            providers: [
                _news_feed_news_feed_service__WEBPACK_IMPORTED_MODULE_2__["NewsFeedService"]
            ]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])()),
        __metadata("design:paramtypes", [CoreModule])
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/models/feed-details.ts":
/*!****************************************!*\
  !*** ./src/app/models/feed-details.ts ***!
  \****************************************/
/*! exports provided: FeedDetails */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedDetails", function() { return FeedDetails; });
var FeedDetails = /** @class */ (function () {
    function FeedDetails() {
        this.image = { url: '', title: '', link: '' };
    }
    return FeedDetails;
}());



/***/ }),

/***/ "./src/app/models/feed.ts":
/*!********************************!*\
  !*** ./src/app/models/feed.ts ***!
  \********************************/
/*! exports provided: Feed */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Feed", function() { return Feed; });
var Feed = /** @class */ (function () {
    function Feed(name) {
        this.feedName = name;
        this.items = [];
    }
    return Feed;
}());



/***/ }),

/***/ "./src/app/models/feedPost.ts":
/*!************************************!*\
  !*** ./src/app/models/feedPost.ts ***!
  \************************************/
/*! exports provided: FeedPost */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedPost", function() { return FeedPost; });
var FeedPost = /** @class */ (function () {
    function FeedPost() {
        this.categories = [];
    }
    return FeedPost;
}());



/***/ }),

/***/ "./src/app/news-feed/news-feed.module.ts":
/*!***********************************************!*\
  !*** ./src/app/news-feed/news-feed.module.ts ***!
  \***********************************************/
/*! exports provided: NewsFeedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeedModule", function() { return NewsFeedModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./news-feed/news-feed.component */ "./src/app/news-feed/news-feed/news-feed.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _news_feed_news_feed_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./news-feed/news-feed-sheet.component */ "./src/app/news-feed/news-feed/news-feed-sheet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var NewsFeedModule = /** @class */ (function () {
    function NewsFeedModule() {
    }
    NewsFeedModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheetModule"]
            ],
            declarations: [_news_feed_news_feed_component__WEBPACK_IMPORTED_MODULE_2__["NewsFeedComponent"], _news_feed_news_feed_sheet_component__WEBPACK_IMPORTED_MODULE_4__["NewsFeedSheetComponent"]],
            bootstrap: [_news_feed_news_feed_sheet_component__WEBPACK_IMPORTED_MODULE_4__["NewsFeedSheetComponent"]]
        })
    ], NewsFeedModule);
    return NewsFeedModule;
}());



/***/ }),

/***/ "./src/app/news-feed/news-feed.service.ts":
/*!************************************************!*\
  !*** ./src/app/news-feed/news-feed.service.ts ***!
  \************************************************/
/*! exports provided: NewsFeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeedService", function() { return NewsFeedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _models_feed__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/feed */ "./src/app/models/feed.ts");
/* harmony import */ var _models_feed_details__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/feed-details */ "./src/app/models/feed-details.ts");
/* harmony import */ var _models_feedPost__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/feedPost */ "./src/app/models/feedPost.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewsFeedService = /** @class */ (function () {
    function NewsFeedService(http) {
        this.http = http;
        // list all sources, must point to RSS feed
        this.feedSources = [
            { name: 'JGU Aktuell', url: 'https://www.uni-mainz.de/32.php' },
            { name: 'ZDV', url: 'https://www.zdv.uni-mainz.de/feed/' },
        ];
        this.feedsAsJSON = [];
        this.DOMParser = new DOMParser();
    }
    // fetch feed from source
    NewsFeedService.prototype.getNewsFromFeed = function (url) {
        return this.http.get(url, { responseType: 'text' });
    };
    // fetch news from all feeds listed in feedSources and then parse from XML/RSS to JSON
    NewsFeedService.prototype.getNews = function () {
        var _this = this;
        this.feedSources.forEach(function (source) {
            _this.getNewsFromFeed(source.url).toPromise()
                .then(function (response) {
                _this.parseFeedFromXmlToJson(response, source.name);
            });
        });
    };
    // parse XML feed from string to JSON
    NewsFeedService.prototype.parseFeedFromXmlToJson = function (feedAsString, feedName) {
        // initialize parameters
        var feedAsJson = new _models_feed__WEBPACK_IMPORTED_MODULE_2__["Feed"](feedName);
        var details = new _models_feed_details__WEBPACK_IMPORTED_MODULE_3__["FeedDetails"]();
        var feedAsXml = this.DOMParser.parseFromString(feedAsString, 'application/xml');
        var docRoot = feedAsXml.getElementsByTagName('channel')[0];
        var feedItems = Array.from(docRoot.getElementsByTagName('item'));
        // parse description for Feed
        details.title = docRoot.getElementsByTagName('title')[0].firstChild.nodeValue;
        details.link = docRoot.getElementsByTagName('link')[0].firstChild.nodeValue;
        if (docRoot.getElementsByTagName('description')[0].firstChild) {
            details.description = docRoot.getElementsByTagName('description')[0].firstChild.nodeValue;
        }
        details.language = docRoot.getElementsByTagName('language')[0].firstChild.nodeValue;
        if (docRoot.getElementsByTagName('copyright')[0] && docRoot.getElementsByTagName('copyright')[0].firstChild) {
            details.copyright = docRoot.getElementsByTagName('copyright')[0].firstChild.nodeValue;
        }
        details.pubDate = docRoot.getElementsByTagName('pubDate')[0].firstChild.nodeValue;
        if (docRoot.getElementsByTagName('image')[0] && docRoot.getElementsByTagName('image')[0].firstChild) {
            var imgRoot = docRoot.getElementsByTagName('image')[0];
            details.image.url = imgRoot.getElementsByTagName('url')[0].firstChild.nodeValue;
            details.image.title = imgRoot.getElementsByTagName('title')[0].firstChild.nodeValue;
            details.image.link = imgRoot.getElementsByTagName('link')[0].firstChild.nodeValue;
        }
        feedAsJson.details = details;
        feedItems.forEach(function (item) {
            // parse items from feed
            var feedItem = new _models_feedPost__WEBPACK_IMPORTED_MODULE_4__["FeedPost"]();
            var categories = Array.from(item.getElementsByTagName('category'));
            feedItem.title = item.getElementsByTagName('title')[0].firstChild.nodeValue;
            feedItem.description = item.getElementsByTagName('description')[0].firstChild.nodeValue;
            feedItem.link = item.getElementsByTagName('link')[0].firstChild.nodeValue;
            // feedItem.author = feedItems[i] as Element).getElementsByTagName('author')[0].firstChild.nodeValue;
            feedItem.guid = item.getElementsByTagName('guid')[0].firstChild.nodeValue;
            feedItem.pubDate = item.getElementsByTagName('pubDate')[0].firstChild.nodeValue;
            if (categories) {
                categories.forEach(function (category) {
                    feedItem.categories.push(category.firstChild.nodeValue);
                });
            }
            // push item to feed
            feedAsJson.items.push(feedItem);
        });
        this.sortItems(feedAsJson);
        this.feedsAsJSON.push(feedAsJson);
    };
    // sort items of feed by date, newest first
    NewsFeedService.prototype.sortItems = function (feed) {
        feed.items.sort(function (left, right) {
            if (Date.parse(left.pubDate) < Date.parse(right.pubDate)) {
                return 1;
            }
            else {
                return -1;
            }
        });
    };
    NewsFeedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], NewsFeedService);
    return NewsFeedService;
}());



/***/ }),

/***/ "./src/app/news-feed/news-feed/news-feed-sheet.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/news-feed/news-feed/news-feed-sheet.component.ts ***!
  \******************************************************************/
/*! exports provided: NewsFeedSheetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeedSheetComponent", function() { return NewsFeedSheetComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var NewsFeedSheetComponent = /** @class */ (function () {
    function NewsFeedSheetComponent(data, bottomSheetRef) {
        this.data = data;
        this.bottomSheetRef = bottomSheetRef;
    }
    NewsFeedSheetComponent.prototype.ngOnInit = function () { };
    NewsFeedSheetComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-feed',
            template: '<mat-nav-list>\n' +
                '  <a href="{{ data.item.link }}" mat-list-item>\n' +
                '    <span mat-line>Seite öffnen</span>\n' +
                '  </a>\n' +
                '</mat-nav-list>',
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"])),
        __metadata("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatBottomSheetRef"]])
    ], NewsFeedSheetComponent);
    return NewsFeedSheetComponent;
}());



/***/ }),

/***/ "./src/app/news-feed/news-feed/news-feed.component.html":
/*!**************************************************************!*\
  !*** ./src/app/news-feed/news-feed/news-feed.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content-container\">\n  <mat-form-field>\n    <!-- list available sources -->\n    <mat-select name=\"sourceSelector\" id=\"sourceSelector\" placeholder=\"Quelle auswählen:\"\n                (selectionChange)=\"selectHandler($event)\">\n      <mat-option *ngFor=\"let feed of this.feeds\" [value]=\"feed\">\n        {{ feed.feedName }}\n      </mat-option>\n    </mat-select>\n  </mat-form-field>\n  <div class=\"output\" *ngIf=\"activeSource\">\n    <mat-card *ngFor=\"let item of activeSource.items\" (click)=\"openLinkForItem(item)\" class=\"mat-elevation-z3\">\n      <mat-card-header>\n        <mat-card-title>\n          <h3>{{ item.title }}</h3>\n        </mat-card-title>\n        <mat-card-subtitle>{{item.pubDate | date: 'dd.MM.yyyy' }}</mat-card-subtitle>\n      </mat-card-header>\n      <mat-card-content [innerHtml]=\"item.description\"></mat-card-content>\n      <mat-chip-list *ngIf=\"item.categories.length > 0\">\n        <mat-chip class=\"grey\" *ngFor=\"let cat of item.categories\">\n          {{ cat }}\n        </mat-chip>\n      </mat-chip-list>\n    </mat-card>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/news-feed/news-feed/news-feed.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/news-feed/news-feed/news-feed.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-form-field {\n  margin-top: 15px; }\n\nmat-card {\n  width: 300px;\n  margin: 10px;\n  padding: 24px;\n  -ms-hyphens: auto;\n  -webkit-hyphens: auto;\n  hyphens: auto; }\n\nmat-card mat-card-header {\n    display: block; }\n\nmat-card mat-card-content {\n    padding-bottom: 5px; }\n\nmat-card:hover {\n  box-shadow: 0 8px 9px -5px rgba(0, 0, 0, 0.2), 0 15px 22px 2px rgba(0, 0, 0, 0.14), 0 6px 28px 5px rgba(0, 0, 0, 0.12);\n  cursor: pointer; }\n\nmat-card:hover mat-card-content {\n    max-height: 100%; }\n\nmat-chip-list {\n  position: absolute;\n  bottom: 5px;\n  left: 5px; }\n\n/*\r\nNot working properly...\r\nmat-card-content {\r\n  max-height: 200px;\r\n  overflow: hidden;\r\n  transition: max-height 280ms cubic-bezier(.4,0,.2,1);\r\n}\r\n*/\n\n.output {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center; }\n"

/***/ }),

/***/ "./src/app/news-feed/news-feed/news-feed.component.ts":
/*!************************************************************!*\
  !*** ./src/app/news-feed/news-feed/news-feed.component.ts ***!
  \************************************************************/
/*! exports provided: NewsFeedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsFeedComponent", function() { return NewsFeedComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _news_feed_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../news-feed.service */ "./src/app/news-feed/news-feed.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _news_feed_sheet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./news-feed-sheet.component */ "./src/app/news-feed/news-feed/news-feed-sheet.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewsFeedComponent = /** @class */ (function () {
    function NewsFeedComponent(feedService, bottomSheet) {
        this.feedService = feedService;
        this.bottomSheet = bottomSheet;
    }
    NewsFeedComponent.prototype.ngOnInit = function () {
        this.getFeeds();
    };
    NewsFeedComponent.prototype.getFeeds = function () {
        this.feedService.getNews();
        this.feeds = this.feedService.feedsAsJSON;
        this.activeSource = this.feedService.defaultFeed;
    };
    // switch source for feed when selected
    NewsFeedComponent.prototype.selectHandler = function (event) {
        this.activeSource = event.value;
    };
    // open link directly only on devices without touch
    NewsFeedComponent.prototype.openLinkForItem = function (item) {
        if (window.ontouchstart === undefined) {
            window.open(item.link);
        }
        else {
            this.bottomSheet.open(_news_feed_sheet_component__WEBPACK_IMPORTED_MODULE_3__["NewsFeedSheetComponent"], { data: { item: item } });
        }
    };
    NewsFeedComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-feed',
            template: __webpack_require__(/*! ./news-feed.component.html */ "./src/app/news-feed/news-feed/news-feed.component.html"),
            styles: [__webpack_require__(/*! ./news-feed.component.scss */ "./src/app/news-feed/news-feed/news-feed.component.scss")]
        }),
        __metadata("design:paramtypes", [_news_feed_service__WEBPACK_IMPORTED_MODULE_1__["NewsFeedService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"]])
    ], NewsFeedComponent);
    return NewsFeedComponent;
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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Marcel\Dropbox\Studium\Abschlussarbeit\Studierendenportal\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map