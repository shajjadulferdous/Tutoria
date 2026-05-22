# Tutoria 📚

Tutoria is a modern tutor booking platform built with Next.js where students can easily find tutors, book learning sessions, and even become tutors themselves by adding tutor profiles to the platform.

---

## 🌐 Live Website

### Live Link:
https://tutoria-one.vercel.app/

---

## 🚀 Features

- 🔐 Authentication using Better Auth
- 👨‍🏫 Browse and explore tutors
- 📅 Book tutoring sessions
- ➕ Students can add themselves as tutors
- 📝 Manage tutor information
- 🔍 Dynamic tutor details pages
- ⚡ Fast and modern UI with HeroUI
- 📱 Fully responsive design

---

## 🛠️ Tech Stack

### Frontend
- Next.js 16
- React 19
- Tailwind CSS 4
- HeroUI
- DaisyUI
- Swiper JS

### Authentication
- Better Auth
- MongoDB Adapter

### Backend & Database
- MongoDB
- Express.js

---

## 📦 Dependencies

### Main Packages

```json
{
  "@better-auth/mongo-adapter": "^1.6.11",
  "@gravity-ui/icons": "^2.18.0",
  "@heroui/react": "^3.0.5",
  "@heroui/styles": "^3.0.5",
  "@iconify-icon/react": "^3.0.3",
  "better-auth": "^1.6.11",
  "mongodb": "^7.2.0",
  "next": "16.2.6",
  "react": "19.2.4",
  "react-dom": "19.2.4",
  "react-hook-form": "^7.76.0",
  "react-hot-toast": "^2.6.0",
  "react-icons": "^5.6.0",
  "swiper": "^12.1.4"
}
```

---

## ⚙️ Environment Variables

Create a `.env.local` file in the root directory and add the following variables:

```env
BETTER_AUTH_SECRET=your_secret_key

BETTER_AUTH_URL=http://localhost:3000

MONGO_URI=your_mongodb_connection_string

GOOGLE_CLIENT_ID=your_google_client_id

GOOGLE_CLIENT_SECRET=your_google_client_secret

NEXT_PUBLIC_API_URL=http://localhost:8080
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/shajjadulferdous/tutoria.git
```

Move to the project folder:

```bash
cd tutoria
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```bash
http://localhost:3000
```

---

## 📸 Main Functionalities

### 👨‍🎓 Student Features
- Find tutors
- Book tutoring sessions
- Search tutors
- View tutor details
- Become a tutor

### 👨‍🏫 Tutor Features
- Add tutor profile
- Update tutor information
- Manage sessions
- Receive student bookings

---

## 📱 Responsive Design

Tutoria is fully responsive and optimized for:
- Mobile Devices
- Tablets
- Desktop Screens




## 🧑‍💻 Author

Developed by Md Shajjadul Ferdous

---
