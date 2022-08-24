import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivagesComponent } from './arrivages.component';

describe('ArrivagesComponent', () => {
  let component: ArrivagesComponent;
  let fixture: ComponentFixture<ArrivagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArrivagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
