import styled from 'styled-components';
import Avatar from 'react-avatar';

function ListAllContact() {


  const db =  [
      {id: 1, name: 'Jack Nicholson', image: 'https://nudelmania.vteximg.com.br/arquivos/ids/187520-1000-1000/Caricatura-Preto---Branco---somente-Face---1-pessoa.jpg?v=637436337593070000'},
      {id: 2, name: 'Michael Jordan', image: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cfl_progressive%2Cq_auto:good%2Cw_1200/MTY2Njc5NDYzOTQ4NDYxNDA4/michael-jordan.jpg'},
      {id: 3, name: 'Steven Spielberg', image: 'https://image.tmdb.org/t/p/w500/tZxcg19YQ3e8fJ0pOs7hjlnmmr6.jpg'},
      {id: 4, name: 'Chewbacca', image: 'https://lumiere-a.akamaihd.net/v1/images/5e94826f7d7499000120d564-image_f9b9d30e.jpeg?region=0%2C48%2C1536%2C768&width=960'},
      {id: 5, name: 'Bruce Dickinson', image: 'https://www.mesaartscenter.com/sysimg/main-image-shows-performing-live-bruce-dickinson-media-box-image-1-image.jpg'},
      {id: 6, name: 'Eduardo Cesconetto', image: 'https://media-exp1.licdn.com/dms/image/C5603AQEeD8y12M9gEA/profile-displayphoto-shrink_200_200/0/1658772472251?e=1671062400&v=beta&t=liwzekkO3CPQLIcsULENoUA_3lqBNRFg9lFrwVE_EPg'},
  ]
  


  return (

    <>
      <Wrapper>
        <h1>List of All Contacts</h1>
        {db.map((d) =>
        <div className='list' key={d.id}>
            <Avatar
              alt="contact photo"
              src={d.image}
              size="93"
              round={true}
            />
            
          <div className='nick'>{d.name}</div>
        </div>
        )}
      </Wrapper>
    </>

  )

}

export default ListAllContact

const Wrapper = styled.section`
h1{
  text-align: -webkit-center;
}

.list {
  display: flex;
  flex-direction: row; 
  height: 10vh;
  background-color: gray;
  margin-top: 4vh;
  margin: 4% 30% 4% 30%;
  border-radius: 0.5rem;
  align-items: center;
}

.nick {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgb(231, 34, 34);
  flex-basis: calc(65% - -30px);
  border-radius: 0.5rem;
  height: 3vh;
}

`