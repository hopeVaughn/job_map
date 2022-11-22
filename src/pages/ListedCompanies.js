import ListCompanies from "../components/ListCompanies";

function ListedCompanies(props) {

  console.log(props.levelClicked)
 
  return (
    <>
     <ListCompanies levelClicked={props.levelClicked}/>
    </>
  )
}

export default ListedCompanies