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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var common_1 = require("@angular/common");
var primeng_1 = require("primeng/primeng");
var base_component_1 = require("./base.component");
var app_routing_module_1 = require("./app-routing.module");
var campgrounds_component_1 = require("./components/campgrounds/campgrounds.component");
var campground_detail_component_1 = require("./components/campgrounds/campground.detail.component");
var user_component_1 = require("./components/user/user.component");
var campgounds_service_1 = require("./services/campgounds.service");
var user_service_1 = require("./services/user.service");
var profile_component_1 = require("./components/user/profile.component");
var campground_form_component_1 = require("./components/campgrounds/campground.form.component");
var comment_form_component_1 = require("./components/campgrounds/comment.form.component");
var api_service_1 = require("./services/api.service");
var BaseModule = /** @class */ (function () {
    function BaseModule() {
    }
    BaseModule = __decorate([
        core_1.NgModule({
            imports: [
                // Angular Module
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                app_routing_module_1.AppRoutingModule,
                // Primeng Module
                primeng_1.ButtonModule
            ],
            declarations: [
                base_component_1.BaseComponent,
                campgrounds_component_1.CampgroundsComponent,
                campground_detail_component_1.CampgroundDetailComponent,
                campground_form_component_1.CampgroundFormComponent,
                comment_form_component_1.CommentFormComponent,
                user_component_1.UserComponent,
                profile_component_1.ProfileComponent
            ],
            providers: [
                api_service_1.ApiService,
                campgounds_service_1.CampgroundService,
                user_service_1.UserService,
                { provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }
            ],
            bootstrap: [base_component_1.BaseComponent]
        })
    ], BaseModule);
    return BaseModule;
}());
exports.BaseModule = BaseModule;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9iYXNlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7O0dBRUc7Ozs7Ozs7O0FBRUgsc0NBQXlDO0FBQ3pDLDhEQUEwRDtBQUMxRCx3Q0FBNkM7QUFDN0Msc0NBQTJDO0FBQzNDLDBDQUF5RTtBQUN6RSwyQ0FBK0M7QUFFL0MsbURBQWlEO0FBQ2pELDJEQUF3RDtBQUV4RCx3RkFBc0Y7QUFDdEYsb0dBQWlHO0FBQ2pHLG1FQUFpRTtBQUVqRSxvRUFBa0U7QUFDbEUsd0RBQXNEO0FBQ3RELHlFQUF1RTtBQUN2RSxnR0FBNkY7QUFDN0YsMEZBQXVGO0FBQ3ZGLHNEQUFvRDtBQTZCcEQ7SUFBQTtJQUNBLENBQUM7SUFEWSxVQUFVO1FBM0J0QixlQUFRLENBQUM7WUFDVCxPQUFPLEVBQUU7Z0JBQ1IsaUJBQWlCO2dCQUNqQixnQ0FBYTtnQkFDYixpQkFBVTtnQkFDVixtQkFBVztnQkFDWCxxQ0FBZ0I7Z0JBQ2hCLGlCQUFpQjtnQkFDakIsc0JBQVk7YUFDWjtZQUNELFlBQVksRUFBRTtnQkFDYiw4QkFBYTtnQkFDYiw0Q0FBb0I7Z0JBQ3BCLHVEQUF5QjtnQkFDekIsbURBQXVCO2dCQUN2Qiw2Q0FBb0I7Z0JBQ3BCLDhCQUFhO2dCQUNiLG9DQUFnQjthQUNoQjtZQUNELFNBQVMsRUFBRTtnQkFDVix3QkFBVTtnQkFDVixzQ0FBaUI7Z0JBQ2pCLDBCQUFXO2dCQUNYLEVBQUMsT0FBTyxFQUFFLHlCQUFnQixFQUFFLFFBQVEsRUFBRSw2QkFBb0IsRUFBQzthQUMzRDtZQUNELFNBQVMsRUFBRSxDQUFDLDhCQUFhLENBQUM7U0FDMUIsQ0FBQztPQUNXLFVBQVUsQ0FDdEI7SUFBRCxpQkFBQztDQURELEFBQ0MsSUFBQTtBQURZLGdDQUFVIiwiZmlsZSI6ImFwcC9iYXNlLm1vZHVsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxyXG4gKiBDcmVhdGVkIGJ5IExhdXJlbmNlIEhvIG9uIDA3LTAyLTIwMTcuXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQnJvd3Nlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXInO1xyXG5pbXBvcnQgeyBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgSHR0cE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2h0dHAnO1xyXG5pbXBvcnQgeyBIYXNoTG9jYXRpb25TdHJhdGVneSwgTG9jYXRpb25TdHJhdGVneSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IEJ1dHRvbk1vZHVsZSB9IGZyb20gJ3ByaW1lbmcvcHJpbWVuZyc7XHJcblxyXG5pbXBvcnQgeyBCYXNlQ29tcG9uZW50IH0gZnJvbSAnLi9iYXNlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IEFwcFJvdXRpbmdNb2R1bGUgfSBmcm9tICcuL2FwcC1yb3V0aW5nLm1vZHVsZSc7XHJcblxyXG5pbXBvcnQgeyBDYW1wZ3JvdW5kc0NvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYW1wZ3JvdW5kcy9jYW1wZ3JvdW5kcy5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDYW1wZ3JvdW5kRGV0YWlsQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbXBncm91bmRzL2NhbXBncm91bmQuZGV0YWlsLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IFVzZXJDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlci91c2VyLmNvbXBvbmVudCc7XHJcblxyXG5pbXBvcnQgeyBDYW1wZ3JvdW5kU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvY2FtcGdvdW5kcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XHJcbmltcG9ydCB7IFByb2ZpbGVDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvdXNlci9wcm9maWxlLmNvbXBvbmVudCc7XHJcbmltcG9ydCB7IENhbXBncm91bmRGb3JtQ29tcG9uZW50IH0gZnJvbSAnLi9jb21wb25lbnRzL2NhbXBncm91bmRzL2NhbXBncm91bmQuZm9ybS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBDb21tZW50Rm9ybUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9jYW1wZ3JvdW5kcy9jb21tZW50LmZvcm0uY29tcG9uZW50JztcclxuaW1wb3J0IHsgQXBpU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvYXBpLnNlcnZpY2UnO1xyXG5cclxuQE5nTW9kdWxlKHtcclxuXHRpbXBvcnRzOiBbXHJcblx0XHQvLyBBbmd1bGFyIE1vZHVsZVxyXG5cdFx0QnJvd3Nlck1vZHVsZSxcclxuXHRcdEh0dHBNb2R1bGUsXHJcblx0XHRGb3Jtc01vZHVsZSxcclxuXHRcdEFwcFJvdXRpbmdNb2R1bGUsXHJcblx0XHQvLyBQcmltZW5nIE1vZHVsZVxyXG5cdFx0QnV0dG9uTW9kdWxlXHJcblx0XSxcclxuXHRkZWNsYXJhdGlvbnM6IFtcclxuXHRcdEJhc2VDb21wb25lbnQsXHJcblx0XHRDYW1wZ3JvdW5kc0NvbXBvbmVudCxcclxuXHRcdENhbXBncm91bmREZXRhaWxDb21wb25lbnQsXHJcblx0XHRDYW1wZ3JvdW5kRm9ybUNvbXBvbmVudCxcclxuXHRcdENvbW1lbnRGb3JtQ29tcG9uZW50LFxyXG5cdFx0VXNlckNvbXBvbmVudCxcclxuXHRcdFByb2ZpbGVDb21wb25lbnRcclxuXHRdLFxyXG5cdHByb3ZpZGVyczogW1xyXG5cdFx0QXBpU2VydmljZSxcclxuXHRcdENhbXBncm91bmRTZXJ2aWNlLFxyXG5cdFx0VXNlclNlcnZpY2UsXHJcblx0XHR7cHJvdmlkZTogTG9jYXRpb25TdHJhdGVneSwgdXNlQ2xhc3M6IEhhc2hMb2NhdGlvblN0cmF0ZWd5fVxyXG5cdF0sXHJcblx0Ym9vdHN0cmFwOiBbQmFzZUNvbXBvbmVudF1cclxufSlcclxuZXhwb3J0IGNsYXNzIEJhc2VNb2R1bGUge1xyXG59XHJcbiJdfQ==
