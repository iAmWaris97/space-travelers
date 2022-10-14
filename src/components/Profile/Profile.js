import './Profile.css';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import { Col, Row } from 'react-bootstrap';

const Profile = () => {
  const rocketsData = useSelector((state) => state.rockets);
  const reservedRockets = rocketsData.filter((rocket) => rocket.reserved);
  const missions = useSelector((state) => state.missions);
  const joinedMissions = missions.filter((misison) => misison.joined);

  return (
    <Row className="row">
      <Col>
        <h4 className="missions-title">My Missions</h4>
        <Table bordered>
          <tbody>
            {joinedMissions.map((mission) => (
              <tr key={mission.mission_id}>
                <td className="joined-mission">
                  {mission.mission_name}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
      <Col>
        <h4 className="rockets-title">My Rockets</h4>
        <Table striped bordered>
          <tbody>
            {reservedRockets.map((rocket) => (
              <tr key={rocket.rocket_id}>
                <td className="reserved-rocket">
                  {rocket.rocket_name}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Col>
    </Row>
  );
};
export default Profile;
