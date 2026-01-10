import {useState} from "react";
import Welcome from "./component/Welcome"
import Footer from "./component/Footer"

const name = "Amal"


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [todos, setTodos] = useState(["Belajar React","Belajar JSX"])
  const addTodo = ()=>{
    setTodos([...todos, "Belajar State"])
  };
  const [count, setCount] = useState(0)

  return (
    <div>
      {isLoggedIn ? (
      <h1>Selamat datang kembali</h1>
      ) : (
      <h1>Silahkan login terlebih dahulu</h1>
      )}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? "Logout" : "Login"}
      </button>
    
      <h1>coba coba</h1>
    </div>
    <div>
      <h2>ini coba lagi </h2>
      <h1>ini percobaan yang ketiga</h1>
      <h2>edit mapping</h2>
      <h1>Daftar todo</h1>
      <h1>Azure AI</h1>
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
  );
}
export default App;
