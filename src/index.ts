import { canSchedule, SchedulerEvent } from './utils/scheduler';

const existingEvents: SchedulerEvent[] = [
  { startTime: 900, endTime: 1030 },
  { startTime: 1100, endTime: 1200 },
  { startTime: 1300, endTime: 1500 },
];

const newEvent = { startTime: 1000, endTime: 1130 };

console.log(canSchedule(existingEvents, newEvent));
