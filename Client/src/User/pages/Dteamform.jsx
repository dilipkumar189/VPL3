import React, { useState } from 'react';
import axios from 'axios';

const TeamForm = () => {
  const [teamData, setTeamData] = useState({
    team_name: '',
    mobile_no: '',
    logo: null,
    player1: { name: '', village: '', image: null },
    player2: { name: '', village: '', image: null },
  });

  const handleChange = (e, player = null) => {
    if (player) {
      setTeamData({
        ...teamData,
        [player]: { ...teamData[player], [e.target.name]: e.target.value }
      });
    } else {
      setTeamData({ ...teamData, [e.target.name]: e.target.value });
    }
  };

  const handleFileChange = (e, field) => {
    setTeamData({ ...teamData, [field]: e.target.files[0] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('team_name', teamData.team_name);
    formData.append('mobile_no', teamData.mobile_no);
    formData.append('logo', teamData.logo);
    formData.append('player1', JSON.stringify(teamData.player1));
    formData.append('player2', JSON.stringify(teamData.player2));
    formData.append('player1Image', teamData.player1.image);
    formData.append('player2Image', teamData.player2.image);

    try {
      const response = await axios.post('http://localhost:5000/api/team', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log(response.data);
      // Handle success (e.g., show a success message, reset form)
    } catch (error) {
      console.error('Error submitting form:', error);
      // Handle error (e.g., show error message)
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="team_name" onChange={handleChange} placeholder="Team Name" required />
      <input type="number" name="mobile_no" onChange={handleChange} placeholder="Mobile Number" required />
      <input type="file" name="logo" onChange={(e) => handleFileChange(e, 'logo')} required />
      
      <h3>Player 1</h3>
      <input type="text" name="name" onChange={(e) => handleChange(e, 'player1')} placeholder="Name" required />
      <input type="text" name="village" onChange={(e) => handleChange(e, 'player1')} placeholder="Village" required />
      <input type="file" name="image" onChange={(e) => handleFileChange(e, 'player1.image')} required />

      <h3>Player 2</h3>
      <input type="text" name="name" onChange={(e) => handleChange(e, 'player2')} placeholder="Name" required />
      <input type="text" name="village" onChange={(e) => handleChange(e, 'player2')} placeholder="Village" required />
      <input type="file" name="image" onChange={(e) => handleFileChange(e, 'player2.image')} required />

      <button type="submit">Submit</button>
    </form>
  );
};

export default TeamForm;



