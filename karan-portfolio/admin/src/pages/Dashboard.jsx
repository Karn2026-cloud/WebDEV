import { useEffect,useState } from "react";
import axios from "axios";
import Sidebar from "../components/Sidebar";

const Dashboard = () => {

  const [stats,setStats] =
  useState({
    projects:0,
    messages:0
  });

  useEffect(()=>{

    fetchStats();

  },[]);

  const fetchStats =
  async()=>{

    const res =
    await axios.get(
      "https://webdev-1-jsp7.onrender.com/api/dashboard/stats"
    );

    setStats(res.data);

  };

  return (
    <>
      <Sidebar />

      <div className="page">

        <h1>Dashboard</h1>

        <div className="stats-grid">

          <div className="stat-card">

            <h2>
              {stats.projects}
            </h2>

            <p>
              Projects
            </p>

          </div>

          <div className="stat-card">

            <h2>
              {stats.messages}
            </h2>

            <p>
              Messages
            </p>

          </div>

        </div>

      </div>
    </>
  );
};

export default Dashboard;