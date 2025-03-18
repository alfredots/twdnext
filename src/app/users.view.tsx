import { getUsersModel } from '@/app/users.model';

export const UsersView = (props: Awaited<ReturnType<typeof getUsersModel>>) => {
  const { users } = props;

  return (
    <div className="bg-amber-100">
      <h1 className="text-3xl font-bold underline">Lista de Usuários</h1>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </div>
  );
};
