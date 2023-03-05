import { async, ComponentFixture, TestBed } from "@angular/core/testing";

import { ReviewStudentsComponent } from "./review-students.component";

describe("ReviewStudentsComponent", () => {
  let component: ReviewStudentsComponent;
  let fixture: ComponentFixture<ReviewStudentsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ReviewStudentsComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewStudentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
