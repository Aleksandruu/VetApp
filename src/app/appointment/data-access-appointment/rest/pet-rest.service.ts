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

  getPets(): Observable<IPet[]> {
    return of(PETS);
  }

  addPet(pet: IPet): Observable<null> {
    let newPet = pet;
    newPet.id = PETS[PETS.length - 1].id + 1;
    PETS.push(newPet);
    return of(null);
  }
}
