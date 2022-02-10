import {Container,FormControl,Navbar,Nav,Badge,Dropdown} from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa"

const Header = () => {
  return ( 
    <Navbar>
       <Container>
         <Navbar.Brand>
           <a>e-Commerce</a>
         </Navbar.Brand>
         <Navbar.Text classname = "search">
           <FormControl
            style = {{ Whidth: 500 }}
            placeholder = "Search a product"
           />
         </Navbar.Text>
         <Nav>
           <Dropdown alignRight>
             <Dropdown.Toggle Variant = "Success">
               <FaShoppingCart color="white" fontSize="25px"/>
               <Badge> {10}</Badge>
              </Dropdown.Toggle>
           </Dropdown>
         </Nav>
        

        </Container>

      </Navbar>
   );
 };
 export default Header;
    