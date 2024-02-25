import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatorModeComponent } from './creator-mode.component';

describe('CreatorModeComponent', () => {
  let component: CreatorModeComponent;
  let fixture: ComponentFixture<CreatorModeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreatorModeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreatorModeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
