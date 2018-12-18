"use strict";
/**
 * Created by laurence-ho on 29/06/17.
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
var user_service_1 = require("../../services/user.service");
var ProfileComponent = /** @class */ (function () {
    function ProfileComponent(userService) {
        this.userService = userService;
        this.id = 0;
        this.username = '';
        this.password = '';
    }
    ProfileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userService.getProfile()
            .subscribe(function (data) {
            _this.id = data.id;
            _this.username = data.username;
            _this.password = data.password;
        });
    };
    ProfileComponent = __decorate([
        core_1.Component({
            selector: 'login',
            templateUrl: './app/components/user/profile.component.html'
        }),
        __metadata("design:paramtypes", [user_service_1.UserService])
    ], ProfileComponent);
    return ProfileComponent;
}());
exports.ProfileComponent = ProfileComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL3VzZXIvcHJvZmlsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOztHQUVHOzs7Ozs7Ozs7OztBQUVILHNDQUFrRDtBQUNsRCw0REFBMEQ7QUFPMUQ7SUFLQywwQkFBb0IsV0FBd0I7UUFBeEIsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFKNUMsT0FBRSxHQUFXLENBQUMsQ0FBQztRQUNmLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFDdEIsYUFBUSxHQUFXLEVBQUUsQ0FBQztJQUd0QixDQUFDO0lBRUQsbUNBQVEsR0FBUjtRQUFBLGlCQU9DO1FBTkEsSUFBSSxDQUFDLFdBQVcsQ0FBQyxVQUFVLEVBQUU7YUFDM0IsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNkLEtBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNsQixLQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7WUFDOUIsS0FBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQy9CLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQWZXLGdCQUFnQjtRQUw1QixnQkFBUyxDQUFDO1lBQ1YsUUFBUSxFQUFFLE9BQU87WUFDakIsV0FBVyxFQUFFLDhDQUE4QztTQUMzRCxDQUFDO3lDQU9nQywwQkFBVztPQUxoQyxnQkFBZ0IsQ0FnQjVCO0lBQUQsdUJBQUM7Q0FoQkQsQUFnQkMsSUFBQTtBQWhCWSw0Q0FBZ0IiLCJmaWxlIjoiYXBwL2NvbXBvbmVudHMvdXNlci9wcm9maWxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IGxhdXJlbmNlLWhvIG9uIDI5LzA2LzE3LlxyXG4gKi9cclxuXHJcbmltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IFVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvdXNlci5zZXJ2aWNlJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnbG9naW4nLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy91c2VyL3Byb2ZpbGUuY29tcG9uZW50Lmh0bWwnXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgUHJvZmlsZUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0aWQ6IG51bWJlciA9IDA7XHJcblx0dXNlcm5hbWU6IHN0cmluZyA9ICcnO1xyXG5cdHBhc3N3b3JkOiBzdHJpbmcgPSAnJztcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UpIHtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy51c2VyU2VydmljZS5nZXRQcm9maWxlKClcclxuXHRcdFx0LnN1YnNjcmliZShkYXRhID0+IHtcclxuXHRcdFx0XHR0aGlzLmlkID0gZGF0YS5pZDtcclxuXHRcdFx0XHR0aGlzLnVzZXJuYW1lID0gZGF0YS51c2VybmFtZTtcclxuXHRcdFx0XHR0aGlzLnBhc3N3b3JkID0gZGF0YS5wYXNzd29yZDtcclxuXHRcdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==
