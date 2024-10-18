import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardteamComponent } from './cardteam.component';

describe('CardteamComponent', () => {
  let component: CardteamComponent;
  let fixture: ComponentFixture<CardteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardteamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
