import React from "react";
import WebServiceCaller from  '../GenericFunc/WebServiceCaller'
import EditProduct from './EditProduct'

const Productcard = ({ id,title, Price, Description ,UpdateComp,EditProductComp}) => {
    const handleDeleteProduct = async(id) => {
        try{
            if(window.confirm("Are you sure to delete?"))
            {
            const response = await WebServiceCaller("products/"+id,"delete","","");
            UpdateComp();
            }
        
        }catch(er){
            console.log(er);
        }
      };
      const handleEditProduct =(Prodid,title,Price,Description)=>{
        EditProductComp(Prodid,title,Description,Price);   
      }
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card shadow p-3 mb-5 bg-body rounded">
        <div className="card-body">
          <div className="neu-container">
            <div className="neu-inner">
              <img className="card-img-top" src="" alt="" />
            </div>
          </div>
          <h4 className="card-title">{title}</h4>
          <h5>{Price}</h5>
          <p className="card-text">{Description}</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-primary" style={{margin:"0 1rem"}} id={id}
           onClick={async()=>handleEditProduct(id,title,Price,Description)}>Edit</button>
          <button className="btn btn-primary" name="ProductId" onClick={async()=>handleDeleteProduct(id)}>Delete</button>

        </div>
      </div>
    </div>
  )
}

export default Productcard