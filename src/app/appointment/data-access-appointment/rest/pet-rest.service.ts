import { Injectable } from '@angular/core';
import { IPet } from '../models/pet.model';
import { Observable, of } from 'rxjs';
import { PETS } from '../data/pets.data';

@Injectable({
  providedIn: 'root',
})
export class PetRestService {
  constructor() {}

  getPetByID(id: number): Observable<IPet> {
    const pet = PETS.find((pet) => {
      return pet.id === id;
    });
    return of(pet!);
  }
}
