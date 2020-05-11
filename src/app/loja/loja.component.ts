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


  constructor(private produtosService: ProdutoService) { }

  ngOnInit() {
    this.findAllProdutos()
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
