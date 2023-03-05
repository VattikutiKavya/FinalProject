import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-update-student",
  templateUrl: "./update-student.component.html",
  styleUrls: ["./update-student.component.css"],
})
export class UpdateStudentComponent implements OnInit {
  data: any = [];
  constructor() {}

  ngOnInit(): void {
    // console.log(window.history.state, "data");
    this.data = window.history.state;
  }
  onSubmit(name) {
    console.log("testing", name);
  }
}
