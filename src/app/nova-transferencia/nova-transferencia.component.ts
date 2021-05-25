
import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Transferencia } from '../models/models.transferencia.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent implements OnInit {
  id!: string;
  valor!: number;
  destino!: string;
  data!: Date;

  @Output() aoTransferir = new EventEmitter<any>();

  constructor(private service: TransferenciaService, private router:Router) {}

  ngOnInit(): void {}

  transferir() {
    console.log('solicitado a transferência');
    const valorEmitir: Transferencia = {
      id: this.id,
      value: this.valor,
      destiny: this.destino,
      date: this.data,
    };
    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
        console.log(resultado);
        this.router.navigateByUrl("extrato")
      },
      (error) => console.log(error)
    );
  }

  limparCampos() {
    this.valor = 0;
    this.destino = '0';
  }
}
