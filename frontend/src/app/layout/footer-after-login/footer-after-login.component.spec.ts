import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterAfterLoginComponent } from './footer-after-login.component';

describe('FooterAfterLoginComponent', () => {
  let component: FooterAfterLoginComponent;
  let fixture: ComponentFixture<FooterAfterLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FooterAfterLoginComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FooterAfterLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
