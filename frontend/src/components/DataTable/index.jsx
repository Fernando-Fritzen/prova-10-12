import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { MdModeEdit, MdDelete, MdClose } from "react-icons/md";
import ModalEdit from '../ModalEdit';
import * as C from './style';

// import { Container } from './styles';

function DataTable() {

    const [produtos, setProdutos] = useState([]);

    useEffect(() => {

        async function buscarProdutos() {
            await axios.get('http://localhost:8080/produtos')
                .then(res => {
                    console.log(res.data);
                    setProdutos(res.data);
                })
        }
        buscarProdutos();

    },[])

    const [show, setShow] = useState(false);
    const close = () => setShow(false);
    const [produtoAtual, setProdutoAtual] = useState([]);

    function handleModalEdit(item) {
        setShow(true);
        setProdutoAtual(item);
    }

  return (
      <>
        <C.Table className="table-produtos">
            <thead>
                <tr>
                    <th className='left'>Produto</th>
                    <th>Tipo do produto</th>
                    <th>Preço de compra</th>
                    <th>Preço de venda</th>
                    <th>Fornecedor</th>
                    <th className='right'>Quantidade</th>
                </tr>
            </thead>
            <tbody>
                {produtos.map((item) => (
                    <tr key={item.id} onClick={() => handleModalEdit(item)} >
                        <td className='left'>{item.nome}</td>
                        <td>{item.tipoProduto.tipo}</td>
                        <td>{item.precoCompra}</td>
                        <td>{item.precoVenda}</td>
                        <td>{item.fornecedor.nome}</td>
                        <td className='right'>{item.quantidade}</td>
                    </tr>
                ))}
            </tbody>
        </C.Table>

        <ModalEdit show={show} close={close} produto={produtoAtual} />
      </>
  );
}

export default DataTable;