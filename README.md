# Sejal Mankar — Personal Portfolio Website

A personal portfolio website built with HTML, CSS, and JavaScript, featuring an interactive contact form backed by Google Sheets, an admin login for message management, and a theme-toggle feature.

🔗 **Live site:** [sejalmank.github.io/sejal_resume](https://sejalmank.github.io/sejal_resume)

## About

This portfolio presents personal, educational, and project information in an organized, interactive format. Visitors can browse through sections like Education, Hobbies, and Projects, and reach out directly through a built-in Contact Me form — no separate backend server required, thanks to a Google Apps Script + Google Sheets integration.

## Features

- 🧭 **Navigation Menu** — quick links to Education, Work Experience, Hobbies, Projects, Contact Me, and Admin Login
- 📬 **Contact Form** — collects name, email, and message with client-side validation
- ☁️ **Google Sheets Integration** — submitted messages are sent to a Google Apps Script endpoint and stored in Google Sheets
- 🔐 **Admin Login** — authenticates against the backend endpoint to unlock message viewing
- 💬 **User Messages Panel** — retrieves and displays submitted messages after a successful admin login
- 🌗 **Theme Toggle** — switch between light/dark appearance with a floating toggle button

## Tech Stack

| Technology | Purpose |
|---|---|
| HTML | Structure of the portfolio webpage and its sections |
| CSS | Layout, colors, navigation styling, hover effects, animations, and theming |
| JavaScript | Event handling, form validation, Fetch API requests, DOM manipulation |
| Google Apps Script | Web endpoint for processing contact and admin requests |
| Google Sheets | Data store for submitted user messages |
| JSON / Fetch API | Data exchange between the webpage and the Apps Script endpoint |

## Project Structure

```
sejal_resume/
├── index.html   # Main page structure and content
├── style.css    # Styling, layout, and theming
└── script.js    # Form validation, API calls, theme toggle, admin logic
```

## How It Works

1. A visitor opens the site and browses the portfolio sections.
2. On the **Contact Me** form, they enter their name, email, and message.
3. JavaScript validates the input, then sends it to a Google Apps Script endpoint via the Fetch API.
4. The script stores the message in a connected Google Sheet.
5. An administrator logs in through the **Admin Login** section (authenticated via the same backend endpoint).
6. Once authenticated, stored messages are retrieved and displayed in the **User Messages** section.

## Getting Started

To run this project locally:

```bash
git clone https://github.com/sejalmank/sejal_resume.git
cd sejal_resume
```

Then simply open `index.html` in your browser — no build step required.

> **Note:** The Contact Me and Admin Login features rely on a Google Apps Script endpoint URL configured in `script.js`. To use these features yourself, deploy your own Apps Script project connected to a Google Sheet and update the endpoint URL accordingly.

## Author

**Sejal Mankar**
Built as part of Web Development Training at Zeravia (2026).

## License

This project is open source and available for personal/educational reference.
