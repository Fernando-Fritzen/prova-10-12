import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  padding: 40px 10%;
  background: #aaa;
`;

export const TableHeader = styled.div`

    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    background-color: #FFF;
    margin-top: 50px;
    border-bottom: none;

    button {
        padding: 15px 20px;
        background: #ff7e7c;
        border: none;
        color: #FFF;
        border-radius: 10px;
        font-weight: 600;
        cursor: pointer;
    }
`;