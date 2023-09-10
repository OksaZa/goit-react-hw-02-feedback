import { styled } from 'styled-components';

export const StatisticsBox = styled.div`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px;
  text-align: center;
  max-width: 300px;
  margin: 0 auto;

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    font-size: 16px;
    margin-bottom: 10px;
  }

  p {
    font-size: 18px;
    margin-top: 10px;
    font-weight: bold;
  }
`;
