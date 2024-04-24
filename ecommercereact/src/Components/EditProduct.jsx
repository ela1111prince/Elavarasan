import React,{useState} from 'react'
import WebServiceCaller from  '../GenericFunc/WebServiceCaller'

const EditProduct = ({Pid,Pname,Pdescription,Pprice,HideEditProductModal,fetchData}) => {
    const [State, setState] = useState({
        id:Pid,
        name: Pname,    
        price: Pprice,
        description: Pdescription
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setState({
          ...State,
          [name]: value
        });
      };
      let {id,name,price,description}=State;

      const handleUpdate = async(e) => {
        e.preventDefault();
        State.price= parseInt(State.price);
        State.id=parseInt(State.id);
        const response = await WebServiceCaller("products/"+State.id,"put",State,"")

        console.log('Form data submitted:', State);
        CloseEditProductModal();
        fetchData();
        setState({
          id:'',
          name: '',
          price: '',
          description: ''
        });

      };
      
      const CloseEditProductModal=()=>{
        HideEditProductModal();
      }
  return (
    <div className="modal fade show" id="EditModal" tabindex="-1" role="dialog" aria-labelledby="confirmDeleteModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="confirmDeleteModalLabel">Edit Product Details</h5>
        <button type="button" className="btn-close" data-dismiss="modal" aria-label="Close" onClick={CloseEditProductModal}>
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
    
    <form onSubmit={handleUpdate}>
        <div className="row justify-content-center">
        <div className="col-md-8">

      <div className="form-group mt-3">
      <input type="hidden"  name="id" value={id} onChange={handleChange}  required />

        <input type="text" className="form-control" id="productName" name="name" value={name} onChange={handleChange} placeholder="Enter product name" required />
      </div>
      <div className="form-group mt-3">
       
        <input type="number" className="form-control" id="productPrice" name="price"   value={price} onChange={handleChange} placeholder="Enter product price" required />
      </div>
      <div className="form-group mt-3">
        
        <textarea className="form-control" id="productDescription" name="description" value={description} onChange={handleChange} rows="3" placeholder="Enter product description" required></textarea>
      </div>
      </div>
      </div>
    </form>
    </div>
      <div className="modal-footer justify-content-center">
        <button type="button" className="btn btn-secondary" data-dismiss="modal" onClick={CloseEditProductModal}>Cancel</button>
        <button type="button" className="btn btn-primary" onClick={handleUpdate}>Update</button>
      </div>
    </div>
  </div>
</div>


  )
}

export default EditProduct