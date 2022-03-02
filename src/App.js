import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from './Component/Button';
import Add from './Component/Add';
import List from './Component/List';
import Pay from './Component/Pay';

class App extends React.Component{
  constructor(){
    super();
    this.state = ({
      activeTab: 'Add',
      items: [],
    })
  }
  selectPay= (e) =>{
    this.setState({
      activeTab: 'Pay'
    })
  }
  selectAdd= (e) =>{
    this.setState({
      activeTab: 'Add'
    })
  }
  selectList= (e) =>{
    this.setState({
      activeTab: 'List'
    })
  }

  render(){
    return(
      <div className='btn-group'>
    <Button isSelected={this.state.activeTab=== "Add"} onClick={this.selectAdd}>Add</Button>
    <Button isSelected={this.state.activeTab === "Pay"} onClick={this.selectPay}>Pay</Button>
    <Button isSelected={this.state.activeTab === "List"} onClick={this.selectList}>List</Button>
      </div>
    )





  //   if(this.state.activeTab === 'Pay'){

  //   return(
  //        <div>
  //           <div className='btn-group'>
  //             <Button onClick={this.selectAdd} >Add</Button>
  //             <Button onClick={this.selectPay}>Pay</Button>
  //             <Button onClick={this.selectList}>List</Button>
  //           </div>
            
  //             <h2>Pay</h2>
          
  //         </div>
    
  //   )}else if(this.state.activeTab === 'Add'){
      

  //       return(
  //         <div>
  //           <div className='btn-group'>
  //             <Button onClick={this.selectAdd} >Add</Button>
  //             <Button onClick={this.selectPay}>Pay</Button>
  //             <Button onClick={this.selectList}>List</Button>
  //           </div>
            
  //             <h2>Add</h2>
            
  //         </div>

        
        
  //       )
  //   }else if (this.state.activeTab === 'List'){
      

  //     return(
  //         <div>
  //           <div className='btn-group'>
  //             <Button onClick={this.selectAdd} >Add</Button>
  //             <Button onClick={this.selectPay}>Pay</Button>
  //             <Button onClick={this.selectList}>List</Button>
  //           </div>
            
  //             <h2>List</h2>
            
  //         </div>
  //     )
  // }else{
  //   return null
  // }
  
  }
}

export default App;
