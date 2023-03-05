import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ReviewStudentsComponent } from "./review-students/review-students.component";
import { RegisterStudentComponent } from "./register-student/register-student.component";
import { UpdateStudentComponent } from "./update-student/update-student.component";

const routes: Routes = [
  { path: "", redirectTo: "review-students", pathMatch: "full" },
  { path: "review-students", component: ReviewStudentsComponent },
  { path: "register-student", component: RegisterStudentComponent },
  { path: "update-student", component: UpdateStudentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
