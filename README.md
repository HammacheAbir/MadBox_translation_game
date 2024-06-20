# MERN App Readme

## Instructions to Install & Setup the Project

![UI](guessItUI.png)

### Clone Repository

First, clone the repository to your local machine.

```bash
git clone [<repository-url>](https://github.com/HammacheAbir/MadBox_translation_game.git)
cd MadBox_translation_game
```

### Backend Setup

1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Create an `.env` file and copy the content of `.env.example` into it. Use the following values:
   ```plaintext
   MONGODB_URI=mongodb+srv://abirhammache:MDpSt556pnR2E2U8@backenddb.tmpyhwk.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB
   RAPID_API_URL=https://text-translator2.p.rapidapi.com/translate
   RAPID_API_KEY=1e422715abmshb1845dec85e983ep15ba6ejsnfddf71f17ca4
   RAPID_API_HOST=text-translator2.p.rapidapi.com
   ```
3. Install the dependencies:
   ```bash
   npm i
   ```
4. Run the server:
   ```bash
   npm run serve
   ```

### Frontend Setup

1. Navigate to the frontend folder:
   ```bash
   cd ./frontend
   ```
2. Create an `.env` file and add the content of `.env.example`. Use the following value:
   ```plaintext
   REACT_APP_BACKEND_URL=http://localhost:5000
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Run the application:
   ```bash
   npm start
   ```

Now, open your browser and go to `http://localhost:3000` to see your application running.

## Technical Choices

### Backend

- **Technologies**:
  - **Node.js** and **Express.js** with **TypeScript** as requested.
  - **Zod** for input validation from the frontend.
  - **Rapid API** with Text Translator API to facilitate translations (free tier includes 100,000 characters per month).
  - **MongoDB** for the database, using **Mongoose** for interacting with MongoDB.
- **Project Structure**:
  - `routes` folder for API call routes.
  - `controllers` to define the tasks for each route.
  - `services` to handle the logic for different services such as database, files, and translation API.
  - `models` folder for MongoDB models.

### Frontend

- **Technologies**:
  - **React.js** with **TypeScript** as requested.
  - **Material UI** for UI component creation.
  - **React Query** for optimizing and caching API calls.
  - **Axios** for data fetching.
- **Project Structure**:
  - `components` folder containing a folder for each component with its custom hooks.

## Improvements

Overall, the project is well-suited for the company's business context and meets the job description requirements.

## Development Time

The application was developed over approximately 10-12 hours. The process included:

- Initial understanding and setup during the weekend.
- Preparing the project structure and selecting technologies.
- Dedicating around 2 hours each evening for 5 days, while managing a full-time job.

This timeline covered all the essential aspects mentioned in the job description.
