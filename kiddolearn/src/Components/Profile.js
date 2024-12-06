import React from 'react';
// import './Profile.css';

const Profile = ({ user }) => {
  if (!user) {
    return <p>Please log in to view your profile.</p>;
  }

  return (
    <div className="profile">
      <h2>Your Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Age:</strong> {user.age}</p>
      <p><strong>Progress:</strong> {user.progress}</p>
    </div>
  );
};

export default Profile;
