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
var FavoritoService = /** @class */ (function () {
    function FavoritoService(_http) {
        this._http = _http;
        this.url = 'http://localhost:3679/api/';
    }
    FavoritoService.prototype.getFavoritos = function () {
        return this._http.get(this.url + 'favoritos').map(function (res) { return res.json(); });
    };
    FavoritoService.prototype.getFavorito = function (id) {
        return this._http.get(this.url + 'favorito/' + id).map(function (res) { return res.json(); });
    };
    FavoritoService.prototype.addFavorito = function (favorito) {
        var json = JSON.stringify(favorito);
        var params = json;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.post(this.url + 'favorito', params, { headers: headers }).map(function (res) { return res.json(); });
    };
    FavoritoService.prototype.editFavorito = function (id, favorito) {
        var json = JSON.stringify(favorito);
        var params = json;
        var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
        return this._http.put(this.url + 'favorito/' + id, params, { headers: headers }).map(function (res) { return res.json(); });
    };
    FavoritoService.prototype.deleteFavorito = function (id) {
        return this._http.delete(this.url + 'favorito/' + id).map(function (res) { return res.json(); });
    };
    FavoritoService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.Http])
    ], FavoritoService);
    return FavoritoService;
}());
exports.FavoritoService = FavoritoService;
//# sourceMappingURL=favorito.service.js.map