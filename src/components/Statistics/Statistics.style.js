import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 497px;
  margin: 0 auto;
  margin-bottom: 25px;
`;

export const Title = styled.h2`
  padding: 20px 0;
  text-align: center;
  font-size: 35px;
  text-transform: uppercase;
  background-color: #ffffff;
`;

export const StatisticsList = styled.ul`
  display: flex;
  width: 100%;
`;

export const StatisticsItem = styled.li`
  text-align: center;
  padding: 25px 46px;
  color: #ffffff;
  background-color: ${props => props.color};
`;

export const Percentage = styled.span`
  display: block;
`;
