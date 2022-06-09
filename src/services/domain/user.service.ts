import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import { API_CONFIG } from "../../config/api.config";
import { UserDto } from "../../models/user.dto";
import { StorageService } from "../storage.service";

@Injectable()
export class UserService{

    constructor(public http: HttpClient, public storage: StorageService){
}

findByUsername(username : string) : Observable<UserDto> {
    return this.http.get<UserDto>(
         `${API_CONFIG.baseUrl}/usuarios/username?value=${username}`);
}

insert(obj : UserDto){
    return this.http.post(`${API_CONFIG.baseUrl}/usuarios`, obj,
    {
        observe: 'response',
        responseType: 'text'
    }
    );
}

getImageFromLocal(id : string) : Observable<any>{
let url = `http://localhost:8100/assets/imgs/${id}.jpg`
return this.http.get(url, {responseType : 'blob'});
}
}