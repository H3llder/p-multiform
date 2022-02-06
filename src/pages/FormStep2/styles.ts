import styled from 'styled-components';

export const Container = styled.div`
    p {
        font-size: 13px;
        color: #b8b8d4;
        margin-bottom: 10px;
    }

    h1 {
        font-size: 26px;
        margin: 0;
        padding: 0;
        margin-bottom: 10px;
    }

    hr {
        height: 1px;
        border: 0;
        background: #16195c;
        margin: 30px 0;
    }

    button {
        background-color: #25CD89;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        padding: 20px 40px;
        border: 0;
        border-radius: 30px;
        cursor: pointer;
        margin-top: 30px;
        transition: all ease 0.2s;
    } button:hover {
        background: transparent;
        border: 2px solid #25CD89;
        color: #25CD89;
        
        padding: 18px 38px;
    }

    .backButton {
        font-size: 16px;
        text-decoration: none;
        padding: 20px 40px;
        color: #B8B8D4;
    }
`;
