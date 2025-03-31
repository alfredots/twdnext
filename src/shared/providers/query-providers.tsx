import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

const queryClient = new QueryClient();

interface QueryProviderProps {
  children: React.ReactNode;
  activateDevTools?: boolean;
}

export function QueryProvider({ children, activateDevTools }: QueryProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      {activateDevTools && <ReactQueryDevtools initialIsOpen={false} position="right" />}
    </QueryClientProvider>
  );
}
