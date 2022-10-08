import styled from '@emotion/styled';

export const Container = styled.div`
    width: 30%;

    display: flex;
    flex-direction: column;
    gap: 8px;

    color: #3174ee;

    border: 1px solid #bac4da;
    border-radius: 5px;
`;
export const InputBase = styled.select`
    cursor: pointer;

    outline: none;
    border: none;

    border-radius: 5px;

    height: 40px;

    padding-left: 8px;

    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;

    display: flex;
    align-items: center;

    transition: 0.2s;
`;
