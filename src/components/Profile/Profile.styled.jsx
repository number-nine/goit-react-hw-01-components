import styled from '@emotion/styled';

export const ProfileCard = styled.div`
  display: flex;
  padding: 0;
  margin: 0;

  min-width:240px;
  flex-direction: column;
  row-gap: 8px;
  justify-content: flex-start;
  align-items: center;
  border-radius: 8px;

  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2), 0 4px 6px rgba(0, 0, 0, 0.2);

  font-size: 24px;
  color: #010101;

  overflow: hidden;
`;

export const ProfileDescription = styled.div`
  display: flex;
  margin: 0;
  padding:16px;

  width: 100%;
  flex-direction: column;
  row-gap: 8px;
  justify-content: flex-start;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 120px;
  border: 1px solid #bababa;
  border-radius: 50%;
`;

export const UserName = styled.p`
  margin: 0;
  font-weight: 700;
`;

export const UserData = styled.p`
  margin: 0;
  font-size: 18px;

  color: #bababa;
`;
