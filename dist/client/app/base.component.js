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
var user_service_1 = require("./services/user.service");
var router_1 = require("@angular/router");
require("rxjs/add/operator/filter");
var BaseComponent = /** @class */ (function () {
    function BaseComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.title = 'YelpCamp';
    }
    BaseComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.router.events.filter(function (event) { return event instanceof router_1.NavigationEnd; })
            .subscribe(function (event) {
            _this.userService.getProfile().subscribe(function (data) {
                if (data) {
                    _this.userdata = _this.userService.getUserData();
                }
                else {
                    _this.userService.flush();
                    _this.userdata = null;
                }
            });
        });
    };
    BaseComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/base.html'
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], BaseComponent);
    return BaseComponent;
}());
exports.BaseComponent = BaseComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9iYXNlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7Ozs7Ozs7Ozs7O0FBRUgsc0NBQWtEO0FBQ2xELHdEQUFzRDtBQUN0RCwwQ0FBd0Q7QUFDeEQsb0NBQWtDO0FBT2xDO0lBSUMsdUJBQW9CLFdBQXdCLEVBQVUsTUFBYztRQUFoRCxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUFVLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIcEUsVUFBSyxHQUFHLFVBQVUsQ0FBQztJQUluQixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkEsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSyxZQUFZLHNCQUFhLEVBQTlCLENBQThCLENBQUM7YUFDaEUsU0FBUyxDQUFDLFVBQUEsS0FBSztZQUNkLEtBQUksQ0FBQyxXQUFXLENBQUMsVUFBVSxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsSUFBSTtnQkFDM0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztvQkFDVixLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQ2hELENBQUM7Z0JBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ1AsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztvQkFDekIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLENBQUM7WUFDRixDQUFDLENBQUMsQ0FBQztRQUNKLENBQUMsQ0FDRCxDQUFDO0lBQ0osQ0FBQztJQXBCVyxhQUFhO1FBTHpCLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsUUFBUTtZQUNsQixXQUFXLEVBQUUsaUJBQWlCO1NBQzlCLENBQUM7eUNBTWdDLDBCQUFXLEVBQWtCLGVBQU07T0FKeEQsYUFBYSxDQXFCekI7SUFBRCxvQkFBQztDQXJCRCxBQXFCQyxJQUFBO0FBckJZLHNDQUFhIiwiZmlsZSI6ImFwcC9iYXNlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IExhdXJlbmNlIEhvIG9uIDA3LTAyLTIwMTcuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IE5hdmlnYXRpb25FbmQsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCAncnhqcy9hZGQvb3BlcmF0b3IvZmlsdGVyJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbXktYXBwJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vYXBwL2Jhc2UuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBCYXNlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHR0aXRsZSA9ICdZZWxwQ2FtcCc7XHJcblx0dXNlcmRhdGE6IGFueTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5yb3V0ZXIuZXZlbnRzLmZpbHRlcihldmVudCA9PiBldmVudCBpbnN0YW5jZW9mIE5hdmlnYXRpb25FbmQpXHJcblx0XHRcdC5zdWJzY3JpYmUoZXZlbnQgPT4ge1xyXG5cdFx0XHRcdFx0dGhpcy51c2VyU2VydmljZS5nZXRQcm9maWxlKCkuc3Vic2NyaWJlKGRhdGEgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoZGF0YSkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMudXNlcmRhdGEgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXJEYXRhKCk7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy51c2VyU2VydmljZS5mbHVzaCgpO1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMudXNlcmRhdGEgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdCk7XHJcblx0fVxyXG59XHJcbiJdfQ==
