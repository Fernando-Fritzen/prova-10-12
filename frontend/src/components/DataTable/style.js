import styled from "styled-components";

export const Table = styled.table`

    width: 100%;
    height: fit-content;
    border-spacing: 0 1px;
    text-align: center;
    margin-bottom: 30px;
    border-top: none;

    th, td {
        padding: 30px 25px;
        background: #FFF;
    }
    
    tbody tr {
        opacity: 0.7;

        &:hover {
            opacity: 1;
        }
    }

`;
