import React, { useState } from 'react';
import axios from 'axios';

export default function Dteamform() {
  const [teamData, setTeamData] = useState({
    team_name: '',
    village: '',
    sponse_1: '',
    sponse_2: '',
    captain: '',
    mobile: '',
    logo: null,
    ...Object.fromEntries(
      Array.from({ length: 13 }, (_, i) => [
        `player${i + 1}`,
        { name: '', adhar: '', village: '', role: '', image: null }
      ])
    )
  });

  const handleInputChange = (e, playerNum = null) => {
    const { name, value } = e.target;
    if (playerNum) {
      setTeamData(prev => ({
        ...prev,
        [`player${playerNum}`]: { ...prev[`player${playerNum}`], [name]: value }
      }));
    } else {
      setTeamData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e, playerNum = null) => {
    const { name, files } = e.target;
    if (playerNum) {
      setTeamData(prev => ({
        ...prev,
        [`player${playerNum}`]: { ...prev[`player${playerNum}`], image: files[0] }
      }));
    } else {
      setTeamData(prev => ({ ...prev, [name]: files[0] }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();

    // Append team data
    Object.keys(teamData).forEach(key => {
      if (key !== 'logo' && !key.startsWith('player')) {
        formData.append(key, teamData[key]);
      }
    });

    // Append logo
    formData.append('logo', teamData.logo);

    // Append player data
    Array.from({ length: 13 }, (_, i) => i + 1).forEach(num => {
      formData.append(`player${num}`, JSON.stringify(teamData[`player${num}`]));
      formData.append(`player${num}Image`, teamData[`player${num}`].image);
    });

    try {
      const response = await axios.post('/api/teams/register', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response.data);
      // Handle success (e.g., show a success message, reset form)
    } catch (error) {
      console.error('Error registering team:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="team_name"
        value={teamData.team_name}
        onChange={handleInputChange}
        placeholder="Team Name"
        required
      />
      <input
        type="text"
        name="village"
        value={teamData.village}
        onChange={handleInputChange}
        placeholder="Village"
        required
      />
      <input
        type="text"
        name="sponse_1"
        value={teamData.sponse_1}
        onChange={handleInputChange}
        placeholder="Sponsor 1"
        required
      />
      <input
        type="text"
        name="sponse_2"
        value={teamData.sponse_2}
        onChange={handleInputChange}
        placeholder="Sponsor 2"
        required
      />
      <input
        type="text"
        name="captain"
        value={teamData.captain}
        onChange={handleInputChange}
        placeholder="Captain"
        required
      />
      <input
        type="tel"
        name="mobile"
        value={teamData.mobile}
        onChange={handleInputChange}
        placeholder="Mobile"
        required
      />
      <input
        type="file"
        name="logo"
        onChange={handleFileChange}
        accept="image/*"
        required
      />
      
      {Array.from({ length: 13 }, (_, i) => i + 1).map((num) => (
        <div key={num}>
          <h4>Player {num}</h4>
          <input
            type="text"
            name="name"
            value={teamData[`player${num}`].name}
            onChange={(e) => handleInputChange(e, num)}
            placeholder="Name"
            required
          />
          <input
            type="text"
            name="adhar"
            value={teamData[`player${num}`].adhar}
            onChange={(e) => handleInputChange(e, num)}
            placeholder="Aadhar"
            required
          />
          <input
            type="text"
            name="village"
            value={teamData[`player${num}`].village}
            onChange={(e) => handleInputChange(e, num)}
            placeholder="Village"
            required
          />
          <input
            type="text"
            name="role"
            value={teamData[`player${num}`].role}
            onChange={(e) => handleInputChange(e, num)}
            placeholder="Role"
            required
          />
          <input
            type="file"
            name="image"
            onChange={(e) => handleFileChange(e, num)}
            accept="image/*"
            required
          />
        </div>
      ))}
      
      <button type="submit">Register Team</button>
    </form>
  );
};
