

function checkScreenWidth() {
  let  screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  let  Element = document.querySelector(".Screen600px");
  let ElementSecond = document.querySelector('.less600Px');
  if (screenWidth > 500) {
    Element.classList.remove('hide');
    ElementSecond.classList.add('hide');
  } else {
   Element.classList.add('hide');
   ElementSecond.classList.remove('hide');
  }
};
function fontAdjustment() {
  try {
    let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let changeFonts = document.querySelectorAll(".fontChange");
    changeFonts.forEach(function (element) {
      if (screenWidth > 900 || screenWidth < 500) {
        element.classList.add("font-bold");
        element.classList.remove("font-medium");
      } else {
        element.classList.remove("font-bold");
        element.classList.add("font-medium");
      }
    });
  } catch (err) {
    console.log(err);
  }
}

checkScreenWidth();
window.addEventListener('resize', checkScreenWidth);
fontAdjustment();
window.addEventListener('resize', fontAdjustment);



window.addEventListener('DOMContentLoaded', function () {
  let smallScreenNav = document.querySelector('#navbar-lineBreaker');
  let navBarContent = document.querySelector(".navBar-content");

  if (smallScreenNav) {
      smallScreenNav.addEventListener("click", function () {
          // Toggle the "navLine" class on each click
          navBarContent.classList.toggle("navLine");
          navBarContent.classList.toggle("hide");
          console.log("clicked")
      });
  } else {
      console.error('Element with ID "navbar-lineBreaker" not found.');
  }
});
const darkMode = document.querySelector("#dark-mode");
const lightMode = document.querySelector("#light-mode");
const togglers = document.querySelector(".dropping");

try{darkMode.addEventListener("click", () => {
    togglers.style.background = "black"; togglers.style.color="white";
})}catch(err){
      console.log
      (err)
};

try{lightMode.addEventListener("click", () => {
    togglers.style.background = "white"; togglers.style.color="black";
})}catch(err){
  console.log
  (err)
};




//Language
document.addEventListener('DOMContentLoaded', function() {
  const translations = {
    Eng: {
      button1: 'Language',
      button2:'Mode'

    },
    Nep: {
      button1: 'भाषा',
      button2:'मोड'
    }
  };

  // Function to change language
  function changeLanguage(lang) {
    const languageBtn = document.getElementById('languageBtn');
    const modeBtn = document.getElementById("modeBtn");

    if (translations[lang]) {
      languageBtn.innerText = translations[lang].button1;
      modeBtn.innerText = translations [lang].button2;
    }
  }

  // Event listeners for language selection
  document.getElementById('Eng').addEventListener('click', () => changeLanguage('Eng'));
  document.getElementById('Nep').addEventListener('click', () => changeLanguage('Nep'));
});





// const translations = {
//   Eng: {
//     greeting: 'Hello, World!',
//     description: 'This is a sample content.'
//   },
//   Nep: {
//     greeting: 'नमस्ते, संसार!',
//     description: 'यो एक नमुना सामग्री हो।'
//   }
// };

// // Function to change language
// function changeLanguage(lang) {
//   const greeting = document.getElementById('greeting');
//   const description = document.getElementById('description');

//   if (translations[lang]) {
//     greeting.innerText = translations[lang].greeting;
//     description.innerText = translations[lang].description;
//   }
// }


// document.getElementById('Eng').addEventListener('click', () => changeLanguage('Eng'));
// document.getElementById('Nep').addEventListener('click', () => changeLanguage('Nep'));

// const NepLang = document.querySelector("#Nep");
// const EngLang = document.querySelector("#Eng");
// const ChangeLang = document.querySelector("body");

// EngLang.addEventListener("click",() =>{
//   console.log("I am English");
// });

// NepLang.addEventListener("click",() =>{
//   console.log("I am Nepali");
// });


// document.addEventListener('DOMContentLoaded', function() {
//   function loadHtmlContent(lang) {
//     const contentContainer = document.getElementById('content');
//     if (!contentContainer) {
//       console.error('Element with id "content" not found.');
//       return;
//     }
//     const url = lang === 'Eng' ? 'aboutus.html' : 'programs.html';
//     fetch(url)
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.text();
//       })
//       .then(htmlContent => {
//         contentContainer.innerHTML = htmlContent;
//       })
//       .catch(error => {
//         console.error('Error loading HTML content:', error);
//       });
//   }

//   // Event listeners for language selection
//   document.getElementById('Eng').addEventListener('click', () => loadHtmlContent('Eng'));
//   document.getElementById('Nep').addEventListener('click', () => loadHtmlContent('Nep'));
// });
