import { IDoctor } from '../models/doctor.model';

export const DOCTORS: IDoctor[] = [
  {
    id: 1,
    name: 'Dr. John Doe',
    photoUrl: '../../../assets/doctors/doctor-1.jpg',
    type: 'Veterinary Dermatologist',
    rating: 4.5,
  },
  {
    id: 2,
    name: 'Dr. Sarah Johnson',
    photoUrl: '../../../assets/doctors/doctor-2.jpg',
    type: 'Veterinary Neurologist',
    rating: 4.9,
  },
  {
    id: 3,
    name: 'Dr. Michael Brown',
    photoUrl: '../../../assets/doctors/doctor-3.jpg',
    type: 'Veterinary Surgeon',
    rating: 4.7,
  },
];
