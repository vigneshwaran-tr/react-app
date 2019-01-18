import React, { Component } from 'react';

import './App.css';
import Select2 from 'react-select2-wrapper';


class Task2 extends Component{
    constructor(props) {
      super(props);
  
      this.state = {
        img:[]
      };
      
      }
  
  
      handleChange(event) {
        const target = event.target;
        //console.log(target.type)
        if(target.type==="file"){
        console.log(event.target.files[0].name)
        const {img} = this.state; 
        for(let i=0;i<target.files.length;i++){
          const singeImg={
            imgs:URL.createObjectURL(event.target.files[i]),
            name:event.target.files[i].name,
            index:i,
            sDisabled:true,
            iDisabled:true,
            eDisabled:false
          }
        img.push(singeImg);
      }   
      this.setState({ img })
      console.log(JSON.stringify(this.state))
      }
      
      
    }
  
    handleFirstNameChange= (index,event) => {
      
     
       const name = event.target.value
      const imgs = this.state.img[index].imgs;
      this.setState(this.state.img[index] = {
      name: name,
      imgs:imgs,
      sDisabled:false,
        iDisabled:false,
        eDisabled:true
      })  
      }
  
    editInput(index){
  
      const imgs = this.state.img[index].imgs;
      const val=this.state.img[index].tags;
      this.setState(this.state.img[index] = {
        imgs:imgs,
        tags:val,
        sDisabled:false,
        iDisabled:false,
        eDisabled:true
        })  
      }
    
    saveChange(index){
      const imgs = this.state.img[index].imgs;
      const name=this.state.img[index].name;
      const val=this.state.img[index].tags;
      this.setState(this.state.img[index] = {
        imgs:imgs,
        name:name,
        tags:val,
        sDisabled:true,
        iDisabled:true,
        eDisabled:false
        })  
    }
  
    optionChange (index) {
      const imgs = this.state.img[index].imgs;
      const name=this.state.img[index].name;
      const val=this.refs.tags.el.val();
      console.log(val);
      debugger
      this.setState(this.state.img[index] = {
        imgs:imgs,
        name:name,
        tags:val,
        sDisabled:false,
        iDisabled:false,
        eDisabled:true
        }) 
  }
      
    render(){
      //console.log(this.state.img)
    
    return(
    <div >
      <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
        CodingMart Technologies
        </a>
        </nav>
        <div class="container">
          <div class="margintr">
        
        <h4>Multiple Photo Upload</h4>
      <label >upload photo</label><input id="file" type="file" onChange={(e)=>{this.handleChange(e)}} required multiple /></div>
      {this.state.img.map((data,index)=>(
        <div key={index} class="ui card">
          <div class="image">
          <img src={data.imgs} 
          alt={`image${index}`} 
          width="100px" 
          height="100px" 
          />
          </div>
          <div class="content"><span style={{marginRight:`10${'px'}`}}>Name</span>
          <input type="text" 
          value={data.name} 
          index={index} 
          name="name" 
          disabled={data.iDisabled} 
          onChange={this.handleFirstNameChange.bind(this, index)}
          />
          </div>
          <div class="description">
          <span style={{marginRight:`20${'px'}`,marginLeft:`15${'px'}`}}>Tags</span>
          <Select2 
          multiple
          disabled={data.iDisabled} 
          value={data.tags}
          ref="tags"
          style={{width:`175${'px'}`}}
          onSelect={() =>{this.optionChange(index)}}
          data={['bug', 'feature', 'documents', 'discussion']}
          options={
          {
          placeholder: 'search by tags',
          tags:"true"
          }
          }
          />
          </div>
          <div class="extra content" style={{marginTop:`10${'px'}`}}>
          <input
                  type="button"
                  value="save"
                  onClick={() =>{this.saveChange(index)}}
                  disabled={data.sDisabled} 
                  class="btn btn-primary"
                />
                {" "}
                <input
                  type="button"
                  value="edit"
                  onClick={() =>{this.editInput(index)}}
                  disabled={data.eDisabled} 
                  class="btn btn-danger"
                />
            </div>   
          </div>
      ))}
      </div>
    
  </div>
    );
  }
  }
export default Task2;