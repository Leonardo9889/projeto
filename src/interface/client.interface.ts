export interface Client {
  name: string;
  surName: string;
  numberPhone: string;
  email: string;
  city: string;
  cpfCnpj: string;
}


export interface ResponseClient {
  status: number;
  message: string,
  error?: any
  response?: Client
}