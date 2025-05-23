import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PolygonComponent } from './polygon.component';

describe('PolygonComponent', () => {
  let component: PolygonComponent;
  let fixture: ComponentFixture<PolygonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PolygonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PolygonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
