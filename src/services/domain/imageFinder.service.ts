import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";


@Injectable()
export class ImageFinderService {


    constructor(public http: HttpClient) {

    }

    getImageProdutosFromLocal(id: string): Observable<any> {
        let url = `assets/imgs/produtos/${id}.jpg`
        return this.http.get(url, { responseType: 'blob' });
    }

    getImageFromLocal(id: string): Observable<any> {
        let url = `assets/imgs/clientes/${id}.png`
        return this.http.get(url, { responseType: 'blob' });
    }
}

