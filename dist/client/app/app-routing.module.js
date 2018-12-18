"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by Laurence Ho on 07-02-2017.
 */
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var campgrounds_component_1 = require("./components/campgrounds/campgrounds.component");
var campground_detail_component_1 = require("./components/campgrounds/campground.detail.component");
var campground_form_component_1 = require("./components/campgrounds/campground.form.component");
var user_component_1 = require("./components/user/user.component");
var profile_component_1 = require("./components/user/profile.component");
var comment_form_component_1 = require("./components/campgrounds/comment.form.component");
var appRoutes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'campground'
    },
    {
        path: 'campground',
        component: campgrounds_component_1.CampgroundsComponent
    },
    {
        path: 'campground/detail/:id',
        component: campground_detail_component_1.CampgroundDetailComponent
    },
    {
        path: 'campground/new',
        component: campground_form_component_1.CampgroundFormComponent
    },
    {
        path: 'campground/detail/:id/edit',
        component: campground_form_component_1.CampgroundFormComponent
    },
    {
        path: 'campground/detail/:id/comment/new',
        component: comment_form_component_1.CommentFormComponent
    },
    {
        path: 'campground/detail/:id/comment/:comment_id/edit',
        component: comment_form_component_1.CommentFormComponent
    },
    {
        path: 'login',
        component: user_component_1.UserComponent
    },
    {
        path: 'signup',
        component: user_component_1.UserComponent
    },
    {
        path: 'logout',
        component: user_component_1.UserComponent
    },
    {
        path: 'profile',
        component: profile_component_1.ProfileComponent
    },
    {
        path: '**',
        component: campgrounds_component_1.CampgroundsComponent
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(appRoutes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9hcHAtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTs7R0FFRztBQUNILHNDQUF5QztBQUN6QywwQ0FBdUQ7QUFFdkQsd0ZBQXNGO0FBQ3RGLG9HQUFpRztBQUNqRyxnR0FBNkY7QUFDN0YsbUVBQWlFO0FBQ2pFLHlFQUF1RTtBQUN2RSwwRkFBdUY7QUFFdkYsSUFBTSxTQUFTLEdBQVc7SUFDeEI7UUFDRSxJQUFJLEVBQUUsRUFBRTtRQUNSLFNBQVMsRUFBRSxNQUFNO1FBQ2pCLFVBQVUsRUFBRSxZQUFZO0tBQ3pCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsWUFBWTtRQUNsQixTQUFTLEVBQUUsNENBQW9CO0tBQ2hDO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsdUJBQXVCO1FBQzdCLFNBQVMsRUFBRSx1REFBeUI7S0FDckM7SUFDRDtRQUNFLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsU0FBUyxFQUFFLG1EQUF1QjtLQUNuQztJQUNEO1FBQ0UsSUFBSSxFQUFFLDRCQUE0QjtRQUNsQyxTQUFTLEVBQUUsbURBQXVCO0tBQ25DO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsbUNBQW1DO1FBQ3pDLFNBQVMsRUFBRSw2Q0FBb0I7S0FDaEM7SUFDRDtRQUNFLElBQUksRUFBRSxnREFBZ0Q7UUFDdEQsU0FBUyxFQUFFLDZDQUFvQjtLQUNoQztJQUNEO1FBQ0UsSUFBSSxFQUFFLE9BQU87UUFDYixTQUFTLEVBQUUsOEJBQWE7S0FDekI7SUFDRDtRQUNFLElBQUksRUFBRSxRQUFRO1FBQ2QsU0FBUyxFQUFFLDhCQUFhO0tBQ3pCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsUUFBUTtRQUNkLFNBQVMsRUFBRSw4QkFBYTtLQUN6QjtJQUNEO1FBQ0UsSUFBSSxFQUFFLFNBQVM7UUFDZixTQUFTLEVBQUUsb0NBQWdCO0tBQzVCO0lBQ0Q7UUFDRSxJQUFJLEVBQUUsSUFBSTtRQUNWLFNBQVMsRUFBRSw0Q0FBb0I7S0FDaEM7Q0FDRixDQUFDO0FBT0Y7SUFBQTtJQUNBLENBQUM7SUFEWSxnQkFBZ0I7UUFMNUIsZUFBUSxDQUFDO1lBQ1IsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7WUFDMUMsT0FBTyxFQUFFLENBQUMscUJBQVksQ0FBQztTQUN4QixDQUFDO09BRVcsZ0JBQWdCLENBQzVCO0lBQUQsdUJBQUM7Q0FERCxBQUNDLElBQUE7QUFEWSw0Q0FBZ0IiLCJmaWxlIjoiYXBwL2FwcC1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IExhdXJlbmNlIEhvIG9uIDA3LTAyLTIwMTcuXHJcbiAqL1xyXG5pbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBSb3V0ZXJNb2R1bGUsIFJvdXRlcyB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcblxyXG5pbXBvcnQgeyBDYW1wZ3JvdW5kc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYW1wZ3JvdW5kcy9jYW1wZ3JvdW5kcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYW1wZ3JvdW5kRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbXBncm91bmRzL2NhbXBncm91bmQuZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhbXBncm91bmRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbXBncm91bmRzL2NhbXBncm91bmQuZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBVc2VyQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXIvdXNlci5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBQcm9maWxlQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL3VzZXIvcHJvZmlsZS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tZW50Rm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYW1wZ3JvdW5kcy9jb21tZW50LmZvcm0uY29tcG9uZW50JztcclxuXHJcbmNvbnN0IGFwcFJvdXRlczogUm91dGVzID0gW1xyXG4gIHtcclxuICAgIHBhdGg6ICcnLFxyXG4gICAgcGF0aE1hdGNoOiAnZnVsbCcsXHJcbiAgICByZWRpcmVjdFRvOiAnY2FtcGdyb3VuZCdcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdjYW1wZ3JvdW5kJyxcclxuICAgIGNvbXBvbmVudDogQ2FtcGdyb3VuZHNDb21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdjYW1wZ3JvdW5kL2RldGFpbC86aWQnLFxyXG4gICAgY29tcG9uZW50OiBDYW1wZ3JvdW5kRGV0YWlsQ29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAnY2FtcGdyb3VuZC9uZXcnLFxyXG4gICAgY29tcG9uZW50OiBDYW1wZ3JvdW5kRm9ybUNvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2NhbXBncm91bmQvZGV0YWlsLzppZC9lZGl0JyxcclxuICAgIGNvbXBvbmVudDogQ2FtcGdyb3VuZEZvcm1Db21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdjYW1wZ3JvdW5kL2RldGFpbC86aWQvY29tbWVudC9uZXcnLFxyXG4gICAgY29tcG9uZW50OiBDb21tZW50Rm9ybUNvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2NhbXBncm91bmQvZGV0YWlsLzppZC9jb21tZW50Lzpjb21tZW50X2lkL2VkaXQnLFxyXG4gICAgY29tcG9uZW50OiBDb21tZW50Rm9ybUNvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ2xvZ2luJyxcclxuICAgIGNvbXBvbmVudDogVXNlckNvbXBvbmVudFxyXG4gIH0sXHJcbiAge1xyXG4gICAgcGF0aDogJ3NpZ251cCcsXHJcbiAgICBjb21wb25lbnQ6IFVzZXJDb21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICdsb2dvdXQnLFxyXG4gICAgY29tcG9uZW50OiBVc2VyQ29tcG9uZW50XHJcbiAgfSxcclxuICB7XHJcbiAgICBwYXRoOiAncHJvZmlsZScsXHJcbiAgICBjb21wb25lbnQ6IFByb2ZpbGVDb21wb25lbnRcclxuICB9LFxyXG4gIHtcclxuICAgIHBhdGg6ICcqKicsXHJcbiAgICBjb21wb25lbnQ6IENhbXBncm91bmRzQ29tcG9uZW50XHJcbiAgfVxyXG5dO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuICBpbXBvcnRzOiBbUm91dGVyTW9kdWxlLmZvclJvb3QoYXBwUm91dGVzKV0sXHJcbiAgZXhwb3J0czogW1JvdXRlck1vZHVsZV1cclxufSlcclxuXHJcbmV4cG9ydCBjbGFzcyBBcHBSb3V0aW5nTW9kdWxlIHtcclxufVxyXG4iXX0=
