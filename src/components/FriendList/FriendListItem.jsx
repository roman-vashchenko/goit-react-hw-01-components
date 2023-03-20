import PropTypes from 'prop-types';
import { FriendListItemWrap, Name, Status } from './FriendList.style';
export const FriendListItem = ({ avatar, name, status }) => {
  return (
    <FriendListItemWrap>
      <Status status={status}></Status>
      <img src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </FriendListItemWrap>
  );
};

FriendListItem.propTypes = {
  status: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};
