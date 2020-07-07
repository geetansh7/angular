import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicformgroupComponent } from './dynamicformgroup.component';

describe('DynamicformgroupComponent', () => {
  let component: DynamicformgroupComponent;
  let fixture: ComponentFixture<DynamicformgroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicformgroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicformgroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
