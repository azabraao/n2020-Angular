import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarVideoComponent } from './editar-video.component';

describe('EditarVideoComponent', () => {
  let component: EditarVideoComponent;
  let fixture: ComponentFixture<EditarVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditarVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditarVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
