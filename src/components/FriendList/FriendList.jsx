import PropTypes, { arrayOf } from 'prop-types';
import { FriendItem, FriendListWrap } from './FriendList.style';
import { FriendListItem } from './FriendListItem';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrap>
      <ul>
        {friends.map(friend => {
          return (
            <FriendItem key={friend.id}>
              <FriendListItem
                avatar={friend.avatar}
                name={friend.name}
                status={friend.isOnline}
              />
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
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      status: PropTypes.bool,
    }).isRequired
  ).isRequired,
};
