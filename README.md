# Todo List App

This project is a simple, full-stack Todo List application built using JavaScript, HTML, and CSS, with backend integration for data persistence.

## Features

- **Create, Read, Update, Delete (CRUD) Operations**: Users can add, view, edit, and delete tasks.
- **Persistent Storage**: Tasks are stored in a database for long-term access.
- **Responsive Design**: Works across devices (desktop, tablet, and mobile).

## Tech Stack

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js (Express)
- **Database**: SQL (using a `.sql` script for database setup)

## Getting Started

### 1. Clone the repository
```bash
git clone https://github.com/shaeebali/todo-list.git
cd todo-list
```

### 2. Install dependencies
```bash
npm install
```

### 3. Set up the database
Run the `todo.sql` script in your database management tool to create the required tables.

### 4. Run the application
```bash
node index.js
```

The app will be available at `http://localhost:3000`.

## Database

The app uses a SQL database. The `todo.sql` file includes the schema needed to set up the database tables.

## API Endpoints

- `GET /todos`: Retrieve all tasks
- `POST /todos`: Create a new task
- `PUT /todos/:id`: Update an existing task
- `DELETE /todos/:id`: Delete a task

## Future Enhancements

- Add user authentication for personalized todo lists.
- Improve UI/UX for better task management.

## License

This project is licensed under the MIT License.
