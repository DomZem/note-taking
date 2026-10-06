import { computed, Directive, input } from '@angular/core';
import { cn } from '../utils';

@Directive({
  selector: '[appCard]',
  host: {
    '[class]': 'computedClass()',
  },
})
export class CardDirective {
  userClass = input<string>('', {
    alias: 'class',
  });

  computedClass = computed(() =>
    cn(
      'border px-4 py-10 max-w-xl w-full bg-card md:px-8 md:py-12 rounded-xl flex flex-col items-center gap-4 lg:px-12 lg:py-12',
      this.userClass(),
    ),
  );
}
