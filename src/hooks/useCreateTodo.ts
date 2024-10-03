import { useMutation, useQueryClient } from '@tanstack/react-query';
import todosService from '../services/todos.service';
import { ITodoList } from '../types/todo-list';

export const useCreateTodos = () => {
  const queryClient = useQueryClient();

  // Функция для добавления новой задачи
  const addTodoMutation = useMutation({
    mutationFn: async (newTodo: ITodoList) => {
      await todosService.addTodo(newTodo);
      return newTodo; // Возвращаем новый объект
    },
    onSuccess: (newTodo) => {
      // Обновите данные о задачах
      queryClient.setQueryData(['todos'], (oldData: ITodoList[] | undefined) => {
        if (oldData) {
          return [...oldData, newTodo]; // Добавляем новый объект к существующим данным
        }
        return [newTodo]; // Если старых данных нет, создаем новый массив
      });
    },
    onError: (error) => {
      console.error('Ошибка при добавлении задачи:', error);
    }
  });

  return {
    addTodo: addTodoMutation.mutateAsync,
    // isLoading: addTodoMutation.isLoading,
    error: addTodoMutation.error
  };
};
