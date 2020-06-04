import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../service/produto.service';
import { Produto } from '../model/Produto';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent implements OnInit {
  
  listaProduto: Produto [];
  produto:Produto = new Produto();

  alerta: boolean = false;


  constructor(private produtosService: ProdutoService) { }

  ngOnInit() {
    this.findAllProdutos();
    let item:string = localStorage.getItem('delOk');

    if(item == 'true') {
      this.alerta = true;
      localStorage.clear();
      

      setTimeout(()=> {
        location.assign('/loja');
      }, 3000)

    }


  }

  findAllProdutos() {
    this.produtosService.getAllProdutos().subscribe((resp: Produto[]) => {
      this.listaProduto = resp;
    })
  }

  postProduto () {
    this.produtosService.postProdutos(this.produto).subscribe((resp:Produto)=> {
      this.produto = resp;
      location.assign('/loja');
    })
  }

}
