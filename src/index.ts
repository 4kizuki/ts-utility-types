export type Result<TValue, TError = Error> =
  | {
      success: true;
      value: TValue;
      error?: never;
    }
  | {
      success: false;
      value?: never;
      error: TError;
    };
