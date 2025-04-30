import { User } from '@/modules/users/contracts/user';
import { UserRemoteDTO } from '@/modules/users/services/dtos/user-remote.dto';
import { Mapper, UseCase } from '@/packages/common';
import { HttpClient, HttpStatusCode } from '@/packages/http';

export class GetUsersService implements UseCase<void, Promise<User[]>> {
  constructor(
    private readonly url: string,
    private readonly http: HttpClient,
    private readonly mapper: Mapper<UserRemoteDTO, User>
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
        return response.body.map((data) => this.mapper.transform(data));

      default:
        throw new Error('');
    }
  }
}
