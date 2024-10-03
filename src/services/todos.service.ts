import { collection, getDocs, addDoc } from '@firebase/firestore';
import db from '../firebase/config.js';
import { ITodoList } from '../types/todo-list.js';

const getTodos = async (): Promise<ITodoList[]> => {
  const layoutsCollectionDB = collection(db, 'todoList');
  const response = await getDocs(layoutsCollectionDB);

  const todos: ITodoList[] = response.docs.map((doc) => ({
    id: doc.data().id,
    title: doc.data().title,
    description: doc.data().description,
    participants: doc.data().participants,
    creationDate: doc.data().creationDate,
    files: doc.data().files,
    status: doc.data().status,
    degreeOfImportance: doc.data().degreeOfImportance
  }));

  return todos;
};

// Функция для добавления нового элемента
const addTodo = async (newTodo: ITodoList): Promise<void> => {
  const layoutsCollectionDB = collection(db, 'todoList');
  await addDoc(layoutsCollectionDB, newTodo);
};

const todosService = {
  getTodos,
  addTodo
};

export default todosService;
