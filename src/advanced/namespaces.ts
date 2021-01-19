/// <reference path="myForm-namespaces.ts"/>

namespace MyForm {
  class MyFormWork {
    private status: FormStatus = "disactive";
    private type: FormType = "phone";

    constructor(public email: string) {}

    getInfo(): FormInfo {
      return {
        status: this.status,
        type: this.type,
      };
    }
  }

  export const myForm = new MyFormWork("123");
}
console.log(MyForm.myForm);
