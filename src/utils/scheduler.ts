export type SchedulerEvent = { startTime: number; endTime: number };

export function canSchedule(existingEvents: SchedulerEvent[], newEvent: SchedulerEvent): boolean {
  // Sort by startTime for efficiency
  const sortedEvents = existingEvents.slice().sort((a, b) => a.startTime - b.startTime);

  for (const event of sortedEvents) {
    // Back-to-back is allowed: so strictly check overlap
    const noOverlap = newEvent.endTime <= event.startTime || newEvent.startTime >= event.endTime;
    if (!noOverlap) {
      return false; // Conflict detected
    }
  }

  return true; // No conflict
}
