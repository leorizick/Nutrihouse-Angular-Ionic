import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../../config/api.config";
import { ProdutoDto } from "../../models/produto.dto";

@Injectable()
export class ProdutoService{
    
    constructor(public http: HttpClient){

    }

    findAll() : Observable<ProdutoDto[]>{
        return this.http.get<ProdutoDto[]>(`${API_CONFIG.baseUrl}/produtos`);
    }
    
    findAllPerCategorias(categoria_nome: string): Observable<ProdutoDto[]>{
        return this.http.get<ProdutoDto[]>(
            `${API_CONFIG.baseUrl}/produtos/categorias/tipocadastro?value=${categoria_nome}`);
    }
}