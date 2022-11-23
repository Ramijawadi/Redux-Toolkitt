import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const state = useSelector((state) => state.user.value)

  return (
    <div>
   
        <h1> nom :{state.name}</h1>
        <h1> lastname :{state.lastname}</h1>
        <h1> phone :{state.phone}</h1>
    
    </div>
  );
};

export default Profile;
