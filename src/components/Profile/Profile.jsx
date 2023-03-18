import {
  Avatar,
  MainInformation,
  UserStatistics,
  Wrapper,
} from './Profile.style';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Avatar src={avatar} alt="User avatar" />
      <MainInformation>
        <p>{username}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </MainInformation>
      <UserStatistics>
        <li>
          <span>Followers</span>
          <span>1000</span>
        </li>
        <li>
          <span>Views</span>
          <span>2000</span>
        </li>
        <li>
          <span>Likes</span>
          <span>3000</span>
        </li>
      </UserStatistics>
    </Wrapper>
  );
};
