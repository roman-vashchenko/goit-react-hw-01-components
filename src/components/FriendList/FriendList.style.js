import styled from 'styled-components';

export const FriendListWrap = styled.div`
  width: 496px;
  margin: 0 auto;
  margin-bottom: 25px;
  background-color: #ffffff;
`;

export const FriendItem = styled.li`
  display: flex;
  align-items: center;
  gap: 25px;
  margin-bottom: 25px;
  padding: 25px;
  box-shadow: 3px 2px 5px 3px rgba(0, 0, 0, 0.53);
  -webkit-box-shadow: 3px 2px 5px 3px rgba(0, 0, 0, 0.53);
  -moz-box-shadow: 3px 2px 5px 3px rgba(0, 0, 0, 0.53);
`;

export const Status = styled.span`
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${props => (props.status ? 'green' : 'red')};
`;
