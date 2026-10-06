import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LoginFormComponent } from './login-form/login-form.component';
import { SeparatorDirective } from '@/shared/separator/separator.directive';
import { ButtonDirective } from '@/shared/button/button.directive';
import { LogoComponent } from '@/shared/logo/logo.component';
import { CardDirective } from '@/shared/card/card.directive';
import { TextPreset1Directive } from '@/shared/typography/text-preset-1.directive';
import { AuthViewComponent } from '../auth-view/auth-view.component';

@Component({
  imports: [
    LoginFormComponent,
    RouterLink,
    LogoComponent,
    SeparatorDirective,
    ButtonDirective,
    CardDirective,
    TextPreset1Directive,
    AuthViewComponent,
  ],
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {}
