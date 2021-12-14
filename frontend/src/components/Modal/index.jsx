import axios from 'axios';
import React, { useState, useEffect } from 'react';
import * as C from './style';

function Modal({show, close}) {

    const [nome , setNome] = useState("");
    const [precoCompra, setPrecoCompra] = useState("");
    const [precoVenda, setPrecoVenda] = useState("");
    const [tipoProduto, setTipoProduto] = useState("");
    const [fornecedor, setFornecedor] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [tipoProdutos, setTipoProdutos] = useState([]);
    const [fornecedores, setFornecedores] = useState([]);

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

        axios.post('http://localhost:8080/produtos', novoProduto)
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

  return (
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

                <button className="button-enviar" type="submit" id="enviarProduto">Adicionar</button>


            </form>
        </div>
        <div className="wrapper" />
</C.Container>

  );
}

export default Modal;