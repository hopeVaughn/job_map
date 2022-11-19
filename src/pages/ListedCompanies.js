import { useEffect, useState} from "react";
import axios from "axios";
import ListedCompaniesTotalNumber from "../components/ListedCompaniesTotalNumber";
import ListedCompaniesLabelMiddle from "../components/ListedCompaniesLabelMiddle";
import ListedCompaniesReturned from "../components/ListedCompaniesReturned";


function ListedCompanies() {

  useEffect (() => {
    getList();
    getQuantity();

  },[])

  const [quantity, setQuantity] = useState([])
  const [list, setList] = useState([])
  const [loading, setLoading] = useState(false)
  

  // quantity of resume based on request
  const getQuantity = async () => {
    try {
        const res = await axios.get("http://localhost:8080/api/applications/")
           console.log(res.data[0]);
        setQuantity(res.data[0]);
        setLoading(true);
    } catch (err) {
        alert(err.message);
    }
  }



  // list of all companies based on request
  const getList = async () => {
    try {
        const res = await axios.get("http://localhost:8080/api/companies/")
          //  console.log(res.data);
        setList(res.data);
        setLoading(true);
    } catch (err) {
        alert(err.message);
    }
  }



  return (
    <>
      <ListedCompaniesTotalNumber quantity={quantity}/>
      <ListedCompaniesLabelMiddle />
      {loading &&
        list.map((lis) => (
        <ListedCompaniesReturned key={lis.id} lis={lis}/>
        ))
      } 
  
    </>
  )
}

export default ListedCompanies