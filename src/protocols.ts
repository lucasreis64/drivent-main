export type ApplicationError = {
  name: string;
  message: string;
};

export type ViaCEPAddress = {
  logradouro: string,
  complemento: string,
  bairro: string,
  localidade: string,
  uf: string,

};

export type paymentEntity = {
  ticketId: number;
  value: number;
  cardIssuer: string;
  cardLastDigits: string;
};

export type CardInfo = {
  issuer: string;
  number: number;
  name: string;
  expirationDate: Date;
  cvv: number;
};

export type PaymentInfo = {
  ticketId: number;
  cardData: CardInfo;
};

export type AddressEnrollment = {
  logradouro: string,
  complemento: string,
  bairro: string,
  cidade: string,
  uf: string,
  error?: string
}

export type RequestError = {
  status: number,
  data: object | null,
  statusText: string,
  name: string,
  message: string,
};
