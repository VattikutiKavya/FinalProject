import { Component, OnInit } from "@angular/core";
import { DataService } from "../data.service";

@Component({
  selector: "app-review-students",
  templateUrl: "./review-students.component.html",
  styleUrls: ["./review-students.component.css"],
})
export class ReviewStudentsComponent implements OnInit {
  data: any = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.getAllStudentsData();
  }
  getAllStudentsData() {
    this.dataService.getAllStudentsData().subscribe((response: any) => {
      this.data = response?.response;
      console.log("all students", this.data);
    });
  }
  addStudents(data) {
    this.dataService.addStudents(data).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  updateStudent(data) {
    this.dataService.updateStudent(data).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  findStudent() {
    this.dataService.findStudent().subscribe((response: any) => {
      this.data = response?.response;
    });
  }
  deleteStudent(data: string) {
    this.dataService.deleteStudent(data).subscribe((response: any) => {
      this.data = response?.response;
    });
  }
}
