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

// interface CompDecorator {
//   selector: string;
//   template: string;
// }

// function Bind(
//   _: any,
//   _2: any,
//   descriptor: PropertyDescriptor
// ): PropertyDescriptor {
//   const original = descriptor.value;

//   return {
//     configurable: true,
//     enumerable: false,
//     get() {
//      return original.bind(this);
//     },
//   };
// }

// function Comp(config: CompDecorator) {
//   return function <T extends { new (...args: any[]): object }>(Constructor: T) {
//     return class extends Constructor {
//       constructor(...args: any[]) {
//         super(...args);

//         const el = document.querySelector(config.selector)!;
//         el.innerHTML = config.template;
//       }
//     };
//   };
// }

// @Comp({
//   selector: ".container",
//   template: `
//     <div><h1>Card Title</h1></div>
//     `,
// })
// class MyComp {
//   constructor(public name: string) {}
//   @Bind
//   logName(): void {
//     console.log("Comonent name: ", this.name);
//   }
// }

// const comp = new MyComp("Card name");

// const btn = document.querySelector("#btn")!;

// btn.addEventListener("click", comp.logName);

// ===============================================

type ValidatorType = "required" | "email";

interface ValidatorConfig {
  [prop: string]: {
    [validateProp: string]: ValidatorType;
  };
}

const validators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  validators[target.constructor.name] = {
    ...target.constructor.name,
    [propName]: "required",
  };
}

function validate(obj: any): boolean {
  const objConfig = validators[obj.constructor.name];

  if (!objConfig) {
    return true;
  }

  let isValid = true;

  Object.keys(objConfig).forEach((key) => {
    if (objConfig[key] === "required") {
      isValid = isValid && !!obj[key];
    }

    return isValid;
  });

  return Boolean(obj.email);
}

class Form {
  @Required
  public email: string | void;

  constructor(email?: string) {
    this.email = email;
  }
}

const form = new Form('123');

if (validate(form)) {
  console.log("Validate success");
} else {
  console.log("Validation failed");
}

console.log(form);
