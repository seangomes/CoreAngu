import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()
export class AppService {

    constructor(private _http: Http) { }

    public GetAll = (): Observable<string[]> => {
        return this._http.get("/api/values/Get")
            .map((response: Response) => <string[]>response.json());
    }

}
