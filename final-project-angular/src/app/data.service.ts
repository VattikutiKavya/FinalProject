import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DataService {
  private API_URL = "http://localhost:3000";

  constructor(private httpClient: HttpClient) {}

  public getAllStudentsData() {
    return this.httpClient.get(`${this.API_URL}/find-all-students`);
  }

  public addStudents(data) {
    return this.httpClient.post(`${this.API_URL}/add-student`, data);
  }
  public updateStudent(data) {
    return this.httpClient.post(`${this.API_URL}/update-student`, data);
  }
  public findStudent() {
    return this.httpClient.get(`${this.API_URL}/find-student`);
  }
  public deleteStudent(data) {
    return this.httpClient.delete(`${this.API_URL}/delete-student`, data);
  }
}
