import {useState} from "react";
import Welcome from "./component/Welcome"

const name = "Amal"


function App() {
  const [todos, setTodos] = useState(["Belajar React","Belajar JSX"])
  const addTodo = ()=>{
    setTodos([...todos, "Belajar State"])
  };

  const [count, setCount] = useState(0)

  return (
    
  <div>
      <h1>coba coba</h1>
      <h2>ini coba lagi </h2>
      <h2>edit mapping</h2>
      <h1>Daftar todo</h1>
      <ul>
        {todos.map((todo, index) = {
          <li key={index}>{todo}</li>
        })}
      </ul>
      <button onClick={addTodo}>Tambah todo</button>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1 )}> Tambah </button>
      <button onClick={() => setCount(count - 1)}>Kurang</button>

    <h1>Helo World</h1>
      <p>Selamat Datang di dunia React : {name}</p>
      < Welcome name="budi" alamat="Jalan setia budi" age={32} />
  </div>
  );
}
export default App;
