import {Injectable} from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {RequestOptions,RequestMethod,RequestOptionsArgs, Headers, Response} from '@angular/http';

@Injectable()
export class SpotifyService{
    private searchUrl: string;
    private artistUrl: string;
    private albumsUrl:string;
    private albumUrl:string;
    accessToken = "BQACYdEjlLkOf7xjmlb7WtbQyp96ccocvZvNPWwIav81mVLWrjTkojy7qu6cmdq1U_wYZp8JXrdnnjHteNV0PvzVrrOMUsPbq4xzQDyJLjkGBwWa3RlAP0jUVgmWm2G03Hdv6tm_gy9nLWjGYQgfzkfzf-FVdv47LDIzhTf2&refresh_token=AQBAvGzleolrDz5GXtfYi6hDAvKpraR2XGu9R6Mi2DEcteiQ06HwKPK2rSmOaoit7AYYJG4CSrjWYgUhedXv14slPKRGmWDjbtRjLgZSKRFn1t9VWlXGel9qZyjYcntROXA";
    constructor(private _http:Http){
        
    }
    
    searchMusic(str:string, type='artist'){
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Authorization', 'Bearer ' + this.accessToken);
        let options = new RequestOptions({ headers: headers, method:RequestMethod.Get});
        this.searchUrl = 'https://api.spotify.com/v1/search?query='+str+'&offset=0&limit=20&type='+type+'&market=US';
        return this._http.get(this.searchUrl, options)
            .map(res => res.json());
    }


    
    getArtist(id:string){
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Authorization', 'Bearer ' + this.accessToken);
        let options = new RequestOptions({ headers: headers, method:RequestMethod.Get});
        this.artistUrl = 'https://api.spotify.com/v1/artists/'+id;
        return this._http.get(this.artistUrl, options)
            .map(res => res.json());
    }
    
    getAlbums(artistId:string){
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Authorization', 'Bearer ' + this.accessToken);
        let options = new RequestOptions({ headers: headers, method:RequestMethod.Get});
        this.albumsUrl = 'https://api.spotify.com/v1/artists/'+artistId+'/albums';
        return this._http.get(this.albumsUrl, options)
            .map(res => res.json());
    }
    
    getAlbum(id:string){
        let headers = new Headers();
        headers.append('Content-Type','application/json');
        headers.append('Authorization', 'Bearer ' + this.accessToken);
        
        let options = new RequestOptions({ headers: headers, method:RequestMethod.Get});
        this.albumUrl = 'https://api.spotify.com/v1/albums/'+id;
        return this._http.get(this.albumUrl, options)
            .map(res => res.json());
    }
}