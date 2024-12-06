import React from 'react';
import './Leaderboard.css';

const Leaderboard = () => {
  const rankings = [
    { id: 1, name: 'John Doe', score: 150 },
    { id: 2, name: 'Jane Smith', score: 140 },
    { id: 3, name: 'Emily Johnson', score: 130 },
  ];

  return (
    <div className="leaderboard">
      <h2>Leaderboard</h2>
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {rankings.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Leaderboard;
