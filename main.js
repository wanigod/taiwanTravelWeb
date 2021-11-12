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
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var hmacsha1__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! hmacsha1 */ "./node_modules/hmacsha1/index.js");
/* harmony import */ var hmacsha1__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(hmacsha1__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./class/SpotGroupType */ "./src/app/class/SpotGroupType.ts");
/* harmony import */ var _class_SpotClass__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./class/SpotClass */ "./src/app/class/SpotClass.ts");







var ApiService = /** @class */ (function () {
    function ApiService(http) {
        this.http = http;
    }
    ApiService.prototype.testApi = function () {
        return this.getApiByUrl("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$top=30&$format=JSON");
    };
    ApiService.prototype.getSpotlight = function () {
        var _this = this;
        var filterName = [
            "C1_379000000A_000217",
            "C1_315081300H_000114",
            "C1_315081300H_000088",
            "C1_379000000A_000019",
            "C1_376480000A_000304",
            "C1_379000000A_000023",
            "C1_397000000A_000637",
            "C1_315081600H_000309",
        ];
        var filterParam = filterName.map(function (d) { return "ID eq '" + d + "'"; }).join("or ");
        return this.getApiByUrl("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=" + filterParam + "&$format=JSON").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.apiDtoToSpotSimple(res); }));
    };
    ApiService.prototype.getRecommendFilterDto = function () {
        var _this = this;
        var selectParam = "$select=Class1,Picture";
        var randomStart = Math.round(Math.random() * 1000);
        return this.getApiByUrl("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?" + selectParam + "&$filter=Picture/PictureUrl1 ne null and Class1 ne null&$format=JSON&$top=6&$skip=" + randomStart).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return (res.map(function (d) {
            return {
                imgUrl: d.Picture ? d.Picture.PictureUrl1 : "",
                filterParam: _this.apiClassToGroupType([d.Class1])[0],
            };
        })); }));
    };
    ApiService.prototype.getSpotDetailById = function (id) {
        var _this = this;
        return this.getApiByUrl("https://ptx.transportdata.tw/MOTC/v2/Tourism/ScenicSpot?$filter=ID eq '" + id + "'&$format=JSON").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return _this.apiDtoToSpotDetail(res[0]); }));
    };
    ApiService.prototype.getApiByUrl = function (url) {
        return this.http.get(url, { headers: this.getHeaders() });
    };
    ApiService.prototype.apiDtoToSpotSimple = function (resData) {
        var _this = this;
        return resData.map(function (d) {
            return {
                id: d.ID,
                name: d.Name,
                img: {
                    url: d.Picture ? d.Picture.PictureUrl1 : "",
                    title: d.Picture ? d.Picture.PictureDescription1 : "",
                },
                openTime: d.OpenTime,
                typeList: _this.apiClassToGroupType([
                    d.Class1,
                    d.Class2,
                    d.Class3,
                ]),
            };
        });
    };
    ApiService.prototype.apiDtoToSpotDetail = function (resData) {
        var imgUrl = [
            {
                url: resData.Picture ? resData.Picture.PictureUrl1 : "",
                title: resData.Picture ? resData.Picture.PictureDescription1 : "",
            },
            {
                url: resData.Picture ? resData.Picture.PictureUrl2 : "",
                title: resData.Picture ? resData.Picture.PictureDescription2 : "",
            },
            {
                url: resData.Picture ? resData.Picture.PictureUrl3 : "",
                title: resData.Picture ? resData.Picture.PictureDescription3 : "",
            },
        ];
        return {
            id: resData.ID,
            name: resData.Name,
            imgUrlList: imgUrl,
            city: resData.City,
            address: resData.Address,
            zipCode: resData.ZipCode,
            websiteUrl: resData.WebsiteUrl,
            descriptionDetail: resData.DescriptionDetail,
            phone: resData.Phone,
            updateTime: resData.UpdateTime,
            ticketInfo: resData.TicketInfo,
            position: {
                lon: resData.Position.PositionLon,
                lat: resData.Position.PositionLat,
            },
            parkingInfo: resData.ParkingInfo,
            openTime: resData.OpenTime,
            typeList: this.apiClassToGroupType([
                resData.Class1,
                resData.Class2,
                resData.Class3,
            ]),
        };
    };
    ApiService.prototype.getHeaders = function () {
        var gmtTime = new Date().toUTCString();
        var hash = hmacsha1__WEBPACK_IMPORTED_MODULE_4__("XnkO4Q6oiRxv8Q7LfXsO-E_ECug", "x-date: " + gmtTime);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json",
            Authorization: "hmac username=\"924170cd868348de90cf7b30f8cda570\", algorithm=\"hmac-sha1\", headers=\"x-date\", signature=\"" + hash + "\"",
            "x-date": gmtTime,
        });
        return headers;
    };
    ApiService.prototype.apiClassToGroupType = function (classList) {
        var typeList = [
            {
                groupType: _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_5__["SpotGroupType"].NATION,
                list: [
                    _class_SpotClass__WEBPACK_IMPORTED_MODULE_6__["SpotClass"].NATURAL,
                    _class_SpotClass__WEBPACK_IMPORTED_MODULE_6__["SpotClass"].METROPOLITAN_PARK,
                    _class_SpotClass__WEBPACK_IMPORTED_MODULE_6__["SpotClass"].NATION_SCENE,
                    _class_SpotClass__WEBPACK_IMPORTED_MODULE_6__["SpotClass"].FOREST,
                    _class_SpotClass__WEBPACK_IMPORTED_MODULE_6__["SpotClass"].NATION_PARK,
                ],
            },
            {
                groupType: _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_5__["SpotGroupType"].FARM,
                list: [
                    _class_SpotClass__WEBPACK_IMPORTED_MODULE_6__["SpotClass"].ECOLOGICAL,
                    _class_SpotClass__WEBPACK_IMPORTED_MODULE_6__["SpotClass"].RECREATION,
                    _class_SpotClass__WEBPACK_IMPORTED_MODULE_6__["SpotClass"].TOURIST_FACTORY,
                    _class_SpotClass__WEBPACK_IMPORTED_MODULE_6__["SpotClass"].FOREST_FARM,
                    _class_SpotClass__WEBPACK_IMPORTED_MODULE_6__["SpotClass"].AGRICULTURAL_RECREATION,
                ],
            },
            {
                groupType: _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_5__["SpotGroupType"].CULTURE,
                list: [
                    _class_SpotClass__WEBPACK_IMPORTED_MODULE_6__["SpotClass"].CULTURE,
                    _class_SpotClass__WEBPACK_IMPORTED_MODULE_6__["SpotClass"].TEMPLE,
                    _class_SpotClass__WEBPACK_IMPORTED_MODULE_6__["SpotClass"].SPA,
                    _class_SpotClass__WEBPACK_IMPORTED_MODULE_6__["SpotClass"].EAT,
                    _class_SpotClass__WEBPACK_IMPORTED_MODULE_6__["SpotClass"].ART,
                ],
            },
            {
                groupType: _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_5__["SpotGroupType"].OTHER,
                list: [_class_SpotClass__WEBPACK_IMPORTED_MODULE_6__["SpotClass"].SPORT, _class_SpotClass__WEBPACK_IMPORTED_MODULE_6__["SpotClass"].OTHER],
            },
        ];
        var newObject = {};
        classList.forEach(function (d) {
            if (d) {
                var inGroup = typeList.find(function (typeDto) { return typeDto.list.includes(d); });
                console.log(inGroup, d);
                if (inGroup) {
                    newObject[inGroup.groupType] = 1;
                }
                else {
                    newObject[_class_SpotGroupType__WEBPACK_IMPORTED_MODULE_5__["SpotGroupType"].OTHER] = 1;
                }
            }
        });
        return Object.keys(newObject);
    };
    ApiService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: "root",
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], ApiService);
    return ApiService;
}());

var fakeDetail = {
    id: "C1_315080500H_000068",
    name: "紫坪",
    imgUrlList: [
        {
            url: "https://www.eastcoast-nsa.gov.tw/image/419/640x480",
            title: "從步道上遙望綠島露營區海邊",
        },
    ],
    parkingInfo: "",
    city: "",
    address: "臺東縣951綠島鄉溫泉路256號",
    zipCode: "951",
    websiteUrl: "",
    descriptionDetail: "紫坪位在綠島最南方，緊鄰「綠島露營區」。從露營區旁的步道，可通往海岸邊的潟湖「紫坪」。「紫坪」是一處由珊瑚礁構成的潮池，也是綠島著名的潟湖所在地，有全綠島最完整的潟湖地形以及珊瑚礁植群，更有茂盛的植物水芫花和珍貴的陸寄居蟹。外海儘管浪濤洶湧，內湖依然波平如鏡，宛若沉睡的湖水，清淺的躺在外珊瑚礁岩與內珊瑚貝砂灘間；水芫花灌叢身影倒映於平靜無波的水面上，潔白柔細的白砂鋪陳水底。熱帶海岸旖旎風情，盡在不言中。",
    openTime: "全天候開放",
    phone: "886-8-9672026",
    typeList: [],
    updateTime: "2021-11-06T02:10:14+08:00",
    ticketInfo: "免費，露營活動另計。",
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
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _component_select_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./component/select.component */ "./src/app/component/select.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




















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
                _component_restaurant_component__WEBPACK_IMPORTED_MODULE_16__["RestaurantComponent"],
                _component_select_component__WEBPACK_IMPORTED_MODULE_18__["SelectComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_13__["HttpClientModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_17__["MatMenuModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_19__["FormsModule"]
            ],
            entryComponents: [_component_restaurant_component__WEBPACK_IMPORTED_MODULE_16__["RestaurantComponent"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/class/SpotClass.ts":
/*!************************************!*\
  !*** ./src/app/class/SpotClass.ts ***!
  \************************************/
/*! exports provided: SpotClass */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotClass", function() { return SpotClass; });
var SpotClass;
(function (SpotClass) {
    SpotClass["NATURAL"] = "\u81EA\u7136\u98A8\u666F\u985E";
    SpotClass["METROPOLITAN_PARK"] = "\u90FD\u6703\u516C\u5712\u985E";
    SpotClass["NATION_SCENE"] = "\u570B\u5BB6\u98A8\u666F\u5340\u985E";
    SpotClass["FOREST"] = "\u68EE\u6797\u904A\u6A02\u5340\u985E";
    SpotClass["NATION_PARK"] = "\u570B\u5BB6\u516C\u5712\u985E";
    SpotClass["ECOLOGICAL"] = "\u751F\u614B\u985E";
    SpotClass["RECREATION"] = "\u904A\u61A9\u985E";
    SpotClass["TOURIST_FACTORY"] = "\u89C0\u5149\u5DE5\u5EE0\u985E";
    SpotClass["FOREST_FARM"] = "\u6797\u5834\u985E";
    SpotClass["AGRICULTURAL_RECREATION"] = "\u4F11\u9592\u8FB2\u696D\u985E";
    SpotClass["CULTURE"] = "\u6587\u5316\u985E";
    SpotClass["TEMPLE"] = "\u5EDF\u5B87\u985E";
    SpotClass["SPA"] = "\u6EAB\u6CC9\u985E";
    SpotClass["HISTORIC_SITE"] = "\u53E4\u8E5F\u985E";
    SpotClass["EAT"] = "\u5C0F\u5403/\u7279\u7522\u985E";
    SpotClass["ART"] = "\u85DD\u8853\u985E";
    SpotClass["OTHER"] = "\u5176\u4ED6\u985E";
    SpotClass["SPORT"] = "\u9AD4\u80B2\u5065\u8EAB\u985E";
})(SpotClass || (SpotClass = {}));


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

module.exports = "<div class=\"cus-filter-container\">\n    <div class=\"pb-xs\">\n        <div class=\"cus-input-container\">\n            <input class=\"cus-input cus-input--search\" [(ngModel)]=\"filterObj.searchText\" placeholder=\"輸入關鍵字\">\n            <i class=\"icon-search\"></i>\n            <i class=\"icon-filter\" (click)=\"showList=!showList\"></i>\n            <div *ngIf=\"showList\" class=\"cus-filter-dropDown\"> \n                haha\n            </div>\n        </div>\n    </div>\n    <div class=\"pt-xs d-fl mb-sm cus-mobile-hide\">\n        <com-select class=\"cus-input-container mr-xs fl-11a\" (onSelect)=\"filterObj.city=$event\" [value]=\"filterObj.city\" [hasFilter]=\"true\" [valueList]=\"cityList\"></com-select>\n        <com-select class=\"cus-input-container ml-xs fl-11a\" (onSelect)=\"filterObj.group=$event\" [value]=\"filterObj.group\" [valueList]=\"groupList\"></com-select>\n    </div>\n    <div class=\"p-sm ta-c cus-mobile-hide\">\n        <button class=\"cus-btn cus-btn--primary\" (click)=\"search()\">出發去!</button>\n\n    </div>\n\n</div>"

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
/* harmony import */ var _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../class/SpotGroupType */ "./src/app/class/SpotGroupType.ts");



var FilterComponent = /** @class */ (function () {
    function FilterComponent() {
        this.doFilter = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.showList = false;
        this.filterObj = {
            city: null,
            group: null,
            searchText: ''
        };
        this.cityList = [
            { name: "臺北市", key: "Taipei" },
            { name: "新北市", key: "NewTaipei" },
            { name: "桃園市", key: "Taoyuan" },
            { name: "臺中市", key: "Taichung" },
            { name: "臺南市", key: "Tainan" },
            { name: "高雄市", key: "Kaohsiung" },
            { name: "基隆市", key: "Keelung" },
            { name: "新竹市", key: "Hsinchu" },
            { name: "新竹縣", key: "HsinchuCounty" },
            { name: "苗栗縣", key: "MiaoliCounty" },
            { name: "彰化縣", key: "ChanghuaCounty" },
            { name: "南投縣", key: "NantouCounty" },
            { name: "雲林縣", key: "YunlinCounty" },
            { name: "嘉義縣", key: "ChiayiCounty" },
            { name: "嘉義市", key: "Chiayi" },
            { name: "屏東縣", key: "PingtungCounty" },
            { name: "宜蘭縣", key: "YilanCounty" },
            { name: "花蓮縣", key: "HualienCounty" },
            { name: "臺東縣", key: "TaitungCounty" },
            { name: "金門縣", key: "KinmenCounty" },
            { name: "澎湖縣", key: "PenghuCounty" },
            { name: "連江縣", key: "LienchiangCounty" },
        ];
        this.groupList = [
            {
                name: _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_2__["SpotGroupType"].CULTURE,
                key: _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_2__["SpotGroupType"].CULTURE
            },
            {
                name: _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_2__["SpotGroupType"].FARM,
                key: _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_2__["SpotGroupType"].FARM
            },
            {
                name: _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_2__["SpotGroupType"].NATION,
                key: _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_2__["SpotGroupType"].NATION
            },
            {
                name: _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_2__["SpotGroupType"].OTHER,
                key: _class_SpotGroupType__WEBPACK_IMPORTED_MODULE_2__["SpotGroupType"].OTHER
            }
        ];
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
            selector: "com-filter",
            template: __webpack_require__(/*! ./filter.component.html */ "./src/app/component/filter.component.html"),
            styles: [__webpack_require__(/*! ./filter.scss */ "./src/app/component/filter.scss")]
        })
    ], FilterComponent);
    return FilterComponent;
}());



/***/ }),

/***/ "./src/app/component/filter.scss":
/*!***************************************!*\
  !*** ./src/app/component/filter.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cus-filter-dropDown {\n  color: #333;\n  padding: 10px;\n  width: 100%;\n  font-size: 20px;\n  position: absolute;\n  background: #fff;\n  transform: translateY(14px);\n  max-height: 9em;\n  z-index: 1;\n  filter: drop-shadow(0px 10px 20px #00000029);\n  padding: 30px 24px;\n  padding-bottom: 12px;\n  border-radius: 10px;\n}\n.cus-filter-dropDown::before {\n  width: 0;\n  height: 0;\n  border-style: solid;\n  border-width: 0 8px 10px 8px;\n  border-color: transparent transparent #ffffff transparent;\n  content: \"\";\n  position: absolute;\n  top: 0px;\n  right: 18px;\n  transform: translateY(-10px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYW1lL2plbm55L3BsYXlncm91bmQvZjJlMjAyMS9mMmUyMDIxLXRhaXdhblRyYXZlbGluZy9zcmMvYXBwL2NvbXBvbmVudC9maWx0ZXIuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L2ZpbHRlci5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwyQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0EsNENBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsbUJBQUE7QUNDRjtBREFFO0VBQ0UsUUFBQTtFQUNBLFNBQUE7RUFDQSxtQkFBQTtFQUNBLDRCQUFBO0VBQ0EseURBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvZmlsdGVyLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzLWZpbHRlci1kcm9wRG93biB7XG4gIGNvbG9yOiAjMzMzO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNHB4KTtcbiAgbWF4LWhlaWdodDogOWVtO1xuICB6LWluZGV4OiAxO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxMHB4IDIwcHggIzAwMDAwMDI5KTtcbiAgcGFkZGluZzogMzBweCAyNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgJjo6YmVmb3JlIHtcbiAgICB3aWR0aDogMDtcbiAgICBoZWlnaHQ6IDA7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDAgOHB4IDEwcHggOHB4O1xuICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI2ZmZmZmZiB0cmFuc3BhcmVudDtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDBweDtcbiAgICByaWdodDogMThweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xuICB9XG59XG4iLCIuY3VzLWZpbHRlci1kcm9wRG93biB7XG4gIGNvbG9yOiAjMzMzO1xuICBwYWRkaW5nOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNHB4KTtcbiAgbWF4LWhlaWdodDogOWVtO1xuICB6LWluZGV4OiAxO1xuICBmaWx0ZXI6IGRyb3Atc2hhZG93KDBweCAxMHB4IDIwcHggIzAwMDAwMDI5KTtcbiAgcGFkZGluZzogMzBweCAyNHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbn1cbi5jdXMtZmlsdGVyLWRyb3BEb3duOjpiZWZvcmUge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDAgOHB4IDEwcHggOHB4O1xuICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNmZmZmZmYgdHJhbnNwYXJlbnQ7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwcHg7XG4gIHJpZ2h0OiAxOHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwcHgpO1xufSJdfQ== */"

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

/***/ "./src/app/component/select.component.html":
/*!*************************************************!*\
  !*** ./src/app/component/select.component.html ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cus-input-container\" (click)=\"showList=!showList\">\n    <input class=\"cus-input cus-input--select\"  readonly [value]=\"value?.name\" placeholder=\"請輸入\">\n    <i class=\"icon-down-arrow\"></i>\n    <div *ngIf=\"showList\" class=\"cus-select-list\"> \n        <div class=\"cus-select-list-item\" *ngIf=\"hasFilter\">\n            <input class=\"cus-input cus-input--select\" placeholder=\"輸入關鍵字\" [(ngModel)]=\"filterText\">\n        </div>\n        <ng-container *ngFor=\"let item of valueList\">\n            <div *ngIf=\"filterText?item.name.includes(filterText):true\"\n            [ngClass]=\"{'cus-select-list-item--active':value===item}\"\n             class=\"cus-select-list-item\"\n              (click)=\"selectItem(item)\">{{item.name}}</div>\n        </ng-container>\n        \n    </div>\n</div>\n\n    \n"

/***/ }),

/***/ "./src/app/component/select.component.ts":
/*!***********************************************!*\
  !*** ./src/app/component/select.component.ts ***!
  \***********************************************/
/*! exports provided: SelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectComponent", function() { return SelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SelectComponent = /** @class */ (function () {
    function SelectComponent() {
        this.hasFilter = false;
        this.onSelect = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.value = null;
        this.valueList = [];
        this.showList = false;
        this.filterText = '';
    }
    SelectComponent.prototype.selectItem = function (item) {
        this.value = item;
        this.onSelect.emit(item);
        this.filterText = '';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "hasFilter", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "onSelect", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], SelectComponent.prototype, "value", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], SelectComponent.prototype, "valueList", void 0);
    SelectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: "com-select",
            template: __webpack_require__(/*! ./select.component.html */ "./src/app/component/select.component.html"),
            styles: [__webpack_require__(/*! ./select.scss */ "./src/app/component/select.scss")]
        })
    ], SelectComponent);
    return SelectComponent;
}());



/***/ }),

/***/ "./src/app/component/select.scss":
/*!***************************************!*\
  !*** ./src/app/component/select.scss ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cus-select-list {\n  color: #333;\n  padding: 10px;\n  border-radius: 6px;\n  border: 1px solid #ccc;\n  width: 100%;\n  font-size: 20px;\n  position: absolute;\n  background: #fff;\n  transform: translateY(8px);\n  overflow: hidden;\n  overflow-y: scroll;\n  max-height: 9em;\n}\n\n.cus-select-list-item {\n  padding: 5px;\n  color: #333;\n}\n\n.cus-select-list-item--active {\n  background-color: #E8E8E8;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9uYW1lL2plbm55L3BsYXlncm91bmQvZjJlMjAyMS9mMmUyMDIxLXRhaXdhblRyYXZlbGluZy9zcmMvYXBwL2NvbXBvbmVudC9zZWxlY3Quc2NzcyIsInNyYy9hcHAvY29tcG9uZW50L3NlbGVjdC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsMEJBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLFdBQUE7QUNFSjs7QURFQTtFQUNJLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvc2VsZWN0LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzLXNlbGVjdC1saXN0e1xuICAgIGNvbG9yOiAjMzMzO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNnB4O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBvc2l0aW9uOmFic29sdXRlO1xuICAgIGJhY2tncm91bmQ6ICNmZmY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDhweCk7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgbWF4LWhlaWdodDogOWVtO1xufVxuLmN1cy1zZWxlY3QtbGlzdC1pdGVte1xuICAgIHBhZGRpbmc6IDVweDtcbiAgICBjb2xvcjogIzMzMztcbn1cblxuXG4uY3VzLXNlbGVjdC1saXN0LWl0ZW0tLWFjdGl2ZXtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFOEU4O1xufSIsIi5jdXMtc2VsZWN0LWxpc3Qge1xuICBjb2xvcjogIzMzMztcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICB3aWR0aDogMTAwJTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQ6ICNmZmY7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4cHgpO1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIG1heC1oZWlnaHQ6IDllbTtcbn1cblxuLmN1cy1zZWxlY3QtbGlzdC1pdGVtIHtcbiAgcGFkZGluZzogNXB4O1xuICBjb2xvcjogIzMzMztcbn1cblxuLmN1cy1zZWxlY3QtbGlzdC1pdGVtLS1hY3RpdmUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFOEU4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/component/spotCard.component.html":
/*!***************************************************!*\
  !*** ./src/app/component/spotCard.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"cus-card\" (click)=\"outPutClick()\">\n    <div class=\"cus-card-img\">\n        <img [src]=\"spot.img.url\" [title]=\"spot.img.title\">\n    </div>\n    <div class=\"cus-card-info\">\n        <div class=\"cus-title--sm mb-sm\">{{spot.name}}</div>\n        <div class=\"c-sub fw-600 mb-sm cus-card-time\">{{spot.openTime}}</div>\n    </div>\n    <div class=\"cus-card-tag\"> \n        <span *ngFor=\"let tag of spot.typeList\" class=\"cus-tag mr-xs mb-xs\" \n        [ngClass]=\"getTagClass(tag)\">\n            {{tag}}\n        </span>\n    </div>\n</div>"

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

module.exports = "<div class=\"cus-footer\">\n    <div class=\"cus-container\">\n        Taiwan Traveling © Code: frog / Design: apple\n    </div>\n</div>"

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

module.exports = "<div class=\"cus-detail\">\n    <div class=\"cus-detail-keyVersion\" [style.background-image]=\"'url('+spot?.imgUrlList[0]?.url+')'\">\n        <div class=\"cus-container cus-detail-keyVersion-info\">\n            <h1 class=\"cus-detail-keyVersion-info-title mb-xs\">{{spot.name}}</h1>\n            <div class=\"cus-detail-keyVersion-info-address\">\n                <i class=\"icon-address c-info\"></i>\n                {{spot.address}}\n                <span class=\"c-info\">&nbsp;前往地圖</span>\n            </div>\n        </div>\n    </div>\n    <div class=\"cus-container pt-xs pb-xl\">\n\n        <div>\n            <div class=\"c-third fs-d\">\n                <i class=\"icon-home\"></i>\n                首頁 /{{spot.name}}\n            </div>\n            <div class=\"d-fl fl-wp mt-d fl-jc-sb\">\n                <div class=\"cus-detail-info\">\n                    <h3 class=\"cus-title--d\">\n                        <i class=\"icon-infomation c-primary\"></i>\n                        景點介紹</h3>\n                    <div class=\"c-third fs-sm pb-xs\">資料更新時間：YYYY/MM/DD HH:mm:ss</div>\n                    <div class=\"cus-title--sm pt-xs mb-xs\">簡介</div>\n                    <div class=\"fs-sm\">{{spot.descriptionDetail}}</div>\n                    <div *ngFor=\"let item of infoList\" class=\"d-fl pt-xs mt-xs\">\n                        <div class=\"fs-xl c-sub mr-xs\">\n                           <i [ngClass]=\"item.iconClass\"></i>\n                        </div>\n                        <div>\n                            <div class=\"cus-title--sm mb-xs\">{{item.title}}</div>\n                            <div class=\"c-third\">{{spot[item.key]||'未提供'}}</div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"cus-detail-position-container\">\n                    <div class=\"cus-detail-position-container-map\"></div>\n                </div>\n            </div>\n            \n            <h3 class=\"cus-title--d mt-sm pt-sm\"><i class=\"icon-foods c-primary\"></i>周邊美食</h3>\n            <div class=\"mt-xs pt-xs pb-sm d-fl cus-card-container\">\n                <div class=\"cus-food-card\" (click)=\"openFoodDialog(food)\" [style.background-image]=\"'url('+food.imgUrl+')'\" *ngFor=\"let food of restaurantList\">\n                    <div class=\"fs-lg\">{{food.name}}</div>\n                    <div class=\"mt-xs fs-d\">\n                        <i class=\"icon-distance\"></i>\n                        &nbsp;\n                        距 {{food.position}} 公尺\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n\n</div>"

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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _apiService_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../apiService.service */ "./src/app/apiService.service.ts");
/* harmony import */ var _component_restaurant_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../component/restaurant.component */ "./src/app/component/restaurant.component.ts");






var DetailComponent = /** @class */ (function () {
    function DetailComponent(apiService, dialog, activeRoute) {
        this.apiService = apiService;
        this.dialog = dialog;
        this.activeRoute = activeRoute;
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
        this.activeRoute.params.subscribe(function (d) {
            var id = d.id;
            if (id) {
                _this.apiService.getSpotDetailById(id).subscribe(function (d) {
                    console.log(id);
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
            }
        });
    };
    DetailComponent.prototype.openFoodDialog = function (food) {
        var dialogRef = this.dialog.open(_component_restaurant_component__WEBPACK_IMPORTED_MODULE_5__["RestaurantComponent"], {
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
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_apiService_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
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
        });
        this.apiService.getRecommendFilterDto().subscribe(function (d) {
            console.log(d);
            _this.filterList = d;
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