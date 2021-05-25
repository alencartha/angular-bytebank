import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bytebank';

  transferencias: any[]=[]

  transferir($event:any){
    console.log("evento", $event)
    const transferencia = {...$event, date: new Date()}
    this.transferencias.push(transferencia)
  }

}
