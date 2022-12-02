import { Link } from 'react-router-dom';
import {Button} from "../util/buttonStyled"

const Navbar = () => {
    return(
        <nav className="navbar">
            <Link to ="/"><Button>Home</Button></Link>
            <Link to ="/post"><Button>Post</Button></Link>
            <Link to ="/write"><Button>Write</Button></Link>
            <Link to ="/setting"><Button>Setting</Button></Link>
        </nav>
    )
}
export default Navbar;