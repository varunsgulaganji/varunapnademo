import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CauroselhomeComponent } from './cauroselhome.component';

describe('CauroselhomeComponent', () => {
  let component: CauroselhomeComponent;
  let fixture: ComponentFixture<CauroselhomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CauroselhomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CauroselhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
