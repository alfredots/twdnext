import { User } from '@/domain/models/user';

export interface GetUsers {
  execute(): Promise<User[]>;
}
