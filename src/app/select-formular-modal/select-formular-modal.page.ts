import { Component, OnInit } from '@angular/core';
import { NavParams } from '@ionic/angular';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-select-formular-modal',
  templateUrl: './select-formular-modal.page.html',
  styleUrls: ['./select-formular-modal.page.scss'],
})
export class SelectFormularModalPage implements OnInit {

  constructor(navParams: NavParams, public modalCtrl: ModalController) {
    // console.log(navParams.get('firstName'));
  }

  ngOnInit() {
  }

  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
