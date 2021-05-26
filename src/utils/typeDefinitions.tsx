export interface FormValuesType {
    [key:string]:string
}

export interface ObjectMap {
    [key:string]:string
}

export interface submitFormType {
    (values: FormValuesType):  void
}