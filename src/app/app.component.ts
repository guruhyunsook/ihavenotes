import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'note';

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyDC1vtdoF9KPe1cvzytmf6Y0xDtkqL_5fU",
      authDomain: "ng-shop-01.firebaseapp.com"
    });
  }

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
