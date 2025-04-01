import { GetUsers } from '@/modules/users/contracts/get-users.interface';
import { User } from '@/modules/users/contracts/user';
import { UserRemoteDTO } from '@/services/dtos/user-remote.dto';
//import { makeAxiosHttpClient } from '@/services/http/axios-http-client';
import { makeFetchHttpClient } from '@/services/http/fetch-http-client';
import { HttpClient, HttpStatusCode } from '@/services/http/http-client-contract';
import { makeUserMapper, UserMapper } from '@/services/mappers/user.mapper';

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
