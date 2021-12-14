import { render, screen, fireEvent } from "@testing-library/react"
import axios from "axios"
import Modal from '.';
import React from "react";

const mockFornecedor = {
    nome: "Jose",
    telefone: "45998451515",
    cnpj: "489498454684"
}

test("Deve chamar a API", () => {

    axios.post.mockImplementation(() => Promise.resolve(mockFornecedor));
    render(<Modal />);

    const inputNome = screen.getByTestId(/nome-input/i);
    const inputTelefone = screen.getByTestId(/telefone-input/i);
    const inputCnpj = screen.getByTestId(/cnpj-input/i);
    const buttonAdd = screen.getByTestId(/button-add/i);

    fireEvent.change(inputNome, {target: { value: "Jose"}});
    fireEvent.change(inputTelefone, {target: { value: "45998451515"}});
    fireEvent.change(inputCnpj, {target: { value: "489498454684"}});
    fireEvent.click(buttonAdd);

    expect(inputNome).toBeInTheDocument();
    expect(inputTelefone).toBeInTheDocument();
    expect(inputCnpj).toBeInTheDocument();
    expect(buttonAdd).toBeInTheDocument();

    expect(axios.post).toHaveBeenCalled();
})