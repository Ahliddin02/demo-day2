import React from 'react'
import {NavDropdown, Navbar, Nav, Container, Dropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

export default function Header() {
    return (
        <div>
<Navbar className="bg" fixed="top" variant="dark" bg="dark" expand="lg">
        <Container fluid>
        <img 
        className="nav"
        style={{height:"40px"}}
      src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbl4FutwnDXulqce_VtXB7zxK48ABhNzBlCIM1nu_4ouKWrVGag6oY6x9eiXzC0gEJzLs&usqp=CAU'}
    />
        <Navbar.Brand className="nav" href="/" to='/'>Главная страница</Navbar.Brand>
        <Navbar.Brand className="df">Магазин турецкой одежды</Navbar.Brand>
        <Navbar.Brand  href="/Register" to='/Register'>Регистрация</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-dark-example" />
        <Navbar.Collapse id="navbar-dark-example">
      <Nav>
        <NavDropdown
          id="nav-dropdown-dark-example"
          title="Категории"
          menuVariant="dark"
        >
         
         <NavDropdown.Item href="/" to='/'>Домой</NavDropdown.Item>
          <NavDropdown.Item href="/shirt" to='/shirt'>Мужская рубашка</NavDropdown.Item>
          <NavDropdown.Item href="/sneakers" to='/sneakers'>Кроссовки</NavDropdown.Item>
          <NavDropdown.Item href="/sundress" to='/sundress'>Сарафан</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="/ankle-boots" to='/ankle-boots'>Ботильоны</NavDropdown.Item>
          <NavDropdown.Item href="/down-jacket" to='/down-jacket'>Пуховик детский</NavDropdown.Item>
          <NavDropdown.Item href="/childrens-shirt" to='/childrens-shirt'>Детский футболка</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    )
}
