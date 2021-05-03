import { RxJSHttpClient } from "rxjs-http-client";
import { Category } from "../components/Category/category";
import Constant from './config';

class HTTP {
    
    private _http: RxJSHttpClient;
    private _base: String;

    constructor() {
        this._http = new RxJSHttpClient();
        this._base = Constant.FULL_BASEURL;
    }

    getRequest(url: String, payload: any = {}) {
        return this._http.get(`${this._base}/${url}`, payload);
    }

    postRequest(url: String, payload: any = {}) {
        return this._http.post(`${this._base}/${url}`, {body: payload});
    }

    putRequest(url: String, payload: any = {}) {
        return this._http.put(`${this._base}/${url}`, payload);
    }

    deleteRequest(url: String, payload: any = {}) {
        return this._http.delete(`${this._base}/${url}`, payload);
    }
}

export default HTTP;