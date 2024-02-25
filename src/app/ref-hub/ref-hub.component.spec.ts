import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RefHubComponent } from './ref-hub.component';

describe('RefHubComponent', () => {
  let component: RefHubComponent;
  let fixture: ComponentFixture<RefHubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RefHubComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RefHubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
