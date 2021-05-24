import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent implements OnInit {

  valor: number =12
  destino: number=222

  constructor() { }

  ngOnInit(): void {

  }

  transferir(){
    console.log("solicitado a transferência")
    console.log(this.valor)
    console.log(this.destino)
  }

}
