import {
  Percentage,
  StatisticsItem,
  StatisticsList,
  StatisticsSection,
  Title,
} from './Statistics.style';

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>Upload stats</Title>}
      <StatisticsList>
        {stats.map((stat, id) => {
          return (
            <StatisticsItem key={id} color={getRandomHexColor()}>
              <span>{stat.label}</span>
              <Percentage>{stat.percentage}%</Percentage>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
};
