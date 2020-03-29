import { Component, OnInit } from '@angular/core';
import { IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { Router } from '@angular/router';

import { MovieService } from '../services/movie/movie.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
  providers: [MovieService]
})
export class FeedPage implements OnInit {
  lista_filmes:Array<any> = [];
  loader:HTMLIonLoadingElement;
  refresher:HTMLIonRefresherElement;
  isRefreshing:boolean = false;

  infiniteScroll: IonInfiniteScroll;
  page = 1;

  constructor(public movieService:MovieService, 
    public loadingController: LoadingController,
    private route: Router) { }

  ngOnInit() { }

  ionViewDidEnter() {
    this.loadFeed();
  }

  private loadFeed(newPage?:boolean) {
    this.presentLoading().then(() => {
      this.movieService.getPopularMovies(this.page).subscribe(data => {
        const response = (data as any);
        if (newPage) {
          this.lista_filmes = this.lista_filmes.concat(response.results);
        } else {
          this.lista_filmes = response.results;
        }
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
    if (this.isRefreshing) {
      await this.refresher.complete();
      this.isRefreshing = false;
    }
    if (this.infiniteScroll) {
      this.infiniteScroll.complete();
    }
    return await this.loader.dismiss();
  }

  doRefresh(event) {
    this.refresher = event.target;
    this.isRefreshing = true;
    this.loadFeed();
  }

  loadMore(event) {
    this.page++;
    this.infiniteScroll = event.target;
    this.loadFeed(true);
  }

  moreDetail(movieId:number) {
    this.route.navigate(['/movie/'+movieId]);
  }

}
