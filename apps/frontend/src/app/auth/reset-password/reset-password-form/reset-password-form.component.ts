import { ButtonDirective } from '@/shared/button/button.directive';
import { FormErrorComponent } from '@/shared/form-error/form-error.component';
import { FormFieldDirective } from '@/shared/form-field/form-field.directive';
import { InputDirective } from '@/shared/input/input.directive';
import { LabelDirective } from '@/shared/label/label.directive';
import { Component, computed, signal } from '@angular/core';
import { form, FormField, required, validate } from '@angular/forms/signals';

interface ResetPasswordData {
  newPassword: string;
  confirmNewPassword: string;
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
  selector: 'app-reset-password-form',
  templateUrl: './reset-password-form.component.html',
})
export class ResetPasswordFormComponent {
  resetPasswordModel = signal<ResetPasswordData>({
    newPassword: '',
    confirmNewPassword: '',
  });

  resetPasswordForm = form(this.resetPasswordModel, (schemaPath) => {
    required(schemaPath.newPassword, {
      message: 'New password is required',
    });
    required(schemaPath.confirmNewPassword, {
      message: 'Confirm new password is required',
    });
    validate(schemaPath.confirmNewPassword, ({ value, valueOf }) => {
      const confirmPassword = value();
      const newPassword = valueOf(schemaPath.newPassword);

      if (confirmPassword && newPassword && confirmPassword !== newPassword) {
        return {
          kind: 'mismatch',
          message: 'Passwords do not match',
        };
      }

      return null;
    });
  });

  newPasswordError = computed(() => {
    const state = this.resetPasswordForm.newPassword();
    return state.touched() && state.errors()?.length ? state.errors()?.[0]?.message : null;
  });

  confirmNewPasswordError = computed(() => {
    const state = this.resetPasswordForm.confirmNewPassword();
    return state.touched() && state.errors()?.length ? state.errors()?.[0]?.message : null;
  });

  onSubmit(event: Event): void {
    event.preventDefault();

    // call the api service
  }
}
