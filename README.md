# FitLog — Workout Planner

FitLog is a modern and responsive workout planning web application built with **Next.js**. It allows users to explore workouts, view detailed workout information, manage their personal workout plan, and sort workouts based on different criteria.

## 🛠️ Technologies Used

* **Next.js** — React framework for building the web application
* **React** — Component-based user interface development
* **JavaScript** — Application logic and functionality
* **Tailwind CSS** — Responsive and modern UI styling
* **Lucide React** — Icons used throughout the application
* **Context API** — Managing the user's workout plan state

## ✨ Key Features

### 1. 🏋️ Workout Library

Users can browse and explore a collection of workouts from the workout library.

### 2. 📋 Workout Details

Each workout has a dedicated details page where users can view information such as:

* Workout duration
* Calories burned
* Rating
* Exercises
* Workout description
* Other workout information

### 3. ❤️ My Workout Plan

Users can add workouts to their personal workout plan and manage their selected workouts from the **My Plan** page.

### 4. 🔽 Workout Sorting

The workout library includes a **Sort By** dropdown with the following options:

* Duration
* Calories
* Rating

The default sorting option is **Duration**, and selecting a different option dynamically re-sorts the current workout list.

### 5. 📱 Responsive Design

The application is fully responsive and provides an optimized user experience across:

* Desktop
* Tablet
* Mobile devices

## 📂 Project Structure

```text
minhazulkader-fitlog/
├── app/
│   ├── globals.css
│   ├── layout.js
│   ├── not-found.js
│   ├── page.js
│   ├── my-plan/
│   │   └── page.js
│   └── workout/
│       └── [id]/
│           └── page.js
├── components/
│   ├── Footer.js
│   ├── Hero.js
│   ├── Library.js
│   ├── Navbar.js
│   ├── Spinner.js
│   ├── Stats.js
│   ├── Tags.js
│   └── WorkoutCard.js
├── context/
│   └── PlanContext.js
├── lib/
│   └── api.js
├── public/
├── jsconfig.json
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.js
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Make sure you have **Node.js** and **npm** installed on your computer.

### Install Dependencies

Clone the project and install the required dependencies:

```bash
npm install
```

### Run the Development Server

Start the development server:

```bash
npm run dev
```

Then open the application in your browser:

```text
http://localhost:3000
```

### Build for Production

To create a production build:

```bash
npm run build
```

## 🎯 Project Goal

The goal of FitLog is to provide a simple, clean, and responsive platform where users can discover workouts, view detailed workout information, organize their workout plans, and easily sort workouts according to their preferences.
