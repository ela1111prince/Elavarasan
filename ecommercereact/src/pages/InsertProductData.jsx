import React, { useState } from "react";
import WebServiceCaller from  '../GenericFunc/WebServiceCaller'

const InsertProductData = () => {
    const [State, setState] = useState({
        name: "",    
        price: "",
        description: ""
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
          ...State,
          [name]: value
        });
      };
      let {name,price,description}=State;

      const handleSubmit = async(e) => {
        e.preventDefault();
        const  PriceAsInt = parseInt(State.price);
        State.price=PriceAsInt;
        const response = await WebServiceCaller("products","post",State,"")

        console.log('Form data submitted:', State);
        setState({
          name: '',
          price: '',
          description: ''
        });
      };
    
  return (
    <div className="container mt-5">
    <h2 className="mb-4">Insert Product</h2>
    <form onSubmit={handleSubmit}>
        <div className="row justify-content-center">
        <div className="col-md-8">

      <div className="form-group mt-3">
       
        <input type="text" className="form-control" id="productName" name="name" value={name} onChange={handleChange} placeholder="Enter product name" required />
      </div>
      <div className="form-group mt-3">
       
        <input type="number" className="form-control" id="productPrice" name="price"   value={price} onChange={handleChange} placeholder="Enter product price" required />
      </div>
      <div className="form-group mt-3">
        
        <textarea className="form-control" id="productDescription" name="description" value={description} onChange={handleChange} rows="3" placeholder="Enter product description" required></textarea>
      </div>
      <button type="submit" className="btn btn-primary mt-3">Submit</button>
      </div>
      </div>
    </form>
  </div>

  )
}

export default InsertProductData