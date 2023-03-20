import PropTypes, { arrayOf } from 'prop-types';
import { FriendItem, FriendListWrap, Name, Status } from './FriendList.style';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrap>
      <ul>
        {friends.map(friend => {
          return (
            <FriendItem key={friend.id}>
              <Status status={friend.isOnline}></Status>
              <img src={friend.avatar} alt="User avatar" width="48" />
              <Name>{friend.name}</Name>
            </FriendItem>
          );
        })}
      </ul>
    </FriendListWrap>
  );
};

FriendList.propTypes = {
  friends: arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    })
  ),
};
