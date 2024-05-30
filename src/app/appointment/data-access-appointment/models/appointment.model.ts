import { Status } from './status.model';

export interface IAppointment {
  id: number;
  petId: number;
  date: Date;
  hour: number;
  doctorId: number;
  diagnosis?: string;
  status: Status;
}
