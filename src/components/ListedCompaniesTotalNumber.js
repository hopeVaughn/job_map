import styled from 'styled-components';

function ListedCompaniesTotalNumber(props) {

  const { quantity } = props

  return (

    <Wrapper>
   
      <div className='childa'>
         <span className="quantity">{quantity}</span>   Hr Interview
      </div>
    
    </Wrapper>
  
  )

}

const Wrapper = styled.section`
.childa {
  flex-basis: calc(100% - 40px);
  height: 8vw;
  border-radius: 0.5rem;
  background-color: rgb(238, 160, 70);
  color: #FFFFFF;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4% 30% 4% 30%;
  font-size: 2vw;
  white-space:pre;
 }

 .childa .quantity{
  font-size:5vw
 }

 `

export default ListedCompaniesTotalNumber