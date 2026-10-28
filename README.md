# Meet Hub

Meet Hub is a meeting-focused application. The project is currently being set up.

## Project Structure

- `Backend/` - backend application
- `Frontend/` - frontend application

**User Roles**
A. Attendee
An attendee can:
1. Register and log in.
2. Browse available events.
3. View event details.
4. Register for an event.
5. Receive and view tickets.
6. Chat with the FAQ chatbot.
7. Communicate with other attendees, if attendee-to-attendee chat is implemented.


B. Organizer
An organizer can:
1. Log in to the application.
2. Create new events.
3. View all events they are authorized to manage.
4. Update or delete events.
5. View attendee registrations.
6. Access the analytics dashboard.
7. Monitor registration statistics.

                    M E E T H U B
                         |
              +----------+----------+
              |                     |
          Attendee               Organizer
              |                     |
              +----------+----------+
                         |
                         v
                 FRONTEND (React)
                         |
          +--------------+--------------+
          |              |              |
      Event Pages      Chat UI      Dashboard
          |              |              |
          +--------------+--------------+
                         |
               +---------+---------+
               |                   |
          REST APIs             Socket.IO
               |                   |
               v                   v
        BACKEND (Node.js + Express)
               |
      +--------+---------+----------------+
      |        |         |                |
      v        v         v                v
 Authentication Events  Registration    Chatbot
      |        |         & Tickets        |
      |        |         |                |
      +--------+---------+----------------+
                         |
                         v
                DATABASE (MongoDB)
                         |
          +--------------+--------------+
          |              |              |
        Users          Events      Registrations
                                        |
                                        v
                                     Tickets


   **AUTHENTICATION FLOW**
   User
  |
  v
Register / Login Page
  |
  v
React Frontend
  |
  v
Send Credentials to Backend
  |
  v
Express API
  |
  v
Validate Credentials
  |
  +---- Registration ----> Hash Password
  |                            |
  |                            v
  |                      Save User in MongoDB
  |
  +---- Login -----------> Verify Password
                               |
                               v
                       Generate JWT / Session
                               |
                               v
                       Return Authentication
                               |
                               v
                       Access Protected Pages
                               |
                               v
                       Check User Permissions
                               |
                   +-----------+-----------+
                   |                       |
                Attendee                Organizer
                   |                       |
                   v                       v
              User Features          Organizer Features



  ** Event Management Flow**
  Organizer
    |
    v
Open Event Management Page
    |
    v
Enter Event Details
    |
    v
Submit Event Form
    |
    v
React Sends POST Request
    |
    v
Express Backend
    |
    v
Authenticate User
    |
    v
Check Organizer Permissions
    |
    v
Validate Event Information
    |
    v
Mongoose Model
    |
    v
Save Event in MongoDB
    |
    v
Return Response to Frontend
    |
    v
Display Created Event
