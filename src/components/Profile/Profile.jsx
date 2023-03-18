import {
  Avatar,
  MainInformation,
  Name,
  Number,
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
          <Number>1000</Number>
        </li>
        <li>
          <span>Views</span>
          <Number>2000</Number>
        </li>
        <li>
          <span>Likes</span>
          <Number>3000</Number>
        </li>
      </UserStatistics>
    </Wrapper>
  );
};
