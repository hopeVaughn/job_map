import React, { useEffect, useState } from 'react'
import axios from "axios";
import styled from 'styled-components'
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi'
//import { contacts } from '../util/constants'
import { useNavigate } from "react-router-dom";



function Networks() {
  const [network, setNetwork] = useState([]);
  const [index, setIndex] = React.useState(0);
  const [carousel, setCarousel] = useState(true);
  const [addNetwork, setAddNetwork] = useState(false);
  const navigate = useNavigate();


  async function getNetworks () {
    const result = await axios.get(`http://localhost:8080/api/networks/`)
    setNetwork(result.data) 
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

  useEffect(() => {
    getNetworks()
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > network.length - 1) {
          index = 0
        }
        return index
      })
    }, 3000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  return (
    <Wrapper className='section'>
      
      <div className="title">
        <h2>
          <span>Network</span>
        </h2>
      </div>
      
      {carousel &&
      <div className="section-center">
        {network.map((person, personIndex) => {
          const { id, name, image } = person;   
          let position = 'nextSlide';
          if (personIndex === index) {
            position = 'activeSlide';
          }
          if (personIndex === index - 1 || (index === 0 && personIndex == network.length - 1)) {
            position = 'lastSlide'
          }
          return (
            <article className={position} key={id}>
              <img src={image} alt={name} className='person-img' onClick={() => imgClicked(id)} />
              <h4>{name}</h4>
            </article>
          )
        })}
        <button className='prev' onClick={prevSlide}> <FiChevronLeft /></button>
        <button className='next' onClick={nextSlide}> <FiChevronRight /></button>
      </div>
      }
      {carousel &&
      <button className="btn" onClick={() => {
        if (carousel) {
          setCarousel(false)
        }
          setAddNetwork(true)
          getNetworks()

        }}   
      >Add New Network</button>
      }
    </Wrapper>
  )
}
const Wrapper = styled.section`

.title {
  text-align: center;
  margin-bottom: 2rem;
  
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
  cursor: pointer;
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
}

article.lastSlide {
  transform: translateX(-100%);
}

article.nextSlide {
  transform: translateX(100%);
}
`
export default Networks