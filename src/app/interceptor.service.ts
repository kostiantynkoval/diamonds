import { Injectable } from '@angular/core';
import {
  Http,
  ConnectionBackend,
  RequestOptions,
  RequestOptionsArgs,
  Response,
  Headers,
  Request
} from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
//import { environment } from '../environments/environment';


@Injectable()
export class HttpInterceptor extends Http {

  constructor(
    backend: ConnectionBackend,
    defaultOptions: RequestOptions,
  ) {
    super(backend, defaultOptions);
  }

  /**
   * Performs a request with `get` http method.
   * @param url
   * @param options
   * @returns {Observable<>}
   */
  get(url: string, options?: RequestOptionsArgs): Observable<any> {
    this.beforeRequest();
    return super.get(url, this.requestOptions(options))
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  /**
   * Performs a request with `post` http method.
   * @param url
   * @param url
   * @param options
   * @returns {Observable<>}
   */
  post(url: string, data:any, options?: RequestOptionsArgs): Observable<any> {
    this.beforeRequest();
    return super.post(url, data, this.requestOptions(options))
      .catch(this.onCatch)
      .do((res: Response) => {
        this.onSuccess(res);
      }, (error: any) => {
        this.onError(error);
      })
      .finally(() => {
        this.onFinally();
      });
  }

  /**
   * Request options.
   * @param options
   * @returns {RequestOptionsArgs}
   */
  private requestOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }

    if (localStorage.getItem('token')) {
      options.headers.append('Authorization', localStorage.getItem('token'))
    }

    return options;
  }

  /**
   * Before any Request.
   */
  private beforeRequest(): void {
    console.log('Before');
    //this.notifyService.showPreloader();
  }

  /**
   * After any request.
   */
  private afterRequest(): void {
    console.log('After');
    //this.notifyService.hidePreloader();
  }

  /**
   * Error handler.
   * @param error
   * @param caught
   * @returns {ErrorObservable}
   */
  private onCatch(error: any, caught: Observable<any>): Observable<any> {
    //this.notifyService.popError();
    return Observable.throw(error);
  }

  /**
   * onSuccess
   * @param res
   */
  private onSuccess(res: Response): void {
    console.log(res);
  }

  /**
   * onError
   * @param error
   */
  private onError(error: any): void {
    //this.notifyService.popError();
  }

  /**
   * onFinally
   */
  private onFinally(): void {
    this.afterRequest();
  }
}