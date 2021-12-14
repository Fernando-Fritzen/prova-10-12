import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import DataTable from '../components/Tipo/DataTableTipo'
import Modal from '../components/Tipo/ModalTipo'
import * as C from "../styles/style"

function TipoProduto() {
    const [showModal, setShowModal] = useState(false);
    const closeModal = () => setShowModal(false);
  
    return (
      <>
        <Header />
        <C.Container>
          <C.TableHeader>
            <h2>Tipo de Produtos</h2>
            <button onClick={() => setShowModal(true)}>Cadastrar Tipo</button>
          </C.TableHeader>
          <DataTable />
          <Modal show={showModal} close={closeModal} />
        </C.Container>
      </>
    );
}

export default TipoProduto;