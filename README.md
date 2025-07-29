

![Alt text]([https://example.com/path/to/image.png](https://github.com/TrevorPhippard/Carpenter-Kitty-Microservice/blob/main/frontend/src/assets/ck-logo.jpg))


# Carpenter Kitty App
An app that connects users with local contractors for renos. Users can post a projects, share projects done, view contractor profiles and add reviews, and hire someone to complete the job. Think task rabbit but for home reno projects.

---

## 📦 Features

- **Authentication Service** (JWT + PostgreSQL)
- **Post & Comment Service** (MongoDB)
- **Profile Service** (Follow/friends logic)
- **Search Service** (Elasticsearch)
- **Messaging Service** (Socket.IO for real-time chat)
- **Notification Service** (Kafka-based user events)
- **Analytics Service** (Prometheus metrics + reporting)
- **API Gateway** (GraphQL with schema federation)
- **Frontend** (Vue.js SPA)

---

## 🧱 Architecture

```
+------------------+       +------------------+       +------------------+
|   Vue Frontend   | <---> |   GraphQL Gateway| <---> |   Microservices  |
+------------------+       +------------------+       +------------------+
        | GraphQL                                 /|\     | REST/gRPC
        |                                         |       |
        v                                         v       v
+-------------+   +-------------+   +-------------+   +-------------+
|  auth       |   |  post       |   |  profile    |   |  messaging  |
|  PostgreSQL |   |  MongoDB    |   |  PostgreSQL |   |  Socket.IO  |
+-------------+   +-------------+   +-------------+   +-------------+

Other Services:
- search (Elasticsearch)
- notification (Kafka)
- analytics (Prometheus)
```

---

## 🐳 Running Locally

1. **Clone the repo:**

   ```bash
   git clone https://github.com/your-username/social-media-app.git
   cd social-media-app
   ```

2. **Start all services:**

   ```bash
   docker-compose up --build
   ```

2.5. *Run a service:**

   ```bash
   docker run --interactive --tty
   ```

3. **Access services:**
   - Frontend: <http://localhost:3000>
   - GraphQL Gateway: <http://localhost:4000/graphql>
   - Prometheus: <http://localhost:9090>
   - pgadmin: <http://localhost:8080/login?next=/browser/>

3.1 **reading database contents**
 docker exec -it auth-db psql -U auth_user -d auth_db
\dt
SELECT * FROM User

---

## 📁 Project Structure

```
social-media-app/
├── docker-compose.yml
├── README.md
├── gateway/             # Apollo GraphQL gateway
├── services/            # Microservices
│   ├── auth/            # Login, Register (PostgreSQL + JWT)
│   ├── post/            # Posts & Comments (MongoDB)
│   ├── profile/         # User profile & followers
│   ├── search/          # Elasticsearch indexing and querying
│   ├── messaging/       # Socket.IO real-time chat
│   ├── notification/    # Kafka-based notification events
│   └── analytics/       # Metrics, Prometheus scraping
├── proto/               # gRPC Protobuf files
├── monitoring/          # Prometheus & OpenTelemetry config
└── frontend/            # Vue 3 SPA
```

## Front-end Structure

```
frontend/
├── public/                  # Static assets (favicon, robots.txt, etc.)
├── src/
│   ├── assets/              # Images, fonts, etc.
│   ├── components/          # Global reusable UI components
│   ├── composables/         # Custom Composition API logic (useAuth, useForm, etc.)
│   ├── layouts/             # App layouts (default, auth, dashboard)
│   ├── pages/               # Route components (auto-routed if using unplugin-vue-router)
│   ├── router/              # Vue Router setup
│   │   └── index.ts
│   ├── stores/              # Pinia stores
│   │   └── user.ts
│   ├── types/               # Global TypeScript types/interfaces
│   ├── utils/               # Helpers, formatters, validators
│   ├── services/            # API calls (axios/fetch clients)
│   ├── plugins/             # Plugin registration (e.g., axios, i18n)
│   ├── styles/              # Global CSS/SCSS files
│   │   └── main.scss
│   ├── App.vue              # Root component
│   └── main.ts              # App entry point
├── .env                    # Environment variables
├── index.html              # Vite HTML template
├── vite.config.ts          # Vite configuration
├── tsconfig.json           # TypeScript config
└── package.json

```

---

## 📊 Observability

- **Prometheus** scrapes service metrics from `/metrics` endpoints
- **OpenTelemetry** traces and exports service spans
- Exposed via port `9090` for Prometheus UI

---

## ⚙️ Tech Stack

| Layer        | Tech                                               |
|--------------|----------------------------------------------------|
| Frontend     | Vue 3, Vite, TailwindCSS                           |
| Backend      | Node.js, Express, TypeScript                       |
| Auth         | PostgreSQL, Prisma, JWT                            |
| Posts        | MongoDB, Mongoose                                  |
| Messaging    | Socket.IO, gRPC                                     |
| Search       | Elasticsearch                                      |
| Gateway      | Apollo Server, GraphQL Federation                  |
| Messaging    | Kafka, RabbitMQ                                    |
| Monitoring   | Prometheus, OpenTelemetry                          |
| DevOps       | Docker Compose                                     |

---

## 🛡️ Security

- JWT Authentication
- API gateway handles rate-limiting and auth token propagation
- Services validate input and sanitize data

---

## 🧪 Testing & Dev

- Local services can be run individually with `npm run dev`
- Unit tests are scaffolded per service (coming soon)
- Mock services/stubs for integration test pipelines (planned)
