# EduFLow - A group Study Online Platform

### Assignment_category_0001

- [Live Link](https://edu-flow.firebaseapp.com)

This project is a full-stack web application for online group study with friends. Every registered user is considered a friend of others. Users can create assignments, complete them, and grade their friends' assignments.



### Features:

- **Authentication**: Users can log in using Google, GitHub, or email and password authentication.
- **Featured Assignment**: Users can see top-rated assignments.
- **Assignment Management**: Users can add, update, and delete assignments.
- **Take Assignment**: Students can take assignments and submit them.
- **My Attempted Assignments**: Students can view all the assignments they have attempted. Assignments can be in pending or complete state.
- **Assignment Evaluation**: Upon assignment submission, the creator can evaluate the assignment, provide marks, and give feedback.
- **Pending Assignments**: Users can view assignments they have submitted that are pending evaluation.
- **Search and Filter**: Users can search for assignments by title, filter by difficulty level, and sort by date.
- **FAQ**: Users can access frequently asked questions.
- **Customer Reviews**: Users can read reviews from other students.
- **Responsive Design**: The website is fully responsive and accessible on all devices.

### Additional Features
- Preview PDF submissions with iframe on Submitted Assignment page
- Theme toggling button for switching between light and dark themes

## Tech Stack
- **Frontend:** React.js, Tailwind CSS, Daisy UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Authentication:** Firebase, JWT

## Additional Technologies Used

- [React Simple Typewriter](https://www.npmjs.com/package/react-simple-typewriter)
- [React Tooltip](https://react-tooltip.com) 
- [Sweet Alert](https://sweetalert2.github.io)
- [Framer Motion](https://www.framer.com/motion)
- [Sweet Alert](https://sweetalert2.github.io)
- [react-datepicker](https://www.npmjs.com/package/react-datepicker)
- [react-simple-typewriter](https://www.npmjs.com/package/react-simple-typewriter)


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
