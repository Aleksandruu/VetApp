import { IAppointment } from '../models/appointment.model';
import { Status } from '../models/status.model';

export const APPOINTMENTS: IAppointment[] = [
  {
    id: 1000,
    petId: 1,
    date: new Date('2024-05-24'),
    hour: 9,
    doctorId: 1,
    diagnosis: '',
    status: Status.created,
  },
  {
    id: 1001,
    petId: 2,
    date: new Date('2024-05-24'),
    hour: 10,
    doctorId: 2,
    diagnosis: '',
    status: Status.created,
  },
  {
    id: 1002,
    petId: 3,
    date: new Date('2024-05-24'),
    hour: 11,
    doctorId: 1,
    diagnosis: '',
    status: Status.inProgress,
  },
  {
    id: 1003,
    petId: 4,
    date: new Date('2024-05-25'),
    hour: 9,
    doctorId: 3,
    diagnosis: '',
    status: Status.closed,
  },
  {
    id: 1004,
    petId: 5,
    date: new Date('2024-05-25'),
    hour: 10,
    doctorId: 1,
    diagnosis: '',
    status: Status.created,
  },
  {
    id: 1005,
    petId: 6,
    date: new Date('2024-05-26'),
    hour: 9,
    doctorId: 2,
    diagnosis: '',
    status: Status.created,
  },
  {
    id: 1006,
    petId: 7,
    date: new Date('2024-05-26'),
    hour: 10,
    doctorId: 3,
    diagnosis: '',
    status: Status.created,
  },
  {
    id: 1007,
    petId: 8,
    date: new Date('2024-05-27'),
    hour: 9,
    doctorId: 2,
    diagnosis: '',
    status: Status.created,
  },
  {
    id: 1008,
    petId: 1,
    date: new Date('2024-05-27'),
    hour: 10,
    doctorId: 3,
    diagnosis: '',
    status: Status.created,
  },
  {
    id: 1009,
    petId: 2,
    date: new Date('2024-05-28'),
    hour: 9,
    doctorId: 2,
    diagnosis: '',
    status: Status.created,
  },
  {
    id: 1010,
    petId: 3,
    date: new Date('2024-05-28'),
    hour: 10,
    doctorId: 1,
    diagnosis: '',
    status: Status.created,
  },
  {
    id: 1011,
    petId: 4,
    date: new Date('2024-05-29'),
    hour: 9,
    doctorId: 3,
    diagnosis: '',
    status: Status.created,
  },
  {
    id: 1012,
    petId: 5,
    date: new Date('2024-05-29'),
    hour: 10,
    doctorId: 3,
    diagnosis: '',
    status: Status.created,
  },
  {
    id: 1013,
    petId: 6,
    date: new Date('2024-05-30'),
    hour: 9,
    doctorId: 3,
    diagnosis: '',
    status: Status.created,
  },
  {
    id: 1014,
    petId: 7,
    date: new Date('2024-05-30'),
    hour: 10,
    doctorId: 2,
    diagnosis: '',
    status: Status.created,
  },
  {
    id: 1015,
    petId: 8,
    date: new Date('2024-05-31'),
    hour: 9,
    doctorId: 1,
    diagnosis: '',
    status: Status.created,
  },
  {
    id: 1016,
    petId: 1,
    date: new Date('2024-05-31'),
    hour: 10,
    doctorId: 2,
    diagnosis: '',
    status: Status.created,
  },
  {
    id: 1017,
    petId: 1,
    date: new Date('2024-06-01'),
    hour: 9,
    doctorId: 1,
    diagnosis: '',
    status: Status.created,
  },
  {
    id: 1018,
    petId: 2,
    date: new Date('2024-06-01'),
    hour: 10,
    doctorId: 1,
    diagnosis: '',
    status: Status.created,
  },
  {
    id: 1019,
    petId: 3,
    date: new Date('2024-06-02'),
    hour: 9,
    doctorId: 2,
    diagnosis: '',
    status: Status.created,
  },
];