/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';

import DataTable from "../components/DataTable";
import Modal from "../components/Modal";
import Header from "../components/Header";
import styled from "styled-components";

import * as C from '../styles/style'


function Produto() {

    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
  
    return (
      <>
        <Header />
        <C.Container>
          <C.TableHeader>
            <h2>Produtos</h2>
            <button onClick={() => setShowModal(true)}>Cadastrar Produto</button>
          </C.TableHeader>
          <DataTable />
          <Modal show={showModal} close={closeModal} />
        </C.Container>
      </>
    );
}

export default Produto;