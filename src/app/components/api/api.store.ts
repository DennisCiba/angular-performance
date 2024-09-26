import {
  patchState,
  signalStore,
  withComputed, withHooks,
  withMethods,
  withState,
} from '@ngrx/signals';
import { withEntities } from '@ngrx/signals/entities';
import { computed, inject } from '@angular/core';
import { RandomService } from '../../services/random.service';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { pipe, switchMap, tap } from 'rxjs';
import { People, StarWarsService } from '../../services/starwars.service';

interface starwarsViewModel {
  id: string;
  loading: boolean;
  currentCharacter: People;
}

const initialStarwarsViewModel: starwarsViewModel = {
  id: '',
  loading: false,
  currentCharacter: {
    name: 'Theo',
    gender: '',
    species: '',
  },
}

export const starwarsStore = signalStore(
  withEntities<starwarsViewModel>(),
  withState(initialStarwarsViewModel),
  withComputed((store) => ({
    genderLabel: computed(() => store.currentCharacter.gender() === 'n/a' ? 'unbekannt' : store.currentCharacter.gender()),
  })),
  withMethods(
    (
      store,
      service = inject(RandomService),
      starwarsService = inject(StarWarsService)
    ) => ({
      requestNewNumber: () => service.requestNewNumber(),
      loadCharacter: rxMethod<number>(
        pipe(
          switchMap(id =>
            id === 0
              ? starwarsService.requestPeopleById('1')
              : starwarsService.requestPeopleById(id.toString() ?? '1')
          ),
          tap((result) => console.log(result)),
          tap(result => patchState(store, { currentCharacter: result }))
        )
      ),
    })
  ),
  withHooks({
    onInit(store) {
      console.log('Store initialized', store.currentCharacter());
    }
  })
);
