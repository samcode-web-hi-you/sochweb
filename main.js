document.addEventListener("DOMContentLoaded", function () {
  function checkScreenWidth() {
    let screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    let Element = document.querySelector(".Screen600px");
    let ElementSecond = document.querySelector('.less600Px');
    let adjustedText = document.querySelector("#LogoName");
    if (screenWidth > 500 && screenWidth > 760) {
      Element.classList.remove('hide');
      adjustedText.classList.remove("font-medium");
      adjustedText.classList.add("font-bold");
      ElementSecond.classList.add('hide');
    } else {
      adjustedText.classList.remove("font-bold");
      ElementSecond.classList.remove('hide');
      adjustedText.classList.add("font-medium");
      Element.classList.add('hide');
    };
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
    };
  };

  checkScreenWidth();
  window.addEventListener('resize', checkScreenWidth);
  fontAdjustment();
  window.addEventListener('resize', fontAdjustment);



  window.addEventListener('DOMContentLoaded', function () {
    let smallScreenNav = document.querySelector('#navbar-lineBreaker');
    let navBarContent = document.querySelector(".navBar-content");
    let InvalidClick = document.querySelector('#invalidClick');
    if (smallScreenNav) {
      smallScreenNav.addEventListener("click", function () {
        // Toggle the "navLine" class on each click
        navBarContent.classList.toggle("navLine");
        navBarContent.classList.toggle("hide");
        smallScreenNav.classList.toggle("hide");
        console.log("clicked");
      });
    } else {

      console.error('Element with ID "navbar-lineBreaker" not found.');
    };
    if (InvalidClick) {
      InvalidClick.addEventListener('click', function () {
        navBarContent.classList.toggle("navLine");
        navBarContent.classList.toggle("hide");
        smallScreenNav.classList.toggle("hide")
      })
    } else {
      console.log("fail");
    };
  });

  const darkMode = document.querySelector("#dark-mode");
  const lightMode = document.querySelector("#light-mode");
  const togglers = document.querySelector(".dropping");

  try {
    darkMode.addEventListener("click", () => {
      togglers.style.background = "#303030"; togglers.style.color = "white";
    })
  } catch (err) {
    console.log
      (err)
  };

  try {
    lightMode.addEventListener("click", () => {
      togglers.style.background = "white"; togglers.style.color = "#303030";
    })
  } catch (err) {
    console.log
      (err)
  }

});
//Language


const darkModes = document.querySelector("#dark-mode");
const lightModes = document.querySelector("#light-mode");
const toggler = document.querySelector(".ColorChange");
const navAdjustment = document.querySelector(".DarkMode")

try {
  darkModes.addEventListener("click", () => {
    toggler.style.background = "#303030"; toggler.style.color = "white";
    navAdjustment.classList.remove("bg-orange-300");

  })
} catch (err) {
  console.log
    (err)
};

try {
  lightModes.addEventListener("click", () => {
    toggler.style.background = "white"; toggler.style.color = "#303030";
    navAdjustment.classList.remove("colorChangeOnLine"); navAdjustment.classList.add("bg-orange-300");
  });
} catch (err) {
  console.log
    (err)
};
function returnhome() {
  try {
    const messages = document.getElementById('submit-messages');
    const message = document.getElementById('submit-message');
    const lineHead = document.getElementById("FormClass");
    const homeNavigator = document.getElementById("homeNavigator");
    lineHead.style.display = "none";
    messages.classList.remove("hide");
    message.innerText = "Thanks for Filling Form Our Team will contact you soon";
    homeNavigator.classList.remove("hide");
  } catch (err) {
    console.log(err)
  };


}
const submitBtn = document.getElementById('submit-btn');
submitBtn.addEventListener("click", returnhome);






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
