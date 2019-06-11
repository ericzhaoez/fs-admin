import { Injectable } from '@angular/core';
import { Property } from '../models/property';
import { HttpClient } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class PropertyService {

  // properties: Array<Property>;

  constructor(
    private httpClient: HttpClient
  ) {}

  // getProperties(): Array<Properties> {
  //   return this.properties;
  // }

  getAllProperties(assign: Function) {
    this.httpClient.get('http://localhost:3000/api/properties/').subscribe((response: Array<Property>) => {
      assign(response);
    });
  }
}