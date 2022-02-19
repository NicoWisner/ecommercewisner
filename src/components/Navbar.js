import {Container,FormControl,Navbar,Nav,Badge,Dropdown} from "react-bootstrap";
import {FaShoppingCart} from "react-icons/fa"

const Header = () => {
  return ( 
    <Navbar>
       <Container>
         <Navbar.Brand>
           <p>e-Commerce</p>
         </Navbar.Brand>
         <Navbar.Text className = "search">
           <FormControl
            style = {{ Whidth: 500 }}
            placeholder = "Search a product"
           />
         </Navbar.Text>
         <Nav>
           <Dropdown>
             <Dropdown.Toggle variant = "Success">
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
    