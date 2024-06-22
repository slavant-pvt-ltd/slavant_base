import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapitalMarkComponent } from './capital-mark.component';

describe('CapitalMarkComponent', () => {
  let component: CapitalMarkComponent;
  let fixture: ComponentFixture<CapitalMarkComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapitalMarkComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CapitalMarkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
