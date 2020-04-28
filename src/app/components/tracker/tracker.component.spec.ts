import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackerComponent } from './tracker.component';
import { AppModule } from 'src/app/app.module';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { of } from "rxjs";
import { TrackerService } from '../service/tracker.service';


class usetrackerService {
  returnData = [{ "states": "Andaman and Nicobar Islands", "confirmed": 23, "active": 12, "recovered": 11, "deceased": 0, "subtasks": [{ "states": "North and Middle Andaman", "confirmed": 1, "active": 0, "recovered": 1, "deceased": 0 }, { "states": "South Andaman", "confirmed": 21, "active": 11, "recovered": 10, "deceased": 0 }, { "states": "Unknown", "confirmed": 1, "active": 1, "recovered": 0, "deceased": 0 }] }, { "states": "Andhra Pradesh", "confirmed": 955, "active": 781, "recovered": 145, "deceased": 29, "subtasks": [{ "states": "Anantapur", "confirmed": 46, "active": 31, "recovered": 11, "deceased": 4 }, { "states": "Chittoor", "confirmed": 73, "active": 62, "recovered": 11, "deceased": 0 }, { "states": "East Godavari", "confirmed": 34, "active": 26, "recovered": 8, "deceased": 0 }, { "states": "Guntur", "confirmed": 206, "active": 175, "recovered": 23, "deceased": 8 }, { "states": "Krishna", "confirmed": 102, "active": 70, "recovered": 25, "deceased": 7 }, { "states": "Kurnool", "confirmed": 261, "active": 249, "recovered": 4, "deceased": 8 }, { "states": "Prakasam", "confirmed": 53, "active": 52, "recovered": 1, "deceased": 0 }, { "states": "S.P.S. Nellore", "confirmed": 68, "active": 60, "recovered": 6, "deceased": 2 }, { "states": "Visakhapatnam", "confirmed": 22, "active": 3, "recovered": 19, "deceased": 0 }, { "states": "West Godavari", "confirmed": 39, "active": 30, "recovered": 9, "deceased": 0 }, { "states": "Y.S.R.", "confirmed": 51, "active": 23, "recovered": 28, "deceased": 0 }] }];
  constructor() { }
  getTrackerdata(params) {
    return of(this.returnData);
  }

}

describe('TrackerComponent', () => {
  let component: TrackerComponent;
  let fixture: ComponentFixture<TrackerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, AppModule],
      providers: [
        { provide: TrackerService, useClass: usetrackerService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrackerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should create', () => {
    component.ngOnInit();
  });
});
