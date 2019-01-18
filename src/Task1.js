import React, { Component } from 'react';

import './App.css';


class Task1 extends Component{
    constructor(props) {
      super(props);
  
      this.state = {
        products: [],
        isDisabled:true,
        nameError:false,
        priceError:false,
        quantityError:false,
        descError:false,
        availability:"not available"
      };
      }
  
      handleChange(e){
        const target = e.target;
        const name = target.name;
        
        if(e.target.name==='name'){
          if(e.target.value==='' || e.target.value===null ){
            
            this.setState({
              nameError:true,
              namelenError:false,
              noverall:false
            })
          
         } else {
          if(e.target.value.length>3){
            this.setState({
              nameError:false,
              namelenError:false,     
              name:e.target.value,
              noverall:true
            })
          }
          else{
            this.setState({
              nameError:false,
              namelenError:true  ,
              noverall:false
            })
          }
        }
        }
        if(e.target.name==='price'){
          if(e.target.value==='' || e.target.value===null ){
            
            this.setState({
              priceError:true,
              pricecharError:false,
              poverall:false
  
            })
          
         } else {
          const pattern=/^[0-9]*$/;
          const result=pattern.test(target.value);
        
        if(result===true){
          this.setState({
            pricecharError:false,
            priceError:false,
            price:target.value,
            poverall:true
          })
        }
        else{
          this.setState({
            priceError:false,
            pricecharError:true,
            poverall:false
          })
        }
        }
      }
      if(e.target.name==='quantity'){
        if(e.target.value==='' || e.target.value===null ){
          
          this.setState({
            quantityError:true,
            quantitycharError:false,
            qoverall:false
          })
        
       } else {
        const pattern=/^[0-9]*$/;
        const result=pattern.test(target.value);
      
      if(result===true){
        this.setState({
          quantitycharError:false,
          quantityError:false,
          quantity:target.value,
          qoverall:true
        })
      }
      else{
        this.setState({
          quantityError:false,
          quantitycharError:true,
          qoverall:false
        })
      }
      }
    }
    if(e.target.name==='desc'){
      if(e.target.value==='' || e.target.value===null ){
        
        this.setState({
          descError:true,
          desclenError:false,
          doverall:false
        })
      
     } else {
      if(e.target.value.length>10){
        this.setState({
          descError:false,
          desclenError:false,     
          desc:e.target.value,
          doverall:true
        })
      }
      else{
        this.setState({
          descError:false,
          desclenError:true,
          doverall:false  
          
        })
      }
    }
    }
    if(this.state.noverall===true){
      this.setState({
        isDisabled:false  
        
      })
    }
    else{
      this.setState({
        isDisabled:true  
        
      })
    }
    if(this.state.poverall===true){
      this.setState({
        isDisabled:false  
        
      })
    }
    else{
      this.setState({
        isDisabled:true  
        
      })
    }
    if(this.state.qoverall===true){
      this.setState({
        isDisabled:false  
        
      })
    }
    else{
      this.setState({
        isDisabled:true  
        
      })
    }
    if(this.state.doverall===true){
      this.setState({
        isDisabled:false  
        
      })
    }
    else{
      this.setState({
        isDisabled:true  
        
      })
    }
    }
  
     
    addProd() {
      
      const New = {
        name: this.state.name,
        price: this.state.price,
        quantity:this.state.quantity,
        availability:this.state.availability,
        desc: this.state.desc
      };
  
      const products = [...this.state.products, New]; //{ id: 2, text: "two" }];
      this.setState({ products });
      this.setState({
        isDisabled:true  
        
      })
      this.clearNewProd();
    }
    
  
    clearNewProd() {
      this.state.name = "";
      this.state.price = "";
      this.state.quantity="";
      this.state.desc="";
    }
  
    deleteProd(key) {
      const products = this.state.products;
      products.splice(key.i, 1);
      this.setState({ products });
      //        {JSON.stringify(this.state)}
    }
  
    fillProd(key) {
      const name = this.state.products[key].name;
      const price = this.state.products[key].price;
      const desc = this.state.products[key].desc;
      const quantity=this.state.products[key].quantity;
      const availability=this.state.products[key].availability;
      this.setState({
        isDisabled:false
        
      })
      this.setState({ name, price, quantity, availability,desc, key, edit: 1 });
    }
  
    updateProd() {
      const key = this.state.key;
      const products = this.state.products;
      products[key] = {
        name: this.state.name,
        price: this.state.price,
        quantity:this.state.quantity,
        availability:this.state.availability,
        desc: this.state.desc,
  
      };
  
      this.setState({ products, edit: 0 });
      this.clearNewProd();
    }
  
    render() {
      return (
        <div>
        <nav class="navbar navbar-light bg-light">
        <a class="navbar-brand" href="#">
        CodingMart Technologies
        </a>
        </nav>
          <div class="container">
          <div class="margintr">
          <h4>Add a Product</h4>
          </div>
          <form class="form-horizontal">
          <div class="form-group">
            <label class="control-label col-sm-2" >Name</label>
            
            <input placeholder="Name" name="name" 
            value={this.state.name} onChange={(e)=>{this.handleChange(e)}} />
            {this.state.nameError ? <span style={{color: "red"}}>Please Enter some text</span> : ''}
            {"   "}{this.state.namelenError ? <span style={{color: "red"}}>Please Enter more than 3 characters</span> : ''}
          </div>
  
            <br />
            <div class="form-group">
            <label class="control-label col-sm-2">Price</label>
            <input
              placeholder="Price" name="price"
              value={this.state.price}
              onChange={(e)=>{this.handleChange(e)}}
            />
            {this.state.priceError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
            {"   "}{this.state.pricecharError ? <span style={{color: "red"}}>Please Enter only numbers</span> : ''}
            </div>
            <br />
            <div class="form-group">
            <label class="control-label col-sm-2">Quantity</label>
            <input
              placeholder="Quantity"
              name="quantity"
              value={this.state.quantity}
              onChange={(e)=>{this.handleChange(e)}}
            />
             {this.state.quantityError ? <span style={{color: "red"}}>Please Enter some value</span> : ''}
            {"   "}{this.state.quantitycharError ? <span style={{color: "red"}}>Please Enter only numbers</span> : ''}
            </div>
            <br/>
            <div class="form-group">
            <label class="control-label col-sm-2">Availability</label>
            <select onChange={event => this.setState({ availability: event.target.value })}>
             <option value="available" >Available</option>
              <option value="not available" selected>Not Available</option>
            </select>
            </div>
            <br/>
            <div class="form-group">
            <label class="control-label col-sm-2">Description</label>
            <textarea
              placeholder="Desc"
              name="desc"
              value={this.state.desc}
              onChange={(e)=>{this.handleChange(e)}}
            />
            {this.state.descError ? <span style={{color: "red"}}>Please Enter some text</span> : ''}
            {"   "}{this.state.desclenError ? <span style={{color: "red"}}>Please Enter more than 10 characters</span> : ''}
         
            </div>
            <br />
            <div class="control-label col-sm-2">
            <input type="button" value="Add" disabled={this.state.isDisabled} onClick={() => this.state.edit ? this.updateProd() : this.addProd()} class="btn btn-success"/>
            </div>
          </form>
          </div>
          
          <div class="container">
          <div class="margintr">
            <h4>Viewing Area</h4></div>
            <table class="table table-bordered">
              <tr>
                <th>S.NO</th>
                <th>Namre</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Availability</th>
                <th>Description</th>
              </tr>
            {this.state.products.map((prod, i) => (
              <tr>
                <td>{i+1}</td>
                 <td> {prod.name} </td>
                  <td>{prod.price} </td>
                   <td>{prod.quantity}</td> 
                    <td>{prod.availability} </td>
                    <td> {prod.desc}</td>
                     <td>
                <input
                  type="button"
                  value="Edit"
                  onClick={() => this.fillProd(i)} class="btn btn-success"
                />
                {" "}
                <input
                  type="button"
                  value="Delete"
                  onClick={() => this.deleteProd({ i })} class="btn btn-danger"
                /></td>
              </tr>
            ))}
            </table>
          </div>
         
        </div>
      );
    }
  }

  export default Task1;