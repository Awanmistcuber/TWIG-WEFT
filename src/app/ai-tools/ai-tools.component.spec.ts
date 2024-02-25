import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AiToolsComponent } from './ai-tools.component';

describe('AiToolsComponent', () => {
  let component: AiToolsComponent;
  let fixture: ComponentFixture<AiToolsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AiToolsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AiToolsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
