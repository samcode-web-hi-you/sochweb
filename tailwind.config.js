/** @type {import('tailwindcss').Config} */
// tailwind.config.js

module.exports = {
 
  content: [
    './index.html',
    './style.css',
    './aboutus.html',
    './programs.html',
    './ourteam.html',
    './moremembers.html',
    './donation.html',
    './event.html',
  ],
  purge: [
    './index.html',
    './style.css',
    './aboutus.html',
    './programs.html',
    './ourteam.html',
    './moremembers.html',
    './donation.html',
    './event.html',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
