import { GetUsers } from '@/modules/users/contracts/get-users.interface';
import { useQuery } from '@tanstack/react-query';

export const useUsersModel = ({ getUsers }: { getUsers: GetUsers }) => {
  const { data } = useQuery({ queryKey: ['users'], queryFn: () => getUsers.execute() });

  return {
    users: data || []
  };
};
