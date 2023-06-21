import ListTodo from './Todos/ListTodo';
import './App.css';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter, Switch, Routes, Route} from 'react-router-dom'


import Nav from './Nav/Nav'
import Home from './Example/Home'
import MyComponet from './Example/MyComponet'
import ListUser from './Users/ListUser'
import DetailUser from './Users/DetailUser'

function App() {
  return (
    <BrowserRouter>
      <Nav/>
      <div className="App">
        <Routes>
          <Route path='/todo' element={<ListTodo/>}>  </Route>
          <Route path='/about' element={<MyComponet/>}>  </Route>
          <Route path='/user/:id' element={<DetailUser/>}>  </Route>
          <Route path='/user' element={<ListUser/>}>  </Route>
          <Route path='/' element={<Home/>}> </Route>
        </Routes>


        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          />
        <ToastContainer />
      </div>
    </BrowserRouter>
  );
}

export default App;
