export class EasyClientError {

  public code: number;
  public message: string;

  public static notFound(): EasyClientError {
    const error = new EasyClientError();
    error.code = 404;
    error.message = 'ResourceNotFound';
    return error;
  }
}
