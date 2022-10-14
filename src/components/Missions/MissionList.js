import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import './Missions.css';

const MissionList = ({ missionsProp, handleMissionJoin }) => (

  <>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Missision</th>
          <th>Description</th>
          <th>Status</th>
          <th>   </th>
        </tr>
      </thead>
      <tbody>
        {

      missionsProp.map((mission) => (
        <tr key={mission.mission_id} id={mission.mission_id}>
          <td className="mission-name">
            {' '}
            {mission.mission_name}
            {' '}
          </td>
          <td>
            {' '}
            {mission.description}
            {' '}
          </td>
          <td style={{ whiteSpace: 'nowrap', padding: '5px', verticalAlign: 'middle' }}>
            <span className="status-text" style={{ backgroundColor: mission.joined ? 'skyblue' : '' }}>
              {mission.joined ? 'active member' : 'not a member' }
            </span>
          </td>
          <td>
            {' '}
            <button
              className="mission-btn"
              type="button"
              style={{
                color: mission.joined ? 'red' : '',
                borderColor: mission.joined ? 'red' : '',
              }}
              onClick={() => handleMissionJoin(mission.mission_id)}
            >
              {mission.joined ? 'Leave Mission' : 'Join Mission'}
            </button>
          </td>

        </tr>
      ))
    }
      </tbody>
    </Table>
  </>
);

MissionList.propTypes = {
  missionsProp: PropTypes.arrayOf(
    PropTypes.shape({
      mission_id: PropTypes.string,
      mission_name: PropTypes.string,
      description: PropTypes.string,
      joined: PropTypes.bool,
    }),
  ).isRequired,
  handleMissionJoin: PropTypes.func.isRequired,
};

export default MissionList;
