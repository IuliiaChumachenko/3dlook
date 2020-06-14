import { OnDestroy } from '@angular/core';

import { Subject } from 'rxjs';

export abstract class Unsubscribe implements OnDestroy {

  destroy$: Subject<boolean> = new Subject();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.complete();
  }
}
