import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ERUComponent } from './eru.component';

describe('ERUComponent', () => {
  let component: ERUComponent;
  let fixture: ComponentFixture<ERUComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ERUComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ERUComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
