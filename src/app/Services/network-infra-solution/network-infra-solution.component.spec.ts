import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NetworkInfraSolutionComponent } from './network-infra-solution.component';

describe('NetworkInfraSolutionComponent', () => {
  let component: NetworkInfraSolutionComponent;
  let fixture: ComponentFixture<NetworkInfraSolutionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NetworkInfraSolutionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NetworkInfraSolutionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
