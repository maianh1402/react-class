import React from 'react';
import AddTodo from './AddTodo';
import { toast } from 'react-toastify';


class ListTodo extends React.Component {
    state={
        listTodos: [
            {id: '1', title: 'Doing homework'},
            {id: '2', title: 'Watching TV'},
        ],
        editTodo: {}
    }
    addNewTodo=(todo) =>{
        this.setState({
            listTodos: [...this.state.listTodos, todo]
        })

        toast.success("Thêm thành công!")
    }
    handleDeleteTodo = (todo) => {
        let currentTodos = this.state.listTodos;
        currentTodos = currentTodos.filter(item => item.id !== todo.id);
        this.setState({
            listTodos: currentTodos,
        })
        toast.success("Xóa thành công!")
    }
    handleEditTodo = (todo) => {
        let {editTodo, listTodos} = this.state;

        let isEmptyObj = Object.keys(editTodo).length === 0;
        if(isEmptyObj === false && editTodo.id === todo.id){
            let listTodosCopy = [...listTodos];
            let objIndex = listTodosCopy.findIndex((item => item.id ===todo.id));
            listTodosCopy[objIndex].title = editTodo.title;

            this.setState({
                listTodos: listTodosCopy,
                editTodo: {}
            })
            toast.success("Sửa thành công!")
            return;
        }
        this.setState({
            editTodo: todo
        })
        
    }
    handleOnChangeEditTodo = (e) =>{
        let editTodoCopy = {...this.state.editTodo};
        editTodoCopy.title = e.target.value;
        this.setState({
            editTodo: editTodoCopy
        })
    }

    render() {
        let {listTodos, editTodo} = this.state;
        let isEmptyObj = Object.keys(editTodo).length === 0;
      return (
        <div style={{fontSize:'30px',color:'#fff'}}>
            <p style={{margin:'30px', fontSize:'40px'}}>~ Simple TODO App ~</p>
            <AddTodo addNewTodo={ this.addNewTodo }/>
            <div>
                { listTodos && listTodos.length >0 &&
                    listTodos.map((item, index) =>{
                        return(
                            <div key={item.index}>
                                {isEmptyObj === true ? 
                                    <span>{index+1} - {item.title}</span>
                                :
                                    <>
                                        {editTodo.id === item.id ?
                                            <span>{index+1} - 
                                                <input 
                                                    value={editTodo.title}
                                                    style={{
                                                        borderRadius:'10px',
                                                        marginRight:'10px',
                                                        fontSize:'20px',
                                                        color:'#000',
                                                    }}
                                                    onChange={(e)=> this.handleOnChangeEditTodo(e)}
                                                />
                                            </span>
                                        :
                                            <span>{index+1} - {item.title}</span>                             
                                        }
                                    </>
                                }
                                <button 
                                    style={{
                                        borderRadius:'10px',
                                        fontSize:'20px',
                                        color:'#fff',
                                        backgroundColor:'green',
                                        margin:'0 10px',
                                        minWidth:'70px',
                                    }}
                                    onClick={()=> this.handleEditTodo(item)}
                                >
                                    {isEmptyObj === false && editTodo.id ===item.id ?
                                        'Save':'Edit'
                                    }
                                </button>
                                <button 
                                    style={{
                                        borderRadius:'10px',
                                        fontSize:'20px',
                                        color:'#fff',
                                        backgroundColor:'red',
                                        margin:'0 10px',
                                        minWidth:'70px'
                                    }}
                                    onClick={() => this.handleDeleteTodo(item)}
                                >
                                    Delete
                                </button>
                            </div>
                            )
                        })
                    }
                    
                </div>
        </div>
      );
    }
}
export default ListTodo;
