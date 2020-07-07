import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestingPageComponent } from './testing-page.component';

describe('TestingPageComponent', () => {
  let component: TestingPageComponent;
  let fixture: ComponentFixture<TestingPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestingPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

describe('TestingPageComponent', () => {
let component: TestingPageComponent;
beforeEach(() => {
    component = new TestingPageComponent();
});
  it('should have value Beginner', () => {
    const title = component.title; 
    expect(title).toBe('Beginner');
  });
  it('should have value 1', () => {
    expect(component.compute()).toBe(1);
  });
  it('should have value 1', () => {
    expect(component.compute()).toBe(1);
  });
  it('should contain IND', () => {
    component.addCountry('IND');
    expect(component.getCountries()).toContain('IND');
  });
});
