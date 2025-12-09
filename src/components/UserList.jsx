'use client';
import React from 'react';

export default function UserList({ users = [],noUser }) {
  if (!users.length) {
    return <div style={{marginTop:12}} className="small-muted">{noUser}</div>;
  }

  return (
    <div style={{marginTop:12}}>
      <div className="card">
        <div>
          {users.map(user => (
            <div className="user-row" key={user.id}>
              <div>
                <div className="user-name">{user.name}</div>
                <div className="user-email">{user.email}</div>
              </div>
              <div className="small-muted">{user.company?.name}</div>
              <div className="small-muted">{user.address?.city}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
