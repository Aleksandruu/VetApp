import { Status } from './status.model';

export interface IAppointment {
  id: number;
  petName: string;
  date: Date;
  hour: number;
  doctorName: string;
  diagnosis?: string;
  status: Status.created;
}
