import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { navLinks } from '../util/constants'
import { FaBars } from 'react-icons/fa'
// import { logo } from '../assets/logo.png'

const Navbar = () => {
  const openSidebar = () => {
    //do something
  }

  return (
    <NavContainer><div className="nav-center">
      <div className="nav-header">
        <Link to='/landing'>
          <span>home</span>
          {/* <img src={logo} alt="job map main svg" /> */}
        </Link>
        <button type="button" className="nav-toggle" onClick={openSidebar}>
          <FaBars />
        </button>
      </div>
      <ul className="nav-links">
        {navLinks.map((link) => {
          const { id, text, url } = link;
          return <li key={id}>
            <Link to={url}>
              {text}
            </Link>
          </li>
        })}
      </ul>
    </div>
      <Link to="/" className='logout'>logout</Link>
    </NavContainer>
  )
}

const NavContainer = styled.nav`
  height: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  .nav-center {
    width: 90vw;
    margin: 0 auto;
    max-width: var(--max-width);
     
  }
  .nav-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    img {
      width: 175px;
      margin-left: -15px;
    }
  }
  .nav-toggle {
    background: transparent;
    border: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    svg {
      font-size: 2rem;
    }
  }
  .nav-links {
    display: none;
  }
  .logout {
    justify-content: end;
    text-decoration: none;
    color: var(--clr-white);
    padding-right: 2rem;
  }
  @media (min-width: 992px) {
    .nav-toggle {
      display: none;
    }
    .nav-center {
      display: grid;
      grid-template-columns: auto 1fr auto;
      align-items: center;
    }
    .nav-links {
      display: flex;
      justify-content: center;
      li {
        margin: 0 0.5rem;
      }
      a {
        color: var(--clr-white);
        font-size: 1rem;
        text-transform: capitalize;
        letter-spacing: var(--spacing);
        padding: 0.5rem;
        &:hover {
          border-bottom: 2px solid var(--clr-primary-7);
        }
      }
    }
  }
`

export default Navbar