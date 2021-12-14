/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as C from '../../DataTable/style';
import ModalEdit from '../ModalEditTipo'

// import { Container } from './styles';

function DataTableTipo() {
    const [tipo, setTipo] = useState([]);

    useEffect(() => {

        async function buscarTipos() {
            await axios.get('http://localhost:8080/tipoproduto')
                .then(res => {
                    console.log(res.data);
                    setTipo(res.data);
                })
        }
        buscarTipos();

    },[])

    const [show, setShow] = useState(false);
    const close = () => setShow(false);
    const [tipoAtual, setTipoAtual] = useState([]);

    function handleModalEdit(item) {
        setShow(true);
        setTipoAtual(item);
    }

  return (
      <>
        <C.Table>
            <thead>
                <tr>
                    <th>Tipo do Produto</th>
                </tr>
            </thead>
            <tbody>
                {tipo?.map((item) => (
                    <tr key={item.id} onClick={() => handleModalEdit(item)} >
                        <td>{item.tipo}</td>
                    </tr>
                ))}
            </tbody>
        </C.Table>

        <ModalEdit show={show} close={close} tipoProduto={tipoAtual} />
      </>
  );
}

export default DataTableTipo;