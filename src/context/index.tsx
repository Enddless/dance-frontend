import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ThemeContextProvider } from './theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // refetchOnWindowFocus: false // отключение повторных запросов в случае переключения и возврата на вкладку
    },
    mutations: {}
  }
});

interface ContextProviderProps {
  children: React.ReactNode;
}

export function ContextProviders({ children }: ContextProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeContextProvider>{children}</ThemeContextProvider>
    </QueryClientProvider>
  );
}
