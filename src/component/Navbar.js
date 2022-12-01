import { Link } from 'react-router-dom';
import styled from "styled-components";

const Navbar = () => {
    const Button = styled.button`
      margin: 10px;
      width: 100px;
      height: 30px;
      border-style: none;
      border-radius: 15px;
      background-color: #ff7e5f;
      color: #ffffff;
      font-size: large;
      font-weight: bold;
      &:hover {
        background: #df5e3f;
        color: white;
        transition: 0.3s;
      }
    `
    return(
        <nav className="navbar">
            <Link to ="/"><Button>Home</Button></Link>
            <Link to ="/post"><Button>Post</Button></Link>
            <Link to ="/write/:id"><Button>Write</Button></Link>
            <Link to ="/setting"><Button>Setting</Button></Link>
        </nav>
    )
}
export default Navbar;