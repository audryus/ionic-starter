import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [MovieService]
})
export class FeedPage implements OnInit {
  lista_filmes:Array<any>;

  constructor(public movieService:MovieService) { }

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe(data => {
      const response = (data as any)
      this.lista_filmes = response.results;
    }, error => {
      console.log(error);
    })
  }

}
