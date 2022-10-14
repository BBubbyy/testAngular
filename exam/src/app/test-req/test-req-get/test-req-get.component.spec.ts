import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReqGetComponent } from './test-req-get.component';

describe('TestReqGetComponent', () => {
  let component: TestReqGetComponent;
  let fixture: ComponentFixture<TestReqGetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TestReqGetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TestReqGetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
