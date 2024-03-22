import { HttpService } from "@nestjs/axios";
import { Injectable } from "@nestjs/common";
import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { firstValueFrom } from "rxjs";

@Injectable()
export class HttpClientService {
  constructor(private http: HttpService){}

  public async get$(url?: any, config?: AxiosRequestConfig): Promise<any>{
    const observable = this.http.get(url, config);

    try {
      const promise = await firstValueFrom(observable);
      return promise.data;
    } catch (error) {
      throw new Error(`Error occurred while making GET request: ${error.message}`);
    }
  }

  public async put$<T>(url: string, config: AxiosRequestConfig, data?: any): Promise<AxiosResponse<T>> {
    const observable = this.http.put(url, data, config);
    try {
      const promise = await firstValueFrom(observable);
      return promise;
    } catch (error) {
      throw new Error(`Error occurred while making POST request: ${error.message}`);
    }
  }

  public async post$<T>(url: string, config: AxiosRequestConfig, data?: any): Promise<AxiosResponse<T>> {
    const observable = this.http.post(url, data, config);

    try {
      const promise = await firstValueFrom(observable);
      return promise;
    } catch (error) {
      throw new Error(`Error occurred while making POST request: ${error.message}`);
    }
  }
}