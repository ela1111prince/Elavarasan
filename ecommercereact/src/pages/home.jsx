import React, { useState, useEffect } from "react";
import axios from "axios";
import Productcard from '../Components/Productcard'
import ModalPopup from '../Components/ModalPopup'
import EditProduct from '../Components/EditProduct'

import WebServiceCaller from  '../GenericFunc/WebServiceCaller'

const Homepage = () => {
  // State to store the fetched data
  const [data, setData] = useState([]);

  // Function to fetch data using Axios
  const fetchData = async () => {
    try {
      //const response = await axios.get(process.env.REACT_APP_API_URL+"products");
      const response = await WebServiceCaller("products","get","","")
      setData(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const [showDynamic, setShowDynamic] = useState(false);
  const [EditState, setEditState] = useState({
    id:'',
    name: "",    
    price: "",
    description: ""
  });
  const EditProductModal=(Editid,Editname,Editdescription,Editprice)=>{
    EditState.id=Editid;
    EditState.name=Editname;
    EditState.description=Editdescription;
    EditState.price=Editprice;
    setShowDynamic(true);
  }
  const HideEditProductModal=()=>{
    setShowDynamic(false);
  }
const{ id,name,price,description}=EditState
  // Call fetchData on component mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    
    <div className="row mainDiv" >
        {showDynamic && <EditProduct Pid={id} Pname={name} Pdescription={description} Pprice={price}
         HideEditProductModal={HideEditProductModal} fetchData={fetchData}/>}        
        {data.map((product) => (
          <Productcard id={product.id} title={product.name} Price={product.price}
           Description={product.description}  UpdateComp={fetchData} EditProductComp={EditProductModal} />
     
        ))}

     
    </div>
    
  );
};

export default Homepage;