import React, { useState } from 'react';
import "./App.css";

function TodoItem({ task, onDelete }) {
  return (
    <li>
      {task}
      <button onClick={onDelete} style={{ marginLeft: '10px' }}>Hapus</button>
    </li>
  );
}

function TodoList() {
  const [tasks, setTasks] = useState([]); 
  const [newTask, setNewTask] = useState(''); 

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]); 
      setNewTask(''); 
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, taskIndex) => taskIndex !== index); // Menghapus tugas berdasarkan index
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Daftar Tugas</h2>
      <input
        type="text"
        placeholder="Tambahkan tugas baru"
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Tambah Tugas</button>

      <ul>
        {tasks.map((task, index) => (
          <TodoItem key={index} task={task} onDelete={() => handleDeleteTask(index)} />
        ))}
      </ul>
    </div>
  );
}

function Header() {
  return (
    <header>
      <h1>To Do List</h1>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <TodoList />
    </div>
  );
}

export default App;


// import "./App.css";
// // import React from "react";
// // import Counter from "./Counter";
// // import Greeting from './Greeting';
// import React, { useState } from 'react';

// function Example() {
//   const [name, setName] = useState('');
//   const [age, setAge] = useState(0);
//   const [email, setEmail] = useState('');

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleAgeChange = (e) => {
//     setAge(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   return (
//     <div>
//       <input type ="text" placeholder="Nama" value={name} onChange={handleNameChange} />

//       <input type ="number" placeholder="Umur" value={age} onChange={handleAgeChange} />

//       <input type ="email" placeholder="Email" value={email} onChange={handleEmailChange} />

//     <p>{name} berumur {age} tahun dan emailnya adalah {email}</p>
//     </div>
//   );
// }


// // Komponen Header
// function Header() {
//   return (
//     <header>
//       <h1>To Do List</h1>
//     </header>
//   );
// }

// // Komponen Main
// // function Main() {
// //   return (
// //     <main>
// //       <h2>Selamat datang di Aplikasi React Saya !</h2>
// //       <p>Ini adalah area konten utama .</p>
// //     </main>
// //   );
// // }

// // function Footer() {
// //   return (
// //     <footer>
// //       <p>&copy; 2023 Aplikasi React Saya</p>
// //     </footer>
// //   );
// // }

// function App() {
//   return (
//     <div>
//       <Header />
//       {/* <Main /> */}
//       {/* <Greeting name="John" /> */}
//       {/* <Counter/> */}
//       <Example/>
//       {/* <Footer /> */}
//     </div>
//   );
// }

// export default App;
