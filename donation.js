// Declaration Of All values From Donation
let AnnualBtn = document.querySelector("#ann-btn");
let MonthlyBtn = document.querySelector("#months");
let annualSection = document.querySelector("#annualSub");
let monthlySection = document.querySelector("#monthlySub");

const addClass = (element) => {
  if (element && element.classList) {
    element.classList.add("hide");
  }
};

const removeClass = (element) => {
  if (element && element.classList) {
    element.classList.remove("hide");
  }
};

const month = () => {
  addClass(monthlySection);
  removeClass(annualSection);
};

const annual = () => {
 removeClass(monthlySection);
 addClass(annualSection);
};

function AnnualSubscription() {
  AnnualBtn.addEventListener("click", month);
}

function MonthlySubscription() {
  MonthlyBtn.addEventListener("click", annual);
}

AnnualSubscription();
MonthlySubscription();




// Function to create and append the span element
const part1Div = document.querySelector(".part1");
const part2Div = document.querySelector('.part2');
const part3Div = document.querySelector('.part3');
const getIdChangeClass = document.querySelector("#Changeable");
const buttonColor =document.querySelector("#named");
const buttonSecond = document.querySelector("#named1");
const buttonThird=document.querySelector("#named2");
const border = document.querySelector("#borderLine");
const border1 = document.querySelector("#border2");
const border2= document.querySelector("#border3");

function defaultStyle(){
  part1Div.classList.add("border-indigo-500");
  getIdChangeClass.classList.remove("hide");

  
  buttonColor.classList.remove('bg-gray-400', 'hover:bg-gray-500');
  buttonColor.classList.add('bg-indigo-500','hover:bg-indigo-600');

  buttonSecond.classList.remove('bg-indigo-500', 'hover:bg-indigo-600');
  buttonSecond.classList.add('bg-gray-400m', 'hover:bg-gray-500');

  buttonThird.classList.remove('bg-indigo-500', 'hover:bg-indigo-600');
  buttonThird.classList.add('bg-gray-400m', 'hover:bg-gray-500');

  border.classList.remove('rounded-lg', 'border-2', 'border-gray-300');
  border.classList.add('rounded-lg', 'border-2',  'border-indigo-500');

  border1.classList.remove('rounded-lg', 'border-2',  'border-indigo-500');
  border1.classList.add('rounded-lg', 'border-2', 'border-gray-300');
  
  border2.classList.remove('rounded-lg', 'border-2',  'border-indigo-500')
  border2.classList.add('border-2', 'border-gray-300', 'rounded-lg' );
  
}

function changecolor(){
  part1Div.classList.remove("border-indigo-500");
  getIdChangeClass.classList.add("hide");

  buttonColor.classList.remove('bg-indigo-500','hover:bg-indigo-600');
  buttonColor.classList.add('bg-gray-400', 'hover:bg-gray-500');

  buttonSecond.classList.remove('bg-gray-400m', 'hover:bg-gray-500');
  buttonSecond.classList.add('bg-indigo-500', 'hover:bg-indigo-600');

  buttonThird.classList.remove('bg-indigo-500', 'hover:bg-indigo-600');
  buttonThird.classList.add('bg-gray-400m', 'hover:bg-gray-500');

  border.classList.remove('rounded-lg', 'border-2',  'border-indigo-500');
  border.classList.add('rounded-lg', 'border-2', 'border-gray-300');

  border1.classList.remove('rounded-lg', 'border-2', 'border-gray-300');
  border1.classList.add('rounded-lg', 'border-2',  'border-indigo-500');
  
  border2.classList.remove('rounded-lg', 'border-2',  'border-indigo-500')
  border2.classList.add('border-2', 'border-gray-300', 'rounded-lg' );
  
};
 // Initial creation for part3Div
function thirdDiv (){
  try{
  part1Div.classList.remove('rounded-lg', 'border-2', 'border-indigo-500');
  getIdChangeClass.classList.add("hide");
  buttonColor.classList.remove('bg-indigo-500','hover:bg-indigo-600');
  buttonColor.classList.add('bg-gray-400', 'hover:bg-gray-500');
  buttonSecond.classList.remove('bg-indigo-500','hover:bg-indigo-600');
  buttonSecond.classList.add('bg-gray-400', 'hover:bg-gray-500');
  buttonThird.classList.remove('bg-gray-400m', 'hover:bg-gray-500');
  buttonThird.classList.add('bg-indigo-500', 'hover:bg-indigo-600');
  border.classList.remove('rounded-lg', 'border-2',  'border-indigo-500');
  border.classList.add('rounded-lg', 'border-2', 'border-gray-300');
  border1.classList.remove('rounded-lg', 'border-2',  'border-indigo-500');
  border1.classList.add('rounded-lg', 'border-2', 'border-gray-300');
  border2.classList.remove('border-2', 'border-gray-300', 'rounded-lg')
  border2.classList.add('rounded-lg', 'border-2',  'border-indigo-500' );
}catch(err){console.log(err)}

  
};

function createAndAppendSpan(text) {
  const newPopularSpan = document.createElement('span');
  newPopularSpan.className = 'bg-indigo-500 text-white px-3 py-1 tracking-widest text-xs absolute right-0 top-0 rounded-bl';
  newPopularSpan.innerText = text;
  return newPopularSpan;
};
function removeElementFromParent(element, parent) {
  try {
    if (parent.contains(element)) {
      parent.removeChild(element);
    }
  } catch (err) {
    console.log(err);
  }
}

let part2PopularSpan = createAndAppendSpan('Latest'); // Initial creation for part2Div
let part3PopularSpan = createAndAppendSpan('V.I.P');
part1Div.addEventListener("click", function () {
  try {
    removeElementFromParent(part3PopularSpan, part3Div);
    removeElementFromParent(part2PopularSpan, part2Div);
  } catch (err) {
    console.log(err);
  }
  defaultStyle();
});
part2Div.addEventListener("click", function () {
  changecolor();
  try{
  if (part3Div.contains(part3PopularSpan)) {
    part3Div.removeChild(part3PopularSpan);
  }}catch(err){console.log(err)}
  part2Div.appendChild(part2PopularSpan);
});


part3Div.addEventListener("click", function () {
  try {
    if (part2Div.contains(part2PopularSpan)) {
      part2Div.removeChild(part2PopularSpan);
    }
  } catch (err) {
    console.log(err);
  }
  thirdDiv(); // Apply styles before appending the span
  part3Div.appendChild(part3PopularSpan);
});


