import React from 'react'
import '../Profile/ProfileComp.css';
import doctor from '../../assets/images/doctor1.jpg';
const ProfileComp = () => {
  return(
    <div className="container">
      <p className="list"><img className="image"src={doctor}/>
        dr Budi Anggoro
      </p>
      <p>Dokter Umum</p>
      <p>RS Indah Medika</p>
    </div>
  )
}

export default ProfileComp;