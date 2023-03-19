import { FriendItem, FriendListWrap, Status } from './FriendList.style';

export const FriendList = ({ friends }) => {
  return (
    <FriendListWrap>
      <ul>
        {friends.map(friend => {
          return (
            <FriendItem key={friend.id}>
              <Status status={friend.isOnline}></Status>
              <img src={friend.avatar} alt="User avatar" width="48" />
              <p>{friend.name}</p>
            </FriendItem>
          );
        })}
      </ul>
    </FriendListWrap>
  );
};
