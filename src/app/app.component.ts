import { Component, OnInit } from '@angular/core';
import { Browser } from '@capacitor/browser';
import { Storage } from '@ionic/storage-angular';
//import { FootballApiService } from 'azharimm-football-standings-api-f8dbfbf/src/controllers';
import { NavController} from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {
  myStatus:string = ""; 
  

 
  //browser plugin to url
async openBrowser() {
    await Browser.open({ url: 'https://www.flashscore.com/' });
  };

  constructor(private str:Storage, private navCtrl:NavController) {}
  
  ngOnInit() {

  } 
  //Navigating forwards
  openPage(){
    this.navCtrl.navigateForward('/john');
  }
//storage
async onSave() {
  await this.str.create();
  await this.str.set("Status", this.myStatus);

}
}