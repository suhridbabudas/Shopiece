import { Injectable } from '@angular/core';
import { APIQuery } from 'src/app-custom-library/app-common-interfaces/APIQuery';
import { AppApiService } from '../app-http-service/app-api.service';
import { LoginResponse } from '../../app-common-interfaces/LoginResponse';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppAuthService {
  constructor(
    private apiService: AppApiService,) {}

  authLogin<T>(apiParam: APIQuery<T>) {
    this.apiService
      .post(apiParam)
      .subscribe({
        next: (res: Partial<Observable<LoginResponse>>) => {
          const user = {...res};
          localStorage.setItem('user', JSON.stringify(user.))
        },
        error: (err: Error) => {
          console.error(err);
        }
      });
  }
}
