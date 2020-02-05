import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private baseUrl = 'http://localhost:8080/staff/';


  constructor(private http: HttpClient) { }

  getStaff(id: string): Observable<any> {
    console.log('MY  to detail: ' +  `${id}`);
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createStaff(staff: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, staff);
  }

  updateStaff(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteStaff(id: string): Observable<any> {
    console.log('MY ID to delete: ' +  `${id}`);
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getStaffsList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
