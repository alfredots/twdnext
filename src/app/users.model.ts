import { GetUsers } from '@/domain/services/get-users.interface';

export const getUsersModel = async ({ getUsers }: { getUsers: GetUsers }) => {
  try {
    const users = await getUsers.execute();
    return {
      users
    };
  } catch (err) {
    console.error(err);
    return {
      users: [] // Retorna um array vazio em caso de erro
    };
  }
};
