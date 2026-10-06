import { Component } from '@angular/core';
import { AuthViewComponent } from '../auth-view/auth-view.component';
import { SignUpFormComponent } from './sign-up-form/sign-up-form.component';
import { LogoComponent } from '@/shared/logo/logo.component';
import { SeparatorDirective } from '@/shared/separator/separator.directive';
import { ButtonDirective } from '@/shared/button/button.directive';
import { TextPreset1Directive } from '@/shared/typography/text-preset-1.directive';
import { CardDirective } from '@/shared/card/card.directive';
import { RouterLink } from '@angular/router';

@Component({
  imports: [
    AuthViewComponent,
    SignUpFormComponent,
    LogoComponent,
    SeparatorDirective,
    ButtonDirective,
    TextPreset1Directive,
    CardDirective,
    RouterLink,
  ],
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
})
export class SignUpComponent {}
