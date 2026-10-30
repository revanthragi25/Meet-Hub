import "./dashboard.css";
import Sidebar from "../../components/Sidebar/Sidebar";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar/>

      <main className="main-content">

        <header className="header">
          <div>
            <p className="breadcrumb">Workspace / Overview</p>
            <h1>Event Dashboard</h1>
          </div>

          <div className="header-right">
            <input type="text" placeholder="Search events..." />
            <button className="notification">♧</button>
            <div className="avatar">VL</div>
          </div>
        </header>

        {/* Welcome Section */}
        <section className="welcome">
          <div>
            <h2>Welcome back, Varsha! 👋</h2>
            <p>Here's what's happening with your events today.</p>
          </div>

          <button className="primary-btn">+ Create Event</button>
        </section>

        {/* Statistics */}
        <section className="stats-grid">

          <div className="stat-card purple">
            <div className="stat-heading">
              <span>Total Events</span>
              <span className="stat-icon">▦</span>
            </div>
            <h2>24</h2>
            <p>↗ 12.5% <span>vs. last month</span></p>
          </div>

          <div className="stat-card blue">
            <div className="stat-heading">
              <span>Total Registrations</span>
              <span className="stat-icon">♙</span>
            </div>
            <h2>1,248</h2>
            <p>↗ 18.2% <span>vs. last month</span></p>
          </div>

          <div className="stat-card orange">
            <div className="stat-heading">
              <span>Tickets Issued</span>
              <span className="stat-icon">▤</span>
            </div>
            <h2>986</h2>
            <p>↗ 8.4% <span>vs. last month</span></p>
          </div>

          <div className="stat-card green">
            <div className="stat-heading">
              <span>Upcoming Events</span>
              <span className="stat-icon">◷</span>
            </div>
            <h2>08</h2>
            <p>● On track <span>this month</span></p>
          </div>

        </section>

        {/* Charts Section */}
        <section className="charts-grid">

          <div className="panel">
            <div className="panel-header">
              <div>
                <h3>Registration Activity</h3>
                <p>Registrations throughout the week</p>
              </div>
              <select defaultValue="week">
                <option value="week">Last 7 days</option>
                <option value="month">This month</option>
              </select>
            </div>

            <div className="chart">
              <div className="y-axis">
                <span>100</span>
                <span>75</span>
                <span>50</span>
                <span>25</span>
                <span>0</span>
              </div>

              <div className="chart-content">
                <div className="chart-grid">
                  <span></span><span></span><span></span>
                  <span></span><span></span>
                </div>

                <div className="bars">
                  <div className="bar-column">
                    <div className="bar" style={{ height: "38%" }}></div>
                    <span>Mon</span>
                  </div>
                  <div className="bar-column">
                    <div className="bar" style={{ height: "55%" }}></div>
                    <span>Tue</span>
                  </div>
                  <div className="bar-column">
                    <div className="bar" style={{ height: "43%" }}></div>
                    <span>Wed</span>
                  </div>
                  <div className="bar-column">
                    <div className="bar" style={{ height: "72%" }}></div>
                    <span>Thu</span>
                  </div>
                  <div className="bar-column">
                    <div className="bar" style={{ height: "61%" }}></div>
                    <span>Fri</span>
                  </div>
                  <div className="bar-column">
                    <div className="bar highlight" style={{ height: "88%" }}></div>
                    <span>Sat</span>
                  </div>
                  <div className="bar-column">
                    <div className="bar" style={{ height: "70%" }}></div>
                    <span>Sun</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="panel capacity-panel">
            <h3>Event Capacity</h3>
            <p>Overall registration progress</p>

            <div className="donut">
              <div className="donut-center">
                <h2>78%</h2>
                <span>Capacity filled</span>
              </div>
            </div>

            <div className="legend">
              <p><span className="dot filled"></span> Registered <strong>786</strong></p>
              <p><span className="dot available"></span> Available <strong>224</strong></p>
            </div>
          </div>

        </section>

        {/* Recent Events */}
        <section className="panel events-panel" id="events">
          <div className="panel-header">
            <div>
              <h3>Recent Events</h3>
              <p>Manage and monitor your latest events</p>
            </div>

            <a className="view-all" href="#events">View all →</a>
          </div>

          <div className="table-wrapper">
            <table>
              <thead>
                <tr>
                  <th>EVENT NAME</th>
                  <th>DATE</th>
                  <th>REGISTRATIONS</th>
                  <th>STATUS</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    <div className="event-name">
                      <div className="event-icon purple-bg">⌘</div>
                      <div>
                        <strong>TechFest 2026</strong>
                        <span>Technology</span>
                      </div>
                    </div>
                  </td>
                  <td>Dec 15, 2026</td>
                  <td>
                    <div className="registration">
                      <div className="progress">
                        <span style={{ width: "82%" }}></span>
                      </div>
                      248 / 300
                    </div>
                  </td>
                  <td><span className="badge upcoming">● Upcoming</span></td>
                </tr>

                <tr>
                  <td>
                    <div className="event-name">
                      <div className="event-icon orange-bg">✳</div>
                      <div>
                        <strong>Design Thinking Workshop</strong>
                        <span>Workshop</span>
                      </div>
                    </div>
                  </td>
                  <td>Nov 08, 2026</td>
                  <td>
                    <div className="registration">
                      <div className="progress">
                        <span style={{ width: "86%" }}></span>
                      </div>
                      86 / 100
                    </div>
                  </td>
                  <td><span className="badge upcoming">● Upcoming</span></td>
                </tr>

                <tr>
                  <td>
                    <div className="event-name">
                      <div className="event-icon blue-bg">◈</div>
                      <div>
                        <strong>Startup Networking Night</strong>
                        <span>Networking</span>
                      </div>
                    </div>
                  </td>
                  <td>Oct 30, 2026</td>
                  <td>
                    <div className="registration">
                      <div className="progress">
                        <span style={{ width: "79%" }}></span>
                      </div>
                      142 / 180
                    </div>
                  </td>
                  <td><span className="badge upcoming">● Upcoming</span></td>
                </tr>

                <tr>
                  <td>
                    <div className="event-name">
                      <div className="event-icon green-bg">◎</div>
                      <div>
                        <strong>AI & Future Summit</strong>
                        <span>Conference</span>
                      </div>
                    </div>
                  </td>
                  <td>Oct 12, 2026</td>
                  <td>
                    <div className="registration">
                      <div className="progress">
                        <span style={{ width: "100%" }}></span>
                      </div>
                      310 / 300
                    </div>
                  </td>
                  <td><span className="badge completed">● Completed</span></td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="table-footer">
            Showing 4 of 24 events
          </div>
        </section>

        <footer className="footer">
          <span>© 2026 MeetHub</span>
          <span>Bringing people together ♥</span>
        </footer>

      </main>
    </div>
  );
}

export default Dashboard;
