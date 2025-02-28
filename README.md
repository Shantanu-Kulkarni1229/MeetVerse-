# 🌐 MeetVerse

MeetVerse is a cutting-edge real-time online meeting platform, developed as part of the **Verse Series** (following ChatVerse and WriteVerse). The platform is designed to simplify and enhance virtual collaboration with a seamless, interactive, and user-friendly experience.

---

## 🛠️ Features

### 🔒 Secure and Scalable Authentication  
Leverage **Clerk** for user-friendly and secure authentication, ensuring reliable access control.  

### 🎥 Real-Time Video Streaming  
Powered by **Stream**, enabling high-quality real-time streaming for uninterrupted communication.  

### 🌟 Dynamic and Engaging Interface  
Built with **Framer Motion** to provide smooth animations and a modern user experience.  

### 🚀 Intuitive Design  
Minimalist and responsive UI/UX crafted using **Next.js** and **Tailwind CSS**, optimized for accessibility and ease of use.  

### 📅 Meeting Management  
Organize, join, and manage meetings with features like:
- Personal meeting rooms  
- Recording functionality  
- Upcoming and past meeting overviews  

---

## 🔧 Tech Stack

| **Technology**      | **Purpose**                  |  
|----------------------|------------------------------|  
| [Next.js](https://nextjs.org/) | Frontend framework          |  
| [Clerk](https://clerk.dev/)    | Authentication               |  
| [Stream](https://getstream.io/) | Real-time streaming          |  
| [Framer Motion](https://www.framer.com/motion/) | Animations                 |  
| [Tailwind CSS](https://tailwindcss.com/) | Styling framework           |  
| TypeScript           | Type safety and scalability  |  

---

## 🚀 Getting Started

Follow these steps to set up the project on your local machine.

### Prerequisites  
Ensure you have the following installed:
- **Node.js** (v16+)
- **npm** or **yarn**
- Accounts for [Clerk](https://clerk.dev/) and [Stream](https://getstream.io/)

### Installation  

1. **Clone the Repository**:  
   ```bash
   git clone https://github.com/shantanu-kulkarni1229/meetverse.git
   cd meetverse
Install Dependencies:

bash
Copy code
npm install
Configure Environment Variables:
Create a .env file in the root directory and add the following:

plaintext
Copy code
NEXT_PUBLIC_CLERK_FRONTEND_API=<Your Clerk Frontend API>
NEXT_PUBLIC_STREAM_API_KEY=<Your Stream API Key>
Run the Application:
Start the development server:

bash
Copy code
npm run dev
Open your browser and navigate to http://localhost:3000.

📖 What I Learned
While building MeetVerse, I gained valuable insights into:

Real-Time Communication: Integrating Stream for seamless live video and audio.
Authentication Systems: Implementing scalable and secure user management with Clerk.
Dynamic UI Design: Using Framer Motion to create smooth, engaging animations.
Modern Web Development: Leveraging Next.js for server-side rendering and optimized performance.
Scalable Architecture: Designing modular components for maintainable and extensible codebases.
📚 Documentation
For detailed information on how to use MeetVerse and its features:

Clerk Documentation
Stream Documentation
Framer Motion Documentation
🌐 Links
GitHub Repository: MeetVerse GitHub
Live Website: MeetVerse Website
🤝 Contributing
Contributions are welcome! If you'd like to contribute:

Fork the repository.
Create a feature branch (git checkout -b feature-name).
Commit your changes (git commit -m "Add feature").
Push to the branch (git push origin feature-name).
Open a pull request.
📜 License
This project is licensed under the MIT License.

🎉 Acknowledgments
A huge thanks to Clerk and Stream for their powerful APIs.
Inspired by the Verse Series community.

