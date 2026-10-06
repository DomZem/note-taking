import { Component, computed, input } from '@angular/core';
import { cn } from '../utils';

@Component({
  selector: 'app-form-error',
  templateUrl: './form-error.component.html',
})
export class FormErrorComponent {
  message = input<string>();

  userClass = input<string>('', { alias: 'class' });

  computedClass = computed(() =>
    cn('flex items-center gap-2 text-destructive text-xs', this.userClass()),
  );
}
