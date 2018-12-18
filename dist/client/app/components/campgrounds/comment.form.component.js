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
var router_1 = require("@angular/router");
var campgounds_service_1 = require("../../services/campgounds.service");
var user_service_1 = require("../../services/user.service");
var comment_1 = require("../../models/comment");
var forms_1 = require("@angular/forms");
/**
 * Created by laurence-ho on 3/07/17.
 */
var CommentFormComponent = /** @class */ (function () {
    function CommentFormComponent(campgroundService, userService, route, router) {
        this.campgroundService = campgroundService;
        this.userService = userService;
        this.route = route;
        this.router = router;
        this.insertedComment = new core_1.EventEmitter();
    }
    CommentFormComponent.prototype.ngOnInit = function () {
        this.userdata = this.userService.getUserData();
        if (!this.userdata) {
            this.router.navigate(['/login']);
        }
        if (!isNaN(Number(this.route.snapshot.url[2].path))) {
            this.campground_id = Number(this.route.snapshot.url[2].path);
        }
        if (!this.comment) {
            this.comment = new comment_1.Comment();
        }
    };
    CommentFormComponent.prototype.doSubmit = function () {
        this.comment.user_id = this.userdata.id;
        this.comment.username = this.userdata.username;
        this.comment.campground_id = this.campground_id;
        if (this.comment.text) {
            if (!this.comment.id) {
                this.campgroundService.createComment(this.comment)
                    .subscribe(function (data) { return console.log(data); });
            }
            else {
                this.campgroundService.editComment(this.comment)
                    .subscribe(function (data) { return console.log(data); }); // FIXME
            }
        }
        this.commentForm.reset();
    };
    __decorate([
        core_1.ViewChild('f'),
        __metadata("design:type", forms_1.NgForm)
    ], CommentFormComponent.prototype, "commentForm", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", comment_1.Comment)
    ], CommentFormComponent.prototype, "comment", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], CommentFormComponent.prototype, "insertedComment", void 0);
    CommentFormComponent = __decorate([
        core_1.Component({
            selector: 'app-comment',
            templateUrl: './app/components/campgrounds/comment.form.component.html',
            styleUrls: ['./app/components/campgrounds/campgrounds.component.css']
        }),
        __metadata("design:paramtypes", [campgounds_service_1.CampgroundService,
            user_service_1.UserService,
            router_1.ActivatedRoute,
            router_1.Router])
    ], CommentFormComponent);
    return CommentFormComponent;
}());
exports.CommentFormComponent = CommentFormComponent;

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC9jb21wb25lbnRzL2NhbXBncm91bmRzL2NvbW1lbnQuZm9ybS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBMEY7QUFDMUYsMENBQXlEO0FBQ3pELHdFQUFzRTtBQUN0RSw0REFBMEQ7QUFDMUQsZ0RBQStDO0FBQy9DLHdDQUF3QztBQUV4Qzs7R0FFRztBQVFIO0lBUUMsOEJBQW9CLGlCQUFvQyxFQUNwQyxXQUF3QixFQUN4QixLQUFxQixFQUNyQixNQUFjO1FBSGQsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUNwQyxnQkFBVyxHQUFYLFdBQVcsQ0FBYTtRQUN4QixVQUFLLEdBQUwsS0FBSyxDQUFnQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBUnhCLG9CQUFlLEdBQUcsSUFBSSxtQkFBWSxFQUFXLENBQUM7SUFTeEQsQ0FBQztJQUVELHVDQUFRLEdBQVI7UUFDQyxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsV0FBVyxFQUFFLENBQUM7UUFFL0MsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7UUFDbEMsQ0FBQztRQUVELEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDLGFBQWEsR0FBRyxNQUFNLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlELENBQUM7UUFFRCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO1lBQ25CLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxpQkFBTyxFQUFFLENBQUM7UUFDOUIsQ0FBQztJQUNGLENBQUM7SUFFRCx1Q0FBUSxHQUFSO1FBQ0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLENBQUM7UUFDeEMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUM7UUFDL0MsSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUVoRCxFQUFFLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDdkIsRUFBRSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztxQkFNaEQsU0FBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBakIsQ0FBaUIsQ0FBQyxDQUFDO1lBQ3hDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDUCxJQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUM7cUJBQzlDLFNBQVMsQ0FBQyxVQUFBLElBQUksSUFBSSxPQUFBLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEVBQWpCLENBQWlCLENBQUMsQ0FBQyxDQUFBLFFBQVE7WUFDaEQsQ0FBQztRQUNGLENBQUM7UUFDRCxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFqRGU7UUFBZixnQkFBUyxDQUFDLEdBQUcsQ0FBQztrQ0FBYyxjQUFNOzZEQUFDO0lBQzNCO1FBQVIsWUFBSyxFQUFFO2tDQUFVLGlCQUFPO3lEQUFDO0lBQ2hCO1FBQVQsYUFBTSxFQUFFOztpRUFBK0M7SUFINUMsb0JBQW9CO1FBTmhDLGdCQUFTLENBQUM7WUFDVixRQUFRLEVBQUUsYUFBYTtZQUN2QixXQUFXLEVBQUUsMERBQTBEO1lBQ3ZFLFNBQVMsRUFBRSxDQUFDLHdEQUF3RCxDQUFDO1NBQ3JFLENBQUM7eUNBVXNDLHNDQUFpQjtZQUN2QiwwQkFBVztZQUNqQix1QkFBYztZQUNiLGVBQU07T0FYdEIsb0JBQW9CLENBbURoQztJQUFELDJCQUFDO0NBbkRELEFBbURDLElBQUE7QUFuRFksb0RBQW9CIiwiZmlsZSI6ImFwcC9jb21wb25lbnRzL2NhbXBncm91bmRzL2NvbW1lbnQuZm9ybS5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEV2ZW50RW1pdHRlciwgSW5wdXQsIE9uSW5pdCwgT3V0cHV0LCBWaWV3Q2hpbGQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQWN0aXZhdGVkUm91dGUsIFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IENhbXBncm91bmRTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvY2FtcGdvdW5kcy5zZXJ2aWNlJztcclxuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy91c2VyLnNlcnZpY2UnO1xyXG5pbXBvcnQgeyBDb21tZW50IH0gZnJvbSAnLi4vLi4vbW9kZWxzL2NvbW1lbnQnO1xyXG5pbXBvcnQgeyBOZ0Zvcm0gfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XHJcblxyXG4vKipcclxuICogQ3JlYXRlZCBieSBsYXVyZW5jZS1obyBvbiAzLzA3LzE3LlxyXG4gKi9cclxuXHJcbkBDb21wb25lbnQoe1xyXG5cdHNlbGVjdG9yOiAnYXBwLWNvbW1lbnQnLFxyXG5cdHRlbXBsYXRlVXJsOiAnLi9hcHAvY29tcG9uZW50cy9jYW1wZ3JvdW5kcy9jb21tZW50LmZvcm0uY29tcG9uZW50Lmh0bWwnLFxyXG5cdHN0eWxlVXJsczogWycuL2FwcC9jb21wb25lbnRzL2NhbXBncm91bmRzL2NhbXBncm91bmRzLmNvbXBvbmVudC5jc3MnXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIENvbW1lbnRGb3JtQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuXHRAVmlld0NoaWxkKCdmJykgY29tbWVudEZvcm06IE5nRm9ybTtcclxuXHRASW5wdXQoKSBjb21tZW50OiBDb21tZW50O1xyXG5cdEBPdXRwdXQoKSBpbnNlcnRlZENvbW1lbnQgPSBuZXcgRXZlbnRFbWl0dGVyPENvbW1lbnQ+KCk7XHJcblxyXG5cdHVzZXJkYXRhOiBhbnk7XHJcblx0Y2FtcGdyb3VuZF9pZDogbnVtYmVyO1xyXG5cclxuXHRjb25zdHJ1Y3Rvcihwcml2YXRlIGNhbXBncm91bmRTZXJ2aWNlOiBDYW1wZ3JvdW5kU2VydmljZSxcclxuXHQgICAgICAgICAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcclxuXHQgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuXHQgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7XHJcblx0fVxyXG5cclxuXHRuZ09uSW5pdCgpIHtcclxuXHRcdHRoaXMudXNlcmRhdGEgPSB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXJEYXRhKCk7XHJcblxyXG5cdFx0aWYgKCF0aGlzLnVzZXJkYXRhKSB7XHJcblx0XHRcdHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xvZ2luJ10pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGlmICghaXNOYU4oTnVtYmVyKHRoaXMucm91dGUuc25hcHNob3QudXJsWzJdLnBhdGgpKSkge1xyXG5cdFx0XHR0aGlzLmNhbXBncm91bmRfaWQgPSBOdW1iZXIodGhpcy5yb3V0ZS5zbmFwc2hvdC51cmxbMl0ucGF0aCk7XHJcblx0XHR9XHJcblxyXG5cdFx0aWYgKCF0aGlzLmNvbW1lbnQpIHtcclxuXHRcdFx0dGhpcy5jb21tZW50ID0gbmV3IENvbW1lbnQoKTtcclxuXHRcdH1cclxuXHR9XHJcblxyXG5cdGRvU3VibWl0KCkge1xyXG5cdFx0dGhpcy5jb21tZW50LnVzZXJfaWQgPSB0aGlzLnVzZXJkYXRhLmlkO1xyXG5cdFx0dGhpcy5jb21tZW50LnVzZXJuYW1lID0gdGhpcy51c2VyZGF0YS51c2VybmFtZTtcclxuXHRcdHRoaXMuY29tbWVudC5jYW1wZ3JvdW5kX2lkID0gdGhpcy5jYW1wZ3JvdW5kX2lkO1xyXG5cclxuXHRcdGlmICh0aGlzLmNvbW1lbnQudGV4dCkge1xyXG5cdFx0XHRpZiAoIXRoaXMuY29tbWVudC5pZCkge1xyXG5cdFx0XHRcdHRoaXMuY2FtcGdyb3VuZFNlcnZpY2UuY3JlYXRlQ29tbWVudCh0aGlzLmNvbW1lbnQpXHJcblx0XHRcdFx0Ly8gRklYTUVcclxuXHRcdFx0XHQvLyAudGhlbihkYXRhID0+IHtcclxuXHRcdFx0XHQvLyBcdHRoaXMuY2FtcGdyb3VuZFNlcnZpY2UuZ2V0Q29tbWVudChkYXRhLmNvbW1lbnRfaWQpXHJcblx0XHRcdFx0Ly8gXHRcdC5zdWJzY3JpYmUoY29tbWVudCA9PiB0aGlzLmluc2VydGVkQ29tbWVudC5lbWl0KGNvbW1lbnQpKTtcclxuXHRcdFx0XHQvLyB9KVxyXG5cdFx0XHRcdFx0LnN1YnNjcmliZShkYXRhID0+IGNvbnNvbGUubG9nKGRhdGEpKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHR0aGlzLmNhbXBncm91bmRTZXJ2aWNlLmVkaXRDb21tZW50KHRoaXMuY29tbWVudClcclxuXHRcdFx0XHRcdC5zdWJzY3JpYmUoZGF0YSA9PiBjb25zb2xlLmxvZyhkYXRhKSk7Ly8gRklYTUVcclxuXHRcdFx0fVxyXG5cdFx0fVxyXG5cdFx0dGhpcy5jb21tZW50Rm9ybS5yZXNldCgpO1xyXG5cdH1cclxufVxyXG4iXX0=
