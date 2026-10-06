import { ButtonDirective } from '@/shared/button/button.directive';
import { FormErrorComponent } from '@/shared/form-error/form-error.component';
import { FormFieldDirective } from '@/shared/form-field/form-field.directive';
import { InputDirective } from '@/shared/input/input.directive';
import { LabelDirective } from '@/shared/label/label.directive';
import { Component, computed, signal } from '@angular/core';
import { email, form, FormField, minLength, required, validate } from '@angular/forms/signals';

interface SignUpData {
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  imports: [
    LabelDirective,
    InputDirective,
    ButtonDirective,
    FormFieldDirective,
    FormField,
    FormErrorComponent,
  ],
  selector: 'app-sign-up-form',
  templateUrl: './sign-up-form.component.html',
})
export class SignUpFormComponent {
  signUpModel = signal<SignUpData>({
    email: '',
    password: '',
    confirmPassword: '',
  });

  signUpForm = form(this.signUpModel, (schemaPath) => {
    required(schemaPath.email, {
      message: 'Email is required',
    });
    email(schemaPath.email, {
      message: 'Please enter a valid email address',
    });
    required(schemaPath.password, {
      message: 'Password is required',
    });
    minLength(schemaPath.password, 8, {
      message: 'Password must be at least 8 characters long',
    });
    required(schemaPath.confirmPassword, {
      message: 'Please confirm your password',
    });
    validate(schemaPath.confirmPassword, ({ value, valueOf }) => {
      const confirmPassword = value();
      const password = valueOf(schemaPath.password);

      if (confirmPassword && password && confirmPassword !== password) {
        return {
          kind: 'mismatch',
          message: 'Passwords do not match',
        };
      }

      return null;
    });
  });

  emailError = computed(() => {
    const state = this.signUpForm.email();
    return state.touched() && state.errors()?.length ? state.errors()?.[0]?.message : null;
  });

  passwordError = computed(() => {
    const state = this.signUpForm.password();
    return state.touched() && state.errors()?.length ? state.errors()?.[0]?.message : null;
  });

  confirmPasswordError = computed(() => {
    const state = this.signUpForm.confirmPassword();
    return state.touched() && state.errors()?.length ? state.errors()?.[0]?.message : null;
  });

  onSubmit(event: Event): void {
    event.preventDefault();

    // call the api service
  }
}
