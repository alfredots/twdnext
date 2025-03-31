import { User } from '@/modules/users/contracts/user';
import { GetUsers } from '@/modules/users/contracts/get-users.interface';

export const getUsersMock: GetUsers = {
  execute: async (): Promise<User[]> => {
    const mockUsers: User[] = [
      {
        id: 1,
        name: 'Leanne Graham',
        email: 'Sincere@april.biz'
      },
      {
        id: 2,
        name: 'Ervin Howell',
        email: 'Shanna@melissa.tv'
      },
      {
        id: 3,
        name: 'Clementine Bauch',
        email: 'Nathan@yesenia.net'
      }
    ];

    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simula um delay
    return mockUsers;
  }
};
