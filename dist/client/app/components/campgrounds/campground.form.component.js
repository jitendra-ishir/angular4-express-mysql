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
 * Created by laurence-ho on 2/07/17.
 */
var core_1 = require("@angular/core");
var campgounds_service_1 = require("../../services/campgounds.service");
var user_service_1 = require("../../services/user.service");
var router_1 = require("@angular/router");
var campground_1 = require("../../models/campground");
var CampgroundFormComponent = /** @class */ (function () {
    function CampgroundFormComponent(campgroundService, userService, route, router) {
        this.campgroundService = campgroundService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.campground = new campground_1.Campground();
    }
    CampgroundFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userdata = this.userService.getUserData();
        if (!this.userdata) {
            this.router.navigate(['/login']);
        }
        if (this.route.snapshot.url[1].path !== 'new' && this.route.snapshot.url[3].path === 'edit') {
            this.campgroundService.getCampground(Number(this.route.snapshot.url[2].path))
                .subscribe(function (data) { return _this.campground = data.campground; });
        }
    };
    CampgroundFormComponent.prototype.doSubmit = function () {
        var _this = this;
        if (this.route.snapshot.url[0].path === 'campground') {
            if (this.route.snapshot.url[1].path === 'new') {
                this.campground.user_id = this.userdata.id;
                this.campground.username = this.userdata.username;
                this.campgroundService.createCampground(this.campground)
                    .subscribe(function (data) { return _this.router.navigate(['/campground/detail', data.campground_id]); });
            }
            else if (this.route.snapshot.url[1].path !== 'new' && this.route.snapshot.url[3].path === 'edit') {
                this.campgroundService.editCampground(this.campground)
                    .subscribe(function (data) { return _this.router.navigate(['/campground/detail', data.campground_id]); });
            }
        }
    };
    CampgroundFormComponent = __decorate([
        core_1.Component({
            selector: 'campDetail',
            templateUrl: './app/components/campgrounds/campground.form.component.html',
            styleUrls: ['./app/components/campgrounds/campgrounds.component.css']
        }),
        __metadata("design:paramtypes", [campgounds_service_1.CampgroundService,
            user_service_1.UserService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], CampgroundFormComponent);
    return CampgroundFormComponent;
}());
exports.CampgroundFormComponent = CampgroundFormComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NhbXBncm91bmRzL2NhbXBncm91bmQuZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUFrRDtBQUNsRCx3RUFBc0U7QUFDdEUsNERBQTBEO0FBQzFELDBDQUF5RDtBQUN6RCxzREFBcUQ7QUFRckQ7SUFJQyxpQ0FBb0IsaUJBQW9DLEVBQ3BDLFdBQXdCLEVBQ3hCLEtBQXFCLEVBQ3JCLE1BQWM7UUFIZCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFMbEMsZUFBVSxHQUFlLElBQUksdUJBQVUsRUFBRSxDQUFDO0lBTTFDLENBQUM7SUFFRCwwQ0FBUSxHQUFSO1FBQUEsaUJBV0M7UUFWQSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFL0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLENBQUMsQ0FBQztZQUM3RixJQUFJLENBQUMsaUJBQWlCLENBQUMsYUFBYSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzNFLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxDQUFDLFVBQVUsRUFBakMsQ0FBaUMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7SUFDRixDQUFDO0lBRUQsMENBQVEsR0FBUjtRQUFBLGlCQWFDO1FBWkEsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxZQUFZLENBQUMsQ0FBQyxDQUFDO1lBQ3RELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLEtBQUssS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7Z0JBQzNDLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDO2dCQUVsRCxJQUFJLENBQUMsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQztxQkFDdEQsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxvQkFBb0IsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsRUFBaEUsQ0FBZ0UsQ0FBQyxDQUFDO1lBQ3ZGLENBQUM7WUFBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxLQUFLLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSyxNQUFNLENBQUMsQ0FBQyxDQUFDO2dCQUNwRyxJQUFJLENBQUMsaUJBQWlCLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUM7cUJBQ3BELFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLENBQUMsb0JBQW9CLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLEVBQWhFLENBQWdFLENBQUMsQ0FBQztZQUN2RixDQUFDO1FBQ0YsQ0FBQztJQUNGLENBQUM7SUFwQ1csdUJBQXVCO1FBTm5DLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsNkRBQTZEO1lBQzFFLFNBQVMsRUFBRSxDQUFDLHdEQUF3RCxDQUFDO1NBQ3JFLENBQUM7eUNBTXNDLHNDQUFpQjtZQUN2QiwwQkFBVztZQUNqQix1QkFBYztZQUNiLGVBQU07T0FQdEIsdUJBQXVCLENBcUNuQztJQUFELDhCQUFDO0NBckNELEFBcUNDLElBQUE7QUFyQ1ksMERBQXVCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2NhbXBncm91bmRzL2NhbXBncm91bmQuZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogQ3JlYXRlZCBieSBsYXVyZW5jZS1obyBvbiAyLzA3LzE3LlxyXG4gKi9cclxuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ2FtcGdyb3VuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYW1wZ291bmRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5pbXBvcnQgeyBDYW1wZ3JvdW5kIH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NhbXBncm91bmQnO1xyXG5cclxuQENvbXBvbmVudCh7XHJcblx0c2VsZWN0b3I6ICdjYW1wRGV0YWlsJyxcclxuXHR0ZW1wbGF0ZVVybDogJy4vYXBwL2NvbXBvbmVudHMvY2FtcGdyb3VuZHMvY2FtcGdyb3VuZC5mb3JtLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9hcHAvY29tcG9uZW50cy9jYW1wZ3JvdW5kcy9jYW1wZ3JvdW5kcy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW1wZ3JvdW5kRm9ybUNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XHJcblx0dXNlcmRhdGE6IGFueTtcclxuXHRjYW1wZ3JvdW5kOiBDYW1wZ3JvdW5kID0gbmV3IENhbXBncm91bmQoKTtcclxuXHJcblx0Y29uc3RydWN0b3IocHJpdmF0ZSBjYW1wZ3JvdW5kU2VydmljZTogQ2FtcGdyb3VuZFNlcnZpY2UsXHJcblx0ICAgICAgICAgICAgcHJpdmF0ZSB1c2VyU2VydmljZTogVXNlclNlcnZpY2UsXHJcblx0ICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZTogQWN0aXZhdGVkUm91dGUsXHJcblx0ICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikge1xyXG5cdH1cclxuXHJcblx0bmdPbkluaXQoKSB7XHJcblx0XHR0aGlzLnVzZXJkYXRhID0gdGhpcy51c2VyU2VydmljZS5nZXRVc2VyRGF0YSgpO1xyXG5cclxuXHRcdGlmICghdGhpcy51c2VyZGF0YSkge1xyXG5cdFx0XHR0aGlzLnJvdXRlci5uYXZpZ2F0ZShbJy9sb2dpbiddKTtcclxuXHRcdH1cclxuXHJcblx0XHRpZiAodGhpcy5yb3V0ZS5zbmFwc2hvdC51cmxbMV0ucGF0aCAhPT0gJ25ldycgJiYgdGhpcy5yb3V0ZS5zbmFwc2hvdC51cmxbM10ucGF0aCA9PT0gJ2VkaXQnKSB7XHJcblx0XHRcdHRoaXMuY2FtcGdyb3VuZFNlcnZpY2UuZ2V0Q2FtcGdyb3VuZChOdW1iZXIodGhpcy5yb3V0ZS5zbmFwc2hvdC51cmxbMl0ucGF0aCkpXHJcblx0XHRcdFx0LnN1YnNjcmliZShkYXRhID0+IHRoaXMuY2FtcGdyb3VuZCA9IGRhdGEuY2FtcGdyb3VuZCk7XHJcblx0XHR9XHJcblx0fVxyXG5cclxuXHRkb1N1Ym1pdCgpIHtcclxuXHRcdGlmICh0aGlzLnJvdXRlLnNuYXBzaG90LnVybFswXS5wYXRoID09PSAnY2FtcGdyb3VuZCcpIHtcclxuXHRcdFx0aWYgKHRoaXMucm91dGUuc25hcHNob3QudXJsWzFdLnBhdGggPT09ICduZXcnKSB7XHJcblx0XHRcdFx0dGhpcy5jYW1wZ3JvdW5kLnVzZXJfaWQgPSB0aGlzLnVzZXJkYXRhLmlkO1xyXG5cdFx0XHRcdHRoaXMuY2FtcGdyb3VuZC51c2VybmFtZSA9IHRoaXMudXNlcmRhdGEudXNlcm5hbWU7XHJcblxyXG5cdFx0XHRcdHRoaXMuY2FtcGdyb3VuZFNlcnZpY2UuY3JlYXRlQ2FtcGdyb3VuZCh0aGlzLmNhbXBncm91bmQpXHJcblx0XHRcdFx0XHQuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2FtcGdyb3VuZC9kZXRhaWwnLCBkYXRhLmNhbXBncm91bmRfaWRdKSk7XHJcblx0XHRcdH0gZWxzZSBpZiAodGhpcy5yb3V0ZS5zbmFwc2hvdC51cmxbMV0ucGF0aCAhPT0gJ25ldycgJiYgdGhpcy5yb3V0ZS5zbmFwc2hvdC51cmxbM10ucGF0aCA9PT0gJ2VkaXQnKSB7XHJcblx0XHRcdFx0dGhpcy5jYW1wZ3JvdW5kU2VydmljZS5lZGl0Q2FtcGdyb3VuZCh0aGlzLmNhbXBncm91bmQpXHJcblx0XHRcdFx0XHQuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5yb3V0ZXIubmF2aWdhdGUoWycvY2FtcGdyb3VuZC9kZXRhaWwnLCBkYXRhLmNhbXBncm91bmRfaWRdKSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcbn1cclxuIl19
