import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactComponent } from './contact.component';
import { DebugElement } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserModule, By } from '@angular/platform-browser';

describe('ContactComponent', () => {
  let component: ContactComponent;
  let fixture: ComponentFixture<ContactComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  // * We use beforeEach so our tests are run in isolation
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactComponent ],
      imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule
      ]
    })
    .compileComponents().then(() => {
      fixture = TestBed.createComponent(ContactComponent);
      component = fixture.componentInstance;
      de = fixture.debugElement.query(By.css('form'));
      el = de.nativeElement;
      fixture.detectChanges();
    })
  }));

  it(`should have as text 'contact page'`, async(() => {
    expect(component.text).toEqual('Contact page');
  }));

  it(`should set submitted to true`, async(() => {
    component.onSubmit();
    expect(component.submitted).toBeTruthy();
  }));

  it(`should get atleast one user'`, async(() => {
    // expect(component.users.length).toEqual(0);
    expect(component.users.length).toBeGreaterThan(0);
  }));

  it(`form should be invalid`, async(() => {
    component.contactForm.controls['email'].setValue('');
    component.contactForm.controls['name'].setValue('');
    component.contactForm.controls['text'].setValue('');
    expect(component.contactForm.valid).toBeFalsy();
  }));

  it(`form should be valid`, async(() => {
    component.contactForm.controls['email'].setValue('csk@gmail.com');
    component.contactForm.controls['name'].setValue('iris');
    component.contactForm.controls['text'].setValue('Testing');
    expect(component.contactForm.valid).toBeTruthy();
  }));

});
