import PropTypes from 'prop-types';
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

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
