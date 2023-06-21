import React from 'react';
import CV from '../../assets/images/Buithiphuonganh.png'

class MyComponet extends React.Component{
    render() {
      return (
        <img src={CV} alt='cv'style={{ height:'100vh', display:'inline-block'}}/>
      )
    }
}

export default MyComponet;