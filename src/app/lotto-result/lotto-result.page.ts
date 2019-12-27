import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { SelectFormularModalPage } from '../select-formular-modal/select-formular-modal.page';

@Component({
  selector: 'app-lotto-result',
  templateUrl: './lotto-result.page.html',
  styleUrls: ['./lotto-result.page.scss'],
})
export class LottoResultPage implements OnInit {

  rounds = [];

  constructor(public modalController: ModalController) { }

  ngOnInit() {
    for (let i = 1; i <= 88; i++) {
      this.rounds.push(i);
    }
  }

  async selectFormular() {
    const modal = await this.modalController.create({
      component: SelectFormularModalPage
    });
    return await modal.present();
  }

}
