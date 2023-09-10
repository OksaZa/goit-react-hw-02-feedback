import { StatisticsBox } from './Statistics.styled';

export const Statistics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return (
    <StatisticsBox>
      <ul>
        <li>Good: {good}</li>
        <li>Neutral: {neutral}</li>
        <li>Bed: {bad}</li>
      </ul>
      <p>Total: {total}</p>
      <p>Positive Feedbacks: {positivePercentage} %</p>
    </StatisticsBox>
  );
};
