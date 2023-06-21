import React from 'react';
import {connect} from 'react-redux';

class Home extends React.Component{
  componentDidMount() {
    setTimeout(() => {
      // this.props.history.push('/todo')
    }, 3000)
  }

  handleDeleteUser = (user)=>{
    this.props.deleteUserRedux(user)
  }
  handleCreateUser = ()=>{
    this.props.addUserRedux()
  }
    render() {
      let listUsers = this.props.dataRedux
      return (
        <>
          <div style={{color:'#fff', fontSize:'50px', marginTop:'200px'}}>
            Hello from HomePage with Phương Anh
          </div>
          <img style={{
            position: 'absolute',
            width: '100%',
            height:'100vh',
            left: '0px',
            top: '0px',
            zIndex: -1
          }} src='https://khoinguonsangtao.vn/wp-content/uploads/2022/09/anh-bau-troi-dem-dep-thanh-binh.jpg' alt='nền'/>
        </>
      )
    }
}

const mapStateToProps =(state)=>{
  return {dataRedux:state.users}
}

const mapDispatchToProps = (dispatch)=>{
  return {
    deleteUserRedux:(userDelete)=>dispatch({type:'DELETE_USER', payload:userDelete}),
    addUserRedux:()=>dispatch({type:'CREATE_USER'})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home)
