const str: string = "hello ts";
const isFetch: boolean = false;
const int: number = 42;

const arrNum: number[] = [1, 1, 2, 3, 5, 8];
const arrNum2: Array<number> = [1, 1, 2, 3, 5, 8]; // дженерик тип

const wordsArr: string[] = ["hello", "ts", "world"];

//Tupple

const credential: [string, number] = ["kyiv", 12345];

//Any

let vars: any = 42;

vars = "World";
vars = [];

function sayName(name: string): void {
  console.log(name);
}

sayName("Sheva");

// Never

function throwErr(message: string): never {
  throw new Error(message);
}

// Type

type Login = string;

const login: Login = "user";
// const login2: Login = 2

type ID = string | number;

const id1: ID = 123;
const id2: ID = "qwe";

type SomeType = string | null | undefined;
