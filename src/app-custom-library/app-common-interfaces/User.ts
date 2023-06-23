export interface User {
  id: number;
  UserID: string;
  UserQualifier: number;
  FirstName: string;
  LastName: string;
  Email: string;
  EmailStatus: string;
  CreatedAt: Date;
  UpdatedAt: Date;
  MiddleName?: string;
  Phone?: string;
  AvatarUrl?: string;
}

