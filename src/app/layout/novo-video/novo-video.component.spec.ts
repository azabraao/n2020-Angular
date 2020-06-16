import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoVideoComponent } from './novo-video.component';

describe('NovoVideoComponent', () => {
  let component: NovoVideoComponent;
  let fixture: ComponentFixture<NovoVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NovoVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
