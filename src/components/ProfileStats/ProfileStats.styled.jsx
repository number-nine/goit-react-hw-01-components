import styled from '@emotion/styled';

export const StatsContainer = styled.ul`
  display: flex;
  padding: 0;
  margin: 0;

  width: 100%;
  justify-content: stretch;
  align-items: center;

  font-size: 18px;
  color: #010101;
`;

export const StatItem = styled.li`
  margin: 0;
  padding: 4px;
  list-style: none;
  flex-grow: 1;
  flex-basis: 1px;
  border: 0.5px solid #bababa;
  border-top: 1px solid #bababa;
  background-color: #eaeaea;

  font-size: 14px;
`;

export const StatLabel = styled.span`
  display: block;
  margin-top: 8px;
  color: #bababa;
  text-align:center;
`;

export const StatData = styled.span`
  display: block;
  margin-top: 8px;
  text-align: center;

  font-weight: 700;
  color: #010101;
`;
