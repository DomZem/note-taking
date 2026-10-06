import { computed, Directive, input } from '@angular/core';
import { cn } from '../utils';

@Directive({
  selector: 'input[appInput]',
  host: {
    '[class]': 'computedClass()',
    '[attr.aria-invalid]': 'error() ? "true" : null',
  },
})
export class InputDirective {
  userClass = input<string>('', {
    alias: 'class',
  });
  error = input<boolean>(false);

  computedClass = computed(() =>
    cn(
      'h-11 w-full min-w-0 rounded-lg border border-border bg-input px-4 py-3 text-base transition-colors outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:bg-input/50 disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:disabled:bg-input/80 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40',
      this.userClass(),
    ),
  );
}
