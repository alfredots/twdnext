import { getUsersModel } from '@/app/users.model';
import { UsersView } from '@/app/users.view';
import { makeGetUsersService } from '@/services/users/get-users-service';

export default async function Page() {
  const getUsersService = makeGetUsersService();
  const methods = await getUsersModel({
    getUsers: getUsersService
  });

  return <UsersView {...methods} />;
}
