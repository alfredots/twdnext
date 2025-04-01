import { User } from '@/modules/users/contracts/user';

export interface GetUsers {
  execute(): Promise<User[]>;
}
