import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
    selector: 'app-citas',
    templateUrl: './citas.component.html',
    styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {

    lista;

    constructor(private http: HttpClient) { }

    ngOnInit() {
        this.cargarLista();
    }

    private cargarLista() {
        this.http.get(
            'https://projetcwillapp.herokuapp.com/cita/listar/taller?llaveTaller=BMWMoto MortyMedellinAntioquiaColombiaPoblado',
            this.getHttpOptions()).subscribe(
                (response: any) => {
                    this.lista = response;
                    console.log(response);
                },
                error => {
                    console.error(error);
                }
            );
    }

    private getHttpOptions() {
        return {
            headers: new HttpHeaders({
                Accept: '*/*'
            })
        };
    }

}