import axios from 'axios';
import apiKeys from './apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getCrewMembers = () => new Promise((resolve, reject) => {
  axios
    .get(`${baseUrl}/crew.json`)
    .then((response) => {
      const crewMembers = response.data;
      const crewRoster = [];
      if (crewMembers) {
        Object.keys(crewMembers).forEach((crewId) => {
          crewRoster.push(crewMembers[crewId]);
        });
      }
      resolve(crewRoster);
    })
    .catch((error) => reject(error));
});

const addCrew = (data) => axios
  .post(`${baseUrl}/crew.json`, data)
  .then((response) => {
    const update = { uid: response.data.name };
    axios.patch(`${baseUrl}/crew/${response.data.name}.json`, update);
  })
  .catch((error) => console.warn(error));

const deleteCrewMember = (crewMemberUid) => axios.delete(`${baseUrl}/crew/${crewMemberUid}.json`);

const updateCrewMember = (uid, dataObject) => axios.patch(`${baseUrl}/planes/${uid}.json`, dataObject);

export default {
  getCrewMembers,
  addCrew,
  deleteCrewMember,
  updateCrewMember
};
