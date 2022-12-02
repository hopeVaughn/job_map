import styled from 'styled-components';
import 'animate.css';
import { Link } from 'react-router-dom';

function Home() {

  return (
    <Wrapper>
      <div className="job">
        <div> job.map(</div>
        <Link to="/register" className="login">Login</Link>
        <div>)</div>
      </div>
    </Wrapper>

  )
}

const Wrapper = styled.section`
.job {
  margin: 0;
  padding: 0;
  color: #954ccd;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 11vw;
  width: 100%;
  height: 95vh;
  animation: zoomInDown; 
  animation-duration: 2s;
  font-family: 'Delight Coffee', sans-serif;
  white-space: pre-wrap;   
  padding-bottom: 20%;
  padding-right: 30%;
}                                  
}

 .login {
    border-radius: 0.5rem;
    background:  rgb(35, 6, 51);
    font-size: 7vw;
    color: var(--clr-complement-3);
    position: relative;
    z-index: 0;
    font-family: sans-serif;
    padding-bottom: 1%;
 } 

  .login:before {
    content: '';
    background: linear-gradient(45deg, #efdbfe, #e5bffe, #d393fd, #bc60fa, #ae3bf6, #9525eb, #8d1dd8, #751eaf, #681e8a);
    position: absolute;
    top: -2px;
    left:-2px;
    background-size: 400%;
    z-index: -1;
    filter: blur(5px);
    width: calc(100% + 4px);
    height: calc(100% + 4px);
    animation: glowing 20s linear infinite;
    opacity: 0;
    transition: opacity .3s ease-in-out;
    border-radius: 10px;
  }

  .login:active {
    color: #000
  }

  .login:active:after {
    background: transparent;
  }

  .login:hover:before {
    opacity: 1;
  }

  .login:after {
    z-index: -1;
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background:  rgb(35, 6, 51);
    left: 0;
    top: 0;
    border-radius: 10px;
  }

  a, button {
    line-height: 0.8;

}
  @keyframes glowing {
    0% { background-position: 0 0; }
    50% { background-position: 400% 0; }
    100% { background-position: 0 0; }
  } 
`
export default Home

