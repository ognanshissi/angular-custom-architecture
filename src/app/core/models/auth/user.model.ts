export class User {
  id?: string;

  username!: string;

  email!: string;

  firstName!: string;

  lastName!: string;

  role!: UserRole[];

  fullName (): string {
    if (this.firstName && this.lastName) {
      return `${this.firstName} ${this.lastName}`;
    }
    return this.username;
  }
}

export class UserRole {
  name!: string;

  code!: string;
}
