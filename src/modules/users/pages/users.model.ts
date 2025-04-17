import { User } from '@/modules/users/contracts/user';
import { UseCase } from '@/packages/common';
import { useQuery } from '@tanstack/react-query';

export const useUsersModel = ({ getUsers }: { getUsers: UseCase<void, Promise<User[]>> }) => {
  const { data } = useQuery({ queryKey: ['users'], queryFn: () => getUsers.execute() });

  return {
    users: data || []
  };
};
