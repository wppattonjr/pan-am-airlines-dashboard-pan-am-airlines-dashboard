import firebase from 'firebase/app';
import 'firebase/auth';

const crewBuilder = (crewObj) => {
  let buttons = '';
  const user = firebase.auth().currentUser;
  if (user) {
    buttons += `<a href="#" id="${crewObj.uid}" class="btn btn-info update-crew"><i class="far fa-edit"></i> Update crew</a>
    <a href="#" id="${crewObj.uid}" class="btn btn-danger delete-crew">Delete crew</a>
  `;
  }
  const domString = `<div class="card" style="width: 18rem;">
  <div class="card-body">
   <h5 class="card-title">PanAm Flight Crew</h5> 
  </div>
    
   <ul class="list-group list-group-flush">
      <li class="list-group-item">Name: ${crewObj.name}</li>
      <li class="list-group-item">Role: ${crewObj.role}</li>
   </ul>
   
   <div class = "card-body" id="${crewObj.uid}">
   </div>
   ${buttons}
   </div>`;

  return domString;
};

export default { crewBuilder };
