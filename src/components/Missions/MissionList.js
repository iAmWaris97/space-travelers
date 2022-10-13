import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';
import './Missions.css';

const MissionList = ({ missionsProp }) => (

  <>
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>Missision</th>
          <th>Description</th>
          <th>Status</th>
          <th>#</th>
        </tr>
      </thead>
      <tbody>
        {

      missionsProp.map((mission) => (
        <tr key={mission.mission_id}>
          <td>
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
            {' '}
            <span className="status-text" style={{ background: '#d3d3d3' }}> Not a member </span>
            {' '}
          </td>
          <td>
            {' '}
            <button
              type="button"
              style={{
                borderRadius: '8px', whiteSpace: 'nowrap', padding: '5px', verticalAlign: 'middle',
              }}
            >
              {' '}
              Join mission
            </button>
            {' '}
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
    }),
  ).isRequired,
};

export default MissionList;
