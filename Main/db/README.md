# 🧭 Module 13 Mini-Project: Travel Planner API

In this mini-project, you will work with your group to design and build a **real backend API** using:

- Node.js
- Express.js
- PostgreSQL
- Sequelize

This project ties together everything you’ve learned in Module 13: **models, associations, async/await, validation, and error handling**. You will also deploy your finished API to **Render** with a live PostgreSQL database.

This is not about building a UI — it’s about proving you can design and reason about **data relationships and API behavior**.

---

## 🧠 Learning Objectives

By the end of this mini-project, you should be able to:

- Design Sequelize models based on real-world requirements
- Implement one-to-many and many-to-many associations
- Build RESTful API routes that create, read, and delete related data
- Test API routes using Insomnia
- Deploy a PostgreSQL-backed API to Render

---

## 📖 Project Scenario

You are building a **Travel Planner API**.

Travellers can:

- Create accounts
- Create trips
- Choose locations for their trips
- View all of their trips and associated locations

The system must support **multiple travellers visiting multiple locations**, sometimes more than once.

---

## 👤 User Stories

- As a traveller, I want to create an account.
- As a traveller, I want to create trips for myself.
- As a traveller, I want to select locations from a predefined list.
- As a traveller, I want to view all of my trips and their locations.

---

## 📂 Data Models & Relationships

Your database must include the following models:

### Traveller

- `id` (primary key)
- `name`
- `email`

### Location

- `id` (primary key)
- `name`

### Trip

- `id` (primary key)
- `trip_budget`
- `traveller_amount`
- `traveller_id` (foreign key → `Traveller.id`)
- `location_id` (foreign key → `Location.id`)

### Associations

- A **Traveller** can take many trips
- A **Location** can be visited by many travellers
- Travellers and Locations are connected **through Trips**
- This forms a **many-to-many relationship** using the Trip table

> ⚠️ Be sure to set `unique: false` on the join table association to allow travellers to take multiple trips.

---

## ✅ Acceptance Criteria

Your project is complete when the following routes work correctly in **Insomnia**:

### Traveller Routes

- `GET /api/travellers`
  Returns all travellers **without** associated trips

- `POST /api/travellers`
  Creates a new traveller

- `GET /api/travellers/:id`
  Returns one traveller **with associated trips and locations**

- `DELETE /api/travellers/:id`
  Deletes a traveller and all related trips

### Location Routes

- `GET /api/locations`
  Returns all locations

- `POST /api/locations`
  Creates a new location

- `GET /api/locations/:id`
  Returns one location with associated trips

- `DELETE /api/locations/:id`
  Deletes a location and all related trips

### Trip Routes

- `POST /api/trips`
  Creates a new trip connecting a traveller and a location

- `DELETE /api/trips/:id`
  Deletes a trip

### Deployment

- The API is successfully deployed to **Render**
- The deployed API uses a **PostgreSQL database**

---

## 🧪 Sample Request Body

Use the following JSON body when testing the `POST /api/trips` route:

```json
{
  "trip_budget": 2000.5,
  "traveller_amount": 6,
  "traveller_id": 1,
  "location_id": 2
}
```

---

## 📝 Helpful Resources

Use these references as needed:

- Sequelize – Many-to-Many Associations
  [https://sequelize.org/master/manual/assocs.html#many-to-many-relationships](https://sequelize.org/master/manual/assocs.html#many-to-many-relationships)

- Deploying PostgreSQL Apps with Render
  [https://coding-boot-camp.github.io/full-stack/render/deploy-with-render-and-postgresql](https://coding-boot-camp.github.io/full-stack/render/deploy-with-render-and-postgresql)

---

## 💡 Hints

- Which association option allows Sequelize to automatically delete related records?
- How can seed data help you avoid manually creating travellers and locations?
- Should this project live in the class repo, or a **new GitHub repository** for deployment?

---

## 🏆 Bonus (Optional)

If your group finishes early, consider extending the project:

- Add validations to all models
- Implement password hashing and login for travellers
- Explore **advanced many-to-many relationships** to enable richer queries

Reference:
[https://sequelize.org/master/manual/advanced-many-to-many.html](https://sequelize.org/master/manual/advanced-many-to-many.html)

---

## ✅ Final Reminder

This mini-project is about **thinking like a backend developer**:

> Clear models → clear relationships → predictable APIs.

Focus on correctness, clarity, and data integrity — polish comes later.
