import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GramaComponent } from './grama.component';

describe('GramaComponent', () => {
  let component: GramaComponent;
  let fixture: ComponentFixture<GramaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GramaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
