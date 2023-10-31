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
