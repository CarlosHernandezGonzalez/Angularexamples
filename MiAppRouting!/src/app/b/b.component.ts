import { Component, OnInit } from '@angular/core';
import { Pedido } from '../models/Pedidos';

@Component({
  selector: 'app-b',
  templateUrl: './b.component.html',
  styleUrls: ['./b.component.scss']
})
export class BComponent implements OnInit {

  pedidos:Pedido[]=null;

  constructor() { }

  ngOnInit() {
    this.pedidos=[
      new Pedido(1, 'pedido1', 23),
      new Pedido(2, 'pedido2', 33),
      new Pedido(3, 'pedido3', 43),
      new Pedido(4, 'pedido4', 53)

    ]


  }

}
