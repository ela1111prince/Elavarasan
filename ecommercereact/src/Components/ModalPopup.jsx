import React from 'react'

const ModalPopup = ({HeaderName,SubmitName,SubmitFunctionName,PNameValue="",PDescValue="",PPriceValue=""}) => {
  return (
    <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">{HeaderName}</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        
        <div className="mb-3">
          <label for="input1" className="form-label">Product Name</label>
          <input type="text" className="form-control" id="PName" />
        </div>
        <div className="mb-3">
          <label for="input2" className="form-label">Description</label>
          <textarea className="form-control" id="PDesc" ></textarea>
          
        </div>
        <div className="mb-3">
          <label for="input3" className="form-label">Price</label>
          <input type="number" className="form-control" id="PPrice" />
        </div>
      </div>
      <div className="modal-footer">
       
        <button type="button" className="btn btn-primary" onClick={SubmitFunctionName}>{SubmitName}</button>
        
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
      </div>
    </div>



  </div>
</div>
  )
}

export default ModalPopup