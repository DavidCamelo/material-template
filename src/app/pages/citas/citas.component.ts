import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-citas',
  templateUrl: './citas.component.html',
  styleUrls: ['./citas.component.scss']
})
export class CitasComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit() {
    console.log(this.lista);
  }

  private cargarLista() {
    this.http.get(
      'https://projetcwillapp.herokuapp.com/cita/listar/taller?llaveTaller=BMWMoto MortyMedellinAntioquiaColombiaPoblado',
      //'https://be.aparto.co/bundle-message?page=1&limit=1000000&direction=ASC&orderBy=id&searchText=&lang=es',
      this.getHttpOptions()).subscribe(
      (response: any) => {
        console.log(response);
        this.lista = response.content;
      },
      error => {
        console.error(error);
      }
    );
  }

  private getHttpOptions() {
    return {
      headers: new HttpHeaders({
        Accept: '*/*',
        /*'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE,OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type, Authorization, Content-Length, X-Requested-With'*/
      })
    };
  }

  lista = [
    {
        'taller': {
            'direccionFisica': 'calle 39 a 52 45',
            'longitud': '-75.5701454',
            'latitud': '6.2089814',
            'imagen': 'https://i.pinimg.com/originals/04/87/e3/0487e36ebe48911e43fe14cb8b3499fb.jpg',
            'horario': 'lunes-viernes: 8am-5pm, sabados:8am - 3pm',
            'telefono': '4444444',
            'nombre': 'Moto Morty',
            'sede': 'Poblado',
            'marcaEspecializada': 'BMW',
            'cilindrajeMinimo': 300,
            'cilindrajeMaximo': 1500,
            'ciudad': {
                'nombreCiudad': 'Medellin',
                'pais': 'Colombia',
                'departamento': 'Antioquia',
                'llaveCiudad': 'MedellinAntioquiaColombia'
            },
            'llaveTaller': 'BMWMoto MortyMedellinAntioquiaColombiaPoblado'
        },
        'vehiculo': {
            'placa': 'VRH09C',
            'marca': 'Bmw',
            'tipo': 'moto',
            'cilindraje': 1250,
            'modelo': '',
            'kilometraje': 0.0,
            'color': 'Negro',
            'numeroChasis': 'Syevfbskao',
            'linea': 'Aventure',
            'propietario': {
                'nombre': 'Jhon Carmona',
                'documento': '1053800123',
                'telefono': '3137410987',
                'email': '',
                'tipo': 'propietario',
                'sexo': 'Masculino',
                'fechaNacimiento': null
            }
        },
        'tipoDeCita': 'Cotizacion',
        'descripcion': 'Hdhdvrvdnsksm',
        'fechaDeCita': '2020-01-15',
        'horaDeCita': '15:00:00',
        'numeroCita': 'C9',
        'codigoTaller': 790597370,
        'estadoCita': 'pendiente'
    },
    {
        'taller': {
            'direccionFisica': 'calle 39 a 52 45',
            'longitud': '-75.5701454',
            'latitud': '6.2089814',
            'imagen': 'https://i.pinimg.com/originals/04/87/e3/0487e36ebe48911e43fe14cb8b3499fb.jpg',
            'horario': 'lunes-viernes: 8am-5pm, sabados:8am - 3pm',
            'telefono': '4444444',
            'nombre': 'Moto Morty',
            'sede': 'Poblado',
            'marcaEspecializada': 'BMW',
            'cilindrajeMinimo': 300,
            'cilindrajeMaximo': 1500,
            'ciudad': {
                'nombreCiudad': 'Medellin',
                'pais': 'Colombia',
                'departamento': 'Antioquia',
                'llaveCiudad': 'MedellinAntioquiaColombia'
            },
            'llaveTaller': 'BMWMoto MortyMedellinAntioquiaColombiaPoblado'
        },
        'vehiculo': {
            'placa': 'VRH09C',
            'marca': 'Bmw',
            'tipo': 'moto',
            'cilindraje': 1250,
            'modelo': '',
            'kilometraje': 0.0,
            'color': 'Negro',
            'numeroChasis': 'Syevfbskao',
            'linea': 'Aventure',
            'propietario': {
                'nombre': 'Jhon Carmona',
                'documento': '1053800123',
                'telefono': '3137410987',
                'email': '',
                'tipo': 'propietario',
                'sexo': 'Masculino',
                'fechaNacimiento': null
            }
        },
        'tipoDeCita': 'Reparacion',
        'descripcion': 'Abc1234',
        'fechaDeCita': '2020-01-16',
        'horaDeCita': '13:00:00',
        'numeroCita': 'C18',
        'codigoTaller': 790597370,
        'estadoCita': 'pendiente'
    },
    {
        'taller': {
            'direccionFisica': 'calle 39 a 52 45',
            'longitud': '-75.5701454',
            'latitud': '6.2089814',
            'imagen': 'https://i.pinimg.com/originals/04/87/e3/0487e36ebe48911e43fe14cb8b3499fb.jpg',
            'horario': 'lunes-viernes: 8am-5pm, sabados:8am - 3pm',
            'telefono': '4444444',
            'nombre': 'Moto Morty',
            'sede': 'Poblado',
            'marcaEspecializada': 'BMW',
            'cilindrajeMinimo': 300,
            'cilindrajeMaximo': 1500,
            'ciudad': {
                'nombreCiudad': 'Medellin',
                'pais': 'Colombia',
                'departamento': 'Antioquia',
                'llaveCiudad': 'MedellinAntioquiaColombia'
            },
            'llaveTaller': 'BMWMoto MortyMedellinAntioquiaColombiaPoblado'
        },
        'vehiculo': {
            'placa': 'VRH09C',
            'marca': 'Bmw',
            'tipo': 'moto',
            'cilindraje': 1250,
            'modelo': '',
            'kilometraje': 0.0,
            'color': 'Negro',
            'numeroChasis': 'Syevfbskao',
            'linea': 'Aventure',
            'propietario': {
                'nombre': 'Jhon Carmona',
                'documento': '1053800123',
                'telefono': '3137410987',
                'email': '',
                'tipo': 'propietario',
                'sexo': 'Masculino',
                'fechaNacimiento': null
            }
        },
        'tipoDeCita': '',
        'descripcion': 'Prueba 3',
        'fechaDeCita': '2020-01-16',
        'horaDeCita': '11:00:00',
        'numeroCita': 'C19',
        'codigoTaller': 790597370,
        'estadoCita': 'pendiente'
    },
    {
        'taller': {
            'direccionFisica': 'calle 39 a 52 45',
            'longitud': '-75.5701454',
            'latitud': '6.2089814',
            'imagen': 'https://i.pinimg.com/originals/04/87/e3/0487e36ebe48911e43fe14cb8b3499fb.jpg',
            'horario': 'lunes-viernes: 8am-5pm, sabados:8am - 3pm',
            'telefono': '4444444',
            'nombre': 'Moto Morty',
            'sede': 'Poblado',
            'marcaEspecializada': 'BMW',
            'cilindrajeMinimo': 300,
            'cilindrajeMaximo': 1500,
            'ciudad': {
                'nombreCiudad': 'Medellin',
                'pais': 'Colombia',
                'departamento': 'Antioquia',
                'llaveCiudad': 'MedellinAntioquiaColombia'
            },
            'llaveTaller': 'BMWMoto MortyMedellinAntioquiaColombiaPoblado'
        },
        'vehiculo': {
            'placa': 'VRH09C',
            'marca': 'Bmw',
            'tipo': 'moto',
            'cilindraje': 1250,
            'modelo': '',
            'kilometraje': 0.0,
            'color': 'Negro',
            'numeroChasis': 'Syevfbskao',
            'linea': 'Aventure',
            'propietario': {
                'nombre': 'Jhon Carmona',
                'documento': '1053800123',
                'telefono': '3137410987',
                'email': '',
                'tipo': 'propietario',
                'sexo': 'Masculino',
                'fechaNacimiento': null
            }
        },
        'tipoDeCita': '',
        'descripcion': 'Prueba ',
        'fechaDeCita': '2020-01-16',
        'horaDeCita': '10:00:00',
        'numeroCita': 'C20',
        'codigoTaller': 790597370,
        'estadoCita': 'pendiente'
    },
    {
        'taller': {
            'direccionFisica': 'calle 39 a 52 45',
            'longitud': '-75.5701454',
            'latitud': '6.2089814',
            'imagen': 'https://i.pinimg.com/originals/04/87/e3/0487e36ebe48911e43fe14cb8b3499fb.jpg',
            'horario': 'lunes-viernes: 8am-5pm, sabados:8am - 3pm',
            'telefono': '4444444',
            'nombre': 'Moto Morty',
            'sede': 'Poblado',
            'marcaEspecializada': 'BMW',
            'cilindrajeMinimo': 300,
            'cilindrajeMaximo': 1500,
            'ciudad': {
                'nombreCiudad': 'Medellin',
                'pais': 'Colombia',
                'departamento': 'Antioquia',
                'llaveCiudad': 'MedellinAntioquiaColombia'
            },
            'llaveTaller': 'BMWMoto MortyMedellinAntioquiaColombiaPoblado'
        },
        'vehiculo': {
            'placa': 'VRH09C',
            'marca': 'Bmw',
            'tipo': 'moto',
            'cilindraje': 1250,
            'modelo': '',
            'kilometraje': 0.0,
            'color': 'Negro',
            'numeroChasis': 'Syevfbskao',
            'linea': 'Aventure',
            'propietario': {
                'nombre': 'Jhon Carmona',
                'documento': '1053800123',
                'telefono': '3137410987',
                'email': '',
                'tipo': 'propietario',
                'sexo': 'Masculino',
                'fechaNacimiento': null
            }
        },
        'tipoDeCita': '',
        'descripcion': 'Prueba',
        'fechaDeCita': '2020-01-16',
        'horaDeCita': '10:00:00',
        'numeroCita': 'C21',
        'codigoTaller': 790597370,
        'estadoCita': 'pendiente'
    },
    {
        'taller': {
            'direccionFisica': 'calle 39 a 52 45',
            'longitud': '-75.5701454',
            'latitud': '6.2089814',
            'imagen': 'https://i.pinimg.com/originals/04/87/e3/0487e36ebe48911e43fe14cb8b3499fb.jpg',
            'horario': 'lunes-viernes: 8am-5pm, sabados:8am - 3pm',
            'telefono': '4444444',
            'nombre': 'Moto Morty',
            'sede': 'Poblado',
            'marcaEspecializada': 'BMW',
            'cilindrajeMinimo': 300,
            'cilindrajeMaximo': 1500,
            'ciudad': {
                'nombreCiudad': 'Medellin',
                'pais': 'Colombia',
                'departamento': 'Antioquia',
                'llaveCiudad': 'MedellinAntioquiaColombia'
            },
            'llaveTaller': 'BMWMoto MortyMedellinAntioquiaColombiaPoblado'
        },
        'vehiculo': {
            'placa': 'VRH09C',
            'marca': 'Bmw',
            'tipo': 'moto',
            'cilindraje': 1250,
            'modelo': '',
            'kilometraje': 0.0,
            'color': 'Negro',
            'numeroChasis': 'Syevfbskao',
            'linea': 'Aventure',
            'propietario': {
                'nombre': 'Jhon Carmona',
                'documento': '1053800123',
                'telefono': '3137410987',
                'email': '',
                'tipo': 'propietario',
                'sexo': 'Masculino',
                'fechaNacimiento': null
            }
        },
        'tipoDeCita': '',
        'descripcion': 'Pruba 5',
        'fechaDeCita': '2020-01-16',
        'horaDeCita': '08:00:00',
        'numeroCita': 'C23',
        'codigoTaller': 790597370,
        'estadoCita': 'pendiente'
    },
    {
        'taller': {
            'direccionFisica': 'calle 39 a 52 45',
            'longitud': '-75.5701454',
            'latitud': '6.2089814',
            'imagen': 'https://i.pinimg.com/originals/04/87/e3/0487e36ebe48911e43fe14cb8b3499fb.jpg',
            'horario': 'lunes-viernes: 8am-5pm, sabados:8am - 3pm',
            'telefono': '4444444',
            'nombre': 'Moto Morty',
            'sede': 'Poblado',
            'marcaEspecializada': 'BMW',
            'cilindrajeMinimo': 300,
            'cilindrajeMaximo': 1500,
            'ciudad': {
                'nombreCiudad': 'Medellin',
                'pais': 'Colombia',
                'departamento': 'Antioquia',
                'llaveCiudad': 'MedellinAntioquiaColombia'
            },
            'llaveTaller': 'BMWMoto MortyMedellinAntioquiaColombiaPoblado'
        },
        'vehiculo': {
            'placa': 'VRH09C',
            'marca': 'Bmw',
            'tipo': 'moto',
            'cilindraje': 1250,
            'modelo': '',
            'kilometraje': 0.0,
            'color': 'Negro',
            'numeroChasis': 'Syevfbskao',
            'linea': 'Aventure',
            'propietario': {
                'nombre': 'Jhon Carmona',
                'documento': '1053800123',
                'telefono': '3137410987',
                'email': '',
                'tipo': 'propietario',
                'sexo': 'Masculino',
                'fechaNacimiento': null
            }
        },
        'tipoDeCita': '',
        'descripcion': 'Abc',
        'fechaDeCita': '2020-01-16',
        'horaDeCita': '08:00:00',
        'numeroCita': 'C25',
        'codigoTaller': 790597370,
        'estadoCita': 'pendiente'
    },
    {
        'taller': {
            'direccionFisica': 'calle 39 a 52 45',
            'longitud': '-75.5701454',
            'latitud': '6.2089814',
            'imagen': 'https://i.pinimg.com/originals/04/87/e3/0487e36ebe48911e43fe14cb8b3499fb.jpg',
            'horario': 'lunes-viernes: 8am-5pm, sabados:8am - 3pm',
            'telefono': '4444444',
            'nombre': 'Moto Morty',
            'sede': 'Poblado',
            'marcaEspecializada': 'BMW',
            'cilindrajeMinimo': 300,
            'cilindrajeMaximo': 1500,
            'ciudad': {
                'nombreCiudad': 'Medellin',
                'pais': 'Colombia',
                'departamento': 'Antioquia',
                'llaveCiudad': 'MedellinAntioquiaColombia'
            },
            'llaveTaller': 'BMWMoto MortyMedellinAntioquiaColombiaPoblado'
        },
        'vehiculo': {
            'placa': 'VRH09C',
            'marca': 'Bmw',
            'tipo': 'moto',
            'cilindraje': 1250,
            'modelo': '',
            'kilometraje': 0.0,
            'color': 'Negro',
            'numeroChasis': 'Syevfbskao',
            'linea': 'Aventure',
            'propietario': {
                'nombre': 'Jhon Carmona',
                'documento': '1053800123',
                'telefono': '3137410987',
                'email': '',
                'tipo': 'propietario',
                'sexo': 'Masculino',
                'fechaNacimiento': null
            }
        },
        'tipoDeCita': '',
        'descripcion': 'Abc',
        'fechaDeCita': '2020-01-16',
        'horaDeCita': '08:00:00',
        'numeroCita': 'C26',
        'codigoTaller': 790597370,
        'estadoCita': 'pendiente'
    },
    {
        'taller': {
            'direccionFisica': 'calle 39 a 52 45',
            'longitud': '-75.5701454',
            'latitud': '6.2089814',
            'imagen': 'https://i.pinimg.com/originals/04/87/e3/0487e36ebe48911e43fe14cb8b3499fb.jpg',
            'horario': 'lunes-viernes: 8am-5pm, sabados:8am - 3pm',
            'telefono': '4444444',
            'nombre': 'Moto Morty',
            'sede': 'Poblado',
            'marcaEspecializada': 'BMW',
            'cilindrajeMinimo': 300,
            'cilindrajeMaximo': 1500,
            'ciudad': {
                'nombreCiudad': 'Medellin',
                'pais': 'Colombia',
                'departamento': 'Antioquia',
                'llaveCiudad': 'MedellinAntioquiaColombia'
            },
            'llaveTaller': 'BMWMoto MortyMedellinAntioquiaColombiaPoblado'
        },
        'vehiculo': {
            'placa': 'VRH09C',
            'marca': 'Bmw',
            'tipo': 'moto',
            'cilindraje': 1250,
            'modelo': '',
            'kilometraje': 0.0,
            'color': 'Negro',
            'numeroChasis': 'Syevfbskao',
            'linea': 'Aventure',
            'propietario': {
                'nombre': 'Jhon Carmona',
                'documento': '1053800123',
                'telefono': '3137410987',
                'email': '',
                'tipo': 'propietario',
                'sexo': 'Masculino',
                'fechaNacimiento': null
            }
        },
        'tipoDeCita': '',
        'descripcion': 'Abc',
        'fechaDeCita': '2020-01-16',
        'horaDeCita': '08:00:00',
        'numeroCita': 'C27',
        'codigoTaller': 790597370,
        'estadoCita': 'pendiente'
    },
    {
        'taller': {
            'direccionFisica': 'calle 39 a 52 45',
            'longitud': '-75.5701454',
            'latitud': '6.2089814',
            'imagen': 'https://i.pinimg.com/originals/04/87/e3/0487e36ebe48911e43fe14cb8b3499fb.jpg',
            'horario': 'lunes-viernes: 8am-5pm, sabados:8am - 3pm',
            'telefono': '4444444',
            'nombre': 'Moto Morty',
            'sede': 'Poblado',
            'marcaEspecializada': 'BMW',
            'cilindrajeMinimo': 300,
            'cilindrajeMaximo': 1500,
            'ciudad': {
                'nombreCiudad': 'Medellin',
                'pais': 'Colombia',
                'departamento': 'Antioquia',
                'llaveCiudad': 'MedellinAntioquiaColombia'
            },
            'llaveTaller': 'BMWMoto MortyMedellinAntioquiaColombiaPoblado'
        },
        'vehiculo': {
            'placa': 'VRH09C',
            'marca': 'Bmw',
            'tipo': 'moto',
            'cilindraje': 1250,
            'modelo': '',
            'kilometraje': 0.0,
            'color': 'Negro',
            'numeroChasis': 'Syevfbskao',
            'linea': 'Aventure',
            'propietario': {
                'nombre': 'Jhon Carmona',
                'documento': '1053800123',
                'telefono': '3137410987',
                'email': '',
                'tipo': 'propietario',
                'sexo': 'Masculino',
                'fechaNacimiento': null
            }
        },
        'tipoDeCita': 'Mantenimiento',
        'descripcion': 'Prueba campos',
        'fechaDeCita': '2020-01-15',
        'horaDeCita': '07:00:00',
        'numeroCita': 'C29',
        'codigoTaller': 790597370,
        'estadoCita': 'pendiente'
    },
    {
        'taller': {
            'direccionFisica': 'calle 39 a 52 45',
            'longitud': '-75.5701454',
            'latitud': '6.2089814',
            'imagen': 'https://i.pinimg.com/originals/04/87/e3/0487e36ebe48911e43fe14cb8b3499fb.jpg',
            'horario': 'lunes-viernes: 8am-5pm, sabados:8am - 3pm',
            'telefono': '4444444',
            'nombre': 'Moto Morty',
            'sede': 'Poblado',
            'marcaEspecializada': 'BMW',
            'cilindrajeMinimo': 300,
            'cilindrajeMaximo': 1500,
            'ciudad': {
                'nombreCiudad': 'Medellin',
                'pais': 'Colombia',
                'departamento': 'Antioquia',
                'llaveCiudad': 'MedellinAntioquiaColombia'
            },
            'llaveTaller': 'BMWMoto MortyMedellinAntioquiaColombiaPoblado'
        },
        'vehiculo': {
            'placa': 'VRH09C',
            'marca': 'Bmw',
            'tipo': 'moto',
            'cilindraje': 1250,
            'modelo': '',
            'kilometraje': 0.0,
            'color': 'Negro',
            'numeroChasis': 'Syevfbskao',
            'linea': 'Aventure',
            'propietario': {
                'nombre': 'Jhon Carmona',
                'documento': '1053800123',
                'telefono': '3137410987',
                'email': '',
                'tipo': 'propietario',
                'sexo': 'Masculino',
                'fechaNacimiento': null
            }
        },
        'tipoDeCita': 'Mantenimiento',
        'descripcion': 'Abc',
        'fechaDeCita': '2020-01-16',
        'horaDeCita': '08:00:00',
        'numeroCita': 'C30',
        'codigoTaller': 790597370,
        'estadoCita': 'pendiente'
    },
    {
        'taller': {
            'direccionFisica': 'calle 39 a 52 45',
            'longitud': '-75.5701454',
            'latitud': '6.2089814',
            'imagen': 'https://i.pinimg.com/originals/04/87/e3/0487e36ebe48911e43fe14cb8b3499fb.jpg',
            'horario': 'lunes-viernes: 8am-5pm, sabados:8am - 3pm',
            'telefono': '4444444',
            'nombre': 'Moto Morty',
            'sede': 'Poblado',
            'marcaEspecializada': 'BMW',
            'cilindrajeMinimo': 300,
            'cilindrajeMaximo': 1500,
            'ciudad': {
                'nombreCiudad': 'Medellin',
                'pais': 'Colombia',
                'departamento': 'Antioquia',
                'llaveCiudad': 'MedellinAntioquiaColombia'
            },
            'llaveTaller': 'BMWMoto MortyMedellinAntioquiaColombiaPoblado'
        },
        'vehiculo': {
            'placa': 'FXM9007',
            'marca': 'Bmw',
            'tipo': 'moto',
            'cilindraje': 1200,
            'modelo': '',
            'kilometraje': 0.0,
            'color': 'Negro',
            'numeroChasis': 'Suehfvskalqñ',
            'linea': 'Aventure',
            'propietario': {
                'nombre': 'Jhon Carmona',
                'documento': '123456789',
                'telefono': '3137410987',
                'email': 'jhonedier.c@gmail.com',
                'tipo': 'propietario',
                'sexo': 'Masculino',
                'fechaNacimiento': null
            }
        },
        'tipoDeCita': 'Mantenimiento',
        'descripcion': 'Prueba lunes cita ',
        'fechaDeCita': '2020-01-28',
        'horaDeCita': '07:00:00',
        'numeroCita': 'C31',
        'codigoTaller': 790597370,
        'estadoCita': 'pendiente'
    },
    {
        'taller': {
            'direccionFisica': 'calle 39 a 52 45',
            'longitud': '-75.5701454',
            'latitud': '6.2089814',
            'imagen': 'https://i.pinimg.com/originals/04/87/e3/0487e36ebe48911e43fe14cb8b3499fb.jpg',
            'horario': 'lunes-viernes: 8am-5pm, sabados:8am - 3pm',
            'telefono': '4444444',
            'nombre': 'Moto Morty',
            'sede': 'Poblado',
            'marcaEspecializada': 'BMW',
            'cilindrajeMinimo': 300,
            'cilindrajeMaximo': 1500,
            'ciudad': {
                'nombreCiudad': 'Medellin',
                'pais': 'Colombia',
                'departamento': 'Antioquia',
                'llaveCiudad': 'MedellinAntioquiaColombia'
            },
            'llaveTaller': 'BMWMoto MortyMedellinAntioquiaColombiaPoblado'
        },
        'vehiculo': {
            'placa': 'ABC1',
            'marca': 'Bmw',
            'tipo': 'moto',
            'cilindraje': 1000,
            'modelo': '',
            'kilometraje': 0.0,
            'color': 'Negro',
            'numeroChasis': 'Absjdy371i736',
            'linea': 'GS1000',
            'propietario': {
                'nombre': 'Jaimito Perez',
                'documento': '12345678',
                'telefono': '123456789',
                'email': 'prueba@fuleo.com',
                'tipo': 'propietario',
                'sexo': 'Masculino',
                'fechaNacimiento': null
            }
        },
        'tipoDeCita': 'Mantenimiento',
        'descripcion': 'Prueba cita desde el mapa',
        'fechaDeCita': '2020-02-05',
        'horaDeCita': '07:00:00',
        'numeroCita': 'C32',
        'codigoTaller': 790597370,
        'estadoCita': 'pendiente'
    }
];
}
