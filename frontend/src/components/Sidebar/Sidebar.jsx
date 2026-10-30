import React from "react";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="sidebar">
        <h2 className="logo">Meet<span>Hub</span></h2>

        <p className="menu-title">MENU</p>

        <nav>
          <a className="active" href="#overview">▦ Overview</a>
          <a href="#events">▣ Events</a>
          <a href="#registrations">♙ Registrations</a>
          <a href="#tickets">▤ Tickets</a>
          <a href="#analytics">⌁ Analytics</a>
          <a href="#settings">⚙ Settings</a>
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