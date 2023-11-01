/* Typed response for pagination reference */
export interface API {
  content: Person[];
  pageable: {
    sort: {
      unsorted: boolean;
      sorted: boolean;
      empty: boolean;
    };
    pageNumber: number;
    pageSize: number;
    offset: number;
    paged: boolean;
    unpaged: boolean;
  };
  last: boolean;
  totalElements: number;
  totalPages: number;
  first: boolean;
  numberOfElements: number;
  sort: {
    unsorted: boolean;
    sorted: boolean;
    empty: boolean;
  };
  number: number;
  size: number;
  empty: boolean;
}

export interface Person {
  id: number;
  nome: string;
  idade: number;
  sexo: string;
  vivo: boolean;
  urlFoto: string | null;
  ultimaOcorrencia: LastOccurrence;
}

interface LastOccurrence {
  dtDesaparecimento: string;
  dataLocalizacao: string;
  encontradoVivo: boolean;
  localDesaparecimentoConcat: string;
  ocorrenciaEntrevDesapDTO: OccurrenceDetails | null;
  listaCartaz: string | null;
  ocoId: number;
}

interface OccurrenceDetails {
  informacao: string;
  vestimentasDesaparecido: string | null;
}
