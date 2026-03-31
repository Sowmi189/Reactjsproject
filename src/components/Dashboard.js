import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import Chart from "./Chart";

export default function Dashboard() {
  const { user, logout } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <div className="main">
      
      {/* Sidebar */}
      <div className="sidebar">
        <h2>🎓 Student</h2>
        <ul>
          <li onClick={() => navigate("/dashboard")}>Dashboard</li>
          <li onClick={() => navigate("/performance")}>Performance</li>
          <li onClick={() => navigate("/activities")}>Activities</li>
          <li onClick={handleLogout}>Logout</li>
        </ul>
      </div>

      {/* Content */}
      <div className="content">
        
        {/* Topbar */}
        <div className="topbar">
          <h2>Welcome, {user} 👋</h2>
        </div>

        {/* Cards */}
        <div className="cards">
          <div className="card">
            <h3>📘 Subjects</h3>
            <p>6 Subjects</p>
          </div>

          <div className="card">
            <h3>⭐ Average</h3>
            <p>82%</p>
          </div>

          <div className="card">
            <h3>🏆 Rank</h3>
            <p>Top 10</p>
          </div>
        </div>

        {/* Chart */}
        <div className="chart-box">
          <h3>Academic Performance</h3>
          <Chart />
        </div>

      </div>
    </div>
  );
}