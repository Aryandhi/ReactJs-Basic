import React from 'react'
import ProfileComp from '../component/Profile/ProfileComp';
class ListDoctor extends React.Component {
  render(){
    // only call one-parrent
    return (
      <div>
        <ProfileComp />
        <ProfileComp />
        <ProfileComp />
        <ProfileComp />
        <ProfileComp />
      </div>
    )
  }
}
export default ListDoctor;