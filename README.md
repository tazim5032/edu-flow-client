# Group Study Online Platform

This project is a full-stack web application for online group study with friends. Every registered user is considered a friend of others. Users can create assignments, complete them, and grade their friends' assignments.

## Features

### Home Page (Public)
- **Navbar**
  - Logo, Assignments, Login, Register links (before login)
  - Logo, Assignments, Create Assignments, Pending Assignments, User Avatar (after login)
  - User Avatar dropdown: My Attempted Assignments, Logout button
- **Banner Section**
  - Themed banner based on the project
- **Feature Section**
  - Cards highlighting features of the application
- **FAQ Section**
  - Frequently asked questions
- **Footer**
  - Copyright and relevant links

### Create Assignment Page (Private)
- Form for creating assignments with:
  - Title, Description, Marks, Thumbnail Image URL, Assignment Difficulty Level (dropdown), Due Date (using `react-datepicker`)
- Success message upon successful assignment creation

### Assignments Page (Public)
- Displays all assignments created by any user
- Filter assignments based on difficulty level (easy, medium, hard)
- Individual assignment cards with:
  - Thumbnail, Title, Marks, Difficulty Level, Delete, Update, View Assignment buttons
- **Delete Button Functionality**
  - Only the creator can delete their assignments
  - Confirmation modal for delete action
  - Success or error message based on the action
- **Update Button Functionality**
  - Any user can update assignments
  - Pre-filled form with current assignment data
  - Success message and optional redirect to assignments page
- **View Assignment Button Functionality**
  - Navigates to assignment details page
  - "Take Assignment" button to submit an assignment
  - Assignment submission form with:
    - PDF/doc link submission, Quick note text area
  - Submitted assignments default to pending status

### My Submitted/Attempted Assignments Page (Private)
- Displays assignments submitted by the logged-in user
- Shows: Title, Status, Marks, Obtained Marks, Feedback

### Pending Assignments Page (Private)
- Displays all pending assignments submitted by users
- Excludes marked assignments
- Shows: Title, Marks, Examinee Name, "Give Mark" button
- "Give Mark" button navigates to a marking page or opens a modal with:
  - PDF/docs link, Notes, Marks input field, Feedback input field, Submit button
  - Changes status to completed upon marking

### Authentication
- Login and Registration pages (public)
- Validations for all authentication forms
- JWT implementation for private routes
  - JWT token creation and storage on client-side for both email/password-based and social login

### Additional Features
- Preview PDF submissions with iframe on Submitted Assignment page
- Theme toggling button for switching between light and dark themes

## Tech Stack
- **Frontend:** React.js, Tailwind CSS, Daisy UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase, JWT
- **Date Picker:** [react-datepicker](https://www.npmjs.com/package/react-datepicker)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/tazim5032/group-study-platform.git
    cd group-study-platform
    ```

2. Install dependencies:
    ```bash
    npm install
    cd client
    npm install
    cd ..
    ```

3. Setup environment variables:
    - Create a `.env` file in the root directory and add the necessary environment variables:
        ```
        MONGODB_URI=<your-mongodb-uri>
        JWT_SECRET=<your-jwt-secret>
        FIREBASE_API_KEY=<your-firebase-api-key>
        FIREBASE_AUTH_DOMAIN=<your-firebase-auth-domain>
        FIREBASE_PROJECT_ID=<your-firebase-project-id>
        FIREBASE_STORAGE_BUCKET=<your-firebase-storage-bucket>
        FIREBASE_MESSAGING_SENDER_ID=<your-firebase-messaging-sender-id>
        FIREBASE_APP_ID=<your-firebase-app-id>
        ```

4. Run the server:
    ```bash
    npm start
    ```

5. Run the client:
    ```bash
    cd client
    npm start
    ```

## Usage

1. Register and login to access the platform.
2. Create assignments using the "Create Assignment" page.
3. View all assignments on the "Assignments" page and use the filter functionality to sort by difficulty level.
4. Delete or update assignments you have created.
5. View assignment details and submit your work.
6. Check your submitted assignments on the "My Submitted/Attempted Assignments" page.
7. Review and grade pending assignments on the "Pending Assignments" page.

## Contributing

1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License.
