import {
  Avatar,
  MainInformation,
  Name,
  Quantity,
  UserStatistics,
  Wrapper,
} from './Profile.style';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Avatar src={avatar} alt="User avatar" />
      <MainInformation>
        <Name>{username}</Name>
        <p>@{tag}</p>
        <p>{location}</p>
      </MainInformation>
      <UserStatistics>
        <li>
          <span>Followers</span>
          <Quantity>1000</Quantity>
        </li>
        <li>
          <span>Views</span>
          <Quantity>2000</Quantity>
        </li>
        <li>
          <span>Likes</span>
          <Quantity>3000</Quantity>
        </li>
      </UserStatistics>
    </Wrapper>
  );
};
