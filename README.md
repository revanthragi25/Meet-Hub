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

  # M E E T H U B

User (Attendee / Organizer) → React Frontend → Event Pages / Chat UI / Dashboard → REST APIs / Socket.IO → Node.js + Express.js Backend → Authentication / Event Management / Registration & Ticketing / Chatbot / Analytics → Mongoose → MongoDB (Users / Events / Registrations / Tickets)

## 1. Authentication Flow

User → Register / Login Page → React Frontend → Send Credentials to Backend → Express API → Validate Credentials → Hash Password (Registration) / Verify Password (Login) → Save or Retrieve User from MongoDB → Generate JWT / Session → Return Authentication Response → Check User Permissions → Attendee / Organizer → Access Authorized Features

## 2. Event Management Flow

Organizer → Event Management Page → Enter Event Details → Submit Event Form → React Frontend → POST Request (REST API) → Express Backend → Authenticate User → Check Organizer Permissions → Validate Event Information → Mongoose Model → Save Event in MongoDB → Return Response to Frontend → Display Created Event
