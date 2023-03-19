import {
  Avatar,
  MainInformation,
  Name,
  Quantity,
  Tag,
  Location,
  UserStatistics,
  UserStatisticsItem,
  Wrapper,
  Label,
} from './Profile.style';

export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <Wrapper>
      <Avatar src={avatar} alt="User avatar" />
      <MainInformation>
        <Name>{username}</Name>
        <Tag>@{tag}</Tag>
        <Location>{location}</Location>
      </MainInformation>
      <UserStatistics>
        <UserStatisticsItem>
          <Label>Followers</Label>
          <Quantity>{stats.followers}</Quantity>
        </UserStatisticsItem>
        <UserStatisticsItem>
          <Label>Views</Label>
          <Quantity>{stats.views}</Quantity>
        </UserStatisticsItem>
        <UserStatisticsItem>
          <Label>Likes</Label>
          <Quantity>{stats.likes}</Quantity>
        </UserStatisticsItem>
      </UserStatistics>
    </Wrapper>
  );
};
