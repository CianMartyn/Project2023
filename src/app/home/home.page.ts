import { Component } from '@angular/core';
import { Browser } from '@capacitor/browser';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
standing: any;
standings: any;
  //browser plugin to url
  async openBrowser() {
    await Browser.open({ url: 'https://www.flashscore.com/' });
  };
}
