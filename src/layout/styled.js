import styled from 'styled-components';

const LayoutContainer = styled.main``;

export const Wrapper = styled.div`
    display: flex;
    top: 64px;
    position: relative;
    height: calc(100% - 75px);
    width: 100%;
    flex: auto;
    flex-direction: column;
`;
export const Main = styled.main`
    position: fixed;
    height: 100%;
    width: 100%;
    padding: 2.57rem 5.71rem;
    overflow-y: scroll;

    @media (max-width: 900px) {
        padding-left: 2rem;
        padding-right: 2rem;
    }
`;

export const HeaderBar = styled.header`
    width: 100%;
    padding: 1.64rem 5.71rem;
    display: flex;
    height: 75px;
    position: fixed;
    align-items: center;
    background-color: #03009e;
    box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.25);
    z-index: 1;
`;

export default LayoutContainer;
