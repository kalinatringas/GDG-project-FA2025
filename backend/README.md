# Gator Marketplace (Backend) 🐊

A simple MVP marketplace for UF students to buy and sell items. This is the backend server that powers the application.

---

## 🚀 How to Run This Project

Follow these steps exactly to get the project running on your computer.

1.  **Clone the Project**
    Open your terminal, navigate to the folder where you want to keep your projects, and run:
    ```bash
    git clone https://github.com/kalinatringas/GDG-project-FA2025.git
    ```

2.  **Install All Packages**
    Once you've cloned it, move into the new project folder:
    ```bash
    cd GDG-project-FA2025
    cd backend
    ```
    Then, install all the packages we need:
    ```bash
    npm install
    ```

3.  **Set Up Your Environment File (Critically Important!)**
    This project uses a `.env` file to hold secret keys. This file is **ignored by Git** so we *never* share our secrets. You must create your own.
    * Find the file named `.env.example`.
    * Make a **copy** of that file in the same directory.
    * Rename the copy to just `.env`
    * (You don't need to add anything to it for now, but this file *must* exist).

4.  **Start the Server**
    Run the final command:
    ```bash
    npm start
    ```
    This uses `nodemon` to start the server. It will automatically restart every time you save a file. You should see a message in your terminal like `Server running on port 3000`.

That's it! Your server is running.

---

## 📜 Our Project Rules (MUST READ)

We use a simple Git workflow to keep our project clean. **Do not break these rules.**

1.  **Never, ever work directly on the `main` branch. Always fork the repo, if you are planning to commit changes!**
2.  **Always create a new branch for your feature.** Give it a clear name.
    ```bash
    # Example: if you are making the "create items" feature
    git checkout -b feature/create-items
    ```
3.  **Do your work on that branch.** Commit your code in small, clear pieces.
    ```bash
    git add .
    git commit -m "feat: added POST /items route to create new items"
    ```
4.  When your feature is finished and working, **push your branch** to GitHub.
    ```bash
    git push origin feature/create-items
    ```
5.  Go to GitHub and **open a Pull Request (PR)** to merge your `feature/create-items` branch into the `main` branch.
6.  **Do not merge your own code.** Wait for it to be reviewed and approved.

---

## 🗺️ Where to Put Your Code: A Map

* **`models/`**: This folder holds your database tables.
* **`routes/`**: This folder holds your API endpoints (URLs).
* **`middleware/`**: This folder holds reusable helper functions.
* **`app.js`**: This is the main server file.

