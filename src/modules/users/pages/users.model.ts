import { useUsersContext } from '@/modules/users/context/users.context';
import { useQuery } from '@/packages/query';

export const useUsersModel = () => {
  const { services } = useUsersContext();
  const { getUsersService } = services;
  const { data } = useQuery({ queryKey: ['users'], queryFn: () => getUsersService.execute() });

  return {
    users: data || []
  };
};
