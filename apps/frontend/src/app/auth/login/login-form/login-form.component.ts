import { Component, computed, signal } from '@angular/core';

import { LabelDirective } from '@/shared/label/label.directive';
import { InputDirective } from '@/shared/input/input.directive';
import { ButtonDirective } from '@/shared/button/button.directive';
import { FormFieldDirective } from '@/shared/form-field/form-field.directive';
import { email, form, FormField, required } from '@angular/forms/signals';
import { FormErrorComponent } from '@/shared/form-error/form-error.component';
import { RouterLink } from '@angular/router';

interface LoginData {
  email: string;
  password: string;
}

@Component({
  imports: [
    ButtonDirective,
    LabelDirective,
    InputDirective,
    FormFieldDirective,
    FormField,
    RouterLink,
    FormErrorComponent,
  ],
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
})
export class LoginFormComponent {
  loginModel = signal<LoginData>({
    email: '',
    password: '',
  });

  loginForm = form(this.loginModel, (schemaPath) => {
    required(schemaPath.email, {
      message: 'Email is required',
    });
    email(schemaPath.email, {
      message: 'Please enter a valid email address',
    });
    required(schemaPath.password, {
      message: 'Password is required',
    });
  });

  emailError = computed(() => {
    const state = this.loginForm.email();
    return state.touched() && state.errors()?.length ? state.errors()?.[0]?.message : null;
  });

  passwordError = computed(() => {
    const state = this.loginForm.password();

    return state.touched() && state.errors()?.length ? state.errors()?.[0]?.message : null;
  });

  onSubmit(event: Event): void {
    event.preventDefault();

    // call the api serivce
  }
}
