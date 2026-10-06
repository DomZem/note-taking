import { Component } from '@angular/core';
import { AuthViewComponent } from '../auth-view/auth-view.component';
import { LogoComponent } from '@/shared/logo/logo.component';
import { CardDirective } from '@/shared/card/card.directive';
import { TextPreset1Directive } from '@/shared/typography/text-preset-1.directive';
import { ForgotPasswordFormComponent } from './forgot-password-form/forgot-password-form.component';

@Component({
  imports: [
    AuthViewComponent,
    LogoComponent,
    CardDirective,
    TextPreset1Directive,
    ForgotPasswordFormComponent,
  ],
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
})
export class ForgotPasswordComponent {}
