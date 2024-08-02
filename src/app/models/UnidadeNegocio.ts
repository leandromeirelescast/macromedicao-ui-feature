export interface UnidadeNegocio {
  id: number;
  codigoUnidade: string;
  dsUnidadeNegocio: string;
  nmUnidadeNegocio: string;
}


export interface UnidadeNegocioDTO {
  descricao: string;
  nome: string;
}


export interface UnidadeData {
  dataList: UnidadeNegocio[];
}
