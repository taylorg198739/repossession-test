import styled from 'styled-components/macro';

export const ListPageWrapper = styled.div`
    width: 800px;
    max-width: 800px;
    margin: 0 auto;
    background-color: #eee;
    padding: 50px;
    min-height: 100vh;
`;

export const ListView = styled.ul`
    padding: 0;
    list-style: none;
`;

export const Row = styled.li`
    padding: 5px 10px;
    box-shadow: 0 0 6px 1px inset rgba(0, 0, 0, 0.2);

    a {
        text-decoration: ${({ completed }) => completed ? 'line-through' : 'none'};
    }

    &:hover {
        a {
            color: gray;
        }
    }
`;
