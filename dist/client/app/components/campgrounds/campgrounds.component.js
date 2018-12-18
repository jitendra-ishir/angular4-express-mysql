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
/**
 * Created by Laurence Ho on 07-02-2017.
 */
var core_1 = require("@angular/core");
var campgounds_service_1 = require("../../services/campgounds.service");
var user_service_1 = require("../../services/user.service");
var CampgroundsComponent = /** @class */ (function () {
    function CampgroundsComponent(campService, userService) {
        this.campService = campService;
        this.userService = userService;
    }
    CampgroundsComponent.prototype.ngOnInit = function () {
        this.getCampgrounds();
        this.userdata = this.userService.getUserData();
    };
    CampgroundsComponent.prototype.getCampgrounds = function () {
        var _this = this;
        this.campService.getCampgrounds().subscribe(function (camps) { return _this.camps = camps; });
    };
    CampgroundsComponent = __decorate([
        core_1.Component({
            selector: 'camps',
            templateUrl: './app/components/campgrounds/campgrounds.component.html',
            styleUrls: ['./app/components/campgrounds/campgrounds.component.css']
        }),
        __metadata("design:paramtypes", [campgounds_service_1.CampgroundService, user_service_1.UserService])
    ], CampgroundsComponent);
    return CampgroundsComponent;
}());
exports.CampgroundsComponent = CampgroundsComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NhbXBncm91bmRzL2NhbXBncm91bmRzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztHQUVHO0FBQ0gsc0NBQWtEO0FBQ2xELHdFQUFzRTtBQUV0RSw0REFBMEQ7QUFRMUQ7SUFJQyw4QkFBb0IsV0FBOEIsRUFBVSxXQUF3QjtRQUFoRSxnQkFBVyxHQUFYLFdBQVcsQ0FBbUI7UUFBVSxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtJQUNwRixDQUFDO0lBRUQsdUNBQVEsR0FBUjtRQUNDLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztRQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVELDZDQUFjLEdBQWQ7UUFBQSxpQkFFQztRQURBLElBQUksQ0FBQyxXQUFXLENBQUMsY0FBYyxFQUFFLENBQUMsU0FBUyxDQUFDLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLEtBQUssR0FBRyxLQUFLLEVBQWxCLENBQWtCLENBQUMsQ0FBQztJQUMxRSxDQUFDO0lBZFcsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsT0FBTztZQUNqQixXQUFXLEVBQUUseURBQXlEO1lBQ3RFLFNBQVMsRUFBRSxDQUFDLHdEQUF3RCxDQUFDO1NBQ3JFLENBQUM7eUNBTWdDLHNDQUFpQixFQUF1QiwwQkFBVztPQUp4RSxvQkFBb0IsQ0FlaEM7SUFBRCwyQkFBQztDQWZELEFBZUMsSUFBQTtBQWZZLG9EQUFvQiIsImZpbGUiOiJhcHAvY29tcG9uZW50cy9jYW1wZ3JvdW5kcy9jYW1wZ3JvdW5kcy5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBMYXVyZW5jZSBIbyBvbiAwNy0wMi0yMDE3LlxyXG4gKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FtcGdyb3VuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYW1wZ291bmRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDYW1wZ3JvdW5kIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhbXBncm91bmQnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuXHRzZWxlY3RvcjogJ2NhbXBzJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvY2FtcGdyb3VuZHMvY2FtcGdyb3VuZHMuY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2FwcC9jb21wb25lbnRzL2NhbXBncm91bmRzL2NhbXBncm91bmRzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENhbXBncm91bmRzQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRjYW1wczogQ2FtcGdyb3VuZFtdO1xyXG5cdHVzZXJkYXRhOiBhbnk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY2FtcFNlcnZpY2U6IENhbXBncm91bmRTZXJ2aWNlLCBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSkge1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLmdldENhbXBncm91bmRzKCk7XHJcblx0XHR0aGlzLnVzZXJkYXRhID0gdGhpcy51c2VyU2VydmljZS5nZXRVc2VyRGF0YSgpO1xyXG5cdH1cclxuXHJcblx0Z2V0Q2FtcGdyb3VuZHMoKSB7XHJcblx0XHR0aGlzLmNhbXBTZXJ2aWNlLmdldENhbXBncm91bmRzKCkuc3Vic2NyaWJlKGNhbXBzID0+IHRoaXMuY2FtcHMgPSBjYW1wcyk7XHJcblx0fVxyXG59XHJcbiJdfQ==
