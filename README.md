## 🌐 Role-Based Dashboard

This is a role-based user management dashboard built with React NextJS framework, TypeScript, and Mantine UI. It allows users with different roles (e.g., admin, user) to manage users, including CRUD operations such as adding, editing, and deleting users. The dashboard features role-based access control, making it possible for certain actions to be restricted based on the user's role.

## 🚀 Features

🔄 Role-based Access Control: Different features are accessible based on the user's role (e.g., admin has full access, viewer/uploader have limited access ).

🎨 User Management: Admins can add, edit, and delete users.

📱 Search and Filter: Users can be searched by name or email, and filtered by city.

🔧 Delete ALL USERS / DELETE ONE USER

📄 Pagination: Users are displayed in paginated tables with a configurable number of records per page.

⚡ Notifications: Success and error notifications are shown on successful or failed operations.

## 🌐 Roles and Permissions:

Admin:

-Full access to the system, including:
-View all users
-Create, update, delete users and data
-View and manage files

Viewer:

-Read-only access to users and data:
-Can view user information
-Cannot modify or delete users, data, or files

Uploader:

-Can view files and upload new files:
-Can view existing files
-Can upload new files
-Cannot delete or modify users

### 🛠️ Technologies Used

React: Frontend library for building the user interface.
TypeScript: Superset of JavaScript that adds static types.
Mantine: UI component library used for styling and building components.
React Hook Form: For handling form validation and submission.
Context API: For managing global state (e.g. roles).

## 🚧 Getting Started

To get started with this project locally, follow these instructions:

Prerequisites
Ensure that you have the following software installed:

Node.js (v 22.12.0)
npm or yarn
Installation
Clone the repository:

```bash
Node version for development: v18.17.1, do not use a version lower than this, otherwise the project may not run

# Pull project code
git clone https://github.com/AttigH/role-based-dash.git
cd role-based-dash
# Install dependencies
npm install
# Run in development mode
npm run dev
Open your browser and visit http://localhost:3000.

```

## Nice stack (VET)

- [NextJS ](https://nextjs.org/g) with well structured
- [MantineUI](https://mantine.dev/)
- [TailwindCSS 3](https://tailwindcss.com)

## 📬 License

Hamza Attig - hamzaatttig@gmail.com
GitHub Repository: [RoleBasedDashboard](https://github.com/AttigH/role-based-dash.git)
