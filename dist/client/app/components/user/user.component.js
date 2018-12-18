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
var router_1 = require("@angular/router");
var user_service_1 = require("../../services/user.service");
var UserComponent = /** @class */ (function () {
    function UserComponent(route, router, userService) {
        this.route = route;
        this.router = router;
        this.userService = userService;
        this.username = '';
        this.password = '';
        this.remember = false;
        this.error = false;
        this.signupSuccessful = false;
        this.message = '';
    }
    UserComponent.prototype.ngOnInit = function () {
        if (this.route.snapshot.url[0].path === 'login') {
            if (this.userService.getUserData()) {
                this.router.navigate(['/login']);
            }
        }
        if (this.route.snapshot.url[0].path === 'logout') {
            this.doLogout();
        }
    };
    UserComponent.prototype.doSomething = function () {
        if (this.route.snapshot.url[0].path === 'login') {
            this.doLogin();
        }
        else {
            this.doSignup();
        }
    };
    UserComponent.prototype.doLogin = function () {
        var _this = this;
        this.userService.doLogin(this.username, this.password, this.remember)
            .subscribe(function (data) {
            _this.userService.setUserData(data);
            _this.router.navigate(['/campground']);
        });
    };
    UserComponent.prototype.doSignup = function () {
        var _this = this;
        this.userService.doSignup(this.username, this.password)
            .subscribe(function (data) {
            _this.signupSuccessful = true;
            _this.router.navigate(['/profile']);
        });
    };
    UserComponent.prototype.doLogout = function () {
        this.userService.doLogout();
        this.router.navigate(['/campground']);
    };
    UserComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './app/components/user/user.component.html'
        }),
        __metadata("design:paramtypes", [router_1.ActivatedRoute, router_1.Router, user_service_1.UserService])
    ], UserComponent);
    return UserComponent;
}());
exports.UserComponent = UserComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOzs7Ozs7Ozs7OztBQUVILHNDQUFrRDtBQUNsRCwwQ0FBeUQ7QUFDekQsNERBQTBEO0FBTzFEO0lBVUMsdUJBQW9CLEtBQXFCLEVBQVUsTUFBYyxFQUFVLFdBQXdCO1FBQS9FLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQVUsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUFVLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBVG5HLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztRQUN0QixhQUFRLEdBQVksS0FBSyxDQUFDO1FBRTFCLFVBQUssR0FBWSxLQUFLLENBQUM7UUFDdkIscUJBQWdCLEdBQVksS0FBSyxDQUFDO1FBRWxDLFlBQU8sR0FBVyxFQUFFLENBQUM7SUFJckIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFDQyxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sQ0FBQyxDQUFDLENBQUM7WUFDakQsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNsQyxDQUFDO1FBQ0YsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNsRCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsQ0FBQztJQUNGLENBQUM7SUFFRCxtQ0FBVyxHQUFYO1FBQ0MsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ2pELElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztRQUNoQixDQUFDO1FBQUMsSUFBSSxDQUFDLENBQUM7WUFDUCxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDakIsQ0FBQztJQUNGLENBQUM7SUFFRCwrQkFBTyxHQUFQO1FBQUEsaUJBTUM7UUFMQSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNuRSxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2QsS0FBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxBLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQzthQUNyRCxTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2QsS0FBSSxDQUFDLGdCQUFnQixHQUFHLElBQUksQ0FBQztZQUM3QixLQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDcEMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFyRFcsYUFBYTtRQUx6QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLDJDQUEyQztTQUN4RCxDQUFDO3lDQVkwQix1QkFBYyxFQUFrQixlQUFNLEVBQXVCLDBCQUFXO09BVnZGLGFBQWEsQ0FzRHpCO0lBQUQsb0JBQUM7Q0F0REQsQUFzREMsSUFBQTtBQXREWSxzQ0FBYSIsImZpbGUiOiJhcHAvY29tcG9uZW50cy91c2VyL3VzZXIuY29tcG9uZW50LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIENyZWF0ZWQgYnkgbGF1cmVuY2UtaG8gb24gNy8wNi8xNy5cclxuICovXHJcblxyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdsb2dpbicsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQuaHRtbCdcclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBVc2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHR1c2VybmFtZTogc3RyaW5nID0gJyc7XHJcblx0cGFzc3dvcmQ6IHN0cmluZyA9ICcnO1xyXG5cdHJlbWVtYmVyOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5cdGVycm9yOiBib29sZWFuID0gZmFsc2U7XHJcblx0c2lnbnVwU3VjY2Vzc2Z1bDogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuXHRtZXNzYWdlOiBzdHJpbmcgPSAnJztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIsIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlKSB7XHJcblxyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHRpZiAodGhpcy5yb3V0ZS5zbmFwc2hvdC51cmxbMF0ucGF0aCA9PT0gJ2xvZ2luJykge1xyXG5cdFx0XHRpZiAodGhpcy51c2VyU2VydmljZS5nZXRVc2VyRGF0YSgpKSB7XHJcblx0XHRcdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvbG9naW4nXSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5yb3V0ZS5zbmFwc2hvdC51cmxbMF0ucGF0aCA9PT0gJ2xvZ291dCcpIHtcclxuXHRcdFx0dGhpcy5kb0xvZ291dCgpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHJcblx0ZG9Tb21ldGhpbmcoKSB7XHJcblx0XHRpZiAodGhpcy5yb3V0ZS5zbmFwc2hvdC51cmxbMF0ucGF0aCA9PT0gJ2xvZ2luJykge1xyXG5cdFx0XHR0aGlzLmRvTG9naW4oKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHRoaXMuZG9TaWdudXAoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGRvTG9naW4oKSB7XHJcblx0XHR0aGlzLnVzZXJTZXJ2aWNlLmRvTG9naW4odGhpcy51c2VybmFtZSwgdGhpcy5wYXNzd29yZCwgdGhpcy5yZW1lbWJlcilcclxuXHRcdFx0LnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHR0aGlzLnVzZXJTZXJ2aWNlLnNldFVzZXJEYXRhKGRhdGEpO1xyXG5cdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NhbXBncm91bmQnXSk7XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0ZG9TaWdudXAoKSB7XHJcblx0XHR0aGlzLnVzZXJTZXJ2aWNlLmRvU2lnbnVwKHRoaXMudXNlcm5hbWUsIHRoaXMucGFzc3dvcmQpXHJcblx0XHRcdC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0dGhpcy5zaWdudXBTdWNjZXNzZnVsID0gdHJ1ZTtcclxuXHRcdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9wcm9maWxlJ10pO1xyXG5cdFx0XHR9KTtcclxuXHR9XHJcblxyXG5cdGRvTG9nb3V0KCkge1xyXG5cdFx0dGhpcy51c2VyU2VydmljZS5kb0xvZ291dCgpO1xyXG5cdFx0dGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2FtcGdyb3VuZCddKTtcclxuXHR9XHJcbn1cclxuIl19
