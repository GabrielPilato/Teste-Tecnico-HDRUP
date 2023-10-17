import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CumprimentoService {

  // Caminho de acesso/comunicação com o backend
  private baseUrl = "http://localhost:8080/api/cumprimento";

  constructor(private httpClient: HttpClient) { }

  getCumprimento(nomeEnviado: String): Observable<String> {
    return this.httpClient.get(`${this.baseUrl}/${nomeEnviado}`,
      { responseType: 'text' }); // Configurando o tipo de resposta para o método retornar uma String e não um Json (padrão)
  }

}
