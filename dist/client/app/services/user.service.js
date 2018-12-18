"use strict";
/**
 * Created by laurence-ho on 7/06/17.
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
require("rxjs/Rx");
var api_service_1 = require("./api.service");
var UserService = /** @class */ (function () {
    function UserService(apiService) {
        this.apiService = apiService;
        this._state = {};
        this.USER_DATA_KEY = 'user_data';
        this.loginUrl = 'api/login';
        this.signupUrl = 'api/signup';
        this.logoutUrl = 'api/logout';
        this.profileUrl = 'api/profile';
        var userdata = window.localStorage.getItem(this.USER_DATA_KEY);
        if (userdata) {
            try {
                this.setUserData(JSON.parse(userdata));
            }
            catch (error) {
                console.error('error parsing user data json');
            }
        }
    }
    Object.defineProperty(UserService.prototype, "state", {
        get: function () {
            return this._state = this._clone(this._state);
        },
        set: function (value) {
            throw new Error('do not mutate the `.state` directly');
        },
        enumerable: true,
        configurable: true
    });
    UserService.prototype.flush = function () {
        this._state = {};
        window.localStorage.removeItem(this.USER_DATA_KEY);
    };
    UserService.prototype._clone = function (object) {
        return JSON.parse(JSON.stringify(object));
    };
    UserService.prototype.setUserData = function (data) {
        if (data) {
            window.localStorage.setItem(this.USER_DATA_KEY, data);
            return this._state['user'] = data;
        }
    };
    UserService.prototype.getUserData = function () {
        var state = this.state;
        return state.hasOwnProperty('user') ? state['user'] : undefined;
    };
    UserService.prototype.doLogin = function (username, password, remember) {
        var _params = {};
        var _bodyData = {};
        var _formParams = {};
        if (username !== undefined) {
            _formParams['username'] = username;
        }
        if (password !== undefined) {
            _formParams['password'] = password;
        }
        if (remember !== undefined && remember === false) {
            _formParams['remember'] = remember;
        }
        return this.apiService.perform('post', this.loginUrl, _bodyData, _params, _formParams);
    };
    UserService.prototype.doSignup = function (username, password) {
        var _params = {};
        var _bodyData = {};
        var _formParams = {};
        if (username !== undefined) {
            _formParams['username'] = username;
        }
        if (password !== undefined) {
            _formParams['password'] = password;
        }
        return this.apiService.perform('post', this.signupUrl, _bodyData, _params, _formParams);
    };
    UserService.prototype.doLogout = function () {
        this.flush();
        var _params = {};
        var _formParams = {};
        var _bodyData = {};
        return this.apiService.perform('get', this.logoutUrl, _bodyData, _params, _formParams);
    };
    UserService.prototype.getProfile = function () {
        var _params = {};
        var _formParams = {};
        var _bodyData = {};
        return this.apiService.perform('get', this.profileUrl, _bodyData, _params, _formParams);
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [api_service_1.ApiService])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy91c2VyLnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOzs7Ozs7Ozs7OztBQUVILHNDQUEyQztBQUUzQyxtQkFBaUI7QUFDakIsNkNBQTJDO0FBTzNDO0lBU0MscUJBQW9CLFVBQXNCO1FBQXRCLGVBQVUsR0FBVixVQUFVLENBQVk7UUFSMUMsV0FBTSxHQUFzQixFQUFFLENBQUM7UUFDL0Isa0JBQWEsR0FBVyxXQUFXLENBQUM7UUFFNUIsYUFBUSxHQUFHLFdBQVcsQ0FBQztRQUN2QixjQUFTLEdBQUcsWUFBWSxDQUFDO1FBQ3pCLGNBQVMsR0FBRyxZQUFZLENBQUM7UUFDekIsZUFBVSxHQUFHLGFBQWEsQ0FBQztRQUdsQyxJQUFNLFFBQVEsR0FBRyxNQUFNLENBQUMsWUFBWSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDakUsRUFBRSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNkLElBQUksQ0FBQztnQkFDSixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUN4QyxDQUFDO1lBQUMsS0FBSyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsT0FBTyxDQUFDLEtBQUssQ0FBQyw4QkFBOEIsQ0FBQyxDQUFDO1lBQy9DLENBQUM7UUFDRixDQUFDO0lBQ0YsQ0FBQztJQUVELHNCQUFJLDhCQUFLO2FBQVQ7WUFDQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMvQyxDQUFDO2FBRUQsVUFBVSxLQUFLO1lBQ2QsTUFBTSxJQUFJLEtBQUssQ0FBQyxxQ0FBcUMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7OztPQUpBO0lBTUQsMkJBQUssR0FBTDtRQUNDLElBQUksQ0FBQyxNQUFNLEdBQUcs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QUFVLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsRUFBRSxPQUFPLEVBQUUsV0FBVyxDQUFDLENBQUM7SUFDeEYsQ0FBQztJQUVELGdDQUFVLEdBQVY7UUFDQyxJQUFNLE9BQU8sR0FBUSxFQUFFLENBQUM7UUFDeEIsSUFBTSxXQUFXLEdBQVEsRUFBRSxDQUFDO1FBQzVCLElBQU0sU0FBUyxHQUFRLEVBQUUsQ0FBQztRQUUxQixNQUFNLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxVQUFVLEVBQUUsU0FBUyxFQUFFLE9BQU8sRUFBRSxXQUFXLENBQUMsQ0FBQztJQUN6RixDQUFDO0lBckdXLFdBQVc7UUFEdkIsaUJBQVUsRUFBRTt5Q0FVb0Isd0JBQVU7T0FUOUIsV0FBVyxDQXNHdkI7SUFBRCxrQkFBQztDQXRHRCxBQXNHQyxJQUFBO0FBdEdZLGtDQUFXIiwiZmlsZSI6ImFwcC9zZXJ2aWNlcy91c2VyLnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBsYXVyZW5jZS1obyBvbiA3LzA2LzE3LlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMvT2JzZXJ2YWJsZSc7XHJcbmltcG9ydCAncnhqcy9SeCc7XHJcbmltcG9ydCB7IEFwaVNlcnZpY2UgfSBmcm9tICcuL2FwaS5zZXJ2aWNlJztcclxuXHJcbmV4cG9ydCB0eXBlIEludGVybmFsU3RhdGVUeXBlID0ge1xyXG5cdFtrZXk6IHN0cmluZ106IGFueVxyXG59O1xyXG5cclxuQEluamVjdGFibGUoKVxyXG5leHBvcnQgY2xhc3MgVXNlclNlcnZpY2Uge1xyXG5cdF9zdGF0ZTogSW50ZXJuYWxTdGF0ZVR5cGUgPSB7fTtcclxuXHRVU0VSX0RBVEFfS0VZOiBzdHJpbmcgPSAndXNlcl9kYXRhJztcclxuXHJcblx0cHJpdmF0ZSBsb2dpblVybCA9ICdhcGkvbG9naW4nO1xyXG5cdHByaXZhdGUgc2lnbnVwVXJsID0gJ2FwaS9zaWdudXAnO1xyXG5cdHByaXZhdGUgbG9nb3V0VXJsID0gJ2FwaS9sb2dvdXQnO1xyXG5cdHByaXZhdGUgcHJvZmlsZVVybCA9ICdhcGkvcHJvZmlsZSc7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgYXBpU2VydmljZTogQXBpU2VydmljZSkge1xyXG5cdFx0Y29uc3QgdXNlcmRhdGEgPSB3aW5kb3cubG9jYWxTdG9yYWdlLmdldEl0ZW0odGhpcy5VU0VSX0RBVEFfS0VZKTtcclxuXHRcdGlmICh1c2VyZGF0YSkge1xyXG5cdFx0XHR0cnkge1xyXG5cdFx0XHRcdHRoaXMuc2V0VXNlckRhdGEoSlNPTi5wYXJzZSh1c2VyZGF0YSkpO1xyXG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRcdGNvbnNvbGUuZXJyb3IoJ2Vycm9yIHBhcnNpbmcgdXNlciBkYXRhIGpzb24nKTtcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0IHN0YXRlKCkge1xyXG5cdFx0cmV0dXJuIHRoaXMuX3N0YXRlID0gdGhpcy5fY2xvbmUodGhpcy5fc3RhdGUpO1xyXG5cdH1cclxuXHJcblx0c2V0IHN0YXRlKHZhbHVlKSB7XHJcblx0XHR0aHJvdyBuZXcgRXJyb3IoJ2RvIG5vdCBtdXRhdGUgdGhlIGAuc3RhdGVgIGRpcmVjdGx5Jyk7XHJcblx0fVxyXG5cclxuXHRmbHVzaCgpIHtcclxuXHRcdHRoaXMuX3N0YXRlID0ge307XHJcblx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5VU0VSX0RBVEFfS0VZKTtcclxuXHR9XHJcblxyXG5cdHByaXZhdGUgX2Nsb25lKG9iamVjdDogSW50ZXJuYWxTdGF0ZVR5cGUpIHtcclxuXHRcdHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9iamVjdCkpO1xyXG5cdH1cclxuXHJcblx0c2V0VXNlckRhdGEoZGF0YTogYW55KSB7XHJcblx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHR3aW5kb3cubG9jYWxTdG9yYWdlLnNldEl0ZW0odGhpcy5VU0VSX0RBVEFfS0VZLCBkYXRhKTtcclxuXHRcdFx0cmV0dXJuIHRoaXMuX3N0YXRlWyd1c2VyJ10gPSBkYXRhO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0Z2V0VXNlckRhdGEoKTogYW55IHtcclxuXHRcdGNvbnN0IHN0YXRlID0gdGhpcy5zdGF0ZTtcclxuXHRcdHJldHVybiBzdGF0ZS5oYXNPd25Qcm9wZXJ0eSgndXNlcicpID8gc3RhdGVbJ3VzZXInXSA6IHVuZGVmaW5lZDtcclxuXHR9XHJcblxyXG5cdGRvTG9naW4odXNlcm5hbWU6IHN0cmluZywgcGFzc3dvcmQ6IHN0cmluZywgcmVtZW1iZXI6IGJvb2xlYW4pOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgX3BhcmFtczogYW55ID0ge307XHJcblx0XHRjb25zdCBfYm9keURhdGE6IGFueSA9IHt9O1xyXG5cdFx0Y29uc3QgX2Zvcm1QYXJhbXM6IGFueSA9IHt9O1xyXG5cclxuXHRcdGlmICh1c2VybmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdF9mb3JtUGFyYW1zWyd1c2VybmFtZSddID0gdXNlcm5hbWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHBhc3N3b3JkICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0X2Zvcm1QYXJhbXNbJ3Bhc3N3b3JkJ10gPSBwYXNzd29yZDtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAocmVtZW1iZXIgIT09IHVuZGVmaW5lZCAmJiByZW1lbWJlciA9PT0gZmFsc2UpIHtcclxuXHRcdFx0X2Zvcm1QYXJhbXNbJ3JlbWVtYmVyJ10gPSByZW1lbWJlcjtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLnBlcmZvcm0oJ3Bvc3QnLCB0aGlzLmxvZ2luVXJsLCBfYm9keURhdGEsIF9wYXJhbXMsIF9mb3JtUGFyYW1zKTtcclxuXHR9XHJcblxyXG5cdGRvU2lnbnVwKHVzZXJuYW1lOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpOiBPYnNlcnZhYmxlPGFueT4ge1xyXG5cdFx0Y29uc3QgX3BhcmFtczogYW55ID0ge307XHJcblx0XHRjb25zdCBfYm9keURhdGE6IGFueSA9IHt9O1xyXG5cdFx0Y29uc3QgX2Zvcm1QYXJhbXM6IGFueSA9IHt9O1xyXG5cclxuXHRcdGlmICh1c2VybmFtZSAhPT0gdW5kZWZpbmVkKSB7XHJcblx0XHRcdF9mb3JtUGFyYW1zWyd1c2VybmFtZSddID0gdXNlcm5hbWU7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKHBhc3N3b3JkICE9PSB1bmRlZmluZWQpIHtcclxuXHRcdFx0X2Zvcm1QYXJhbXNbJ3Bhc3N3b3JkJ10gPSBwYXNzd29yZDtcclxuXHRcdH1cclxuXHJcblx0XHRyZXR1cm4gdGhpcy5hcGlTZXJ2aWNlLnBlcmZvcm0oJ3Bvc3QnLCB0aGlzLnNpZ251cFVybCwgX2JvZHlEYXRhLCBfcGFyYW1zLCBfZm9ybVBhcmFtcyk7XHJcblx0fVxyXG5cclxuXHRkb0xvZ291dCgpIHtcclxuXHRcdHRoaXMuZmx1c2goKTtcclxuXHJcblx0XHRjb25zdCBfcGFyYW1zOiBhbnkgPSB7fTtcclxuXHRcdGNvbnN0IF9mb3JtUGFyYW1zOiBhbnkgPSB7fTtcclxuXHRcdGNvbnN0IF9ib2R5RGF0YTogYW55ID0ge307XHJcblxyXG5cdFx0cmV0dXJuIHRoaXMuYXBpU2VydmljZS5wZXJmb3JtKCdnZXQnLCB0aGlzLmxvZ291dFVybCwgX2JvZHlEYXRhLCBfcGFyYW1zLCBfZm9ybVBhcmFtcyk7XHJcblx0fVxyXG5cclxuXHRnZXRQcm9maWxlKCkge1xyXG5cdFx0Y29uc3QgX3BhcmFtczogYW55ID0ge307XHJcblx0XHRjb25zdCBfZm9ybVBhcmFtczogYW55ID0ge307XHJcblx0XHRjb25zdCBfYm9keURhdGE6IGFueSA9IHt9O1xyXG5cclxuXHRcdHJldHVybiB0aGlzLmFwaVNlcnZpY2UucGVyZm9ybSgnZ2V0JywgdGhpcy5wcm9maWxlVXJsLCBfYm9keURhdGEsIF9wYXJhbXMsIF9mb3JtUGFyYW1zKTtcclxuXHR9XHJcbn1cclxuIl19
