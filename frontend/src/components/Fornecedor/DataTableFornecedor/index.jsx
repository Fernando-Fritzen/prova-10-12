import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as C from "../../DataTable/style"

import ModalEdit from '../ModalEditFornecedor'

function DataTableFornecedor() {
    const [fornecedor, setFornecedor] = useState([]);

    useEffect(() => {

        async function buscarFornecedores() {
            await axios.get('http://localhost:8080/fornecedores')
                .then(res => {
                    console.log(res.data);
                    setFornecedor(res.data);
                })
        }
        buscarFornecedores();

    },[])

    const [show, setShow] = useState(false);
    const close = () => setShow(false);
    const [fornecedorAtual, setFornecedorAtual] = useState([]);

    function handleModalEdit(item) {
        setShow(true);
        setFornecedorAtual(item);
    }

  return (
      <>
        <C.Table>
            <thead>
                <tr>
                    <th className='left'>Nome</th>
                    <th>Telefone</th>
                    <th className='right'>CNPJ</th>
                </tr>
            </thead>
            <tbody>
                {fornecedor.map((item) => (
                    <tr key={item.id} onClick={() => handleModalEdit(item)} >
                        <td className='left'>{item.nome}</td>
                        <td>{item.telefone}</td>
                        <td className='right'>{item.cnpj}</td>
                    </tr>
                ))}
            </tbody>
        </C.Table>

        <ModalEdit show={show} close={close} fornecedor={fornecedorAtual} />
      </>
  );
}

export default DataTableFornecedor;