import styled from "styled-components";

export const Navbar = styled.header`
    width: 100%;
    height: 80px;
    background: #00DC88;

    ul {
        display: flex;
        width: min(550px, 100%);
        height: 100%;
        padding: 0 40px;
        justify-content: space-between;
        align-items: center;
    
        a {
            color: #000;
        }

        li {
            list-style: none;
            padding: 15px;
            cursor: pointer;
            font-weight: 600;
        }
    }
`;