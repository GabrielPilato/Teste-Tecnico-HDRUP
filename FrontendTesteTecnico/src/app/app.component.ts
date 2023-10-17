import { Component } from '@angular/core';
import { CumprimentoService } from './cumprimento.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  cumprimentos: String[] = [];
  nome: String = "";

  title = 'FrontendTesteTecnico';

  constructor(private cumprimentoService: CumprimentoService) { }

  // Função responsável por enviar o nome digitado para o backend, receber o cumprimento completo, e adicionar o mesmo na lista de cumprimentos
  enviar() {
    this.cumprimentoService.getCumprimento(this.nome).subscribe(data => {
      this.cumprimentos.push(data);
    })
  }

  // Verificação se o nome do cumprimento em questão é HDRUP
  isHDRUP(nome: String) {

    /* Criando uma substring com somente o nome presente no cumprimento, 
       convertendo essa substring para Uppercase para ignorar caixas altas ou baixas,
       e finalmente comparando com a palavra HDRUP */
    if (nome.substring(4, nome.indexOf("!")).toUpperCase() === "HDRUP") {
      return true;
    }

    return false;

  }

}
