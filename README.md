# Social Media Microservices App

A scalable, production-ready social media application built using Node.js microservices and a Vue.js frontend. It features a GraphQL API gateway, real-time messaging, full-text search, JWT authentication, and observability integrations via Prometheus and OpenTelemetry.

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

3. **Access services:**
   - Frontend: <http://localhost:3000>
   - GraphQL Gateway: <http://localhost:4000/graphql>
   - Prometheus: <http://localhost:9090>

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

## Endpoints

<http://localhost:4000/graphql>
<http://localhost:8080/login?next=/browser/>
