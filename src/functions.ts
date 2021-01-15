function add(a: number, b: number): number {
  return a + b;
}

function toLowerCase(str: string): string {
  return str.trim().toLowerCase();
}

const squared = (num: number): number => Math.pow(num, 2);

interface MyPosition {
  x: number | undefined;
  y: number | undefined;
}

interface MyPositionWithDefault extends MyPosition {
  default: string;
}

// function position(): MyPosition;
// function position(a: number): MyPositionWithDefault;
// function position(a: number, b: number): MyPosition;
// function position(a?: number, b?: number) {
//   if (!a && !b) {
//     return { x: undefined, y: undefined };
//   }

//   if (a && !b) {
//     return { x: a, y: undefined, default: a.toString() };
//   }

//   return { x: a, y: b };
// }

// console.log("Empty", position());
// console.log("A", position(42));
// console.log("A and B", position(24, 64));

