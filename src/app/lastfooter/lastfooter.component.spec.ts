import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastfooterComponent } from './lastfooter.component';

describe('LastfooterComponent', () => {
  let component: LastfooterComponent;
  let fixture: ComponentFixture<LastfooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LastfooterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LastfooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
