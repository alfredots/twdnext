import { GetUsers } from '@/modules/users/contracts/get-users.interface';
import { User } from '@/modules/users/contracts/user';
import { UserRemoteDTO } from '@/modules/users/services/dtos/user-remote.dto';
import { makeUserMapper, UserMapper } from '@/modules/users/services/mappers/user.mapper';
import { HttpClient, HttpStatusCode, makeFetchHttpClient } from '@/packages/http';

class GetUsersService implements GetUsers {
  constructor(
    private readonly url: string,
    private readonly http: HttpClient,
    private readonly mapper: UserMapper
  ) {}

  async execute(): Promise<User[]> {
    const response = await this.http.request<UserRemoteDTO[]>({
      url: this.url,
      method: 'get'
    });

    if (response.body === undefined) {
      throw new Error('Retornou Undefined');
    }

    switch (response.statusCode) {
      case HttpStatusCode.ok:
        return response.body.map((data) => this.mapper.toDomain(data));

      default:
        throw new Error('');
    }
  }
}

export const makeGetUsersService = () => new GetUsersService('https://jsonplaceholder.typicode.com/users', makeFetchHttpClient(), makeUserMapper());
