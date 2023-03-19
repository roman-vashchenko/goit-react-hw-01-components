import { StatisticsList, StatisticsWrap, Title } from './Statistics.style';

export const Statistics = ({ title, stats, id }) => {
  return (
    <StatisticsWrap>
      {title && <Title>Upload stats</Title>}
      <StatisticsList>
        {stats.map((stat, id) => {
          return (
            <li key={stat.id}>
              <span>{stat.label}</span>
              <span>{stat.percentage}%</span>
            </li>
          );
        })}
      </StatisticsList>
    </StatisticsWrap>
  );
};
