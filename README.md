# 📅 Event Scheduler App

A lightweight scheduling utility built with TypeScript to determine whether a new event can be added to an existing list without time conflicts. This is ideal for applications such as calendars, booking systems, or any scheduling-based tool.

---

## ✨ Features

- 🕒 Checks if a new event overlaps with existing events
- 🚫 Prevents exact and partial time conflicts
- ✅ Supports back-to-back scheduling
- ⚡ Fast and efficient — handles large event lists with ease
- 🔧 Written in clean, modular TypeScript

---

## 📦 Installation

Clone the repository and install dependencies (if part of a Node.js project):

```bash
git clone https://github.com/samuelokeke/event-scheduler.git
cd event-scheduler
npm install
```

---

## 🚀 Usage

```js
import { canSchedule, Event } from './scheduler';

const existingEvents: SchedulerEvent[] = [
  { startTime: 900, endTime: 1030 },
  { startTime: 1100, endTime: 1200 },
  { startTime: 1300, endTime: 1500 },
];

const newEvent: SchedulerEvent = { startTime: 1000, endTime: 1130 };

const result = canSchedule(existingEvents, newEvent); // false
console.log(result);
```

---

## 📁 Project Structure

```
event-scheduler/
├─── src
│     ├─── utils
│     │     ├─── scheduler.test.ts
│     │     └─── scheduler.ts
│     └─── index.ts
└─── README.md
```

---

## 🧪 Testing

```bash
npm run build
npm run dev
```

---

## 🧑‍💻 Author

Made with ❤️ by Samuel Okeke
