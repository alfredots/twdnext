import { AppProvider } from '@/modules/users/context/users.context';
import { UsersPage } from '@/modules/users/pages/users.page';
import { GetUsersService } from '@/modules/users/services/get-users.service';
import { UserMapperImpl } from '@/modules/users/services/mappers/user.mapper';
import { endpoints } from '@/modules/users/utils/constants';
import { FetchHttpClient } from '@/packages/http/fetch-http-client';

export const UsersModule = () => {
  const httpClient = new FetchHttpClient();
  const userMapper = new UserMapperImpl();
  const getUsersService = new GetUsersService(endpoints.users, httpClient, userMapper);

  return (
    <AppProvider
      services={{
        getUsersService
      }}
    >
      <UsersPage />
    </AppProvider>
  );
};
