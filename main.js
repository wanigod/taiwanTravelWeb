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

/***/ "./src/app/apiService.service.ts":
/*!***************************************!*\
  !*** ./src/app/apiService.service.ts ***!
  \***************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var hmacsha1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hmacsha1 */ "./node_modules/hmacsha1/index.js");
/* harmony import */ var hmacsha1__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hmacsha1__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class/SpotGroupType */ "./src/app/class/SpotGroupType.ts");






var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.testApi = function () {
        return this.getApiByUrl("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON");
    };
    ApiService.prototype.getSpotlight = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(spotList);
    };
    ApiService.prototype.getSpotDetailById = function (id) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(fakeDetail);
    };
    ApiService.prototype.getApiByUrl = function (url) {
        return this.http.get(url, { headers: this.getHeaders() });
    };
    ApiService.prototype.getHeaders = function () {
        var gmtTime = new Date().toUTCString();
        var hash = hmacsha1__WEBPACK_IMPORTED_MODULE_4__('XnkO4Q6oiRxv8Q7LfXsO-E_ECug', "x-date: " + gmtTime);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            'Content-Type': 'application/json',
            Authorization: "hmac username=\"924170cd868348de90cf7b30f8cda570\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"" + hash + "\"",
            'x-date': gmtTime,
        });
        return headers;
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root',
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());

var spotList = [
    {
        id: '1',
        name: '祝山',
        img: { url: 'https://www.ali-nsa.net/image/805/640x480', title: '' },
        openTime: '每日開放',
        typeList: [
            _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_5__["SpotGroupType"].NATION,
        ],
    },
    {
        id: '2',
        name: '福山古道',
        img: { url: 'https://www.ali-nsa.net/image/6566/640x480', title: '' },
        openTime: '每日開放',
        typeList: [
            _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_5__["SpotGroupType"].NATION,
        ],
    },
    // {
    //   id: '3',
    //   name: '外傘頂洲沙灘',
    //   img: { url: 'https://swcoast-nsa.travel/image/2576/640x480', title: '' },
    //   openTime: '全年皆可，無時間限制(00:00~24:00)',
    //   typeList: [
    //     SpotGroupType.NATION,
    //   ],
    // },
    {
        id: '4',
        name: '茅埔坑濕地公園',
        img: { url: 'https://www.sunmoonlake.gov.tw/image/23/640x480', title: '' },
        openTime: '24h',
        typeList: [],
    },
    {
        id: '5',
        name: '帆船鼻大草原',
        img: {
            url: 'https://www.eastcoast-nsa.gov.tw/image/29072/640x480',
            title: '',
        },
        openTime: '全天候開放',
        typeList: [],
    },
    {
        id: '6',
        name: '陽明山溫泉區_小油坑',
        img: { url: 'https://www.travel.taipei/image/63396', title: '' },
        openTime: '各旅館營業時間不同。',
        typeList: [
            _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_5__["SpotGroupType"].NATION,
            _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_5__["SpotGroupType"].OTHER,
            _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_5__["SpotGroupType"].CULTURE,
        ],
    },
    {
        id: '7',
        name: '新八景之小笠原山',
        img: { url: 'https://www.ali-nsa.net/image/5819/640x480', title: '' },
        openTime: '每日開放',
        typeList: [],
    },
    {
        id: '8',
        name: '清水岩寺',
        img: {
            url: 'https://www.trimt-nsa.gov.tw/Content/Uploads/StrollArea/Detail/afc3ee65-fe6d-436f-b781-300b56754cba_thumb.jpg',
            title: '',
        },
        openTime: '週一至週日05:30~18:00（視季節調整）',
        typeList: [
            _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_5__["SpotGroupType"].OTHER,
            _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_5__["SpotGroupType"].CULTURE,
        ],
    },
];
var fakeDetail = {
    id: 'C1_315080500H_000068',
    name: '紫坪',
    imgUrlList: [
        {
            url: 'https://www.eastcoast-nsa.gov.tw/image/419/640x480',
            title: '從步道上遙望綠島露營區海邊',
        },
    ],
    parkingInfo: '',
    city: '',
    address: '臺東縣951綠島鄉溫泉路256號',
    zipCode: '951',
    websiteUrl: '',
    descriptionDetail: '紫坪位在綠島最南方，緊鄰「綠島露營區」。從露營區旁的步道，可通往海岸邊的潟湖「紫坪」。「紫坪」是一處由珊瑚礁構成的潮池，也是綠島著名的潟湖所在地，有全綠島最完整的潟湖地形以及珊瑚礁植群，更有茂盛的植物水芫花和珍貴的陸寄居蟹。外海儘管浪濤洶湧，內湖依然波平如鏡，宛若沉睡的湖水，清淺的躺在外珊瑚礁岩與內珊瑚貝砂灘間；水芫花灌叢身影倒映於平靜無波的水面上，潔白柔細的白砂鋪陳水底。熱帶海岸旖旎風情，盡在不言中。',
    openTime: '全天候開放',
    phone: '886-8-9672026',
    typeList: [],
    updateTime: '2021-11-06T02:10:14+08:00',
    ticketInfo: '免費，露營活動另計。',
    position: {
        lat: 22.633939743041992,
        lon: 121.49990844726562,
    },
};


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _page_detail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./page/detail.component */ "./src/app/page/detail.component.ts");
/* harmony import */ var _page_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./page/home.component */ "./src/app/page/home.component.ts");
/* harmony import */ var _page_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./page/search.component */ "./src/app/page/search.component.ts");






var routes = [
    {
        path: '',
        component: _page_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"]
    },
    {
        path: 'search',
        component: _page_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"]
    },
    {
        path: 'detail/:id',
        component: _page_detail_component__WEBPACK_IMPORTED_MODULE_3__["DetailComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<com-header></com-header>\n<router-outlet></router-outlet>\n<com-footer></com-footer>"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'niceDayInTaiwan';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _component_filter_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/filter.component */ "./src/app/component/filter.component.ts");
/* harmony import */ var _layout_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./layout/footer.component */ "./src/app/layout/footer.component.ts");
/* harmony import */ var _layout_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout/header.component */ "./src/app/layout/header.component.ts");
/* harmony import */ var _page_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./page/home.component */ "./src/app/page/home.component.ts");
/* harmony import */ var _page_search_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./page/search.component */ "./src/app/page/search.component.ts");
/* harmony import */ var _page_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page/detail.component */ "./src/app/page/detail.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _component_spotCard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/spotCard.component */ "./src/app/component/spotCard.component.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _component_restaurant_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/restaurant.component */ "./src/app/component/restaurant.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _layout_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
                _layout_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"],
                _page_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _page_search_component__WEBPACK_IMPORTED_MODULE_10__["SearchComponent"],
                _component_filter_component__WEBPACK_IMPORTED_MODULE_6__["FilterComponent"],
                _page_detail_component__WEBPACK_IMPORTED_MODULE_11__["DetailComponent"],
                _component_spotCard_component__WEBPACK_IMPORTED_MODULE_14__["SpotCardComponent"],
                _component_restaurant_component__WEBPACK_IMPORTED_MODULE_16__["RestaurantComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"]
            ],
            entryComponents: [_component_restaurant_component__WEBPACK_IMPORTED_MODULE_16__["RestaurantComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/class/SpotGroupType.ts":
/*!****************************************!*\
  !*** ./src/app/class/SpotGroupType.ts ***!
  \****************************************/
/*! exports provided: SpotGroupType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotGroupType", function() { return SpotGroupType; });
var SpotGroupType;
(function (SpotGroupType) {
    SpotGroupType["NATION"] = "\u81EA\u7136\u98A8\u666F";
    SpotGroupType["FARM"] = "\u89C0\u5149\u8FB2\u5834";
    SpotGroupType["CULTURE"] = "\u4EBA\u6587\u6587\u5316";
    SpotGroupType["OTHER"] = "\u5176\u4ED6";
})(SpotGroupType || (SpotGroupType = {}));


/***/ }),

/***/ "./src/app/component/filter.component.html":
/*!*************************************************!*\
  !*** ./src/app/component/filter.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"cus-filter-container\">\n<div class=\"pb-xs\">\n    <input class=\"cus-input\">\n</div>\n<div class=\"pt-xs d-fl mb-sm\">\n    <select class=\"cus-input mr-xs fl-11a\">\n\n    </select>\n    <select class=\"cus-input ml-xs fl-11a\">\n        \n    </select>\n</div>\n<div class=\"p-sm ta-c\">\n<button class=\"cus-btn cus-btn--primary\" (click)=\"search()\">出發去!</button>\n\n</div>\n\n</div>"

/***/ }),

/***/ "./src/app/component/filter.component.ts":
/*!***********************************************!*\
  !*** ./src/app/component/filter.component.ts ***!
  \***********************************************/
/*! exports provided: FilterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterComponent", function() { return FilterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
        this.doFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    FilterComponent.prototype.search = function () {
        this.doFilter.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FilterComponent.prototype, "doFilter", void 0);
    FilterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'com-filter',
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/component/filter.component.html"),
        })
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/component/restaurant.component.html":
/*!*****************************************************!*\
  !*** ./src/app/component/restaurant.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cus-model-header\">\n    <div>\n      \n    </div>\n    <div>{{data.name}}</div>\n    <div>\n        <i class=\"icon-close c-third\" (click)=\"close()\"></i>\n    </div>\n</div>\n<div class=\"cus-model-container\">\n   <div class=\"cus-model-container-img\" [style.background-image]=\"'url('+data.imgUrl+')'\"></div>\n    <div class=\"mt-xs pt-xs fs-lg fw-600\">簡介</div>\n    <div class=\"fs-d pb-xs\">{{data.description}}</div>\n    <div class=\"d-fl pt-xs fl-wp\">\n        <div *ngFor=\"let item of infoList\" class=\"d-fl cus-detail-info mb-xs pt-xs\">\n            <div class=\"fs-xl c-sub mr-xs\">\n               <i [ngClass]=\"item.iconClass\"></i>\n            </div>\n            <div>\n                <div class=\"cus-title--sm mb-xs\">{{item.title}}</div>\n                <div class=\"c-third\">{{data[item.key]||'未提供'}}</div>\n            </div>\n        </div>\n    </div>\n    \n</div>"

/***/ }),

/***/ "./src/app/component/restaurant.component.ts":
/*!***************************************************!*\
  !*** ./src/app/component/restaurant.component.ts ***!
  \***************************************************/
/*! exports provided: RestaurantComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RestaurantComponent", function() { return RestaurantComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var RestaurantComponent = /** @class */ (function () {
    function RestaurantComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.infoList = [
            {
                type: 'text',
                title: '地址',
                iconClass: 'icon-address',
                key: 'address'
            },
            {
                type: 'text',
                title: '營業時間',
                iconClass: 'icon-date',
                key: 'openTime'
            }
        ];
    }
    RestaurantComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    RestaurantComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'com-restaurant',
            template: __webpack_require__(/*! ./restaurant.component.html */ "./src/app/component/restaurant.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], RestaurantComponent);
    return RestaurantComponent;
}());



/***/ }),

/***/ "./src/app/component/spotCard.component.html":
/*!***************************************************!*\
  !*** ./src/app/component/spotCard.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cus-card\" (click)=\"outPutClick()\">\n    <div class=\"cus-card-img\">\n        <img [src]=\"spot.img.url\" [title]=\"spot.img.title\">\n    </div>\n    <div class=\"cus-card-info\">\n        <div class=\"cus-title--sm mb-d\">{{spot.name}}</div>\n        <div class=\"c-sub fw-600 mb-d\">{{spot.openTime}}</div>\n        <div> \n            <span *ngFor=\"let tag of spot.typeList\" class=\"cus-tag mr-xs mb-xs\" \n            [ngClass]=\"getTagClass(tag)\">\n                {{tag}}\n            </span>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/component/spotCard.component.ts":
/*!*************************************************!*\
  !*** ./src/app/component/spotCard.component.ts ***!
  \*************************************************/
/*! exports provided: SpotCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotCardComponent", function() { return SpotCardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../class/SpotGroupType */ "./src/app/class/SpotGroupType.ts");



var SpotCardComponent = /** @class */ (function () {
    function SpotCardComponent() {
        this.spot = {
            id: '',
            name: '',
            img: {
                url: '',
                title: ''
            },
            openTime: '',
            typeList: []
        };
        this.onClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    SpotCardComponent.prototype.outPutClick = function () {
        this.onClick.emit();
    };
    SpotCardComponent.prototype.getTagClass = function (tag) {
        var _a;
        var tagMap = (_a = {},
            _a[_class_SpotGroupType__WEBPACK_IMPORTED_MODULE_2__["SpotGroupType"].NATION] = 'cus-tag--nature',
            _a[_class_SpotGroupType__WEBPACK_IMPORTED_MODULE_2__["SpotGroupType"].FARM] = 'cus-tag--farm',
            _a[_class_SpotGroupType__WEBPACK_IMPORTED_MODULE_2__["SpotGroupType"].CULTURE] = 'cus-tag--culture',
            _a[_class_SpotGroupType__WEBPACK_IMPORTED_MODULE_2__["SpotGroupType"].OTHER] = 'cus-tag--other',
            _a);
        return tagMap[tag];
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpotCardComponent.prototype, "spot", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SpotCardComponent.prototype, "onClick", void 0);
    SpotCardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'com-spot-card',
            template: __webpack_require__(/*! ./spotCard.component.html */ "./src/app/component/spotCard.component.html"),
        })
    ], SpotCardComponent);
    return SpotCardComponent;
}());



/***/ }),

/***/ "./src/app/layout/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cus-footer\">\n    <div class=\"cus-container\">\n        Taiwan Traveling © Code: pollex_frog / Design: pollex_Apple\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'com-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/layout/footer.component.html"),
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/layout/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/layout/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cus-header\">\n   \n    <div class=\"cus-container cus-header-container\">\n        <a routerLink=\"/\" class=\"cus-header-logo\">\n            <i class=\"icon-mountain\"></i> Taiwan Traveling\n        </a>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/layout/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/layout/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
        this.title = 'niceDayInTaiwan';
    }
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'com-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/layout/header.component.html"),
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/page/detail.component.html":
/*!********************************************!*\
  !*** ./src/app/page/detail.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cus-detail\">\n    <div class=\"cus-detail-keyVersion\" [style.background-image]=\"'url('+spot.imgUrlList[0].url+')'\">\n        <div class=\"cus-container cus-detail-keyVersion-info\">\n            <h1 class=\"cus-detail-keyVersion-info-title mb-xs\">{{spot.name}}</h1>\n            <div class=\"cus-detail-keyVersion-info-address\">\n                <i class=\"icon-address c-info\"></i>\n                {{spot.address}}\n                <span class=\"c-info\">&nbsp;前往地圖</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"cus-container pt-xs pb-xl\">\n\n        <div>\n            <div class=\"c-third fs-d\">\n                <i class=\"icon-home\"></i>\n                首頁 /{{spot.name}}\n            </div>\n            <div class=\"d-fl fl-wp mt-d fl-jc-sb\">\n                <div class=\"cus-detail-info\">\n                    <h3 class=\"cus-title--d\">\n                        <i class=\"icon-infomation c-primary\"></i>\n                        景點介紹</h3>\n                    <div class=\"c-third fs-sm pb-xs\">資料更新時間：YYYY/MM/DD HH:mm:ss</div>\n                    <div class=\"cus-title--sm pt-xs mb-xs\">簡介</div>\n                    <div class=\"fs-sm\">{{spot.descriptionDetail}}</div>\n                    <div *ngFor=\"let item of infoList\" class=\"d-fl pt-xs mt-xs\">\n                        <div class=\"fs-xl c-sub mr-xs\">\n                           <i [ngClass]=\"item.iconClass\"></i>\n                        </div>\n                        <div>\n                            <div class=\"cus-title--sm mb-xs\">{{item.title}}</div>\n                            <div class=\"c-third\">{{spot[item.key]||'未提供'}}</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"cus-detail-position-container\">\n                    <div class=\"cus-detail-position-container-map\"></div>\n                </div>\n            </div>\n            \n            <h3 class=\"cus-title--d mt-sm pt-sm\"><i class=\"icon-foods c-primary\"></i>周邊美食</h3>\n            <div class=\"mt-xs pt-xs pb-sm d-fl cus-card-container\">\n                <div class=\"cus-food-card\" (click)=\"openFoodDialog(food)\" [style.background-image]=\"'url('+food.imgUrl+')'\" *ngFor=\"let food of restaurantList\">\n                    <div class=\"fs-lg\">{{food.name}}</div>\n                    <div class=\"mt-xs fs-d\">\n                        <i class=\"icon-distance\"></i>\n                        &nbsp;\n                        距 {{food.position}} 公尺\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

/***/ }),

/***/ "./src/app/page/detail.component.ts":
/*!******************************************!*\
  !*** ./src/app/page/detail.component.ts ***!
  \******************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _apiService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apiService.service */ "./src/app/apiService.service.ts");
/* harmony import */ var _component_restaurant_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../component/restaurant.component */ "./src/app/component/restaurant.component.ts");





var DetailComponent = /** @class */ (function () {
    function DetailComponent(apiService, dialog) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.restaurantList = [];
        this.spot = {
            id: '',
            name: '',
            imgUrlList: [],
            city: '',
            address: '',
            zipCode: '',
            websiteUrl: '',
            descriptionDetail: '',
            openTime: '',
            phone: '',
            typeList: [],
            updateTime: '',
            ticketInfo: '',
            position: {
                lat: 0,
                lon: 0,
            },
            parkingInfo: '',
        };
        this.infoList = [
            {
                type: 'text',
                title: '地址',
                iconClass: 'icon-address',
                key: 'address'
            },
            {
                type: 'text',
                title: '停車資訊',
                iconClass: 'icon-car',
                key: 'parkingInfo'
            },
            {
                type: 'text',
                title: '營業時間',
                iconClass: 'icon-date',
                key: 'openTime'
            },
            {
                type: 'text',
                title: '服務電話',
                iconClass: 'icon-phone',
                key: 'phone'
            },
            {
                type: 'text',
                title: '費用',
                iconClass: 'icon-dollar',
                key: 'ticketInfo'
            },
            {
                type: 'link',
                title: '官網',
                iconClass: 'icon-website',
                key: 'websiteUrl'
            },
        ];
    }
    DetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getSpotDetailById('123').subscribe(function (d) {
            _this.spot = d;
            _this.restaurantList = new Array(4).fill({
                id: '1',
                name: '田雞小館',
                imgUrl: d.imgUrlList[0].url,
                position: 100,
                address: d.address,
                openTime: d.openTime,
                description: d.descriptionDetail
            });
        });
    };
    DetailComponent.prototype.openFoodDialog = function (food) {
        var dialogRef = this.dialog.open(_component_restaurant_component__WEBPACK_IMPORTED_MODULE_4__["RestaurantComponent"], {
            width: '880px',
            data: food,
            panelClass: ['cus-model']
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'com-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/page/detail.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_apiService_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/page/home.component.html":
/*!******************************************!*\
  !*** ./src/app/page/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"cus-container pb-xl\">\n    <div class=\"pt-sm pb-lg\">\n        <com-filter (doFilter)=\"goFilter($event)\"></com-filter>\n    </div>\n    \n    <h3 class=\"cus-title--d mb-sm\">\n        <i class=\"icon-mountain c-danger\"></i>台灣十大熱門景點</h3>\n    <div class=\"cus-spotCard-container\">\n        <com-spot-card (onClick)=\"viewDetail(item.id)\" class=\"cus-spotCard-container-card\" [spot]=\"item\" *ngFor=\"let item of spotlightList\"></com-spot-card>\n    </div>\n    <h3 class=\"cus-title--d mb-sm mt-lg\">\n        <i class=\"icon-earth c-info\"></i>    探尋新鮮的好去處</h3>\n        <div class=\"cus-recommend-container\">\n           <div class=\"cus-recommend-container-box\"\n           [style.background-image]=\"'url('+item.imgUrl+')'\" *ngFor=\"let item of filterList\">\n           </div>\n        </div>\n</div>"

/***/ }),

/***/ "./src/app/page/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/page/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _apiService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apiService.service */ "./src/app/apiService.service.ts");




var HomeComponent = /** @class */ (function () {
    function HomeComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.spotlightList = [];
        this.filterList = [];
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getSpotlight().subscribe(function (d) {
            _this.spotlightList = d;
            _this.filterList = new Array(6).fill({
                imgUrl: _this.spotlightList[0].img.url,
                filterParam: ''
            });
        });
    };
    HomeComponent.prototype.callApi = function () {
        this.apiService.testApi().subscribe(function (d) {
            console.log(d);
        });
    };
    HomeComponent.prototype.viewDetail = function (spotId) {
        window.open("detail/" + spotId, "_blank");
    };
    HomeComponent.prototype.goFilter = function (filterData) {
        this.router.navigate(['search']);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'com-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/page/home.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_apiService_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/page/search.component.html":
/*!********************************************!*\
  !*** ./src/app/page/search.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cus-container pb-xl\">\n    <div class=\"pt-sm pb-lg\">\n        <com-filter></com-filter>\n    </div>\n    <h3 class=\"cus-title--d mb-xs\">搜尋結果</h3>\n    \n    <div class=\"mb-sm c-third\">相關結果共XX筆</div>\n    <div class=\"cus-spotCard-container\">\n        <com-spot-card (onClick)=\"viewDetail(item.id)\" class=\"cus-spotCard-container-card\" [spot]=\"item\"\n            *ngFor=\"let item of resultList\"></com-spot-card>\n    </div>\n    <div class=\"d-fl fl-ai-c fl-jc-c mt-d\">\n        <div class=\"cus-pagination mr-xs\">\n            <i class=\"icon-left-arrow\"></i>\n        </div>\n        <div class=\"cus-pagination mr-xs\" [ngClass]=\"{'cus-pagination--active':num===currentPage}\"\n            *ngFor=\"let num of pageNumList\">\n            {{num+1}}\n        </div>\n        <div class=\"cus-pagination\">\n            <i class=\"icon-right-arrow\"></i>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/page/search.component.ts":
/*!******************************************!*\
  !*** ./src/app/page/search.component.ts ***!
  \******************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _apiService_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../apiService.service */ "./src/app/apiService.service.ts");




var SearchComponent = /** @class */ (function () {
    function SearchComponent(apiService, router) {
        this.apiService = apiService;
        this.router = router;
        this.resultList = [];
        this.pageNumList = [0, 1, 2, 3, 4];
        this.currentPage = 0;
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.apiService.getSpotlight().subscribe(function (d) {
            _this.resultList = d;
        });
    };
    SearchComponent.prototype.viewDetail = function (spotId) {
        window.open("detail/" + spotId, "_blank");
    };
    SearchComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'com-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/page/search.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_apiService_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SearchComponent);
    return SearchComponent;
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/name/jenny/playground/f2e2021/f2e2021-taiwanTraveling/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map