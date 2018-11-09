import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoidSectionComponent } from './void-section.component';

describe('VoidSectionComponent', () => {
  let component: VoidSectionComponent;
  let fixture: ComponentFixture<VoidSectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoidSectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoidSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
