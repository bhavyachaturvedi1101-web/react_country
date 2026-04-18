# 🌍 World Atlas

> A React app to explore information about every country in the world.

## 🔗 Live Demo

**[https://react-country-two.vercel.app](https://react-country-two.vercel.app)**

---

## 📸 Features

- Browse 195+ countries with flag, population, region & capital
- Search countries by name
- Filter countries by region
- Detailed country page with languages, currencies, borders & more
- Responsive design with mobile hamburger menu
- Custom React hook for data fetching

## 🛠️ Tech Stack

- React 19
- Vite
- React Router v7
- REST Countries API
- CSS (custom, no framework)

## 🚀 Getting Started

```bash
npm install
npm run dev
```

## 📁 Project Structure

```
src/
├── components/
│   ├── layout/     # AppLayout with Outlet
│   └── UI/         # Header, Footer
├── hooks/
│   └── useCountries.js   # custom hook for API fetch
├── pages/
│   ├── Home.jsx
│   ├── Country.jsx
│   ├── CountryDetail.jsx
│   ├── About.jsx
│   └── Contact.jsx
└── App.jsx
```

## 🌐 API

Data sourced from [REST Countries API](https://restcountries.com)
