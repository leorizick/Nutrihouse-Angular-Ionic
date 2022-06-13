import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { API_CONFIG } from "../../config/api.config";
import { ClienteDto } from "../../models/cliente.dto";


@Injectable()
export class ClienteService {


    constructor(public http: HttpClient) {

    }

    findById(cliente_id: string) {
        return this.http.get<ClienteDto>(`${API_CONFIG.baseUrl}/clientes/${cliente_id}`);
    }

    findAll(): Observable<ClienteDto[]> {
        return this.http.get<ClienteDto[]>(`${API_CONFIG.baseUrl}/clientes`);
    }

    insert(obj: ClienteDto) {
        return this.http.post(`${API_CONFIG.baseUrl}/clientes`, obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

    update(obj: ClienteDto) {
        return this.http.put(`${API_CONFIG.baseUrl}/clientes/${obj.id}`, obj,
            {
                observe: 'response',
                responseType: 'text'
            }
        );
    }

    getImageFromLocal(id: string): Observable<any> {
        let url = `assets/imgs/clientes/${id}.png`
        return this.http.get(url, { responseType: 'blob' });
    }
}

