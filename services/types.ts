export interface Token {
  access_token: string;
  token_type: string;
  expires_in: number;
}

export enum QueryKeyEnum {
  TOKEN = "TOKEN",
}
