import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../../config/api.config";
import { ClienteDto } from "../../models/cliente.dto";


@Injectable()
export class ClienteService{
    
    constructor(public http: HttpClient){

    }

    findAll() : Observable<ClienteDto[]>{
        return this.http.get<ClienteDto[]>(`${API_CONFIG.baseUrl}/clientes`);
    }
    
   /* findAllPerCategorias(categoria_nome: string): Observable<ProdutoDto[]>{
        return this.http.get<ProdutoDto[]>(
            `${API_CONFIG.baseUrl}/produtos/categorias/tipocadastro?value=${categoria_nome}`);
    }*/

    getImageFromLocal(id : string) : Observable<any>{
        let url = `assets/imgs/clientes/${id}.png`
        return this.http.get(url, {responseType : 'blob'});
        }
    }
        
