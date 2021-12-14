/* eslint-disable no-undef */
import React, { useState } from 'react';
import axios from 'axios';
import * as C from '../../Modal/style';

function ModalTipo({show, close}) {
    const [tipo , setTipo] = useState("");

    function handleSubmit(event) {
        const novoTipo = {
            tipo: tipo
        }

        event.preventDefault();

        console.log(novoTipo);

        axios.post('http://localhost:8080/tipoproduto', novoTipo)
            .then(res => {
                window.location.reload();
            })
    }

    const handleChangeTipo = (e) => {
        setTipo(e.target.value);
    }


  return (
    <C.Container style={{
            display: show ? 'flex' : 'none'
        }}>
        <div style={{height:'360px'}} id="modal-container">
            <div id="fechar" onClick={close}>+</div>
            <div id="headerModal"><h3>Tipo de Produtos</h3></div>

            <form onSubmit={handleSubmit}>

                <div style={{width:'100%'}} className="input-produtos">
                    <label className="input-label">Tipo</label>
                    <input style={{padding:'15px 10px'}} name="tipo" onChange={handleChangeTipo} value={tipo} className="form-produtos" type="text" placeholder="Tipo do produto" required="required"/><br/>
                </div>

                <button style={{width:'100%'}} type="submit" id="enviarProduto">Adicionar</button>

            </form>
        </div>
        <div className="wrapper" />
    </C.Container>
  );
}

export default ModalTipo;