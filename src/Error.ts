export class DeccaApiError extends Error {
  constructor(message: string) {
    super(message);

    this.name = 'DeccaApiError';

    Error.captureStackTrace(this, this.constructor);
  }
}
