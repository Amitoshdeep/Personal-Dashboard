# 🌐 Personal Dashboard

A modern, customizable **React + Vite Dashboard** built with **TailwindCSS**.
This project integrates weather info, music (Spotify/YouTube), and personal widgets in a clean grid layout.

---

## ✨ Features

* 📊 **Dashboard Layout** with customizable grid components
* 🌦️ **Live Weather Data** (temperature, wind speed, conditions)
* 🎵 **Music Player Integration** (YouTube, Spotify embeds)
* 💾 **Local Storage Support** (remembers preferences like playlists)
* 🎨 **Clean UI** powered by TailwindCSS
* ⚡ **Fast development with Vite**

---

## 🛠️ Tech Stack

* **React 19**
* **Vite 5**
* **TailwindCSS 4**
* **React YouTube** (YouTube embedding)
* **React Spotify Embed** (Spotify previews)
* **ESLint + React Hooks linting**

```json
"dependencies": {
  "@tailwindcss/vite": "^4.1.12",
  "react": "^19.1.1",
  "react-dom": "^19.1.1",
  "react-spotify-embed": "^2.0.4",
  "react-youtube": "^10.1.0",
  "tailwindcss": "^4.1.12"
}
```

---

## 🚀 Getting Started

### 1️⃣ Clone the repo

```bash
git clone https://github.com/YOUR-USERNAME/dashboard.git
cd dashboard
```

### 2️⃣ Install dependencies

```bash
npm install
```

### 3️⃣ Run in development

```bash
npm run dev
```

### 4️⃣ Build for production

```bash
npm run build
```

---

## 📸 Screenshots

### Dashboard UI

![Dashboard Screenshot](./assets/dashboard-1.png)

### Weather & Music Integration

![Weather and Music](./assets/dashboard-2.png)

---

## 📂 Project Structure

```
dashboard/
│── src/
│   ├── components/     # UI Components
│   ├── hooks/          # Custom hooks (e.g. useLocalStorage)
│   ├── App.jsx         # Main app
│   └── main.jsx        # Entry point
│── public/             # Static assets
│── package.json
│── tailwind.config.js
│── vite.config.js
```

---

## 🔮 Future Enhancements

* 🎼 Custom UI for YouTube Music (album art + track info)
* 🌙 Dark Mode
* 📅 Calendar & Todo Widgets
* 📊 More data integrations (stocks, crypto, etc.)

---

## 🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you’d like to change.

---

## 📜 License

This project is licensed under the **MIT License**.
