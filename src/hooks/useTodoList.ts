import { useEffect, useState } from "react";
import { ITodoItem } from "../components/TodoItem/TodoItem";
import { API_URL } from "../constants";

function useTodoList() {
    const [todos, setTodos] = useState<Array<ITodoItem>>([]);
    const [loading, setLoading] = useState<boolean>(true);
  
    useEffect(() => {
        setLoading(true)
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => {
        setLoading(false)
            setTodos(data)
        });
    }, []);
    
    return{todos,loading}
  
}

export default useTodoList