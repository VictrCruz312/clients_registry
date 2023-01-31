class AppError extends Error {
  status: number;
  errors?: Array<string>;

  constructor(message: string, statusCode: number, errors?: Array<string>) {
    super();

    this.message = message;
    this.status = statusCode;
    this.errors = errors;
  }
}

export { AppError };
