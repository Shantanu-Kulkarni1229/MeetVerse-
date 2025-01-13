import React from 'react';
import MeetingTypeList from '@/components/MeetingTypeList';
import { Github, Linkedin,  Mail, Instagram } from 'lucide-react';

const Home = () => {
  const now = new Date();

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  const socialLinks = [
    {
      icon: Github,
      url: "https://github.com/Shantanu-Kulkarni1229",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      url: "www.linkedin.com/in/shantanu-kulkarni1229",
      label: "LinkedIn"
    },
    {
      icon: Instagram,
      url: "https://www.instagram.com/_shantanu_kulkarni_/?hl=en",
      label: "Instagram"
    },
    {
      icon: Mail,
      url: "mailto:your.shantanukulkarni1229@gmail.com",
      label: "Email"
    }
  ];

  return (
    <section className="flex min-h-screen w-full flex-col gap-5 text-white">
  <div className="relative h-[303px] w-full rounded-[20px] bg-hero bg-cover">
    {/* Blur effect over the hero image */}
    <div className="absolute inset-0 bg-black/50 backdrop-blur-sm rounded-[20px]"></div>
    
    {/* Text content with a dark background */}
    <div className="relative z-10 flex h-full flex-col justify-between max-md:px-5 max-md:py-8 lg:p-11">
      <h2 className="max-w-[700px] rounded-lg py-3 text-center text-base font-normal shadow-lg bg-black/80">
        Welcome To MeetVerse: Perfect for Meetings You Pretend to Attend.
      </h2>
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-extrabold lg:text-7xl drop-shadow-lg">
          {time}
        </h1>
        <p className="text-lg font-medium text-sky-1 lg:text-2xl">
          {date}
        </p>
      </div>
    </div>
  </div>

      <MeetingTypeList />

      <footer className="mt-auto w-full py-6 px-4">
        <div className="glassmorphism2 rounded-lg p-6">
          <div className="flex flex-col items-center gap-4">
            <p className="text-center text-lg font-medium">
             Developed by Shantanu Kulkarni
            </p>
            
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center transition-all duration-300 hover:-translate-y-1"
                  aria-label={social.label}
                >
                  <div className="rounded-full p-2 transition-all duration-300 hover:bg-gray-800">
                    <social.icon 
                      size={20} 
                      className="text-gray-400 transition-all duration-300 group-hover:text-white" 
                    />
                  </div>
                </a>
              ))}
            </div>
            
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} MeetVerse. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Home;