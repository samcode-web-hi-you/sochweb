// /** @format */

// let nums = [
//   67, 86, 52,
// ];
// console.log(nums);

// //Map Function Is Used To Create New Data OR Array
// let note2 = "Map Method"
// console.log(note2);
// let newarr =
//   nums.map(
//     (val) => {
//       return (
//         val * 2
//       );
//     }
//   );
// console.log(newarr);

// // For Each Function Or Method Which Will Log
// // Everything According To Index
// let note1 = "ForEach Method"
// console.log(note1);
// let num = [
//   25, 24, 12,
// ];

// num.forEach(
//   (land) => {
//     console.log(
//       land * land
//     );
//   }
// );


// //filter Method 
// //Creates a new Array Of elements That Give For A CVondition\Filter
// let note = "Filter Method"
// console.log(note);
// let arr =[1, 2, 3, 4, 5, 6, 7];

// let evenarr = arr.filter((val) => {
//   return val > 3;
// });
//  console.log(evenarr);

// //Reduce Method Is A Method Where It perform Some 
// //Operation & Reduces The Array To A Single value.
// //It Returns The Single Value
// let note3 = "Reduce Methods"
// console.log(note3);

// let arr3 =[1, 2, 3, 4];

// const output = arr3.reduce((res, curr)=>{
//     return res + curr;
// });
// console.log("This Is The Result Of Reduce Method Which Performs Sum ",output);
  

// let arrG =[1, 2, 809, 5346, 2001, 3, 4];
// const great = arrG.reduce((prev, curn)=>{
//   return prev > curn ? prev : curn;
// });
// console.log("This Is The Result Of Reduce Method Which Performs Greatest ",great);


// //Practise Question Or Practical
// //It Returns The Single Value
// let prac = "Practise Question Or Practical"
// console.log(prac);
// let arr4 = [90, 85, 98, 86, 91, 97, 85, 93];

// let filt = arr4.filter((greater)=>{
//   return greater >= 90;
// })
// console.log("This Is The Result Of PRACTISE Quesiton Which Print Number Of Student that Scored 90",filt);
// //2nd Practise
// let practical = "Practise Question Or Practical (2)"
// console.log(prac);

// let n = prompt(" Enter A Number ")
// let arr5 = [];
// for (let i=1; i<=n; i++){
//   arr5[i-1] = i;
// }
// console.log("This Is The Result Of PRACTISE Quesiton Which Takes Input And Print Upto User Inputed Number",arr5);
// //2nd Practise
// let p2 = "Practise Question Or Practical"
// console.log(p2);

// let n2 = prompt(" Enter A Number ")
// let arr6 = [];
// for (let i=1; i<=n2; i++){
//   arr6[i-1] = i;
// }
// console.log(arr6);
// const long = arr6.reduce((res, curr)=>{
//     return res + curr;
// });
// console.log("This Is The Result Of PRACTISE Quesiton using Reduce Method Which Performs Sum ",long);
  
// //3nd Practise
// let p3= "Practise Question Or Practical"
// console.log(p3);
// let n3 = prompt(" Enter A Number ")
// let arr7 = [];
// for (let i=1; i<=n3; i++){
//   arr7[i-1] = i;
// }
// console.log(arr7);
// const product = arr7.reduce((res, curr)=>{
//     return res * curr;
// });
// console.log("This Is The Result Of PRACTISE Quesiton using Reduce Method Which Performs Product ",product);
  

// //Document Object Model- DOM

// //3 Musketeers-SSL(Structure-Html, Style-CSS, Logic-JavaScript)


// DOM is the Method Of Accessing HTML Through Java script


//window.document => shows all Methods And Features Of Selected Document(HTML)

//For Accessing Document By ID ==> 
//let heading = document.getElementById|("idName");
//Console.Log(heading);
//Console.dir(Heading); ==>   If Id name element Doesn't Exists In Code Or Html Then On Console Window "Null" Will Be Printed;



//For Accessing Document By Class Name ==>
// let Heading = document.getElementsByClassName("Class Name");
// console.dir(Heading); ==> If Class name element Doesn't Exists In Code Or Html Then On Console Window "Html collection [0]" Will Be Printed;


//For Accessing Document By Tag Name ==>
// let heading = document.getElementsByTagName("p,a,body,head");
// console.dir(heading);

//QUERY SELECTOR ===>

// let FisEl = document.querySelector("p"); ==> for First Element;
//console.dir(FisEl);

// let AllEl = document.querySelector("p"); ==> for All Element Returns Node List;
//console.dir(AllEl);

//FOR CLASS ".Classname" Is Written In The Case OF Query selector For E.g ==>
// let FisClass = document.querySelector(".classname");
//comsole.dir(FisClass);

//FOR ID "#idname" Is Written In The Case OF Query selector For E.g ==>
// let Fisid = document.querySelector("#idname");
//comsole.dir(Fisid); For Id All Query selector Doesn't Make Any Sense;



// let h2 = document.querySelector(".javaline");
// h2.innerText = h2.innerText + "From Samrat Thapa"; //Concatenate
// console.dir(h2.innerText);

// let uni = document.querySelectorAll(".Box");
// console.log(uni);
// console.dir(uni);
// //Using Loop To Change Index Text Or Value
// let idx = 0;
// for (div of uni){
//     div.innerText = `changed the value ${idx}`;
//     idx++;
// }


//Simple Code to Change Index Text
// uni[0].innerText = "Uniqueness Is Something";
// uni[1].innerText = "Coding Is Unique And Unique Is Something";
// uni[2].innerText = "Uniqueness Is Something And Coding Is Something";

//ATTRIBUTES

//let ForExample = document.querySelector("Class,ID,Name")
//console.log(ForExample.getAttributes("class"));  
//console.dir(ForExample)   ==> will Print Attributes i.e (ID Or Class Or Name) Attribute; <==
//let ForExample2 = document.querySelector("Class,ID,Name")
//console.log(ForExample2.setAttributes("class", "NewClassName"));
//console.dir(ForExample2)  ==>will Set Or Change Current Attribute With New Attribute i.e (ID Or Class Or Name) Attribute;>==


//STYLING THROUGH JAVASCRIPT


//let ChangeableStyle = document.querySelector("Name of tag(anchor tag, div, section..etc)");
// ChangeableStyle.style.background = "colorName";
// ChangeableStyle.syle.fontSize = "Value In px,%, or Rem"  ==>Will Change Style Of Selected Document;
// ChangeableStyle.innerText = "New Value" ==> i.e (Rose is Red (old Vlaue) Should Be Changed To Sky Is Blue If New Value Is "Sky Is Blue");


//INSERTING ELEMENTS THROUGH JAVASCRIPT


// For Example Of Button To Create A Element;
// let NewButton = document.createElement("button");
// NewButton.innerText = "Click Me !";
// console.log("NewButton");

// For Making It Visiable In Window screen;
// let node(div,button,section,anchor,strong...etc) = document.querySelector("div,button,section,anchor,strong...etc");
// node(div,button,section,anchor,strong...etc).append(NewButton);  ===> [Inside Selected Div Or Node But At End] <===