import PropTypes from 'prop-types';
import Table from 'react-bootstrap/Table';

const MissionList = ({ missionsProp }) => (

  <>
    console.log(missionsProp)
    <Table striped bordered hover size="sm" style={{ marigin: '15px 25px' }}>
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
          <td>
            {' '}
            <span className="status-text" style={{ background: '#d3d3d3' }}> Not a member </span>
            {' '}
          </td>
          <td>
            {' '}
            <button type="button" style={{ borderRadius: '8px' }}> Join mission </button>
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
