interface Rect {
  readonly id: string;
  color?: string;
  size: {
    width: number;
    heigth: number;
  };
}

const rect1: Rect = {
  id: "123",
  size: {
    width: 43,
    heigth: 32,
  },
};

rect1.color = "green";
const rect2 = {} as Rect;
const rect3 = <Rect>{};

// ==================

interface RectWithArea extends Rect {
  getArea: () => number;
}

const rect4: RectWithArea = {
  id: "432",
  size: {
    width: 21,
    heigth: 42,
  },
  getArea(): number {
    return this.size.width * this.size.heigth;
  },
};

console.log(rect4.getArea());

// =========================

interface IClock {
  time: Date;
  setTime(date: Date): void;
}

class Clock implements IClock {
  time: Date = new Date();

  setTime(date: Date): void {
    this.time = date;
  }
}

// =========================
interface Styles {
  [key: string]: string;
}

const css: Styles = {
  border: "1px solid green",
  marginTop: "10px",
  borderRadius: "10px",
};
