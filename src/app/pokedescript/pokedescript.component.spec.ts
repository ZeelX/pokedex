import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedescriptComponent } from './pokedescript.component';

describe('PokedescriptComponent', () => {
  let component: PokedescriptComponent;
  let fixture: ComponentFixture<PokedescriptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PokedescriptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PokedescriptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
