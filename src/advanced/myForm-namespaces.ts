namespace MyForm {
  export type FormStatus = "active" | "disactive";
  export type FormType = "phone" | "number";

  export interface FormInfo {
    status: FormStatus;
    type: FormType;
  }
}
