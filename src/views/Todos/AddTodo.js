import React from 'react';
import { toast } from 'react-toastify';

class AddTodo extends React.Component {
    state = {
        title: ''
    }
    handleOnChangeTitle = (e) =>{
        this.setState({
            title: e.target.value
        })
    }
    handleAddTodo = () =>{
        if(!this.state.title){
            toast.error("Nhập việc cần làm!")
            return;
        }
        let todo = {
            id: Math.floor(Math.random() * 100),
            title: this.state.title,
        }

        this.props.addNewTodo(todo)
        this.setState({
            title: ''
        })
    }
    render() {
        let {title} = this.state;
      return (
        <>
            <input 
                type='text' 
                placeholder='Nhập công việc...'
                value={title}
                style={{
                    borderRadius:'10px',
                    marginRight:'10px',
                    fontSize:'20px',
                    color:'#000',
                    paddingLeft:'10px'
                }}
                onChange={(e) => this.handleOnChangeTitle(e)}
            />
            <button 
                type='button' 
                style={{
                    borderRadius:'10px',
                    padding:'0 10px',
                    fontSize:'20px',
                    color:'#000',
                    backgroundColor:'#fff'
                }}
                onClick={() => this.handleAddTodo()}
            >
                Add
            </button>
        </>
      );
    }
}
export default AddTodo;
