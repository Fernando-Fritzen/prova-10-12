import axios from 'axios';
import React, { useState, useEffect } from 'react';
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

  return (
      <>
        <C.Table>
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
                    <tr key={item.id} >
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
      </>
  );
}

export default DataTable;