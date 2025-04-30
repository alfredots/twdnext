import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { UsersView } from './users.view';

describe('UsersView', () => {
  it('deve renderizar a lista de usuários', () => {
    // Mock de usuários
    const users = [
      { id: 1, name: 'Alice', email: '' },
      { id: 2, name: 'Bob', email: '' }
    ];

    // Renderiza o componente passando as props esperadas
    render(<UsersView users={users} />);

    // Verifica se o título está na tela
    expect(screen.getByText('Lista de Usuários')).toBeInTheDocument();

    // Verifica se os nomes dos usuários aparecem
    expect(screen.getByText('Alice')).toBeInTheDocument();
    expect(screen.getByText('Bob')).toBeInTheDocument();
  });

  it('deve renderizar uma lista vazia se não houver usuários', () => {
    render(<UsersView users={[]} />);
    // Não deve encontrar nenhum <li>
    expect(screen.queryByRole('listitem')).toBeNull();
  });
});
