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
  const [companylist, setCompanylist] = useState([])
  const [loading, setLoading] = useState(false)
  

  // quantity of resume based on request
  const getQuantity = async () => {
    try {
        const res = await axios.get("http://localhost:8080/api/applications/")
           //console.log(res.data[0]);
        setQuantity(res.data[0]);
        setLoading(true);
    } catch (err) {
        alert(err.message);
    }
  }


  const filterCompany = (event) => {
    if(true){
      const data = companylist.filter((item) => {
      return item.name === "Google"  
                           // its just a exemple call, has to be returnd based on Button from page before
    })
      setList(data);
    }
  }
  

  // list of all companies based on request
  const getList = async () => {
    try {
          const res = await axios.get("http://localhost:8080/api/companies/")
            console.log(res.data);
          setCompanylist(res.data);
          
          setLoading(true);
      } catch (err) {
          alert(err.message);
      }
    }



  return (
    <>
      <ListedCompaniesTotalNumber quantity={quantity}/>

      <button type="button" className="btn btn-primary" onClick={filterCompany}>X</button>
      {/* This button will be  removed, its just to test the call for api and bring data,as we click on page before*/}

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