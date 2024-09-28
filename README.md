# IN-sights 

[**🌐 Live Demo**](https://in-sights.netlify.app/)

![INsights Screenshot](https://res.cloudinary.com/de5pdwmbc/image/upload/v1727475855/fjahewnt0kcquihhsszf.png)

**INsights** is a dynamic, user-friendly React application that provides real-time weather updates, current time, and daily quotes. The app is also designed to function as a visually appealing screensaver with high-quality landscape images in the background, creating an engaging experience for the user.

## 🚀 Features
- **Real-Time Weather**: Get the current weather conditions for your location, including temperature and wind speed.
- **Random Quotes**: Enjoy inspiring quotes that can be changed manually with a single button click.
- **Background Landscape Images**: Beautiful landscapes that change dynamically, adding an aesthetic touch to your screen.
- **Fully Responsive**: The app is completely responsive and works seamlessly on any screen dimension, from mobile devices to large desktops.
- **Current Time**: Display the accurate, real-time clock.

## 🛠️ Technologies and APIs Used

### Frontend
- **React.js**: Main JavaScript library used to build the user interface, with a component-based structure.
- **React Hooks**: Utilized `useState`, `useEffect`, and `useCallback` for state management and handling side effects.
- **Vite**: The project was bootstrapped with Vite for fast development and optimized builds.
- **Dotenv**: Used to manage environment variables securely.

### APIs
- **OpenWeather API**: Used to fetch real-time weather data, including temperature, weather conditions, and wind speed.
  - [OpenWeather API Documentation](https://openweathermap.org/api)
  - **Note:** You need to use your own OpenWeather API key. Replace the placeholder `YOUR_API_KEY` in the code with your actual API key.
- **Random Quotes API**: Provides random quotes to keep the user inspired and motivated.
  - [Random Quotes API](https://github.com/lukePeavey/quotable)


## 🛠️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/mrsahiljaiswal/insights-app.git
   cd insights-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Dotenv:**
   ```bash
   npm install dotenv
   ```

4. **Configure Vite with Dotenv:**
   - Create a `vite.config.js` file in the root directory (if it doesn't already exist) and add the following configuration:
     ```javascript
     import { defineConfig } from 'vite'
     import react from '@vitejs/plugin-react'
     import dotenv from "dotenv"

     // Load environment variables from .env file
     dotenv.config()

     // https://vitejs.dev/config/
     export default defineConfig({
       plugins: [react()],
       define: {
         'process.env.VITE_APIKEY': JSON.stringify(process.env.VITE_APIKEY)
       }
     })
     ```

5. **Configure API Key:**
   - Create a `.env` file in the root directory.
   - Add your OpenWeather API key:
     ```
     VITE_APIKEY=your_openweather_api_key_here
     ```
   - **Note:** Replace `your_openweather_api_key_here` with your actual OpenWeather API key.

6. **Run the development server:**
   ```bash
   npm run dev
   ```

7. **Build for production:**
   ```bash
   npm run build
   ```

## 🖥️ Usage
Once the app is up and running, you'll be able to:
- 🌍 **View your current weather data** based on your geolocation.
- 📖 **Read as many random quotes as you want.**
- 🔃 **Change quotes manually** by clicking the **🔃** button.
- 🖼️ **Enjoy high-quality landscape backgrounds** that enhance the visual appeal, acting as a screensaver.
- 🕰️ **See the current time**.
- 📱 **Experience a fully responsive design** that adapts to any screen size.

**Important:** While accessing the [Live Demo](https://in-sights.netlify.app/), please allow location permissions to enable the app to fetch and display the weather details of your city.

## 📄 License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing
Feel free to submit issues or pull requests if you'd like to contribute to this project!

## 🎉 Special Thanks
A special thanks to [Tatyana Pavliuk](https://www.vecteezy.com/members/tati-dsgn) for providing high-quality landscape images free of cost, which greatly enhance the visual appeal of the app.

---

### Challenge Dusted @ **Codedam**
---

[**🌐 Live Demo**](https://in-sights.netlify.app/)

