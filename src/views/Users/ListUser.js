import React from 'react';
import axios from 'axios';

class ListUser extends React.Component{
    state = {
        listUsers: []
    }
    async componentDidMount(){
        let res = await axios.get('https://reqres.in/api/users?page=2')
        
        this.setState({
            listUsers: res && res.data && res.data.data ? res.data.data : []
        })
    }
    render() {
        let {listUsers} = this.state;
      return (
        <div 
          style={{
            color:'#fff'
          }}
        >
          <div 
            style={{
              fontSize:'30px',
              margin:'30px'
            }}
          >
            ~ Tất cả Users ~
          </div>
          <div >
            {listUsers && listUsers.length > 0 &&
              listUsers.map((item, index) => {
                return(
                  <div  
                    key={item.id}
                    style={{
                      margin:'10px 0',
                      fontSize:'25px',
                    }}
                  >
                    {index+1} - {item.first_name} {item.last_name}
                    <hr style={{width:'60%'}}/>
                  </div>
                )
              })
            }
          </div>
        </div>
      )
    }
}

export default ListUser;