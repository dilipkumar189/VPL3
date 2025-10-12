import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CodeModal from "../CodeModel";
import { TeamForm } from "../../pages";
// import TeamForm from "../../pages/TeamForm";

export default function ProtectedAddTeamRoute() {
  const [showCodeModal, setShowCodeModal] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [teamData, setTeamData] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    // Check if user came with valid code from state
    if (location.state?.code && location.state?.team) {
      setIsAuthenticated(true);
      setTeamData(location.state.team);
      setShowCodeModal(false);
    }
  }, [location.state]);

  const handleCodeValidation = (code, team) => {
    setIsAuthenticated(true);
    setShowCodeModal(false);
    // Navigate to /addteam with the validated data
    navigate("/addteam", { state: { code, team }, replace: true });
  };

  const handleModalClose = () => {
    navigate("/"); // Redirect to home if modal is closed without validation
  };

  if (!isAuthenticated && showCodeModal) {
    return (
      <CodeModal 
        onClose={handleModalClose}
        onSuccess={handleCodeValidation}
      />
    );
  }

  if (isAuthenticated) {
    return <TeamForm />;
  }

  return null;
}