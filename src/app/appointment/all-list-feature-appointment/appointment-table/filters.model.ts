import { Status } from '@appointment/data-access-appointment/models/status.model';

export interface IFilter {
  petId: number;
  doctorId: number;
  date: Date | null;
  status: number;
}
