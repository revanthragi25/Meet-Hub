import React from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
        <h2 className="logo">Meet<span>Hub</span></h2>

        <p className="menu-title">MENU</p>

        <nav>
  <NavLink to="/dashboard">▦ Dashboard</NavLink>
  <NavLink to="/events">▣ Events</NavLink>
  <NavLink to="/registrations">♙ Registrations</NavLink>
  <NavLink to="/tickets">▤ Tickets</NavLink>
  <NavLink to="/analytics">⌁ Analytics</NavLink>
  <NavLink to="/messaging">⌁ Messages</NavLink>
  <NavLink to="/settings">⚙ Settings</NavLink>
</nav>

        <div className="sidebar-profile">
          <div className="avatar">VL</div>
          <div>
            <strong>Varsha Lala</strong>
            <p>Event Organizer</p>
          </div>
        </div>
      </aside>
  );
}

export default Sidebar;