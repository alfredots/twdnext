import { renderHook } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { useUsersModel } from './users.model';

// Mock do contexto
vi.mock('@/modules/users/context/users.context', () => ({
  useUsersContext: () => ({
    services: {
      getUsersService: {
        execute: vi.fn().mockResolvedValue([{ id: 1, name: 'Alice' }])
      }
    }
  })
}));

// Mock do useQuery
vi.mock('@/packages/query', () => ({
  useQuery: () => ({
    data: [{ id: 1, name: 'Alice' }]
  })
}));

describe('useUsersModel', () => {
  it('deve retornar os usuários do serviço', () => {
    const { result } = renderHook(() => useUsersModel());
    expect(result.current.users).toEqual([{ id: 1, name: 'Alice' }]);
  });
});
