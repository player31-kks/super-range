export function* range(start: number, end?: number, step?: number) {
  if (end === undefined) {
    end = start;
    start = 0;
  }

  if (step === undefined) {
    step = start < end! ? 1 : -1;
  }

  if ((start < end && step < 0) || (start > end && step > 0)) {
    return; // Empty generator if start and end are going in opposite directions.
  }

  let current = start;
  while ((step > 0 && current < end) || (step < 0 && current > end)) {
    yield current;
    current += step;
  }
}
