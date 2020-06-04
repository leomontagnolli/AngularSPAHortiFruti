import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Produto } from '../model/Produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  

  constructor(private http: HttpClient) { 

  }

  getAllProdutos () {
    return this.http.get('https://api-produtos-genera.herokuapp.com/produtos');
  }

  postProdutos (produto: Produto) {
    return this.http.post('https://api-produtos-genera.herokuapp.com/produtos', produto);
  }

  putProdutos (produto: Produto) {
    return this.http.put('https://api-produtos-genera.herokuapp.com/produtos', produto);

  }
  getByIdProdutos (id:number) {
    return this.http.get(`https://api-produtos-genera.herokuapp.com/produtos/${id}`);
  }
  
  deleteProdutos(id:number) {
    return this.http.delete (`https://api-produtos-genera.herokuapp.com/produtos/${id}`);

  }

}
