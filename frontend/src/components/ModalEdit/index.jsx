import React, { useState, useEffect } from 'react';
import axios from 'axios';
import * as C from '../Modal/style';
import * as S from './style';

function ModalEdit({show, close, produto}) {

    const [id, setId] = useState(500);
    const [nome , setNome] = useState("");
    const [precoCompra, setPrecoCompra] = useState("");
    const [precoVenda, setPrecoVenda] = useState("");
    const [tipoProduto, setTipoProduto] = useState("");
    const [fornecedor, setFornecedor] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [tipoProdutos, setTipoProdutos] = useState([]);
    const [fornecedores, setFornecedores] = useState([]);

    if(produto && produto.id !== id) {
        async function buscarProduto(id) {
            await axios.get(`http://localhost:8080/produtos/${produto.id}`)
                .then(res => {
                    setId(res.data.id);
                    setNome(res.data.nome);
                    setPrecoCompra(res.data.precoCompra);
                    setPrecoVenda(res.data.precoVenda);
                    setTipoProduto(res.data.tipoProduto.id);
                    setFornecedor(res.data.fornecedor.id);
                    setQuantidade(res.data.quantidade);
                    console.log("Produto: " + res.data)
                })
        }

        buscarProduto(produto.id);
    }

    function handleSubmit(event) {
        const novoProduto = {
            nome: nome,
            precoCompra: precoCompra,
            precoVenda: precoVenda,
            quantidade: quantidade,
            fornecedor: {
                id: fornecedor
            },
            tipoProduto: {
                id: tipoProduto
            }
        }

        event.preventDefault();

        console.log(novoProduto);

        axios.put(`http://localhost:8080/produtos/${id}`, novoProduto)
            .then(res => {
                window.location.reload();
            })
    }

    const handleChangeNome = (e) => {
        setNome(e.target.value);
    }

    const handleChangePrecoCompra = (e) => {
        setPrecoCompra(e.target.value);
    }

    const handleChangePrecoVenda = (e) => {
        setPrecoVenda(e.target.value);
    }

    const handleChangeTipoProduto = (e) => {
        setTipoProduto(e.target.value);
    }

    const handleChangeFornecedor = (e) => {
        setFornecedor(e.target.value);
    }

    const handleChangeQuantidade = (e) => {
        setQuantidade(e.target.value);
    }

    useEffect(() => {

        async function buscarTipoProdutos() {
            await axios.get('http://localhost:8080/tipoproduto')
                .then(res => {
                    setTipoProdutos(res.data);
                })
        }

        buscarTipoProdutos();
    },[])

    useEffect(() => {

        async function buscarFornecedores() {
            await axios.get('http://localhost:8080/fornecedores')
                .then(res => {
                    setFornecedores(res.data);
                })
        }

        buscarFornecedores();
    },[])

    const [showModalConfirm, setShowModalConfirm] = useState(false);
    const closeModalConfirm = () => setShowModalConfirm(false);

    function apagarProduto() {
        axios.delete(`http://localhost:8080/produtos/${produto.id}`)
            .then(window.location.reload())
    }

  return (
      <>
        <C.Container style={{
            display: show ? 'flex' : 'none'
        }}>
            <div id="modal-container">
                <div id="fechar" onClick={close}>+</div>
                <div id="headerModal"><h3>Produtos</h3></div>

                <form onSubmit={handleSubmit}>

                    <div className="input-produtos">
                        <label className="input-label">Produto</label>
                        <input name="nome" onChange={handleChangeNome} value={nome} className="form-produtos" type="text" placeholder="Produto" required="required"/><br/>
                    </div>
                    
                    <div className="input-produtos">
                        <label className="input-label">Tipo do produto</label>
                        <select defaultValue={'DEFAULT'} name="tipoProduto" onChange={handleChangeTipoProduto} value={tipoProduto} required="required">
                            <option selected="selected" value="default">Tipo do produto</option>
                            {tipoProdutos?.map((item) => (
                                <option key={item.id} value={item.id}>{item.tipo}</option>
                            ))}
                        </select>
                    </div>

                    <div className="input-produtos">
                        <label className="input-label">Preço de Compra</label>
                        <input name="precoCompra" onChange={handleChangePrecoCompra} value={precoCompra} className="form-produtos" type="number" placeholder="Preço de Compra" required="required"/><br/>
                    </div>

                    <div className="input-produtos">
                        <label className="input-label">Preço de venda</label>
                        <input name="precoVenda" onChange={handleChangePrecoVenda} value={precoVenda} className="form-produtos" type="number" placeholder="Preço de venda" required="required"/>
                    </div>

                    <div className="input-produtos">
                        <label className="input-label">Fornecedor</label>
                        <select defaultValue={'DEFAULT'} name="fornecedor" onChange={handleChangeFornecedor} value={fornecedor} required="required">
                            <option selected="selected" value="default">Fornecedor</option>
                            {fornecedores?.map((item) => (
                                <option key={item.id} value={item.id}>{item.nome}</option>
                            ))}
                        </select>
                    </div>

                    <div className="input-produtos">
                        <label className="input-label">Quantidade</label>
                        <input name="quantidade" onChange={handleChangeQuantidade} value={quantidade} placeholder="Quantidade" />
                    </div>

                    <button type="submit" id="enviarProduto">Editar</button>

                </form>
                <button id="button-delete" onClick={() => setShowModalConfirm(true)}>Apagar</button>
            </div>
            <div className="wrapper" />
        </C.Container>
        <S.ModalConfirm style={{
            display: showModalConfirm ? 'flex' : 'none'
        }}>
            <div id="modalConfirm">
                <div id="fechar" onClick={closeModalConfirm}>+</div>

                <p>Você tem certeza que deseja apagar o <br /> produto "{produto?.nome}"</p>
                <button onClick={() => apagarProduto()}>Sim</button>
                <button style={{background:'#aaa', marginTop:'10px'}} onClick={closeModalConfirm}>Não</button>
            </div>
            <div className="wrapper" />
        </S.ModalConfirm>
    </>
  );
}

export default ModalEdit;