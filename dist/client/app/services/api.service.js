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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var router_1 = require("@angular/router");
var _ = require("lodash");
var Observable_1 = require("rxjs/Observable");
require("rxjs/Rx");
require("rxjs/add/observable/throw");
var ApiService = /** @class */ (function () {
    function ApiService(http, router) {
        this.http = http;
        this.router = router;
    }
    ApiService.prototype.perform = function (method, urlPath, body, params, formParams) {
        var requestOptions = {};
        var headers = new http_1.Headers({ 'Accept': '*/*' });
        if (!_.isEmpty(formParams)) {
            // Form submit
            headers.append('Content-Type', 'application/x-www-form-urlencoded');
            var formBody = new http_1.URLSearchParams();
            for (var _i = 0, _a = Object.keys(formParams); _i < _a.length; _i++) {
                var formParam = _a[_i];
                formBody.append(formParam, formParams[formParam]);
            }
            requestOptions.body = formBody.toString();
        }
        else {
            // JSON content
            headers.append('Content-Type', 'application/json');
            if (body) {
                requestOptions.body = JSON.stringify(body);
            }
        }
        var searchParams = new http_1.URLSearchParams();
        if (!_.isEmpty(params)) {
            for (var _b = 0, _c = Object.keys(params); _b < _c.length; _b++) {
                var param = _c[_b];
                searchParams.append(param, params[param]);
            }
        }
        requestOptions.search = searchParams;
        requestOptions.method = method.toLowerCase();
        requestOptions.headers = headers;
        var methodName = method.toLowerCase();
        if (!this.http[methodName]) {
            throw new Error("Unknown HTTP method: " + method);
        }
        return this.http.request(urlPath, requestOptions)
            .catch(function (error) {
            // FIXME, need to handle error
            return Observable_1.Observable.throw(error);
        })
            .map(this.getJson);
    };
    ApiService.prototype.getJson = function (response) {
        var formattedResponse;
        try {
            formattedResponse = response.json();
        }
        catch (error) {
            formattedResponse = response.text();
        }
        return formattedResponse;
    };
    ApiService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http, router_1.Router])
    ], ApiService);
    return ApiService;
}());
exports.ApiService = ApiService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9hcGkuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBNkY7QUFDN0YsMENBQXlDO0FBQ3pDLDBCQUE0QjtBQUM1Qiw4Q0FBNkM7QUFDN0MsbUJBQWlCO0FBQ2pCLHFDQUFtQztBQUduQztJQUVDLG9CQUFvQixJQUFVLEVBQVUsTUFBYztRQUFsQyxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUN0RCxDQUFDO0lBRUQsNEJBQU8sR0FBUCxVQUFRLE1BQWMsRUFBRSxPQUFlLEVBQUUsSUFBUyxFQUFFLE1BQVcsRUFBRSxVQUFlO1FBQy9FLElBQU0sY0FBYyxHQUF1QixFQUFFLENBQUM7UUFDOUMsSUFBTSxPQUFPLEdBQUcsSUFBSSxjQUFPLENBQUMsRUFBQyxRQUFRLEVBQUUsS0FBSyxFQUFDLENBQUMsQ0FBQztRQUUvQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLGNBQWM7WUFDZCxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxtQ0FBbUMsQ0FBQyxDQUFDO1lBRXBFLElBQU0sUUFBUSxHQUFHLElBQUksc0JBQWUsRUFBRSxDQUFDO1lBRXZDLEdBQUcsQ0FBQyxDQUFvQixVQUF1QixFQUF2QixLQUFBLE1BQU0sQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEVBQXZCLGNBQXVCLEVBQXZCLElBQXVCO2dCQUExQyxJQUFNLFNBQVMsU0FBQTtnQkFDbkIsUUFBUSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsVUFBVSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7YUFDbEQ7WUFFRCxjQUFjLENBQUMsSUFBSSxHQUFHLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMzQyxDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxlQUFlO1lBQ2YsT0FBTyxDQUFDLE1BQU0sQ0FBQyxjQUFjLEVBQUUsa0JBQWtCLENBQUMsQ0FBQztZQUVuRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNWLGNBQWMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxDQUFDO1FBQ0YsQ0FBQztRQUVELElBQUksWUFBWSxHQUFHLElBQUksc0JBQWUsRUFBRSxDQUFDO1FBRXpDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEIsR0FBRyxDQUFDLENBQWdCLFVBQW1CLEVBQW5CLEtBQUEsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBbkIsY0FBbUIsRUFBbkIsSUFBbUI7Z0JBQWxDLElBQU0sS0FBSyxTQUFBO2dCQUNmLFlBQVksQ0FBQyxNQUFNLENBQUMsS0FBSyxFQUFFLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2FBQzFDO1FBQ0YsQ0FBQztRQUVELGNBQWMsQ0FBQyxNQUFNLEdBQUcsWUFBWSxDQUFDO1FBQ3JDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzdDLGNBQWMsQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBRWpDLElBQU0sVUFBVSxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUV4QyxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVCLE1BQU0sSUFBSSxLQUFLLENBQUMsMEJBQXdCLE1BQVEsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQzthQUMvQyxLQUFLLENBQUMsVUFBQyxLQUFLO1lBQ1osOEJBQThCO1lBQzlCLE1BQU0sQ0FBQyx1QkFBVSxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNoQyxDQUFDLENBQUM7YUFDRCxHQUFHLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQ3JCLENBQUM7SUFFTyw0QkFBTyxHQUFmLFVBQWdCLFFBQWtCO1FBQ2pDLElBQUksaUJBQWlCLENBQUM7UUFFdEIsSUFBSSxDQUFDO1lBQ0osaUJBQWlCLEdBQUcsUUFBUSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ3JDLENBQUM7UUFBQyxLQUFLLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO1lBQ2hCLGlCQUFpQixHQUFHLFFBQVEsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNyQyxDQUFDO1FBQ0QsTUFBTSxDQUFDLGlCQUFpQixDQUFDO0lBQzFCLENBQUM7SUFoRVcsVUFBVTtRQUR0QixpQkFBVSxFQUFFO3lDQUdjLFdBQUksRUFBa0IsZUFBTTtPQUYxQyxVQUFVLENBaUV0QjtJQUFELGlCQUFDO0NBakVELEFBaUVDLElBQUE7QUFqRVksZ0NBQVUiLCJmaWxlIjoiYXBwL3NlcnZpY2VzL2FwaS5zZXJ2aWNlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBIZWFkZXJzLCBIdHRwLCBSZXF1ZXN0T3B0aW9uc0FyZ3MsIFJlc3BvbnNlLCBVUkxTZWFyY2hQYXJhbXMgfSBmcm9tICdAYW5ndWxhci9odHRwJztcclxuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0ICogYXMgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSAncnhqcy9PYnNlcnZhYmxlJztcclxuaW1wb3J0ICdyeGpzL1J4JztcclxuaW1wb3J0ICdyeGpzL2FkZC9vYnNlcnZhYmxlL3Rocm93JztcclxuXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIEFwaVNlcnZpY2Uge1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGh0dHA6IEh0dHAsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHR9XHJcblxyXG5cdHBlcmZvcm0obWV0aG9kOiBzdHJpbmcsIHVybFBhdGg6IHN0cmluZywgYm9keTogYW55LCBwYXJhbXM6IGFueSwgZm9ybVBhcmFtczogYW55KTogT2JzZXJ2YWJsZTxhbnk+IHtcclxuXHRcdGNvbnN0IHJlcXVlc3RPcHRpb25zOiBSZXF1ZXN0T3B0aW9uc0FyZ3MgPSB7fTtcclxuXHRcdGNvbnN0IGhlYWRlcnMgPSBuZXcgSGVhZGVycyh7J0FjY2VwdCc6ICcqLyonfSk7XHJcblxyXG5cdFx0aWYgKCFfLmlzRW1wdHkoZm9ybVBhcmFtcykpIHtcclxuXHRcdFx0Ly8gRm9ybSBzdWJtaXRcclxuXHRcdFx0aGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQnKTtcclxuXHJcblx0XHRcdGNvbnN0IGZvcm1Cb2R5ID0gbmV3IFVSTFNlYXJjaFBhcmFtcygpO1xyXG5cclxuXHRcdFx0Zm9yIChjb25zdCBmb3JtUGFyYW0gb2YgT2JqZWN0LmtleXMoZm9ybVBhcmFtcykpIHtcclxuXHRcdFx0XHRmb3JtQm9keS5hcHBlbmQoZm9ybVBhcmFtLCBmb3JtUGFyYW1zW2Zvcm1QYXJhbV0pO1xyXG5cdFx0XHR9XHJcblxyXG5cdFx0XHRyZXF1ZXN0T3B0aW9ucy5ib2R5ID0gZm9ybUJvZHkudG9TdHJpbmcoKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdC8vIEpTT04gY29udGVudFxyXG5cdFx0XHRoZWFkZXJzLmFwcGVuZCgnQ29udGVudC1UeXBlJywgJ2FwcGxpY2F0aW9uL2pzb24nKTtcclxuXHJcblx0XHRcdGlmIChib2R5KSB7XHJcblx0XHRcdFx0cmVxdWVzdE9wdGlvbnMuYm9keSA9IEpTT04uc3RyaW5naWZ5KGJvZHkpO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0bGV0IHNlYXJjaFBhcmFtcyA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKTtcclxuXHJcblx0XHRpZiAoIV8uaXNFbXB0eShwYXJhbXMpKSB7XHJcblx0XHRcdGZvciAoY29uc3QgcGFyYW0gb2YgT2JqZWN0LmtleXMocGFyYW1zKSkge1xyXG5cdFx0XHRcdHNlYXJjaFBhcmFtcy5hcHBlbmQocGFyYW0sIHBhcmFtc1twYXJhbV0pO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblxyXG5cdFx0cmVxdWVzdE9wdGlvbnMuc2VhcmNoID0gc2VhcmNoUGFyYW1zO1xyXG5cdFx0cmVxdWVzdE9wdGlvbnMubWV0aG9kID0gbWV0aG9kLnRvTG93ZXJDYXNlKCk7XHJcblx0XHRyZXF1ZXN0T3B0aW9ucy5oZWFkZXJzID0gaGVhZGVycztcclxuXHJcblx0XHRjb25zdCBtZXRob2ROYW1lID0gbWV0aG9kLnRvTG93ZXJDYXNlKCk7XHJcblxyXG5cdFx0aWYgKCF0aGlzLmh0dHBbbWV0aG9kTmFtZV0pIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKGBVbmtub3duIEhUVFAgbWV0aG9kOiAke21ldGhvZH1gKTtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5odHRwLnJlcXVlc3QodXJsUGF0aCwgcmVxdWVzdE9wdGlvbnMpXHJcblx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHQvLyBGSVhNRSwgbmVlZCB0byBoYW5kbGUgZXJyb3JcclxuXHRcdFx0XHRyZXR1cm4gT2JzZXJ2YWJsZS50aHJvdyhlcnJvcik7XHJcblx0XHRcdH0pXHJcblx0XHRcdC5tYXAodGhpcy5nZXRKc29uKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgZ2V0SnNvbihyZXNwb25zZTogUmVzcG9uc2UpIHtcclxuXHRcdGxldCBmb3JtYXR0ZWRSZXNwb25zZTtcclxuXHJcblx0XHR0cnkge1xyXG5cdFx0XHRmb3JtYXR0ZWRSZXNwb25zZSA9IHJlc3BvbnNlLmpzb24oKTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGZvcm1hdHRlZFJlc3BvbnNlID0gcmVzcG9uc2UudGV4dCgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGZvcm1hdHRlZFJlc3BvbnNlO1xyXG5cdH1cclxufVxyXG4iXX0=
