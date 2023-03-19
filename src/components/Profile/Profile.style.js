import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 496px;
  margin: 0 auto;
  margin-bottom: 25px;
  background-color: #ffffff;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  display: block;
  padding-top: 30px;
  margin: auto;
  margin-bottom: 10px;
  border-radius: 50%;
`;

export const MainInformation = styled.div`
  text-align: center;
  font-size: 25px;
  font-weight: 500;
  margin-bottom: 20px;
`;

export const Name = styled.p`
  font-size: 50px;
  font-weight: 700;
  margin-bottom: 20px;
`;

export const Tag = styled.p`
  margin-bottom: 20px;
  color: #c0c0c0;
`;

export const Location = styled.p`
  margin-bottom: 39px;
  color: #c0c0c0;
`;

export const UserStatistics = styled.ul`
  display: flex;
`;

export const UserStatisticsItem = styled.li`
  text-align: center;
  border: 1px solid #d3d3d3;
  padding: 20px 58px;
  background-color: #f5f5f5;
`;

export const Label = styled.span`
  display: block;
  margin-bottom: 15px;
  color: #c0c0c0;
`;

export const Quantity = styled.span`
  display: block;
  text-align: center;
  font-weight: 700;
`;
