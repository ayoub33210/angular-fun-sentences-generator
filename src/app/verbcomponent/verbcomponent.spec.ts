import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Verbcomponent } from './verbcomponent';

describe('Verbcomponent', () => {
  let component: Verbcomponent;
  let fixture: ComponentFixture<Verbcomponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Verbcomponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Verbcomponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
