import {
  Percentage,
  StatisticsItem,
  StatisticsList,
  StatisticsSection,
  Title,
} from './Statistics.style';

export const Statistics = ({ title, stats, id }) => {
  return (
    <StatisticsSection>
      {title && <Title>Upload stats</Title>}
      <StatisticsList>
        {stats.map((stat, id) => {
          return (
            <StatisticsItem key={stat.id}>
              <span>{stat.label}</span>
              <Percentage>{stat.percentage}%</Percentage>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
};
