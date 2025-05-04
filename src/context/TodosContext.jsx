import { createContext, useContext, useEffect, useReducer } from "react";
import { v4 as uuidv4 } from "uuid";
import reducer from "../components/reducers/TodosReducer";

const TodosStateContext = createContext(null);
const TodosDispatchContext = createContext(null);

const initialTodos = [
  {
    id: uuidv4(),
    title: "دراسة جافاسكريبت",
    details:
      "مراجعة جزء ال OOP الخاص بلغة الجافاسكريبت من موقع javascript.info",
    isComplete: false,
  },
  {
    id: uuidv4(),
    title: "إكمال مشروع ال E-commerce",
    details:
      "إنهاء ال logic الخاص بجزئية عرض المنتجات بالإضافة إلى إنهاء ال UI المتبقي",
    isComplete: true,
  },
  {
    id: uuidv4(),
    title: "إكمال دراسة ال Redux",
    details:
      "إكمال دراسة الReduxToolkit ومحاولة عمل مشروع صغير واستخدامها في إدراة الحالة",
    isComplete: false,
  },
  {
    id: uuidv4(),
    title: "إنهاء دراسة جزئية ال Constructors",
    details: "إنهاء دراسة جزئية الCostructor وكتابتها في الpowerpoint",
    isComplete: false,
  },
];

const TodosContext = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  useEffect(() => {
    dispatch({ type: "getFromLocalStorage" });
  }, []);

  return (
    <TodosStateContext.Provider value={todos}>
      <TodosDispatchContext.Provider value={dispatch}>
        {children}
      </TodosDispatchContext.Provider>
    </TodosStateContext.Provider>
  );
};

export const useStateTodos = () => useContext(TodosStateContext);
export const useDispatchTodos = () => useContext(TodosDispatchContext);

export default TodosContext;
