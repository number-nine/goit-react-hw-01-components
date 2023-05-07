import styled from '@emotion/styled';

export const StatsItem = styled.li`
  padding: 4px;
  margin: 0;
  list-style: none;
  flex-basis: 1px;
  flex-grow: 1;


  background-color: #eaeaea;

  font-weight: 700;
  color: #ffffff;

  background-color: ${() =>
    `#${Math.floor(Math.random() * 16777215).toString(16)};`};
`;

export const StatText = styled.span`
  display: block;
  margin-top: 8px;
  text-align: center;
`;
