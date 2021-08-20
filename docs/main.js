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

/***/ "./src/app/angular-app/angular-app.component.html":
/*!********************************************************!*\
  !*** ./src/app/angular-app/angular-app.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<app-header></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <app-recipe></app-recipe>\n      <app-shopping-list></app-shopping-list>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/angular-app/angular-app.component.less":
/*!********************************************************!*\
  !*** ./src/app/angular-app/angular-app.component.less ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXItYXBwL2FuZ3VsYXItYXBwLmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/angular-app/angular-app.component.ts":
/*!******************************************************!*\
  !*** ./src/app/angular-app/angular-app.component.ts ***!
  \******************************************************/
/*! exports provided: AngularAppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AngularAppComponent", function() { return AngularAppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AngularAppComponent = /** @class */ (function () {
    function AngularAppComponent() {
    }
    AngularAppComponent.prototype.ngOnInit = function () {
    };
    AngularAppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-angular-app',
            template: __webpack_require__(/*! ./angular-app.component.html */ "./src/app/angular-app/angular-app.component.html"),
            styles: [__webpack_require__(/*! ./angular-app.component.less */ "./src/app/angular-app/angular-app.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AngularAppComponent);
    return AngularAppComponent;
}());



/***/ }),

/***/ "./src/app/angular-app/header/header.component.html":
/*!**********************************************************!*\
  !*** ./src/app/angular-app/header/header.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"narbar narvar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class='navbar-brand'> Recipe Book </a>\n    </div>\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"nav navbar-nav\">\n      <li><a href=\"#\">Recipes</a></li>\n      <li><a href=\"#\">Shopping List</a></li>\n    </ul>\n    <ul class=\"nav navbar-nav navbar-right\">\n      <li class=\"deopdown\">\n        <a href=\"#\" class=\"dropdown-toggle\" role='botton'> Manage <span class=\"caret\"></span></a>\n        <ul class=\"dropdown-menu\">\n          <li>\n            <a href=\"\">Save Data</a>\n            <a href=\"\">Fetch Data</a>\n          </li>\n        </ul>\n      </li>\n    </ul>\n  </div>\n</div>\n</nav>\n"

/***/ }),

/***/ "./src/app/angular-app/header/header.component.less":
/*!**********************************************************!*\
  !*** ./src/app/angular-app/header/header.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXItYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/angular-app/header/header.component.ts":
/*!********************************************************!*\
  !*** ./src/app/angular-app/header/header.component.ts ***!
  \********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/angular-app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.less */ "./src/app/angular-app/header/header.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/angular-app/recipe/recipe-detail/recipe-detail.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/angular-app/recipe/recipe-detail/recipe-detail.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  recipe-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/angular-app/recipe/recipe-detail/recipe-detail.component.less":
/*!*******************************************************************************!*\
  !*** ./src/app/angular-app/recipe/recipe-detail/recipe-detail.component.less ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXItYXBwL3JlY2lwZS9yZWNpcGUtZGV0YWlsL3JlY2lwZS1kZXRhaWwuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/angular-app/recipe/recipe-detail/recipe-detail.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/angular-app/recipe/recipe-detail/recipe-detail.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RecipeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeDetailComponent", function() { return RecipeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipeDetailComponent = /** @class */ (function () {
    function RecipeDetailComponent() {
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
    };
    RecipeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-detail',
            template: __webpack_require__(/*! ./recipe-detail.component.html */ "./src/app/angular-app/recipe/recipe-detail/recipe-detail.component.html"),
            styles: [__webpack_require__(/*! ./recipe-detail.component.less */ "./src/app/angular-app/recipe/recipe-detail/recipe-detail.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeDetailComponent);
    return RecipeDetailComponent;
}());



/***/ }),

/***/ "./src/app/angular-app/recipe/recipe-item/recipe-item.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/angular-app/recipe/recipe-item/recipe-item.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  recipe-item works!\n</p>\n"

/***/ }),

/***/ "./src/app/angular-app/recipe/recipe-item/recipe-item.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/angular-app/recipe/recipe-item/recipe-item.component.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXItYXBwL3JlY2lwZS9yZWNpcGUtaXRlbS9yZWNpcGUtaXRlbS5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/angular-app/recipe/recipe-item/recipe-item.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/angular-app/recipe/recipe-item/recipe-item.component.ts ***!
  \*************************************************************************/
/*! exports provided: RecipeItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeItemComponent", function() { return RecipeItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipeItemComponent = /** @class */ (function () {
    function RecipeItemComponent() {
    }
    RecipeItemComponent.prototype.ngOnInit = function () {
    };
    RecipeItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-item',
            template: __webpack_require__(/*! ./recipe-item.component.html */ "./src/app/angular-app/recipe/recipe-item/recipe-item.component.html"),
            styles: [__webpack_require__(/*! ./recipe-item.component.less */ "./src/app/angular-app/recipe/recipe-item/recipe-item.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeItemComponent);
    return RecipeItemComponent;
}());



/***/ }),

/***/ "./src/app/angular-app/recipe/recipe-list/recipe-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/angular-app/recipe/recipe-list/recipe-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"clo-md-5\">\n    <app-recipe-list></app-recipe-list>\n  </div>\n  <div class=\"col-md-7\">\n    <app-recipe-detail></app-recipe-detail>\n  </div> \n</div>"

/***/ }),

/***/ "./src/app/angular-app/recipe/recipe-list/recipe-list.component.less":
/*!***************************************************************************!*\
  !*** ./src/app/angular-app/recipe/recipe-list/recipe-list.component.less ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXItYXBwL3JlY2lwZS9yZWNpcGUtbGlzdC9yZWNpcGUtbGlzdC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/angular-app/recipe/recipe-list/recipe-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/angular-app/recipe/recipe-list/recipe-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: RecipeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeListComponent", function() { return RecipeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipeListComponent = /** @class */ (function () {
    function RecipeListComponent() {
    }
    RecipeListComponent.prototype.ngOnInit = function () {
    };
    RecipeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe-list',
            template: __webpack_require__(/*! ./recipe-list.component.html */ "./src/app/angular-app/recipe/recipe-list/recipe-list.component.html"),
            styles: [__webpack_require__(/*! ./recipe-list.component.less */ "./src/app/angular-app/recipe/recipe-list/recipe-list.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeListComponent);
    return RecipeListComponent;
}());



/***/ }),

/***/ "./src/app/angular-app/recipe/recipe.component.html":
/*!**********************************************************!*\
  !*** ./src/app/angular-app/recipe/recipe.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  recipe works!\n</p>\n"

/***/ }),

/***/ "./src/app/angular-app/recipe/recipe.component.less":
/*!**********************************************************!*\
  !*** ./src/app/angular-app/recipe/recipe.component.less ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXItYXBwL3JlY2lwZS9yZWNpcGUuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/angular-app/recipe/recipe.component.ts":
/*!********************************************************!*\
  !*** ./src/app/angular-app/recipe/recipe.component.ts ***!
  \********************************************************/
/*! exports provided: RecipeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RecipeComponent", function() { return RecipeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RecipeComponent = /** @class */ (function () {
    function RecipeComponent() {
    }
    RecipeComponent.prototype.ngOnInit = function () {
    };
    RecipeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-recipe',
            template: __webpack_require__(/*! ./recipe.component.html */ "./src/app/angular-app/recipe/recipe.component.html"),
            styles: [__webpack_require__(/*! ./recipe.component.less */ "./src/app/angular-app/recipe/recipe.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RecipeComponent);
    return RecipeComponent;
}());



/***/ }),

/***/ "./src/app/angular-app/shopping-list/shopping-edit/shopping-edit.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/angular-app/shopping-list/shopping-edit/shopping-edit.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  shopping-edit works!\n</p>\n"

/***/ }),

/***/ "./src/app/angular-app/shopping-list/shopping-edit/shopping-edit.component.less":
/*!**************************************************************************************!*\
  !*** ./src/app/angular-app/shopping-list/shopping-edit/shopping-edit.component.less ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXItYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctZWRpdC9zaG9wcGluZy1lZGl0LmNvbXBvbmVudC5sZXNzIn0= */"

/***/ }),

/***/ "./src/app/angular-app/shopping-list/shopping-edit/shopping-edit.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/angular-app/shopping-list/shopping-edit/shopping-edit.component.ts ***!
  \************************************************************************************/
/*! exports provided: ShoppingEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingEditComponent", function() { return ShoppingEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShoppingEditComponent = /** @class */ (function () {
    function ShoppingEditComponent() {
    }
    ShoppingEditComponent.prototype.ngOnInit = function () {
    };
    ShoppingEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-edit',
            template: __webpack_require__(/*! ./shopping-edit.component.html */ "./src/app/angular-app/shopping-list/shopping-edit/shopping-edit.component.html"),
            styles: [__webpack_require__(/*! ./shopping-edit.component.less */ "./src/app/angular-app/shopping-list/shopping-edit/shopping-edit.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShoppingEditComponent);
    return ShoppingEditComponent;
}());



/***/ }),

/***/ "./src/app/angular-app/shopping-list/shopping-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/angular-app/shopping-list/shopping-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  shopping-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/angular-app/shopping-list/shopping-list.component.less":
/*!************************************************************************!*\
  !*** ./src/app/angular-app/shopping-list/shopping-list.component.less ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FuZ3VsYXItYXBwL3Nob3BwaW5nLWxpc3Qvc2hvcHBpbmctbGlzdC5jb21wb25lbnQubGVzcyJ9 */"

/***/ }),

/***/ "./src/app/angular-app/shopping-list/shopping-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/angular-app/shopping-list/shopping-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: ShoppingListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListComponent", function() { return ShoppingListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ShoppingListComponent = /** @class */ (function () {
    function ShoppingListComponent() {
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
    };
    ShoppingListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-shopping-list',
            template: __webpack_require__(/*! ./shopping-list.component.html */ "./src/app/angular-app/shopping-list/shopping-list.component.html"),
            styles: [__webpack_require__(/*! ./shopping-list.component.less */ "./src/app/angular-app/shopping-list/shopping-list.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ShoppingListComponent);
    return ShoppingListComponent;
}());



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
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _angular_app_angular_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./angular-app/angular-app.component */ "./src/app/angular-app/angular-app.component.ts");
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./media/media.component */ "./src/app/media/media.component.ts");








var routes = [
    { path: 'heroes', component: _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__["HeroesComponent"] },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"] },
    { path: 'detail', component: _detail_detail_component__WEBPACK_IMPORTED_MODULE_5__["DetailComponent"] },
    { path: 'application', component: _angular_app_angular_app_component__WEBPACK_IMPORTED_MODULE_6__["AngularAppComponent"] },
    { path: 'video', component: _media_media_component__WEBPACK_IMPORTED_MODULE_7__["MediaComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)
            ],
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

module.exports = "<h1> {{title}}</h1>\n<nav>\n  <ul>\n    <li><a routerLink=\"/heroes\">Heroes</a></li>\n    <li><a routerLink=\"/dashboard\">Dashboard</a></li>\n    <li><a routerLink=\"/detail\">Detail</a></li>\n    <li><a routerLink=\"/application\">Aplication</a></li>\n    <li><a routerLink=\"/video\">Video</a></li>\n  </ul>\n</nav>\n<div class=\"my-angular\">\n  <router-outlet></router-outlet>\n</div>\n\n<!-- <section class=\"content\" \n  (click)=\"onContentClick($event)\"\n  (mousedown)=\"onContentMouseDown($event)\"\n  (mouseup)=\"onContentMouseUp($event)\"\n>\n  <input type=\"text\"\n    (click)=\"onInputClick($event)\"\n    (mousedown)=\"onInputMouseDown($event)\"\n    (mouseup)=\"onInputMouseUp($event)\"\n  >\n</section> -->\n"

/***/ }),

/***/ "./src/app/app.component.less":
/*!************************************!*\
  !*** ./src/app/app.component.less ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".content {\n  width: 200px;\n  height: 200px;\n  background: grey;\n}\n.content input {\n  margin: 20px;\n}\n.my-angular {\n  border-top: 2px solid skyblue;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWhvbmdsaWFuZy9hbmd1bGFyLXByYWN0aWNlL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5sZXNzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50Lmxlc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGdCQUFBO0FDQ0o7QURKQTtFQUtRLFlBQUE7QUNFUjtBRENBO0VBQ0ksNkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW50IHtcbiAgICB3aWR0aDogMjAwcHg7XG4gICAgaGVpZ2h0OiAyMDBweDtcbiAgICBiYWNrZ3JvdW5kOiBncmV5O1xuICAgIGlucHV0IHtcbiAgICAgICAgbWFyZ2luOiAyMHB4O1xuICAgIH1cbn1cbi5teS1hbmd1bGFyIHtcbiAgICBib3JkZXItdG9wOiAycHggc29saWQgc2t5Ymx1ZTtcbn0iLCIuY29udGVudCB7XG4gIHdpZHRoOiAyMDBweDtcbiAgaGVpZ2h0OiAyMDBweDtcbiAgYmFja2dyb3VuZDogZ3JleTtcbn1cbi5jb250ZW50IGlucHV0IHtcbiAgbWFyZ2luOiAyMHB4O1xufVxuLm15LWFuZ3VsYXIge1xuICBib3JkZXItdG9wOiAycHggc29saWQgc2t5Ymx1ZTtcbn1cbiJdfQ== */"

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
        this.title = 'Heroes';
        this.onContentMouseDown = function (e) {
            e.stopPropagation();
            console.log('content mouse down');
        };
        this.onContentMouseUp = function (e) {
            e.stopPropagation();
            console.log('content mouse up');
        };
        this.onContentClick = function (e) {
            e.stopPropagation();
            console.log('content mouse click');
        };
        this.onInputMouseDown = function (e) {
            e.stopPropagation();
            e.stopImmediatePropagation();
            console.log('input mouse down1');
        };
        this.onInputMouseUp = function (e) {
            e.stopPropagation();
            console.log('input mouse up');
        };
        this.onInputClick = function (e) {
            e.stopPropagation();
            console.log('input mouse click');
        };
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.less */ "./src/app/app.component.less")]
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
/* harmony import */ var angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _deep_module_deep_module_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./deep-module/deep-module.module */ "./src/app/deep-module/deep-module.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./heroes/heroes.component */ "./src/app/heroes/heroes.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./detail/detail.component */ "./src/app/detail/detail.component.ts");
/* harmony import */ var _in_memory_data_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./in-memory-data.service */ "./src/app/in-memory-data.service.ts");
/* harmony import */ var _angular_app_angular_app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./angular-app/angular-app.component */ "./src/app/angular-app/angular-app.component.ts");
/* harmony import */ var _angular_app_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./angular-app/header/header.component */ "./src/app/angular-app/header/header.component.ts");
/* harmony import */ var _angular_app_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./angular-app/shopping-list/shopping-list.component */ "./src/app/angular-app/shopping-list/shopping-list.component.ts");
/* harmony import */ var _angular_app_shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./angular-app/shopping-list/shopping-edit/shopping-edit.component */ "./src/app/angular-app/shopping-list/shopping-edit/shopping-edit.component.ts");
/* harmony import */ var _angular_app_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./angular-app/recipe/recipe.component */ "./src/app/angular-app/recipe/recipe.component.ts");
/* harmony import */ var _angular_app_recipe_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./angular-app/recipe/recipe-list/recipe-list.component */ "./src/app/angular-app/recipe/recipe-list/recipe-list.component.ts");
/* harmony import */ var _angular_app_recipe_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./angular-app/recipe/recipe-item/recipe-item.component */ "./src/app/angular-app/recipe/recipe-item/recipe-item.component.ts");
/* harmony import */ var _angular_app_recipe_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./angular-app/recipe/recipe-detail/recipe-detail.component */ "./src/app/angular-app/recipe/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var _video_video_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./video/video.component */ "./src/app/video/video.component.ts");
/* harmony import */ var _flv_flv_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./flv/flv.component */ "./src/app/flv/flv.component.ts");
/* harmony import */ var _media_media_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./media/media.component */ "./src/app/media/media.component.ts");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_7__["HeroesComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
                _detail_detail_component__WEBPACK_IMPORTED_MODULE_11__["DetailComponent"],
                _angular_app_angular_app_component__WEBPACK_IMPORTED_MODULE_13__["AngularAppComponent"],
                _angular_app_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _heroes_heroes_component__WEBPACK_IMPORTED_MODULE_7__["ChildComponent"],
                _angular_app_shopping_list_shopping_list_component__WEBPACK_IMPORTED_MODULE_15__["ShoppingListComponent"],
                _angular_app_shopping_list_shopping_edit_shopping_edit_component__WEBPACK_IMPORTED_MODULE_16__["ShoppingEditComponent"],
                _angular_app_recipe_recipe_component__WEBPACK_IMPORTED_MODULE_17__["RecipeComponent"],
                _angular_app_recipe_recipe_list_recipe_list_component__WEBPACK_IMPORTED_MODULE_18__["RecipeListComponent"],
                _angular_app_recipe_recipe_item_recipe_item_component__WEBPACK_IMPORTED_MODULE_19__["RecipeItemComponent"],
                _angular_app_recipe_recipe_detail_recipe_detail_component__WEBPACK_IMPORTED_MODULE_20__["RecipeDetailComponent"],
                _video_video_component__WEBPACK_IMPORTED_MODULE_21__["VideoComponent"],
                _flv_flv_component__WEBPACK_IMPORTED_MODULE_22__["FlvComponent"],
                _media_media_component__WEBPACK_IMPORTED_MODULE_23__["MediaComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_9__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _deep_module_deep_module_module__WEBPACK_IMPORTED_MODULE_5__["DeepModuleModule"],
                angular_in_memory_web_api__WEBPACK_IMPORTED_MODULE_2__["HttpClientInMemoryWebApiModule"].forRoot(_in_memory_data_service__WEBPACK_IMPORTED_MODULE_12__["InMemoryDataService"], { dataEncapsulation: false })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" placeholder=\"app name\" [(ngModel)]=\"name\">\n<input type=\"text\" placeholder=\"appName\" [ngModel]=\"name\">\n<h1>{{name || 234}}</h1>\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.less":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.less ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50Lmxlc3MifQ== */"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
        this.name = '123';
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.less */ "./src/app/dashboard/dashboard.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/deep-module/deep-module.module.ts":
/*!***************************************************!*\
  !*** ./src/app/deep-module/deep-module.module.ts ***!
  \***************************************************/
/*! exports provided: DeepModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeepModuleModule", function() { return DeepModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _level2_module1_level2_module1_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level2-module1/level2-module1.module */ "./src/app/deep-module/level2-module1/level2-module1.module.ts");
/* harmony import */ var _deep_module_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deep-module.service */ "./src/app/deep-module/deep-module.service.ts");




var DeepModuleModule = /** @class */ (function () {
    function DeepModuleModule() {
    }
    DeepModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _level2_module1_level2_module1_module__WEBPACK_IMPORTED_MODULE_2__["Level2Module1Module"]
            ],
            providers: [
                _deep_module_service__WEBPACK_IMPORTED_MODULE_3__["DeepModuleService"]
            ]
        })
    ], DeepModuleModule);
    return DeepModuleModule;
}());



/***/ }),

/***/ "./src/app/deep-module/deep-module.service.ts":
/*!****************************************************!*\
  !*** ./src/app/deep-module/deep-module.service.ts ***!
  \****************************************************/
/*! exports provided: DeepModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeepModuleService", function() { return DeepModuleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DeepModuleService = /** @class */ (function () {
    function DeepModuleService(http) {
        this.http = http;
    }
    DeepModuleService.prototype.log = function (message) {
        console.log(111111);
    };
    DeepModuleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DeepModuleService);
    return DeepModuleService;
}());



/***/ }),

/***/ "./src/app/deep-module/level2-module1/level2-module1.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/deep-module/level2-module1/level2-module1.module.ts ***!
  \*********************************************************************/
/*! exports provided: Level2Module1Module */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level2Module1Module", function() { return Level2Module1Module; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _level2_module1_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./level2-module1.service */ "./src/app/deep-module/level2-module1/level2-module1.service.ts");



var Level2Module1Module = /** @class */ (function () {
    function Level2Module1Module() {
    }
    Level2Module1Module = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [],
            providers: [
                _level2_module1_service__WEBPACK_IMPORTED_MODULE_2__["Level2Module1Service"]
            ]
        })
    ], Level2Module1Module);
    return Level2Module1Module;
}());



/***/ }),

/***/ "./src/app/deep-module/level2-module1/level2-module1.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/deep-module/level2-module1/level2-module1.service.ts ***!
  \**********************************************************************/
/*! exports provided: Level2Module1Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Level2Module1Service", function() { return Level2Module1Service; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var Level2Module1Service = /** @class */ (function () {
    function Level2Module1Service(http) {
        this.http = http;
    }
    Level2Module1Service.prototype.log = function (message) {
        console.log(222222);
    };
    Level2Module1Service = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], Level2Module1Service);
    return Level2Module1Service;
}());



/***/ }),

/***/ "./src/app/detail/detail.component.html":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 [ngStyle]=\"{color: getColor()}\"> This is an example of ngif </h1>\n<h2 [ngClass]=\"{'white': flag}\">This is an example of ngClass</h2>\n\n<p *ngIf=\"flag; else elseblock\"> Flag is true</p>\n<ng-template #elseblock>\n  <p>Flag is flase</p>\n</ng-template>\n\n<button (click)=\"toggleFlag()\"> toggle flag</button>\n\n\n<h1>Student Roster</h1>\n\n<input type=\"text\" [(ngModel)]=\"currentName\">\n\n<button (click)=\"add()\">submit student name</button>\n\n<li *ngFor=\"let names of studentRoster\">{{names}}</li>\n"

/***/ }),

/***/ "./src/app/detail/detail.component.less":
/*!**********************************************!*\
  !*** ./src/app/detail/detail.component.less ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".white {\n  background: black;\n  color: white;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWhvbmdsaWFuZy9hbmd1bGFyLXByYWN0aWNlL3NyYy9hcHAvZGV0YWlsL2RldGFpbC5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvZGV0YWlsL2RldGFpbC5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsWUFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvZGV0YWlsL2RldGFpbC5jb21wb25lbnQubGVzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aGl0ZSB7XG4gICAgYmFja2dyb3VuZDogYmxhY2s7XG4gICAgY29sb3I6IHdoaXRlO1xufSIsIi53aGl0ZSB7XG4gIGJhY2tncm91bmQ6IGJsYWNrO1xuICBjb2xvcjogd2hpdGU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/detail/detail.component.ts":
/*!********************************************!*\
  !*** ./src/app/detail/detail.component.ts ***!
  \********************************************/
/*! exports provided: DetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DetailComponent", function() { return DetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DetailComponent = /** @class */ (function () {
    function DetailComponent() {
        this.flag = true;
        this.studentRoster = ['carl', 'kenny'];
        this.currentName = '';
    }
    DetailComponent.prototype.ngOnInit = function () {
    };
    DetailComponent.prototype.add = function () {
        this.studentRoster.push(this.currentName);
    };
    DetailComponent.prototype.toggleFlag = function () {
        this.flag = !this.flag;
        return this.flag;
    };
    DetailComponent.prototype.getColor = function () {
        return this.flag ? 'green' : 'red';
    };
    DetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-detail',
            template: __webpack_require__(/*! ./detail.component.html */ "./src/app/detail/detail.component.html"),
            styles: [__webpack_require__(/*! ./detail.component.less */ "./src/app/detail/detail.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DetailComponent);
    return DetailComponent;
}());



/***/ }),

/***/ "./src/app/flv/flv.component.html":
/*!****************************************!*\
  !*** ./src/app/flv/flv.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<video #flvTarget id=\"flv-target\" class=\"flv-js\" controls muted playsinline preload=\"none\" poster=\"//vjs.zencdn.net/v/oceans.png\">\n  your browser is too old which doesn't support HTML5 video\n</video>"

/***/ }),

/***/ "./src/app/flv/flv.component.less":
/*!****************************************!*\
  !*** ./src/app/flv/flv.component.less ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#flv-target {\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWhvbmdsaWFuZy9hbmd1bGFyLXByYWN0aWNlL3NyYy9hcHAvZmx2L2Zsdi5jb21wb25lbnQubGVzcyIsInNyYy9hcHAvZmx2L2Zsdi5jb21wb25lbnQubGVzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9mbHYvZmx2LmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiI2Zsdi10YXJnZXQge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufSIsIiNmbHYtdGFyZ2V0IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/flv/flv.component.ts":
/*!**************************************!*\
  !*** ./src/app/flv/flv.component.ts ***!
  \**************************************/
/*! exports provided: FlvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FlvComponent", function() { return FlvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var flv_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flv.js */ "./node_modules/flv.js/src/flv.js");



var FlvComponent = /** @class */ (function () {
    function FlvComponent() {
    }
    FlvComponent.prototype.ngOnInit = function () {
        console.log(555, this.target.nativeElement);
        var videoElement = this.target.nativeElement;
        if (flv_js__WEBPACK_IMPORTED_MODULE_2__["default"].isSupported()) {
            console.log(6666, flv_js__WEBPACK_IMPORTED_MODULE_2__["default"].getFeatureList());
            var flvPlayer = flv_js__WEBPACK_IMPORTED_MODULE_2__["default"].createPlayer(this.options);
            flvPlayer.attachMediaElement(videoElement);
            flvPlayer.load();
            // flvPlayer.play();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('flvTarget', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], FlvComponent.prototype, "target", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FlvComponent.prototype, "options", void 0);
    FlvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-flv',
            template: __webpack_require__(/*! ./flv.component.html */ "./src/app/flv/flv.component.html"),
            styles: [__webpack_require__(/*! ./flv.component.less */ "./src/app/flv/flv.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FlvComponent);
    return FlvComponent;
}());



/***/ }),

/***/ "./src/app/heroes/heroes.component.ts":
/*!********************************************!*\
  !*** ./src/app/heroes/heroes.component.ts ***!
  \********************************************/
/*! exports provided: HeroesComponent, ChildComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChildComponent", function() { return ChildComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


// @Component({
//   selector: 'app-heroes',
//   templateUrl: './heroes.component.html',
//   styleUrls: ['./heroes.component.less']
// })
// export class HeroesComponent implements OnInit {
//   title = 'subTitle';
//   _time;
//   get time() {
//     return this._time;
//   }
//   constructor(public zone: NgZone) {
//     this._time = Date.now()
//     zone.runOutsideAngular(() => {
//       setInterval(() => {
//         this._time = Date.now()
//       }, 1);
//     });
//   }
//   ngOnInit() {
//   }
// }
var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(cd) {
        var _this = this;
        this.cd = cd;
        this.text = 'Original text in parent component';
        setTimeout(function () {
            _this.text = 'updated';
        }, 2000);
    }
    HeroesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-heroes',
            // 
            template: "\n      <div [textContent]=\"text\"></div>\n      <child-comp [text]=\"text\"></child-comp>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], HeroesComponent);
    return HeroesComponent;
}());

var ChildComponent = /** @class */ (function () {
    function ChildComponent(parent, cd) {
        var _this = this;
        this.parent = parent;
        this.cd = cd;
        this.changed = 'false';
        setTimeout(function () {
            _this.cd.detach();
            _this.changed = 'true';
        }, 2000);
        // setTimeout(() => {
        //   this.cd.reattach();
        //   console.log(234234)
        //   this.changed = 'reattach';
        // }, 4000)
    }
    ChildComponent.prototype.ngOnChanges = function (values) {
        // this.cd.reattach();
        console.log(234234, values);
        this.changed = 'reattach';
    };
    ChildComponent.prototype.ngOnInit = function () {
        this.parent.text = 'Updated text in parent component';
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], ChildComponent.prototype, "text", void 0);
    ChildComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'child-comp',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            template: "<span>I am child component</span>\n  <p>See if I change: {{changed}}</p>\n  <p>{{text}}</p>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [HeroesComponent, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]])
    ], ChildComponent);
    return ChildComponent;
}());



/***/ }),

/***/ "./src/app/in-memory-data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/in-memory-data.service.ts ***!
  \*******************************************/
/*! exports provided: InMemoryDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InMemoryDataService", function() { return InMemoryDataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InMemoryDataService = /** @class */ (function () {
    function InMemoryDataService() {
    }
    InMemoryDataService.prototype.createDb = function () {
        var heroes = [
            { id: 11, name: 'Dr Nice' },
            { id: 12, name: 'Narco' },
            { id: 13, name: 'Bombasto' },
            { id: 14, name: 'Celeritas' },
            { id: 15, name: 'Magneta' },
            { id: 16, name: 'RubberMan' },
            { id: 17, name: 'Dynama' },
            { id: 18, name: 'Dr IQ' },
            { id: 19, name: 'Magma' },
            { id: 20, name: 'Tornado' }
        ];
        return { heroes: heroes };
    };
    InMemoryDataService.prototype.genId = function (heroes) {
        return heroes.length > 0 ? Math.max.apply(Math, heroes.map(function (hero) { return hero.id; })) + 1 : 11;
    };
    InMemoryDataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InMemoryDataService);
    return InMemoryDataService;
}());



/***/ }),

/***/ "./src/app/media/media.component.html":
/*!********************************************!*\
  !*** ./src/app/media/media.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"media\">\n  <div class=\"media-video\">\n    <app-video [options]=\"videoOptions\"></app-video>\n  </div>\n  <!-- <div class=\"media-flv\">\n    <app-flv [options]=\"flvOptions\"></app-flv>\n  </div> -->\n</div>"

/***/ }),

/***/ "./src/app/media/media.component.less":
/*!********************************************!*\
  !*** ./src/app/media/media.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".media {\n  display: -webkit-box;\n  display: flex;\n}\n.media-video,\n.media-flv {\n  width: 50%;\n  margin: 0 auto;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWhvbmdsaWFuZy9hbmd1bGFyLXByYWN0aWNlL3NyYy9hcHAvbWVkaWEvbWVkaWEuY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL21lZGlhL21lZGlhLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0FDQ0Y7QURBRTs7RUFDRSxVQUFBO0VBQ0EsY0FBQTtBQ0dKIiwiZmlsZSI6InNyYy9hcHAvbWVkaWEvbWVkaWEuY29tcG9uZW50Lmxlc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWVkaWEge1xuICBkaXNwbGF5OiBmbGV4O1xuICAmLXZpZGVvLCAmLWZsdiB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgfVxufSIsIi5tZWRpYSB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4ubWVkaWEtdmlkZW8sXG4ubWVkaWEtZmx2IHtcbiAgd2lkdGg6IDUwJTtcbiAgbWFyZ2luOiAwIGF1dG87XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/media/media.component.ts":
/*!******************************************!*\
  !*** ./src/app/media/media.component.ts ***!
  \******************************************/
/*! exports provided: MediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaComponent", function() { return MediaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MediaComponent = /** @class */ (function () {
    function MediaComponent() {
        this.videoOptions = {
            controls: true,
            preload: 'none',
            sources: [{
                    src: 'rtmp://localhost:7001/live/test.flv',
                    type: 'rtmp/flv'
                }],
            dataSetup: {
                aspectRatio: '640:267',
                playbackRates: [1, 1.5, 2]
            }
        };
        this.flvOptions = {
            type: 'flv',
            isLive: true,
            url: 'http://localhost:7001/live/test.flv'
        };
    }
    MediaComponent.prototype.ngOnInit = function () {
    };
    MediaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-media',
            template: __webpack_require__(/*! ./media.component.html */ "./src/app/media/media.component.html"),
            styles: [__webpack_require__(/*! ./media.component.less */ "./src/app/media/media.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MediaComponent);
    return MediaComponent;
}());



/***/ }),

/***/ "./src/app/video/video.component.html":
/*!********************************************!*\
  !*** ./src/app/video/video.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<video \n#videoTarget \nid=\"video-target\" \nclass=\"video-js\" \ncontrols \nmuted \nplaysinline \npreload=\"none\" \nposter=\"//vjs.zencdn.net/v/oceans.png\"\n></video>"

/***/ }),

/***/ "./src/app/video/video.component.less":
/*!********************************************!*\
  !*** ./src/app/video/video.component.less ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#video-target {\n  width: 100%;\n  height: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9saWhvbmdsaWFuZy9hbmd1bGFyLXByYWN0aWNlL3NyYy9hcHAvdmlkZW8vdmlkZW8uY29tcG9uZW50Lmxlc3MiLCJzcmMvYXBwL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC5sZXNzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC5sZXNzIiwic291cmNlc0NvbnRlbnQiOlsiI3ZpZGVvLXRhcmdldCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59IiwiI3ZpZGVvLXRhcmdldCB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/video/video.component.ts":
/*!******************************************!*\
  !*** ./src/app/video/video.component.ts ***!
  \******************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var video_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! video.js */ "./node_modules/video.js/dist/video.es.js");



var VideoComponent = /** @class */ (function () {
    function VideoComponent(elementRef) {
        this.elementRef = elementRef;
    }
    VideoComponent.prototype.ngOnInit = function () {
        // instantiate Video.js
        this.player = Object(video_js__WEBPACK_IMPORTED_MODULE_2__["default"])(this.target.nativeElement, this.options, function onPlayerReady() {
            console.log('onPlayerReady', this);
        });
    };
    VideoComponent.prototype.ngOnDestroy = function () {
        // destroy player
        if (this.player) {
            this.player.dispose();
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoTarget', { static: true }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], VideoComponent.prototype, "target", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoComponent.prototype, "options", void 0);
    VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.less */ "./src/app/video/video.component.less")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], VideoComponent);
    return VideoComponent;
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

module.exports = __webpack_require__(/*! /Users/lihongliang/angular-practice/src/main.ts */"./src/main.ts");


/***/ }),

/***/ 1:
/*!******************************!*\
  !*** min-document (ignored) ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map