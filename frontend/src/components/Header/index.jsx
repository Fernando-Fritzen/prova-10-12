import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from './style'

function Header() {
  return (
    <Navbar>
        <ul>
            <Link to="/">
                <li>Produtos</li>
            </Link>
            <Link to="/fornecedor">
                <li>Fornecedores</li>
            </Link>
            <Link to="tipo">
                <li>Tipo de Produtos</li>
            </Link>
        </ul>
    </Navbar>
  );
}

export default Header;