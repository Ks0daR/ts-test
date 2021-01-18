// function Log(constructor: Function) {
//   console.log(constructor);
// }

// function Log2(target: any, propName: string | symbol): void {
//   console.log(target);
//   console.log(propName);
// }

// function Log3(
//   target: any,
//   propName: string | symbol,
//   descriptor: PropertyDescriptor
// ): void {
//   console.log(target);
//   console.log(propName);
//   console.log(descriptor);
// }

// @Log
// class MyClass {
//   @Log2
//   name: string;

//   @Log3
//   get className() {
//     return this.name;
//   }
//   constructor(name: string) {
//     this.name = name;
//   }

//   @Log3
//   logName(): void {
//     console.log("MyComponent:", this.name);
//   }
// }

interface CompDecorator {
  selector: string;
  template: string;
}

function Comp(config: CompDecorator) {
  return function <T extends { new (...args: any[]): object }>(Constructor: T) {
    return class extends Constructor {
      constructor(...args: any[]) {
        super(...args);

        const el = document.querySelector(config.selector)!;
        el.innerHTML = config.template;
      }
    };
  };
}

@Comp({
  selector: ".container",
  template: `
    <div><h1>Card Title</h1></div>
    `,
})
class MyComp {
  constructor(public name: string) {}

  logName(): void {
    console.log("Comonent name: ", this.name);
  }
}

const comp = new MyComp("Card name");
