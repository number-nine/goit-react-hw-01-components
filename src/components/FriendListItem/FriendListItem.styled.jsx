import styled from '@emotion/styled';

export const ListItem = styled.li`
  display: flex;
  padding: 8px 16px;
  margin: 0;
  list-style: none;

  width: 100%;

  column-gap: 8px;
  justify-content: flex-start;
  align-items: center;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);

  font-size: 24px;
  color: #010101;
`;

export const Avatar = styled.img`
  width: 64px;
  height: 64px;
  border: 1px solid #b8b8b8;
  border-radius: 16px;
  padding: 8px;
`;

export const Name = styled.p`
  padding: 0;
  margin: 0;
`;

export const Status = styled.span`
  height: 16px;
  width: 16px;
  border-radius: 50%;

  background-color: ${({ status }) =>  status ? '#00ff00;' : '#ff0000;'};
`;
