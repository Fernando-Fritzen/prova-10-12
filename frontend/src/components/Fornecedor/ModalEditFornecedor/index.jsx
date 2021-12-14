/* eslint-disable no-undef */
import React, { useState } from 'react';
import axios from 'axios';
import * as C from "../../Modal/style"
import * as S from "../../ModalEdit/style"


function ModalEditFornecedor({show, close, fornecedor}) {
    const [id, setId] = useState(500);
    const [nome , setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    const [cnpj, setCnpj] = useState("");

    if(fornecedor && fornecedor.id !== id) {
        async function buscarFornecedor(id) {
            await axios.get(`http://localhost:8080/fornecedores/${fornecedor.id}`)
                .then(res => {
                    console.log("fornecedor: " + res)
                    setId(res.data.id);
                    setNome(res.data.nome);
                    setTelefone(res.data.telefone)
                    setCnpj(res.data.cnpj)
                })
        }

        buscarFornecedor(fornecedor.id);
    }

    function handleSubmit(event) {
        const novoFornecedor = {
            nome: nome,
            telefone: telefone,
            cnpj: cnpj
        }

        event.preventDefault();

        console.log(novoFornecedor);

        axios.put(`http://localhost:8080/fornecedores/${id}`, novoFornecedor)
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

    const [showModalConfirm, setShowModalConfirm] = useState(false);
    const closeModalConfirm = () => setShowModalConfirm(false);

    function apagarFornecedor() {
        axios.delete(`http://localhost:8080/fornecedores/${fornecedor.id}`)
            .then(window.location.reload())
    }

  return (
      <>
        <C.Container style={{
            display: show ? 'flex' : 'none'
        }}>
            <div style={{height:'470px'}} id="modal-container">
                <div id="fechar" onClick={close}>+</div>
                <div id="headerModal"><h3>Produtos</h3></div>

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

                    <button style={{marginTop:'12px'}} type="submit" id="enviarProduto">Editar</button>

                </form>
                <button style={{width:'90%'}} id="button-delete" onClick={() => setShowModalConfirm(true)}>Apagar</button>
            </div>
            <div className="wrapper" />
        </C.Container>
        <S.ModalConfirm style={{
            display: showModalConfirm ? 'flex' : 'none'
        }}>
            <div id="modalConfirm">
                <div id="fechar" onClick={closeModalConfirm}>+</div>

                <p>Você tem certeza que deseja apagar o <br /> fornecedor "{fornecedor?.nome}"</p>
                <button onClick={() => apagarFornecedor()}>Sim</button>
                <button style={{background:'#aaa', marginTop:'10px'}} onClick={closeModalConfirm}>Não</button>
            </div>
            <div className="wrapper" />
        </S.ModalConfirm>
    </>
  );
}

export default ModalEditFornecedor;