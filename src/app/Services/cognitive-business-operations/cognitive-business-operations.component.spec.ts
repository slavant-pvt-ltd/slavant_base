import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CognitiveBusinessOperationsComponent } from './cognitive-business-operations.component';

describe('CognitiveBusinessOperationsComponent', () => {
  let component: CognitiveBusinessOperationsComponent;
  let fixture: ComponentFixture<CognitiveBusinessOperationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CognitiveBusinessOperationsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CognitiveBusinessOperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
