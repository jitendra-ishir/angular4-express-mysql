"use strict";
/**
 * Created by Laurence Ho on 08-02-2017.
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
require("rxjs/add/operator/switchMap");
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var campgounds_service_1 = require("../../services/campgounds.service");
var user_service_1 = require("../../services/user.service");
var _ = require("lodash");
var CampgroundDetailComponent = /** @class */ (function () {
    function CampgroundDetailComponent(campgroundService, userService, route, router) {
        this.campgroundService = campgroundService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.campDetail = new campgounds_service_1.CampgroundDetail();
    }
    CampgroundDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .switchMap(function (params) { return _this.campgroundService.getCampgroundDetail(params['id']); })
            .subscribe(function (data) { return _this.campDetail = data; });
        this.userdata = this.userService.getUserData();
    };
    CampgroundDetailComponent.prototype.doDeleteCampground = function (id) {
        var _this = this;
        if (this.route.snapshot.url[0].path === 'campground') {
            this.campgroundService.deleteCampground(id).subscribe(function (data) {
                if (data.status === 200) {
                    _this.router.navigate(['/campground']);
                }
            });
        }
    };
    CampgroundDetailComponent.prototype.doEditComment = function (comment) {
        this.selectedComment = comment;
    };
    CampgroundDetailComponent.prototype.doDeleteComment = function (comment_id) {
        var _this = this;
        this.campgroundService.deleteComment(comment_id)
            .subscribe(function (data) {
            if (data.status === 200) {
                _.remove(_this.campDetail.comments, function (comment) {
                    return comment.id === comment_id;
                });
            }
        });
    };
    CampgroundDetailComponent.prototype.updateUI = function (comment) {
        var tempComment = comment['comment'];
        this.campDetail.comments.push(tempComment);
    };
    CampgroundDetailComponent = __decorate([
        core_1.Component({
            selector: 'campDetail',
            templateUrl: './app/components/campgrounds/campground.detail.component.html',
            styleUrls: ['./app/components/campgrounds/campgrounds.component.css']
        }),
        __metadata("design:paramtypes", [campgounds_service_1.CampgroundService,
            user_service_1.UserService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], CampgroundDetailComponent);
    return CampgroundDetailComponent;
}());
exports.CampgroundDetailComponent = CampgroundDetailComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NhbXBncm91bmRzL2NhbXBncm91bmQuZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7Ozs7Ozs7Ozs7O0FBRUgsdUNBQXFDO0FBQ3JDLHNDQUFrRDtBQUNsRCwwQ0FBaUU7QUFFakUsd0VBQXdGO0FBQ3hGLDREQUEwRDtBQUUxRCwwQkFBNEI7QUFRNUI7SUFNQyxtQ0FBb0IsaUJBQW9DLEVBQ3BDLFdBQXdCLEVBQ3hCLEtBQXFCLEVBQ3JCLE1BQWM7UUFIZCxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBQ3BDLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFObEMsZUFBVSxHQUFxQixJQUFJLHFDQUFnQixFQUFFLENBQUM7SUFPdEQsQ0FBQztJQUVELDRDQUFRLEdBQVI7UUFBQSxpQkFLQztRQUpBLElBQUksQ0FBQyxLQUFLLENBQUMsTUFBTTthQUNmLFNBQVMsQ0FBQyxVQUFDLE1BQWMsSUFBSyxPQUFBLEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBeEQsQ0FBd0QsQ0FBQzthQUN2RixTQUFTLENBQUMsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsVUFBVSxHQUFHLElBQUksRUFBdEIsQ0FBc0IsQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQyxXQUFXLEVBQUUsQ0FBQztJQUNoRCxDQUFDO0lBRUQsc0RBQWtCLEdBQWxCLFVBQW1CLEVBQVU7UUFBN0IsaUJBUUM7UUFQQSxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxLQUFLLFlBQVksQ0FBQyxDQUFDLENBQUM7WUFDdEQsSUFBSSxDQUFDLGlCQUFpQixDQUFDLGdCQUFnQixDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxVQUFBLElBQUk7Z0JBQ3pELEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssR0FBRyxDQUFDLENBQUMsQ0FBQztvQkFDekIsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO2dCQUN2QyxDQUFDO1lBQ0YsQ0FBQyxDQUFDLENBQUM7UUFDSixDQUFDO0lBQ0YsQ0FBQztJQUVELGlEQUFhLEdBQWIsVUFBYyxPQUFnQjtRQUM3QixJQUFJLENBQUMsZUFBZSxHQUFHLE9BQU8sQ0FBQztJQUNoQyxDQUFDO0lBRUQsbURBQWUsR0FBZixVQUFnQixVQUFrQjtRQUFsQyxpQkFTQztRQVJBLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDO2FBQzlDLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDZCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsVUFBQyxPQUFPO29CQUMxQyxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxVQUFVLENBQUM7Z0JBQ2xDLENBQUMsQ0FBQyxDQUFDO1lBQ0osQ0FBQztRQUNGLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELDRDQUFRLEdBQVIsVUFBUyxPQUFnQjtRQUN4QixJQUFJLFdBQVcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDckMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO0lBQzVDLENBQUM7SUEvQ1cseUJBQXlCO1FBTnJDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsWUFBWTtZQUN0QixXQUFXLEVBQUUsK0RBQStEO1lBQzVFLFNBQVMsRUFBRSxDQUFDLHdEQUF3RCxDQUFDO1NBQ3JFLENBQUM7eUNBUXNDLHNDQUFpQjtZQUN2QiwwQkFBVztZQUNqQix1QkFBYztZQUNiLGVBQU07T0FUdEIseUJBQXlCLENBZ0RyQztJQUFELGdDQUFDO0NBaERELEFBZ0RDLElBQUE7QUFoRFksOERBQXlCIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2NhbXBncm91bmRzL2NhbXBncm91bmQuZGV0YWlsLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IExhdXJlbmNlIEhvIG9uIDA4LTAyLTIwMTcuXHJcbiAqL1xyXG5cclxuaW1wb3J0ICdyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXAnO1xyXG5pbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBBY3RpdmF0ZWRSb3V0ZSwgUGFyYW1zLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuaW1wb3J0IHsgQ2FtcGdyb3VuZERldGFpbCwgQ2FtcGdyb3VuZFNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9jYW1wZ291bmRzLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IENvbW1lbnQgfSBmcm9tICcuLi8uLi9tb2RlbHMvY29tbWVudCc7XHJcbmltcG9ydCAqIGFzIF8gZnJvbSAnbG9kYXNoJztcclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnY2FtcERldGFpbCcsXHJcblx0dGVtcGxhdGVVcmw6ICcuL2FwcC9jb21wb25lbnRzL2NhbXBncm91bmRzL2NhbXBncm91bmQuZGV0YWlsLmNvbXBvbmVudC5odG1sJyxcclxuXHRzdHlsZVVybHM6IFsnLi9hcHAvY29tcG9uZW50cy9jYW1wZ3JvdW5kcy9jYW1wZ3JvdW5kcy5jb21wb25lbnQuY3NzJ11cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBDYW1wZ3JvdW5kRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRzZWxlY3RlZENvbW1lbnQ6IENvbW1lbnQ7XHJcblxyXG5cdGNhbXBEZXRhaWw6IENhbXBncm91bmREZXRhaWwgPSBuZXcgQ2FtcGdyb3VuZERldGFpbCgpO1xyXG5cdHVzZXJkYXRhOiBhbnk7XHJcblxyXG5cdGNvbnN0cnVjdG9yKHByaXZhdGUgY2FtcGdyb3VuZFNlcnZpY2U6IENhbXBncm91bmRTZXJ2aWNlLFxyXG5cdCAgICAgICAgICAgIHByaXZhdGUgdXNlclNlcnZpY2U6IFVzZXJTZXJ2aWNlLFxyXG5cdCAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxyXG5cdCAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHtcclxuXHR9XHJcblxyXG5cdG5nT25Jbml0KCkge1xyXG5cdFx0dGhpcy5yb3V0ZS5wYXJhbXNcclxuXHRcdFx0LnN3aXRjaE1hcCgocGFyYW1zOiBQYXJhbXMpID0+IHRoaXMuY2FtcGdyb3VuZFNlcnZpY2UuZ2V0Q2FtcGdyb3VuZERldGFpbChwYXJhbXNbJ2lkJ10pKVxyXG5cdFx0XHQuc3Vic2NyaWJlKGRhdGEgPT4gdGhpcy5jYW1wRGV0YWlsID0gZGF0YSk7XHJcblx0XHR0aGlzLnVzZXJkYXRhID0gdGhpcy51c2VyU2VydmljZS5nZXRVc2VyRGF0YSgpO1xyXG5cdH1cclxuXHJcblx0ZG9EZWxldGVDYW1wZ3JvdW5kKGlkOiBudW1iZXIpIHtcclxuXHRcdGlmICh0aGlzLnJvdXRlLnNuYXBzaG90LnVybFswXS5wYXRoID09PSAnY2FtcGdyb3VuZCcpIHtcclxuXHRcdFx0dGhpcy5jYW1wZ3JvdW5kU2VydmljZS5kZWxldGVDYW1wZ3JvdW5kKGlkKS5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0aWYgKGRhdGEuc3RhdHVzID09PSAyMDApIHtcclxuXHRcdFx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2NhbXBncm91bmQnXSk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGRvRWRpdENvbW1lbnQoY29tbWVudDogQ29tbWVudCkge1xyXG5cdFx0dGhpcy5zZWxlY3RlZENvbW1lbnQgPSBjb21tZW50O1xyXG5cdH1cclxuXHJcblx0ZG9EZWxldGVDb21tZW50KGNvbW1lbnRfaWQ6IG51bWJlcikge1xyXG5cdFx0dGhpcy5jYW1wZ3JvdW5kU2VydmljZS5kZWxldGVDb21tZW50KGNvbW1lbnRfaWQpXHJcblx0XHRcdC5zdWJzY3JpYmUoZGF0YSA9PiB7XHJcblx0XHRcdFx0aWYgKGRhdGEuc3RhdHVzID09PSAyMDApIHtcclxuXHRcdFx0XHRcdF8ucmVtb3ZlKHRoaXMuY2FtcERldGFpbC5jb21tZW50cywgKGNvbW1lbnQpID0+IHtcclxuXHRcdFx0XHRcdFx0cmV0dXJuIGNvbW1lbnQuaWQgPT09IGNvbW1lbnRfaWQ7XHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdH1cclxuXHJcblx0dXBkYXRlVUkoY29tbWVudDogQ29tbWVudCkge1xyXG5cdFx0bGV0IHRlbXBDb21tZW50ID0gY29tbWVudFsnY29tbWVudCddO1xyXG5cdFx0dGhpcy5jYW1wRGV0YWlsLmNvbW1lbnRzLnB1c2godGVtcENvbW1lbnQpO1xyXG5cdH1cclxufVxyXG4iXX0=
