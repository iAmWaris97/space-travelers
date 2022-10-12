import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { useDispatch } from 'react-redux';
import { reserveRocket } from '../../redux/Rockets/rocketsSlice';

const Rocket = (props) => {
  const dispatch = useDispatch();
  const { rocket } = props;
  return (
    <div className="rocket-card flex">
      <div className="image">
        <img src={rocket.flickr_images[0]} alt={rocket.rocket_name} className="rocket-img" />
      </div>

      <div className="rocket-detail">
        <div className="rocket-name">
          <span>{rocket.rocket_name}</span>
        </div>
        <div className="rocket-description">
          <span>
            {rocket.reserved ? <Badge bg="info">Reserved</Badge> : ''}
            {rocket.description}
          </span>
        </div>
        <Button
          variant={rocket.reserved ? 'outline-primary' : 'primary'}
          size="lg"
          onClick={() => dispatch(reserveRocket(rocket.rocket_id))}
        >
          {rocket.reserved ? 'Cancel Reservation' : 'Reserve Rocket'}
        </Button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_id: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    flickr_images: PropTypes.arrayOf(PropTypes.string),
    reserved: PropTypes.bool,
  }).isRequired,
};

export default Rocket;
