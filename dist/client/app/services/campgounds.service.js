"use strict";
/**
 * Created by Laurence Ho on 07-02-2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var api_service_1 = require("./api.service");
require("rxjs/Rx");
var CampgroundDetail = /** @class */ (function () {
    function CampgroundDetail() {
    }
    return CampgroundDetail;
}());
exports.CampgroundDetail = CampgroundDetail;
var CampgroundService = /** @class */ (function () {
    function CampgroundService(apiService) {
        this.apiService = apiService;
        this.campgroundsUrl = 'api/campground/'; // URL to web api
        this.commentUrl = 'api/comment/';
    }
    CampgroundService.prototype.getCampgrounds = function () {
        var _params = {};
        var _formParams = {};
        var _bodyData = {};
        return this.apiService.perform('get', this.campgroundsUrl, _bodyData, _params, _formParams);
    };
    CampgroundService.prototype.getCampgroundDetail = function (id) {
        var _params = {};
        var _formParams = {};
        var _bodyData = {};
        return this.apiService.perform('get', this.campgroundsUrl + id, _bodyData, _params, _formParams);
    };
    CampgroundService.prototype.getCampground = function (id) {
        var _params = {};
        var _formParams = {};
        var _bodyData = {};
        var url = this.campgroundsUrl + id + '/edit';
        return this.apiService.perform('get', url, _bodyData, _params, _formParams);
    };
    CampgroundService.prototype.editCampground = function (campground) {
        var _params = {};
        var _formParams = {};
        var url = this.campgroundsUrl + campground.id + '/edit';
        return this.apiService.perform('put', url, campground, _params, _formParams);
    };
    CampgroundService.prototype.createCampground = function (campground) {
        var _params = {};
        var _formParams = {};
        return this.apiService.perform('post', this.campgroundsUrl, campground, _params, _formParams);
    };
    CampgroundService.prototype.deleteCampground = function (id) {
        var _params = {};
        var _formParams = {};
        var _bodyData = {};
        return this.apiService.perform('delete', this.campgroundsUrl + id, _bodyData, _params, _formParams);
    };
    CampgroundService.prototype.getComment = function (id) {
        var _params = {};
        var _formParams = {};
        var _bodyData = {};
        var url = this.commentUrl + id + '/edit';
        return this.apiService.perform('get', url, _bodyData, _params, _formParams);
    };
    CampgroundService.prototype.editComment = function (comment) {
        var _params = {};
        var _formParams = {};
        var url = this.commentUrl + comment.id + '/edit';
        return this.apiService.perform('put', url, comment, _params, _formParams);
    };
    CampgroundService.prototype.createComment = function (comment) {
        var _params = {};
        var _formParams = {};
        return this.apiService.perform('post', this.commentUrl, comment, _params, _formParams);
    };
    CampgroundService.prototype.deleteComment = function (id) {
        var _params = {};
        var _formParams = {};
        var _bodyData = {};
        return this.apiService.perform('delete', this.commentUrl + id, _bodyData, _params, _formParams);
    };
    CampgroundService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], CampgroundService);
    return CampgroundService;
}());
exports.CampgroundService = CampgroundService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9jYW1wZ291bmRzLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOzs7Ozs7Ozs7OztBQUVILHNDQUEyQztBQUczQyw2Q0FBMkM7QUFFM0MsbUJBQWlCO0FBRWpCO0lBQUE7SUFHQSxDQUFDO0lBQUQsdUJBQUM7QUFBRCxDQUhBLEFBR0MsSUFBQTtBQUhZLDRDQUFnQjtBQU03QjtJQUtDLDJCQUFvQixVQUFzQjtRQUF0QixlQUFVLEdBQVYsVUFBVSxDQUFZO1FBSGxDLG1CQUFjLEdBQUcsaUJBQWlCLENBQUMsQ0FBRSxpQkFBaUI7UUFDdEQsZUFBVSxHQUFHLGNBQWMsQ0FBQztJQUdwQyxDQUFDO0lBRUQsMENBQWMsR0FBZDtRQUNDLElBQU0sT0FBTyxHQUFRLEVBQUUsQ0FBQztRQUN4QixJQUFNLFdBQVcsR0FBUSxFQUFFLENBQUM7UUFDNUIsSUFBTSxTQUFTLEdBQVEsRUFBRSxDQUFDO1FBRTFCLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLGNBQWMsRUFBRSxTQUFTLEVBQUUsT0FBTyxFQUFFLFdBQVcsQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRCwrQ0FBbUIsR0FBbkIsVUFBb0IsRUFBVTtRQUM3QixJQUFNLE9BQU8sR0FBUSxFQUFFLENBQUM7UUFDeEIsSUFBTSxXQUFXLEdBQVEsRUFBRSxDQUFDO1FBQzVCLElBQU0sU0FBUyxHQUFRLEVBQUUsQ0FBQztRQUUxQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDbEcsQ0FBQztJQUVELHlDQUFhLEdBQWIsVUFBYyxFQUFVO1FBQ3ZCLElBQU0sT0FBTyxHQUFRLEVBQUUsQ0FBQztRQUN4QixJQUFNLFdBQVcsR0FBUSxF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LEdBQVEsRUFBRSxDQUFDO1FBQzVCLElBQU0sU0FBUyxHQUFRLEVBQUUsQ0FBQztRQUUxQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsRUFBRSxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDakcsQ0FBQztJQXRGVyxpQkFBaUI7UUFEN0IsaUJBQVUsRUFBRTt5Q0FNb0Isd0JBQVU7T0FMOUIsaUJBQWlCLENBdUY3QjtJQUFELHdCQUFDO0NBdkZELEFBdUZDLElBQUE7QUF2RlksOENBQWlCIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy9jYW1wZ291bmRzLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBMYXVyZW5jZSBIbyBvbiAwNy0wMi0yMDE3LlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FtcGdyb3VuZCB9IGZyb20gJy4uL21vZGVscy9jYW1wZ3JvdW5kJztcclxuaW1wb3J0IHsgQ29tbWVudCB9IGZyb20gJy4uL21vZGVscy9jb21tZW50JztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vYXBpLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW1wZ3JvdW5kRGV0YWlsIHtcclxuXHRjYW1wZ3JvdW5kOiBDYW1wZ3JvdW5kO1xyXG5cdGNvbW1lbnRzOiBhbnlbXTtcclxufVxyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgQ2FtcGdyb3VuZFNlcnZpY2Uge1xyXG5cclxuXHRwcml2YXRlIGNhbXBncm91bmRzVXJsID0gJ2FwaS9jYW1wZ3JvdW5kLyc7ICAvLyBVUkwgdG8gd2ViIGFwaVxyXG5cdHByaXZhdGUgY29tbWVudFVybCA9ICdhcGkvY29tbWVudC8nO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGFwaVNlcnZpY2U6IEFwaVNlcnZpY2UpIHtcclxuXHR9XHJcblxyXG5cdGdldENhbXBncm91bmRzKCk6IE9ic2VydmFibGU8Q2FtcGdyb3VuZFtdPiB7XHJcblx0XHRjb25zdCBfcGFyYW1zOiBhbnkgPSB7fTtcclxuXHRcdGNvbnN0IF9mb3JtUGFyYW1zOiBhbnkgPSB7fTtcclxuXHRcdGNvbnN0IF9ib2R5RGF0YTogYW55ID0ge307XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuYXBpU2VydmljZS5wZXJmb3JtKCdnZXQnLCB0aGlzLmNhbXBncm91bmRzVXJsLCBfYm9keURhdGEsIF9wYXJhbXMsIF9mb3JtUGFyYW1zKTtcclxuXHR9XHJcblxyXG5cdGdldENhbXBncm91bmREZXRhaWwoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8Q2FtcGdyb3VuZERldGFpbD4ge1xyXG5cdFx0Y29uc3QgX3BhcmFtczogYW55ID0ge307XHJcblx0XHRjb25zdCBfZm9ybVBhcmFtczogYW55ID0ge307XHJcblx0XHRjb25zdCBfYm9keURhdGE6IGFueSA9IHt9O1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmFwaVNlcnZpY2UucGVyZm9ybSgnZ2V0JywgdGhpcy5jYW1wZ3JvdW5kc1VybCArIGlkLCBfYm9keURhdGEsIF9wYXJhbXMsIF9mb3JtUGFyYW1zKTtcclxuXHR9XHJcblxyXG5cdGdldENhbXBncm91bmQoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBfcGFyYW1zOiBhbnkgPSB7fTtcclxuXHRcdGNvbnN0IF9mb3JtUGFyYW1zOiBhbnkgPSB7fTtcclxuXHRcdGNvbnN0IF9ib2R5RGF0YTogYW55ID0ge307XHJcblx0XHRjb25zdCB1cmwgPSB0aGlzLmNhbXBncm91bmRzVXJsICsgaWQgKyAnL2VkaXQnO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmFwaVNlcnZpY2UucGVyZm9ybSgnZ2V0JywgdXJsLCBfYm9keURhdGEsIF9wYXJhbXMsIF9mb3JtUGFyYW1zKTtcclxuXHR9XHJcblxyXG5cdGVkaXRDYW1wZ3JvdW5kKGNhbXBncm91bmQ6IENhbXBncm91bmQpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgX3BhcmFtczogYW55ID0ge307XHJcblx0XHRjb25zdCBfZm9ybVBhcmFtczogYW55ID0ge307XHJcblx0XHRjb25zdCB1cmwgPSB0aGlzLmNhbXBncm91bmRzVXJsICsgY2FtcGdyb3VuZC5pZCArICcvZWRpdCc7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuYXBpU2VydmljZS5wZXJmb3JtKCdwdXQnLCB1cmwsIGNhbXBncm91bmQsIF9wYXJhbXMsIF9mb3JtUGFyYW1zKTtcclxuXHR9XHJcblxyXG5cdGNyZWF0ZUNhbXBncm91bmQoY2FtcGdyb3VuZDogQ2FtcGdyb3VuZCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBfcGFyYW1zOiBhbnkgPSB7fTtcclxuXHRcdGNvbnN0IF9mb3JtUGFyYW1zOiBhbnkgPSB7fTtcclxuXHJcblx0XHRyZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLnBlcmZvcm0oJ3Bvc3QnLCB0aGlzLmNhbXBncm91bmRzVXJsLCBjYW1wZ3JvdW5kLCBfcGFyYW1zLCBfZm9ybVBhcmFtcyk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDYW1wZ3JvdW5kKGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgX3BhcmFtczogYW55ID0ge307XHJcblx0XHRjb25zdCBfZm9ybVBhcmFtczogYW55ID0ge307XHJcblx0XHRjb25zdCBfYm9keURhdGE6IGFueSA9IHt9O1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmFwaVNlcnZpY2UucGVyZm9ybSgnZGVsZXRlJywgdGhpcy5jYW1wZ3JvdW5kc1VybCArIGlkLCBfYm9keURhdGEsIF9wYXJhbXMsIF9mb3JtUGFyYW1zKTtcclxuXHR9XHJcblxyXG5cdGdldENvbW1lbnQoaWQ6IG51bWJlcik6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBfcGFyYW1zOiBhbnkgPSB7fTtcclxuXHRcdGNvbnN0IF9mb3JtUGFyYW1zOiBhbnkgPSB7fTtcclxuXHRcdGNvbnN0IF9ib2R5RGF0YTogYW55ID0ge307XHJcblx0XHRjb25zdCB1cmwgPSB0aGlzLmNvbW1lbnRVcmwgKyBpZCArICcvZWRpdCc7XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuYXBpU2VydmljZS5wZXJmb3JtKCdnZXQnLCB1cmwsIF9ib2R5RGF0YSwgX3BhcmFtcywgX2Zvcm1QYXJhbXMpO1xyXG5cdH1cclxuXHJcblx0ZWRpdENvbW1lbnQoY29tbWVudDogQ29tbWVudCk6IE9ic2VydmFibGU8YW55PiB7XHJcblx0XHRjb25zdCBfcGFyYW1zOiBhbnkgPSB7fTtcclxuXHRcdGNvbnN0IF9mb3JtUGFyYW1zOiBhbnkgPSB7fTtcclxuXHRcdGNvbnN0IHVybCA9IHRoaXMuY29tbWVudFVybCArIGNvbW1lbnQuaWQgKyAnL2VkaXQnO1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmFwaVNlcnZpY2UucGVyZm9ybSgncHV0JywgdXJsLCBjb21tZW50LCBfcGFyYW1zLCBfZm9ybVBhcmFtcyk7XHJcblx0fVxyXG5cclxuXHRjcmVhdGVDb21tZW50KGNvbW1lbnQ6IENvbW1lbnQpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgX3BhcmFtczogYW55ID0ge307XHJcblx0XHRjb25zdCBfZm9ybVBhcmFtczogYW55ID0ge307XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuYXBpU2VydmljZS5wZXJmb3JtKCdwb3N0JywgdGhpcy5jb21tZW50VXJsLCBjb21tZW50LCBfcGFyYW1zLCBfZm9ybVBhcmFtcyk7XHJcblx0fVxyXG5cclxuXHRkZWxldGVDb21tZW50KGlkOiBudW1iZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgX3BhcmFtczogYW55ID0ge307XHJcblx0XHRjb25zdCBfZm9ybVBhcmFtczogYW55ID0ge307XHJcblx0XHRjb25zdCBfYm9keURhdGE6IGFueSA9IHt9O1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmFwaVNlcnZpY2UucGVyZm9ybSgnZGVsZXRlJywgdGhpcy5jb21tZW50VXJsICsgaWQsIF9ib2R5RGF0YSwgX3BhcmFtcywgX2Zvcm1QYXJhbXMpO1xyXG5cdH1cclxufVxyXG4iXX0=
