import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  private config = {
    show_slide: false,
    name: "",
    user_name: "" 
  }

  constructor() { }

  getConfigData(): any {
    return localStorage.getItem(environment.storage_config_name);
  }

  setConfigData(showSlide?:boolean, name?:string, userName?:string) {
    let config = {
      show_slide: false,
      name: "",
      user_name: "" 
    };
    if (showSlide) {
      config.show_slide = showSlide;
    }
    if (name) {
      config.name = name;
    }
    if (userName) {
      config.user_name = userName;
    }

    localStorage.setItem("config", JSON.stringify(environment.storage_config_name));
  }
}
