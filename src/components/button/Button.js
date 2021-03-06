import { Link as _Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkDiv = styled(_Link)`
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 14px;
    text-decoration-line: underline;
    color: #4b48ff;
    cursor: pointer;
    -webkit-transition: all 0.2s ease;
    transition: all 0.2s ease;

    focus,
    hover,
    link:focus,
    link:hover,
    visited:focus,
    visited:hover,
    active:focus,
    active:hover {
        color: #4b48ff;
        -webkit-transition: all 0.2s ease;
        transition: all 0.2s ease;
    }
`;

export const LinkButton = ({ name, url }) => {
    return (
        <LinkDiv to="/external-link" state={{ url: url }}>
            {name}
        </LinkDiv>
    );
};

export default LinkButton;
