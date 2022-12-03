import React, { useEffect, useState } from 'react'
import axios from "axios";
import styled from 'styled-components'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
import Avatar from 'react-avatar';
import { useNavigate } from "react-router-dom";



function Networks(props) {
  const applicationID = props.applicationID;
  const [companyId, setCompanyId] = useState();
  const [network, setNetwork] = useState([]);
  const [EnableAddNetwork, setEnableAddNetwork] = useState([]);
  const [withoutNetwork, setWithoutNetwork] = useState([]);
  const [index, setIndex] = React.useState(0);
  const [carousel, setCarousel] = useState(true);
  const [addNetwork, setAddNetwork] = useState(false);
  const navigate = useNavigate();

  async function getNetworks(id) {
    try {
      const result = await axios.get(`http://localhost:8080/api/networks/${id}`)
      setNetwork(result.data);
      setCompanyId(id);
    } catch (error) {
      console.error(error.response)
    }
  }


  function getCompany() {
    try {
      axios.get(`http://localhost:8080/api/applications/custom/${applicationID}`)
        .then((res) => {
          getNetworks(res.data[0].id);
          getOthers(res.data[0].id);
        })
    } catch (err) {
      console.error(err.message);
    }
  }


  async function getOthers(id) {
    const result = await axios.get(`http://localhost:8080/api/networks/withoutNetwork/${id}`)
    setWithoutNetwork(result.data);
    if (result.data.length > 0)
      setEnableAddNetwork(false)
    else
      setEnableAddNetwork(true)
    setCompanyId(id);
  }


  const btnAddNetwork = (id) => {
    let contact_id = id
    let company_id = companyId

    const body = {
      contact_id,
      company_id
    }
    try {
      axios.post(`http://localhost:8080/api/networks/`, body)
        .then(() => {
          getOthers(company_id)
          if (withoutNetwork.length === 1) {
            setCarousel(true);
            setIndex(index + 1); // setIndex((oldIndex) => oldIndex + 1);
            setAddNetwork(false);
            setEnableAddNetwork(true);
            getNetworks(company_id);
          }
        })
    } catch (err) {
      console.error(err.message);
    }
  }


  const remove = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/networks/${id}`)
        .then(() => {
          getNetworks(companyId);
          getOthers(companyId);
        })
    } catch (err) {
      console.error(err.message);
    }
  }


  const nextSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex + 1;
      if (index > network.length - 1) {
        index = 0
      }
      return index
    })
  }

  const prevSlide = () => {
    setIndex((oldIndex) => {
      let index = oldIndex - 1
      if (index < 0) {
        index = network.length - 1
      }
      return index
    })
  }

  const imgClicked = (id) => {
    navigate(`/contacts/${id}`)
  }

  const nameImgClicked = (id) => {
    navigate(`/contacts/${id}`)
  }

  const closeAdd = () => {
    getNetworks(companyId);
    setCarousel(true);
    setAddNetwork(false);
  }

  useEffect(() => {
    getCompany();
  }, [])

  return (
    <Wrapper className='section'>
      <div className="title">
        <h2>
          <span>Network</span>
        </h2>
      </div>
      {carousel &&
        <>
          <button className="btn" disabled={EnableAddNetwork} onClick={() => {
            if (carousel) {
              setCarousel(false)
            }
            setAddNetwork(true)
            getOthers(companyId)
          }}
          >Add New Network</button>
          <div className='number'>number of network: {network.length}</div>
        </>
      }

      {carousel &&
        <div className="section-center">
          {network.map((person, personIndex) => {
            const { id, name, image, networkId } = person;
            let position = 'nextSlide';
            if (personIndex === index) {
              position = 'activeSlide';
            }
            if (personIndex === index - 1 || (index === 0 && personIndex === network.length - 1)) {
              position = 'lastSlide'
            }
            if (network.length === 1) {
              position = 'activeSlide';
            }

            return (
              <article className={position} key={id}>
                <img src={image} alt={name} className='person-img' onClick={() => imgClicked(id)} />
                <h4>{name}</h4>
                <button className='btn' onClick={() => remove(networkId)}>Remove</button>
              </article>
            )
          })}
          <button className='prev' onClick={prevSlide}> <FiChevronLeft /></button>
          <button className='next' onClick={nextSlide}> <FiChevronRight /></button>
        </div>
      }


      {addNetwork &&
        <div>
          <div className='addNetwork'>
            {withoutNetwork.map((contact) =>
              <div className='list' key={contact.id}>
                <Avatar
                  alt="contact photo"
                  src={contact.image}
                  size="50"
                  round={true}
                  className="cover"
                  onClick={() => nameImgClicked(contact.id)}
                />
                <div className='nick' onClick={() => nameImgClicked(contact.id)}>{contact.name}</div>
                <button className='btn' onClick={() => btnAddNetwork(contact.id)}>add</button>
              </div>
            )}
          </div>
          <button className='btn' onClick={closeAdd}>Close</button>
        </div>
      }
    </Wrapper>
  )
}
const Wrapper = styled.section`

.title {
  text-align: center;
  margin-bottom: 2rem;
}
h2{
    font-family: 'Delight Coffee', sans-serif;
    color: var(--clr-complement-1);
    font-size:3.5rem;
}
.btn{
    font-family: 'Delight Coffee', sans-serif;
    color: var(--clr-complement-1);
    font-size:1.5rem;
}
.cover{
  cursor: zoom-in;
}
.number{
      font-family: 'Delight Coffee', sans-serif;
    color: var(--clr-complement-1);
}
.title h2 {
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  
}

.title span {
  font-size: 0.85em;
  color: var(--clr-primary-5);
  margin-right: 1rem;
  font-weight: 700;
}

.section-center {
  margin: 0 auto;
  margin-top: 4rem;
  width: 80vw;
  /* have to have a height */
  height: 220px;
  max-width: 800px;
  text-align: center;
  position: relative;
  display: flex;
  /* overflow: hidden; */
}

.person-img {
  border-radius: 50%;
  margin-bottom: 1rem;
  width: 150px;
  height: 150px;
  object-fit: cover;
  border: 4px solid var(--clr-grey-8);
  box-shadow: var(--dark-shadow);
  cursor: zoom-in;
}

article h4 {
  text-transform: uppercase;
  color: var(--clr-primary-5);
  margin-bottom: 0.25rem;
}

.title {
  text-transform: capitalize;
  margin-bottom: 0.75rem;
  color: var(--clr-grey-3);
  
}

.text {
  max-width: 35em;
  margin: 0 auto;
  margin-top: 2rem;
  line-height: 2;
  color: var(--clr-grey-5);
  
}

.icon {
  font-size: 3rem;
  margin-top: 1rem;
  color: var(--clr-primary-5);
}

.addNetwork {
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: center;
}

.list {
  color: #eff1e4;
  display: flex;
  flex-direction: row; 
  width: 300px;
  justify-content: center;
  border-radius: 0.5rem;
  align-items: center;
  padding-bottom: 5px;
}

.nick {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #5480a2;
  flex-basis: calc(65% - -30px);
  border-radius: 0.5rem;
  height: 3vh;
  cursor: zoom-in;
}

.prev,
.next {
  position: absolute;
  top: 200px;
  transform: translateY(-50%);
  background: var(--clr-grey-5);
  color: var(--clr-white);
  width: 1.25rem;
  height: 1.25rem;
  display: grid;
  place-items: center;
  border-color: transparent;
  font-size: 1rem;
  border-radius: var(--radius);
  cursor: pointer;
  transition: var(--transition);
}

.prev:hover,
.next:hover {
  background: var(--clr-primary-5);
}

.prev {
  left: 0;
}

.next {
  right: 0;
}

@media (min-width: 800px) {
  .text {
    max-width: 45em;
  }

  .prev,
  .next {
    width: 2rem;
    height: 2rem;
    font-size: 1.5rem;
  }
}

article {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: var(--transition);
}

article.activeSlide {
  opacity: 1;
  transform: translateX(0);
  color: var(--clr-complement-1);
}

article.lastSlide {
  transform: translateX(-100%);
}

article.nextSlide {
  transform: translateX(100%);
}
`
export default Networks