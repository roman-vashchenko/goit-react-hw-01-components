import styled from 'styled-components';

export const Wrapper = styled.div`
  border: 1px solid black;
  width: 500px;
  margin: 0 auto;
`;

export const MainInformation = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const Name = styled.p`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 10px;
`;

export const Avatar = styled.img`
  width: 350px;
  height: 400px;
  display: block;
  margin: auto;
  margin-bottom: 10px;
`;

export const UserStatistics = styled.ul`
  display: flex;
  gap: 30px;
  width: 200px;
  margin: 0 auto;
`;

export const Number = styled.span`
  display: block;
  text-align: center;
  font-weight: 700;
`;
