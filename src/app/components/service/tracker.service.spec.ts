import { TestBed,async } from '@angular/core/testing';

import { TrackerService } from './tracker.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppModule } from 'src/app/app.module';
import { APP_BASE_HREF } from "@angular/common";
import { HttpClient } from "@angular/common/http";

describe('TrackerService', () => {
  let service: TrackerService;
  let http: HttpClient;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, AppModule],
      providers: [{ provide: APP_BASE_HREF, useValue: "/" }]
    }).compileComponents();
  }));
  beforeEach(() => {
    service = TestBed.inject(TrackerService);
    http = TestBed.get(HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it("getTrackerdata should call ", () => {
    service.getTrackerdata();
  });
});
