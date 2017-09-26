"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var http_2 = require("@angular/http");
var SpotifyService = /** @class */ (function () {
    function SpotifyService(_http) {
        this._http = _http;
        this.accessToken = "BQACYdEjlLkOf7xjmlb7WtbQyp96ccocvZvNPWwIav81mVLWrjTkojy7qu6cmdq1U_wYZp8JXrdnnjHteNV0PvzVrrOMUsPbq4xzQDyJLjkGBwWa3RlAP0jUVgmWm2G03Hdv6tm_gy9nLWjGYQgfzkfzf-FVdv47LDIzhTf2&refresh_token=AQBAvGzleolrDz5GXtfYi6hDAvKpraR2XGu9R6Mi2DEcteiQ06HwKPK2rSmOaoit7AYYJG4CSrjWYgUhedXv14slPKRGmWDjbtRjLgZSKRFn1t9VWlXGel9qZyjYcntROXA";
    }
    SpotifyService.prototype.searchMusic = function (str, type) {
        if (type === void 0) { type = 'artist'; }
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.accessToken);
        var options = new http_2.RequestOptions({ headers: headers, method: http_2.RequestMethod.Get });
        this.searchUrl = 'https://api.spotify.com/v1/search?query=' + str + '&offset=0&limit=20&type=' + type + '&market=US';
        return this._http.get(this.searchUrl, options)
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getArtist = function (id) {
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.accessToken);
        var options = new http_2.RequestOptions({ headers: headers, method: http_2.RequestMethod.Get });
        this.artistUrl = 'https://api.spotify.com/v1/artists/' + id;
        return this._http.get(this.artistUrl, options)
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getAlbums = function (artistId) {
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.accessToken);
        var options = new http_2.RequestOptions({ headers: headers, method: http_2.RequestMethod.Get });
        this.albumsUrl = 'https://api.spotify.com/v1/artists/' + artistId + '/albums';
        return this._http.get(this.albumsUrl, options)
            .map(function (res) { return res.json(); });
    };
    SpotifyService.prototype.getAlbum = function (id) {
        var headers = new http_2.Headers();
        headers.append('Content-Type', 'application/json');
        headers.append('Authorization', 'Bearer ' + this.accessToken);
        var options = new http_2.RequestOptions({ headers: headers, method: http_2.RequestMethod.Get });
        this.albumUrl = 'https://api.spotify.com/v1/albums/' + id;
        return this._http.get(this.albumUrl, options)
            .map(function (res) { return res.json(); });
    };
    SpotifyService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], SpotifyService);
    return SpotifyService;
}());
exports.SpotifyService = SpotifyService;
//# sourceMappingURL=spotify.service.js.map