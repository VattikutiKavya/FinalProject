import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ReviewStudentsComponent } from "./review-students/review-students.component";
import { RegisterStudentComponent } from "./register-student/register-student.component";
import { UpdateStudentComponent } from "./update-student/update-student.component";

@NgModule({
  declarations: [
    AppComponent,
    ReviewStudentsComponent,
    RegisterStudentComponent,
    UpdateStudentComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
