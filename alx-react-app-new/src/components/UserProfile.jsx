import React from 'react';

function UserProfile(props) {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px', borderRadius: '5px' }}>
      <h2 style={{ color: 'blue', fontSize: '24px', margin: '10px 0' }}>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold', fontSize: '18px' }}>{props.age}</span></p>
      <p>Bio: <span style={{ fontSize: '16px', color: 'gray' }}>{props.bio}</span></p>
    </div>
  );
}

export default UserProfile;
