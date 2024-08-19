export type FormState<T> =
  | {
      errors?: T
    }
  | undefined
