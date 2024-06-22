import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseSolutionComponent } from './enterprise-solution.component';

describe('EnterpriseSolutionComponent', () => {
  let component: EnterpriseSolutionComponent;
  let fixture: ComponentFixture<EnterpriseSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EnterpriseSolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EnterpriseSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
