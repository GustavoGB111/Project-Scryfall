class queryObjectInputDto {}

export class QueryMontage {
  public queryObject: queryObjectInputDto;

  constructor(queryObject: queryObjectInputDto) {
    this.queryObject = queryObject;
  }
}
// pega os dados e monta uma classe com base em cada um
