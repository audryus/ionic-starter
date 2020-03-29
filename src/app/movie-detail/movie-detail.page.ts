import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from "@angular/router";
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.page.html',
  styleUrls: ['./movie-detail.page.scss'],
})
export class MovieDetailPage implements OnInit {

  filme:any;

  constructor(public movieService:MovieService,
    public route: ActivatedRoute) { }

  ngOnInit() {
  }

  ionViewDidEnter() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      if (paramMap.has("movieId")) {
        const movieId = paramMap.get("movieId");
        this.movieService.getById(movieId).subscribe(data => {
          const response = (data as any)
          debugger
          this.filme = response;
        }, error => {
          console.log(error);
        });
      }
    });
  }

}
