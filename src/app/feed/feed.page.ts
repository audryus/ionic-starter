import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [MovieService]
})
export class FeedPage implements OnInit {
  lista_filmes:Array<any>;
  loader:HTMLIonLoadingElement;

  constructor(public movieService:MovieService, 
    public loadingController: LoadingController) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.presentLoading().then(() => {
      this.movieService.getPopularMovies().subscribe(data => {
        const response = (data as any)
        this.lista_filmes = response.results;
        this.closeLoading();
      }, error => {
        console.log(error);
        this.closeLoading();
      });

    });
  }

  async presentLoading():Promise<void> {
    this.loader = await this.loadingController.create({
      message: 'Please wait...'
    });
    return await this.loader.present();
  }

  async closeLoading():Promise<boolean> {
    return await this.loader.dismiss();
  }

}
