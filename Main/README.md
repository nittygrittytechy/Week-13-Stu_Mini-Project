# Travel Planner API

A RESTful backend API built with **Node.js**, **Express.js**, **Sequelize**, and **PostgreSQL**. This API allows travelers to create accounts, plan trips, and associate locations with their travels — demonstrating real-world data relationships and API design.

## Table of Contents

- [Description](#description)
- [Technologies](#technologies)
- [Installation](#installation)
- [Database Setup](#database-setup)
- [API Routes](#api-routes)
- [Testing](#testing)
- [Screenshots](#screenshots)
- [Deployment](#deployment)
- [Questions](#questions)

## Description

The Travel Planner API models a many-to-many relationship between travelers and locations through a trips join table. Travelers can take multiple trips to multiple locations, and locations can be visited by multiple travelers. The API supports full CRUD operations and is deployed to Render with a live PostgreSQL database.

## Technologies

- Node.js
- Express.js
- Sequelize (ORM)
- PostgreSQL
- dotenv
- Postman VS Code Extension (API testing inside VSCodium)
- Render (deployment)

## Installation

1. Clone the repository:
   ```sh
   git clone <your-repo-url>
   cd travel-planner-api
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file in the root directory with your database credentials:
   ```
   DB_NAME='traveler_db'
   DB_USER='your_username'
   DB_PASSWORD='your_password'
   DB_URL='your_render_external_database_url'
   ```

4. Start the server:
   ```sh
   node server.js
   ```

## Database Setup

The database consists of three tables with the following relationships:

- **Traveler** — stores traveler name and email
- **Location** — stores location name
- **Trip** — join table connecting travelers to locations, with trip budget and traveler amount

A traveler can take many trips. A location can be visited by many travelers. Travelers and locations are connected through the Trip table, forming a many-to-many relationship.

## API Routes

### Traveler Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/travelers` | Get all travelers |
| GET | `/api/travelers/:id` | Get one traveler with associated trips and locations |
| POST | `/api/travelers` | Create a new traveler |
| DELETE | `/api/travelers/:id` | Delete a traveler and all related trips |

### Location Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/locations` | Get all locations |
| GET | `/api/locations/:id` | Get one location with associated travelers |
| POST | `/api/locations` | Create a new location |
| DELETE | `/api/locations/:id` | Delete a location and all related trips |

### Trip Routes

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/trips` | Create a new trip |
| DELETE | `/api/trips/:id` | Delete a trip |

### Sample Request Body

Creating a new trip:
```json
{
  "trip_budget": 2000.50,
  "traveler_amount": 6,
  "traveler_id": 1,
  "location_id": 2
}
```

Creating a new traveler:
```json
{
  "name": "John Smith",
  "email": "john@example.com"
}
```

## Testing

API routes were tested using the **Postman VS Code extension** installed directly inside VSCodium. This allows sending GET, POST, and DELETE requests without leaving the code editor. To test the routes yourself, install the Postman extension from the VSCodium Extensions panel, create a new HTTP request, and use the endpoints listed in the API Routes section above.

## Screenshots

### Postman Extension Installed in VSCodium
API routes were tested using the Postman VS Code extension directly inside VSCodium, eliminating the need for a separate application.
![Postman Extension](./Proof-of-Challenge/installed Postman to VSCodium.PNG)

### Connected to Render PostgreSQL Database
![Render Database Connection](./Proof%20of%20Challenge/installed%20Postman%20to%20VSCodium.PNG)

### POST Create a New Traveler
![POST Traveler](./Proof%20of%20Challenge/added%20new%20traveler%20to%20database.PNG)

### POST Create a New Traveler to Delete
![POST Traveler](./Proof%20of%20Challenge/added%20new%20traveler%20so%20I%20can%20delete%20it.PNG)

## POST Show New Traveler in Database
![Show New Traveler to Delete](./Proof%20of%20Challenge/added%20new%20traveler%20to%20database.PNG)

### POST Create a New Trip
![POST Trip](./Proof%20of%20Challenge/added%20a%20new%20trip%20to%20the%20database%20using%20Postman%203-12-2026.PNG)

### POST Create a New Location
![POST Location](./Proof%20of%20Challenge/added%20new%20location%20Hawaii%203-12-2026.PNG)

### DELETE a Traveler
![DELETE Traveler](./Proof%20of%20Challenge/deleted%20the%20new%20traveler.PNG)

### pgAdmin Showing Database Data
![pgAdmin Data](./Proof%20of%20Challenge/Connected%20to%20Render%20using%20pgAdmin%203-12-2026.PNG)

## Deployment

This API is deployed to Render with a live PostgreSQL database.

🔗 **Live URL:** [Deployed API on Render](#) *(replace with your Render URL)*

## Questions

For questions or feedback, reach out via GitHub: [nittygrittytechy](https://github.com/nittygrittytechy)