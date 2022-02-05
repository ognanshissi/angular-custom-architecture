export class LoginRequest {
  username!: string;
  password!: string
}

export interface ILoginRequest extends LoginRequest {
}
