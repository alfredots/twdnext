import { User } from '@/modules/users/contracts/user';
import { UserRemoteDTO } from '@/services/dtos/user-remote.dto';

export interface UserMapper {
  toDomain(data: UserRemoteDTO): User;
}

export class UserMapperImpl implements UserMapper {
  toDomain(data: UserRemoteDTO): User {
    return {
      id: data.id,
      name: data.name,
      email: data.email
    } as User;
  }
}

export const makeUserMapper = () => new UserMapperImpl();
