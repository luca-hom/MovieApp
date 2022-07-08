import {ComponentFixture, TestBed} from '@angular/core/testing';
import {By} from "@angular/platform-browser";

import {HomeComponent} from './home.component';
import {HttpClientTestingModule} from "@angular/common/http/testing";


describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [ HomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display container div', () => {
    expect(fixture.debugElement.query(By.css('.container'))).toBeTruthy();
  })

});
