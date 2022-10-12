import PropTypes from 'prop-types';
import Img from '../Navigation/img/planet.png';

const Rocket = (props) => {
  const { name, description } = props;
  return (
    <div className="rocket-card">
      <div className="rocket-image">
        <img src={Img} alt="rocket" className="rocket-img" />
      </div>

      <div className="rocket-detail">
        <div className="rocket-name">
          <span>{name}</span>
        </div>
        <div className="rocket-description">
          <span>{description}</span>
        </div>
        <button type="button" className="reserve-btn">Reserve Rocket</button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
