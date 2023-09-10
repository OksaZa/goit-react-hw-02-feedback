import { styled } from 'styled-components';

export const FeedbackContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const FeedbackButton = styled.button`
  background-color: #11074e;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  margin: 0 10px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover {
    background-color: #3ed6d1;
    color: #000;
  }
`;
