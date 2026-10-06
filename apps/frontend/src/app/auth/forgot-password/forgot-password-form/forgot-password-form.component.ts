import { ButtonDirective } from '@/shared/button/button.directive';
import { FormErrorComponent } from '@/shared/form-error/form-error.component';
import { FormFieldDirective } from '@/shared/form-field/form-field.directive';
import { InputDirective } from '@/shared/input/input.directive';
import { LabelDirective } from '@/shared/label/label.directive';
import { Component, computed, signal } from '@angular/core';
import { email, form, FormField, required } from '@angular/forms/signals';

interface ForgotPasswordData {
  email: string;
}

@Component({
  imports: [
    InputDirective,
    LabelDirective,
    ButtonDirective,
    FormFieldDirective,
    FormErrorComponent,
    FormField,
  ],
  selector: 'app-forgot-password-form',
  templateUrl: './forgot-password-form.component.html',
  host: {
    class: 'w-full',
  },
})
export class ForgotPasswordFormComponent {
  forgotPasswordModel = signal<ForgotPasswordData>({
    email: '',
  });

  forgotPasswordForm = form(this.forgotPasswordModel, (schemaPath) => {
    required(schemaPath.email, {
      message: 'Email is required',
    });
    email(schemaPath.email, {
      message: 'Please enter a valid email address',
    });
  });

  emailError = computed(() => {
    const state = this.forgotPasswordForm.email();
    return state.touched() && state.errors()?.length ? state.errors()?.[0]?.message : null;
  });

  onSubmit(event: Event): void {
    event.preventDefault();

    // call the api service
  }
}
