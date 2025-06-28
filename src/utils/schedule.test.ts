import { canSchedule, SchedulerEvent } from './scheduler';

describe('canSchedule', () => {
  const existingEvents: SchedulerEvent[] = [
    { startTime: 900, endTime: 1030 },
    { startTime: 1100, endTime: 1200 },
    { startTime: 1300, endTime: 1500 },
  ];

  it('returns false if the new event overlaps an existing one', () => {
    const newEvent = { startTime: 1000, endTime: 1130 };
    expect(canSchedule(existingEvents, newEvent)).toBe(false);
  });

  it('returns true if the new event is back-to-back', () => {
    const newEvent = { startTime: 1200, endTime: 1230 };
    expect(canSchedule(existingEvents, newEvent)).toBe(true);
  });

  it('returns true if the new event is before all others', () => {
    const newEvent = { startTime: 800, endTime: 850 };
    expect(canSchedule(existingEvents, newEvent)).toBe(true);
  });

  it('returns false for exact overlap', () => {
    const newEvent = { startTime: 1100, endTime: 1200 };
    expect(canSchedule(existingEvents, newEvent)).toBe(false);
  });
});
