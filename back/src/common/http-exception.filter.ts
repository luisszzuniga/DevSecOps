import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const status = exception.getStatus();
    const ex = exception.getResponse();
    let parseException: any;

    if (typeof ex === 'string') parseException = { message: ex };
    else parseException = ex;

    response.status(status).json({
      statusCode: status,
      error: parseException?.error,
      message: parseException?.message,
    });
  }
}