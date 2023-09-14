import { BaseService } from "./baseService.js";
import http from "k6/http";

export class BaseRest extends BaseService {
    constructor(base_uri) {
        super(base_uri);
    }

    post(endpoint, body, headers = {}, params = {}) {
        let uri = this.base_uri + endpoint;
        let options = this.buildOptions(headers, params);
        return http.post(uri, JSON.stringify(body), options)
    }

    delete(endpoint, body, headers = {}, params = {}) {
        let uri = this.base_uri + endpoint;
        let options = this.buildOptions(headers, params);
        return http.del(uri, JSON.stringify(body), options)
    }

    buildOptions(headers = {}, params = {}) {
        return{
            headers: Object.assign({'Content-Type': 'application/json'}, headers),
            params: Object.assign({}, params)
        }
    }
}