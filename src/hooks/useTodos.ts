import { useQuery } from '@tanstack/react-query';
import todosService from '../services/todos.service';

export const useTodos = () => {
  return useQuery({
    queryKey: ['todos'],
    queryFn: async () => {
      const response = await todosService.getTodos();
      return response;
    },
    // initialData: initialTodos,
    refetchInterval: 30000, // Обновление каждые 60 секунд
    // refetchOnWindowFocus: true, // Обновление при фокусировке на окне
    staleTime: 30000 // Данные считаются свежими в течение 30 секунд
  });
};
