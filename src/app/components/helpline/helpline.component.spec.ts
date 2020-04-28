import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HelplineComponent } from './helpline.component';
import { AppModule } from 'src/app/app.module';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe('HelplineComponent', () => {
  let component: HelplineComponent;
  let fixture: ComponentFixture<HelplineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule, AppModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HelplineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
