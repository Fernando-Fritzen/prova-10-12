import React, { useState } from 'react';
import axios from 'axios';
import * as C from '../../Modal/style'
import * as S from '../../ModalEdit/style'

function ModalEditTipo({show, close, tipoProduto}) {
    const [id, setId] = useState(500);
    const [tipo, setTipo] = useState("");

    if(tipoProduto && tipoProduto.id !== id) {
        async function buscarTipo(id) {
            await axios.get(`http://localhost:8080/tipoproduto/${tipoProduto.id}`)
                .then(res => {
                    console.log("tipo produto: " + res)
                    setId(res.data.id);
                    setTipo(res.data.tipo);
                })
        }

        buscarTipo(tipo.id);
    }

    function handleSubmit(event) {
        const novoTipo = {
            tipo: tipo
        }

        event.preventDefault();

        console.log(novoTipo);

        axios.put(`http://localhost:8080/tipoproduto/${id}`, novoTipo)
            .then(res => {
                window.location.reload();
            })
    }

    const handleChangeTipo = (e) => {
        setTipo(e.target.value);
    }

    const [showModalConfirm, setShowModalConfirm] = useState(false);
    const closeModalConfirm = () => setShowModalConfirm(false);

    function apagarTipo() {
        axios.delete(`http://localhost:8080/tipoproduto/${tipoProduto.id}`)
            .then(window.location.reload())
    }

  return (
      <>
        <C.Container style={{
            display: show ? 'flex' : 'none'
        }}>
            <div style={{height:'360px'}} id="modal-container">
                <div id="fechar" onClick={close}>+</div>
                <div id="headerModal"><h3>Tipo de Produtos</h3></div>

                <form onSubmit={handleSubmit}>

                    <div style={{flexGrow:'2', marginRight:'15px'}} className="input-produtos">
                        <label className="input-label">Tipo</label>
                        <input name="tipo" onChange={handleChangeTipo} value={tipo} className="form-produtos" type="text" placeholder="Tipo do produto" required="required"/><br/>
                    </div>
                    
                    <button style={{marginTop:'12px', flexGrow:'1'}} type="submit" id="enviarProduto">Editar</button>

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

                <p>Você tem certeza que deseja apagar o <br /> tipo "{tipo}"</p>
                <button onClick={() => apagarTipo()}>Sim</button>
                <button style={{background:'#aaa', marginTop:'10px'}} onClick={closeModalConfirm}>Não</button>
            </div>
            <div className="wrapper" />
        </S.ModalConfirm>
    </>
  );
}

export default ModalEditTipo;