import React from 'react';
import { Row, Navbar } from 'react-materialize';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <Row>
      <Navbar className="deep-orange darken-2">
        <li>
          <NavLink to="/">Página inicial</NavLink>
        </li>
        <li>
          <NavLink to="/cadastrar_cliente">Crie sua conta de cliente</NavLink>
        </li>
      </Navbar>
    </Row>
  );
}
