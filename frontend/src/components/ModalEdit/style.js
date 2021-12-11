import styled from "styled-components";

export const ModalConfirm = styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    justify-content: center;


    div#modalConfirm {
        position: relative;
        height: fit-content;
        margin-top: 120px;
        background: #FFF;
        padding: 50px 80px;
        line-height: 1.5;
        z-index: 100;

        #fechar {
            position: absolute;
            top: 0;
            right: 15px;
            font-size: 35px;
            transform: rotate(45deg);
            cursor: pointer;
        }
    }

    button {
        width: 100%;
        margin-top: 20px;
        padding: 10px;
        border: none;
        background: #ff7e7c;
        color: #FFF;
        font-weight: bolder;
        cursor: pointer;
    }
`;