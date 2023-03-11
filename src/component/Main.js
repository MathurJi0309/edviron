import React from 'react'
import layer1 from './image/Group 16.png'
import layer2 from './image/Group 17.png'

import layer3 from './image/Group 18.png'


 const Main = () => {
  return (
    <div>
      <div>
        <input style={{width:'100%', marginTop:'5%'}}/>
        <img src='https://www.onlygfx.com/wp-content/uploads/2021/12/magnifying-glass-clipart.png'  style={{height:'20px',width:'20px',marginTop:'-8%',marginLeft:'1%'}}/>
        <h6 style={{marginTop:'-6.5%',marginLeft:'5%'}}>Search users,payments</h6>
        <h6 style={{marginTop:'12%'}}>In the last 30 days</h6>
        <div style={{display:'flex',justifyContent:'space-around',marginTop:'5%'}}>
          <img src={layer1}/>
          <img src={layer2}/>

          <img src={layer3}/>

        </div>
        <h6 style={{marginTop:'7%'}}>All Users</h6>
        <span>Monitor sales,transactions,etc.</span>
      </div>
    </div>
  )
}

export default Main;
