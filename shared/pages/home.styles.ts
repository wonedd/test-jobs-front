import styled from '@emotion/styled';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    margin-top: 32px;
`;

export const Loading = styled.div`
    width: 64px;
    height: 64px;

    border: 9px solid #3174ee;
    border-top: 9px solid transparent;
    border-right: 9px solid transparent;
    border-radius: 50%;

    margin: 0 auto;

    animation: loading 0.5s linear infinite;
`;
