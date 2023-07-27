const baseRange = function* (start = 0, end = 0, step = 1) {
  let index = 0;
  const length = Math.floor((end - start) / step) + 1;
  while (index < length) {
    yield start + index++ * step;
  }
};

export function range(
  first: number,
  limit?: number,
  interval?: number
): Generator<number, void, unknown> {
  let start = first;
  let end = limit;
  let step = interval;

  if (end === undefined) {
    end = start - 1;
    start = 0;
  } else {
    end = start < end ? end - 1 : end + 1;
  }

  if (step === undefined) {
    step = start < end! ? 1 : -1;
  }
  return baseRange(start, end, step);
}
