import React, { useState } from 'react';
import * as C from '../../Modal/style'
import axios from 'axios';

function ModalFornecedor({show, close}) {
    const [nome , setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cnpj, setCnpj] = useState("")

    function handleSubmit(event) {
        const novoFornecedor = {
            nome: nome,
            telefone: telefone,
            cnpj: cnpj
        }

        event.preventDefault();

        console.log(novoFornecedor);

        axios.post('http://localhost:8080/fornecedores', novoFornecedor)
            .then(res => {
                window.location.reload();
            })
    }

    const handleChangeNome = (e) => {
        setNome(e.target.value);
    }

    const handleChangeTelefone = (e) => {
        setTelefone(e.target.value);
    }

    const handleChangeCnpj = (e) => {
        setCnpj(e.target.value);
    }


  return (
    <C.Container style={{
            display: show ? 'flex' : 'none'
        }}>
        <div style={{height:'380px'}} id="modal-container">
            <div id="fechar" onClick={close}>+</div>
            <div id="headerModal"><h3>Fornecedores</h3></div>

            <form onSubmit={handleSubmit}>

                <div className="input-produtos">
                    <label className="input-label">Fornecedor</label>
                    <input name="nome" onChange={handleChangeNome} value={nome} className="form-produtos" type="text" placeholder="Fornecedor" required="required"/><br/>
                </div>
                
                <div className="input-produtos">
                    <label className="input-label">Telefone</label>
                    <input name="telefone" onChange={handleChangeTelefone} value={telefone} placeholder="Telefone" />
                </div>

                <div className="input-produtos">
                    <label className="input-label">CNPJ</label>
                    <input name="cnpj" onChange={handleChangeCnpj} value={cnpj} placeholder="CNPJ" />
                </div>

                <button type="submit" id="enviarProduto">Adicionar</button>


            </form>
        </div>
        <div className="wrapper" />
    </C.Container>
  );
}

export default ModalFornecedor;