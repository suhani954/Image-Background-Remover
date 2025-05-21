# IMAGE BACKGROUND REMOVER – FRONT-END PROJECT
**Project Overview:**
This project is a user-friendly web application that allows users to upload an image from their device and automatically removes its background using the remove.bg AI API. The web app is built entirely with frontend technologies and delivers a seamless, professional experience through a combination of modern UI, responsive design, and interactive features. 

**Key Features:**
1. Image Upload & Preview: Users can upload image files (.jpg, .jpeg, .png) from their local system and immediately see a preview before processing.
2. One-Click Background Removal: Upon clicking the "Remove Background" button, the app sends the uploaded image to the remove.bg REST API, which processes and returns a new image with the background removed using advanced AI segmentation.
3. Loader Animation: A loading spinner is shown while the API processes the image, improving UX and feedback.
4. Result Display & Download: The processed image (with no background) is displayed on the screen, along with a "Download" button that allows users to save the image instantly.
5. Dark Mode Toggle: A stylish toggle button allows users to switch between light and dark themes dynamically, enhancing accessibility and user preference.
6. Responsive & Interactive UI: Designed to work smoothly across desktops and mobile devices with clean layout, intuitive buttons, and modular styling.

**Technologies Used:**
1. HTML5 – Structured and semantic page layout
2. CSS3 – Styling, animations, dark mode, and responsive design
3. JavaScript (Vanilla) – Image handling, API requests (using Fetch), event handling
4. remove.bg API – For AI-based background removal
5. RESTful API Integration – Seamless communication with external image processing API

**How It Works:**
1. User Uploads Image:
The <input type="file"> element lets the user choose an image. It is validated and previewed in the UI.
2. User Clicks “Remove Background”:
The JavaScript fetch() function sends a POST request to the remove.bg API, including the image file in the body.
3. API Processes the Image:
The image is processed using AI to remove the background. The API returns the modified image as a blob.
4. Image Displayed & Download Option:
The frontend displays the new image using URL.createObjectURL(blob) and enables a download button for the result.
5. Optional Dark Mode:
A button toggles between light and dark UI themes by adding/removing a dark class on the <body>.
