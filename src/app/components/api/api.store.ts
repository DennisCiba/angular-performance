import {
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { computed, inject } from '@angular/core';
import { RandomService } from '../../services/random.service';

interface starwarsViewModel {
  name: string;
  id: string;

  signalSource: boolean;
}

export const starwarsStore = signalStore(
  withEntities<starwarsViewModel>(),
  withState({ name: '', id: '', signalSource: true }),
  withComputed((store, service = inject(RandomService)) => ({
    source: computed(() => (store.signalSource() ? store.id : service.number$)),
  })),
  withMethods((store, service = inject(RandomService)) => ({
    requestNewNumber: () => service.requestNewNumber(),
  }))
);
