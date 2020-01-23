import styled from 'styled-components/macro';

export const DetailPageWrapper = styled.div`
    width: 800px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #eee;
    padding: 50px;
    min-height: 100vh;
`;

export const Status = styled.div`
    background-color: ${({ completed }) => completed ? 'lightgreen' : 'pink' };
    padding: 5px 10px;
    border-radius: 5px;
    margin-top: 30px;
    display: inline-block;
`;
