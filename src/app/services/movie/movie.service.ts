import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { getApiEndpoint } from '../../../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public http:HttpClient) { }

  getLatestMovie() {
    return this.http.get(getApiEndpoint("movie/latest"));
  }

  getPopularMovies(page = 1) {
    const endPoint = getApiEndpoint("movie/popular") + "&page=" + page;
    return this.http.get(endPoint);
  }

  getById(movieId:string) {
    return this.http.get(getApiEndpoint("movie/"+movieId));
  }
}
