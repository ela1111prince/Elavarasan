import axios from 'axios';
import { useState } from 'react';

 var QueryStringBuilder="";
 var GlobalJSON=null;
 var WebServiceCaller =  async (apiUrl,RequestType,PostData,QueryStringJSON,IsQueryString=0) => {
    //const [Data, setData] = useState(null);

    QueryStringBuilder="";
    if(IsQueryString===1){
        const QueryStringBuilder = Object.keys(QueryStringJSON)
                                    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(QueryStringJSON[key]))
                                    .join('&');
        console.log(QueryStringBuilder)
        QueryStringBuilder+="?"+QueryStringBuilder;
    }
    apiUrl +=QueryStringBuilder;
    try { 
        switch (RequestType) {
            case "get":
             
                return await axios.get(process.env.REACT_APP_API_URL+apiUrl);  
            case "post":
                return  axios.post(process.env.REACT_APP_API_URL+apiUrl,PostData);
            case "put":
                return  axios.put(process.env.REACT_APP_API_URL+apiUrl,PostData);
            case "delete":
                return  axios.delete(process.env.REACT_APP_API_URL+apiUrl);
            default:
                    return await axios.get(process.env.REACT_APP_API_URL+apiUrl);
         }

    }catch(error){

    }
}

export default WebServiceCaller