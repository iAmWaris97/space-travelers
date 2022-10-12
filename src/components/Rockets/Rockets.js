import Rocket from './Rocket';

const Rockets = () => (
  <div className="rockets">
    <ul>
      <li className="rocket">
        <Rocket name="Falcon 1" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum explicabo harum debitis." />
      </li>

      <li className="rocket">
        <Rocket name="Falcon 9" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum explicabo harum debitis." />
      </li>

      <li className="rocket">
        <Rocket name="Falcon Heavy" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum explicabo harum debitis." />
      </li>
    </ul>
  </div>
);

export default Rockets;
