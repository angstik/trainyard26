export type RailPoint = readonly [number, number];

function midpoint(one: RailPoint, two: RailPoint): RailPoint {
  return [(one[0] + two[0]) / 2, (one[1] + two[1]) / 2];
}

function quadraticPoint(start: RailPoint, control: RailPoint, end: RailPoint, t: number): RailPoint {
  const inverse = 1 - t;
  return [
    inverse * inverse * start[0] + 2 * inverse * t * control[0] + t * t * end[0],
    inverse * inverse * start[1] + 2 * inverse * t * control[1] + t * t * end[1],
  ];
}

export function sampleRailCenterline(
  incoming: RailPoint,
  cell: RailPoint,
  next: RailPoint,
  onward: RailPoint,
  progress: number,
): RailPoint {
  const sharedEdge = midpoint(cell, next);
  if (progress <= 0.5) {
    return quadraticPoint(midpoint(incoming, cell), cell, sharedEdge, progress + 0.5);
  }
  return quadraticPoint(sharedEdge, next, midpoint(next, onward), progress - 0.5);
}
