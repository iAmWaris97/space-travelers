import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';
import Img from './img/falcon1.jfif';

const Rocket = (props) => {
  const { name, description } = props;
  return (
    <div className="rocket-card flex">
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
        <Button type="button" variant="primary" className="reserve-btn">Reserve Rocket</Button>
      </div>
    </div>
  );
};

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Rocket;
