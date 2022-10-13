import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMissions } from '../../redux/Missions/missionsSlice';
import MissionList from './MissionList';

const Missions = () => {
  const dispatch = useDispatch();
  const missions = useSelector((state) => state.missions);
  useEffect(() => {
    if (!missions.length) {
      dispatch(getMissions());
    }
  });

  return (
    <>
      <h1>Missions</h1>
      <MissionList missionsProp={missions} />
    </>
  );
};

export default Missions;
