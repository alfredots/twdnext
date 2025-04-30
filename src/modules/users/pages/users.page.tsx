import { useUsersModel } from '@/modules/users/pages/users.model';
import { UsersView } from '@/modules/users/pages/users.view';

export function UsersPage() {
  const methods = useUsersModel();

  return <UsersView {...methods} />;
}
