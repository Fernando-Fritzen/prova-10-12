/* eslint-disable react-hooks/rules-of-hooks */
import React, { useState } from 'react';
import * as C from "../styles/style"

import Modal from '../components/Fornecedor/ModalFornecedor'
import DataTable from '../components/Fornecedor/DataTableFornecedor';
import Header from '../components/Header';

function fornecedor() {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
  
    return (
      <>
        <Header />
        <C.Container>
          <C.TableHeader>
            <h2>Fornecedores</h2>
            <button onClick={() => setShowModal(true)}>Cadastrar Fornecedor</button>
          </C.TableHeader>
          <DataTable />
          <Modal show={showModal} close={closeModal} />
        </C.Container>
      </>
    );
}

export default fornecedor;