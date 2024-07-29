import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { busBusiness } from '../service/bussines/bus.business';

@Component({
  selector: 'app-mapbus',
  templateUrl: './mapbus.page.html',
  styleUrls: ['./mapbus.page.scss'],
})
export class MapbusPage implements OnInit {
  linha= '';
  sentido= '';
  
  constructor(
    private navCtrl: NavController,
    private olho: busBusiness
  ) { }

  ngOnInit() {
  }

  async request() {
    try {
      this.olho.ObterToken();
      console.log('Token obtido');
  
      const olho = await this.olho.busca();
      console.log('olho', olho);
    } catch (error) {
      console.error('Erro na requisição:', error);
    }
  }

  async pesquisaParametro(){
    const pesquisa = this.olho.buscaComSentido(this.linha, this.sentido);
    console.log(pesquisa);
  }

}
