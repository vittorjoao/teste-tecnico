import { Component } from '@angular/core';
import { Person } from 'src/types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  dados: Person[] = [
    {
      id: 7160,
      nome: 'PEDRO HENRIQUE DA SILVA OLIVEIRA',
      idade: 31,
      sexo: 'MASCULINO',
      vivo: true,
      urlFoto: null,
      ultimaOcorrencia: {
        dtDesaparecimento: '2023-10-28T17:00:00',
        dataLocalizacao: '2023-10-30',
        encontradoVivo: true,
        localDesaparecimentoConcat: 'RESIDENCIAL SAO CARLOS - Cuiabá/MT',
        ocorrenciaEntrevDesapDTO: null,
        listaCartaz: null,
        ocoId: 3597,
      },
    },
    {
      id: 7157,
      nome: 'ROSANA KIST',
      idade: 40,
      sexo: 'FEMININO',
      vivo: true,
      urlFoto: null,
      ultimaOcorrencia: {
        dtDesaparecimento: '2023-10-27T20:00:00',
        dataLocalizacao: '2023-10-30',
        encontradoVivo: true,
        localDesaparecimentoConcat: 'CHAPEU DO SOL - Várzea Grande/MT',
        ocorrenciaEntrevDesapDTO: null,
        listaCartaz: null,
        ocoId: 3596,
      },
    },
    {
      id: 7139,
      nome: 'GABRIEL CRISTIAN MUNIZ ROCHA',
      idade: 23,
      sexo: 'MASCULINO',
      vivo: true,
      urlFoto:
        'https://s3.pjc.mt.gov.br/abitus.foto-pessoa/9c325db386c447bd02ee5035f7ed7bbe021fd99ba7bbccb650bc7f3ef57194f8-1698416805605.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=pjcmtminio%2F20231030%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20231030T233616Z&X-Amz-Expires=600&X-Amz-SignedHeaders=host&X-Amz-Signature=043a313e9143b8230d8243835e7c70c50a9405583d8dfb9a301709c45a297660',
      ultimaOcorrencia: {
        dtDesaparecimento: '2023-10-27T09:09:00',
        dataLocalizacao: '2023-10-30',
        encontradoVivo: true,
        localDesaparecimentoConcat: 'BANDEIRANTES - Cuiabá/MT',
        ocorrenciaEntrevDesapDTO: {
          informacao:
            'A vítima está desaparecida desde a data acima informada, familiares buscam por notícias',
          vestimentasDesaparecido:
            'Camisa listrada vermelha e azul, bermuda jeans e chinelo',
        },
        listaCartaz: null,
        ocoId: 3589,
      },
    },
  ];
}
