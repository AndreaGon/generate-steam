//SCIENCE
var NumberOfWordsScience = 30;

var sciencewords = new BuildArrayScience(NumberOfWordsScience);
// Use the following variables to define your random words:
sciencewords[1] = "Music loudness and animal behavior";
sciencewords[2] = "Bridge designs and stability";
sciencewords[3] = "Amount of chemicals and plant growth";
sciencewords[4] = "Types of chemicals and plant growth";
sciencewords[5] = "Types of music and animal behavior";
sciencewords[6] = "Types of music and overall happiness of children";
sciencewords[7] = "Types of music and sleepiness in children";
sciencewords[8] = "Weather types and plant growth";
sciencewords[9] = "Pot size and time to boil water";
sciencewords[10] = "Paper towel brands and strength";
sciencewords[11] = "Water types and plant growth";
sciencewords[12] = "Room color and human behavior";
sciencewords[13] = "Room color and animal behavior";
sciencewords[14] = "Light color and plant growth";
sciencewords[15] = "Soil types and plant growth";
sciencewords[16] = "Amount of light and plant growth";
sciencewords[17] = "Towel brands and absorption rates";
sciencewords[18] = "Different sports and coordination";
sciencewords[19] = "Frozen dessert types and melting times";
sciencewords[20] = "Hair color and amount of static electricity";
sciencewords[21] = "Age and flexibility";
sciencewords[22] = "Drum size and pitch";
sciencewords[23] = "Types of music and performance on memory tests";
sciencewords[24] = "Fertilizer types and plant growth";
sciencewords[25] = "Age and reaction times";
sciencewords[26] = "Shoe material and jumping height";
sciencewords[27] = "Seed types and growth rate";
sciencewords[28] = "Background noise and human concentration";
sciencewords[29] = "Water temperature and plant height";
sciencewords[30] = "Ball air pressure and travel distance";

function BuildArrayScience(size) {
  this.length = size;
  for (var i = 1; i <= size; i++) {
    this[i] = null;
  }
  return this;
}

function PickRandomWord(frm) {
  // Generate a random number between 1 and NumberOfWords
  var rnd = Math.ceil(Math.random() * NumberOfWordsScience);

  // Display the word inside the text box
  frm.WordBoxSci.value = sciencewords[rnd];
}

//TECHNOLOGY

//beginner
var NumberOfWordsTech1 = 15;
var techwords1 = new BuildArrayTech1(NumberOfWordsTech1);

techwords1[1] = "HTML/CSS: Build a biography page of your favorite band";
techwords1[2] = "HTML/CSS: Build a movie trivia survey page";
techwords1[3] = "HTML/CSS: Build a Personal Portfolio Page";
techwords1[4] =
  "HTML/CSS: Build a themed photography portfolio (e.g. food, famous artists,nature) ";
techwords1[5] = "HTML/CSS: Build a study/homework resource page for students ";
techwords1[6] = "PYTHON: Create an simple chatbox";
techwords1[7] = "PYTHON: Create a chatbox quiz";
techwords1[8] =
  "PYTHON: Create a program that calculates your weight on different planets (e.g. mars, saturn)";
techwords1[9] = "PYTHON: Create a Dice Rolling Simulator";
techwords1[10] = "HTML/CSS: Build a Buzzfeed style quiz";
techwords1[11] = "PYTHON: Create a rock, paper, scissors game";
techwords1[12] = "PYTHON: Create a story generator with themes";
techwords1[13] = "PYTHON: Create an email slicer";
techwords1[14] = "JAVA: Build a temperature conversion tool";
techwords1[15] = "JAVA: Build a water management system";

function BuildArrayTech1(size) {
  this.length = size;
  for (var i = 1; i <= size; i++) {
    this[i] = null;
  }
  return this;
}
function PickRandomWordTech1(frm) {
  var rnd = Math.ceil(Math.random() * NumberOfWordsTech1);

  frm.wordboxt1.value = techwords1[rnd];
}
//intermediate
var NumberOfWordsTech2 = 10;

var techwords2 = new BuildArrayTech2(NumberOfWordsTech2);

techwords2[1] = "HTML/CSS: Build a to- do list app";
techwords2[2] = "PYTHON: Create a random password generator";
techwords2[3] =
  "PYTHON: Creat a currency-converting program based on countries";
techwords2[4] = "PYTHON: Create a timer/countdown app";
techwords2[5] = "HTML/CSS/JS: Build a Guess The Color page";
techwords2[6] = "HTML/CSS/JS: Build a site with a video background";
techwords2[7] = "JAVA: Build a Color-guessing game";
techwords2[8] = "HTML/CSS:Build a site to advertise a small restaraunt";
techwords2[9] = "JAVA:Create a doodle app";
techwords2[10] = "PYTHON: Create a url-shortening tool";
function BuildArrayTech2(size) {
  this.length = size;
  for (var i = 1; i <= size; i++) {
    this[i] = null;
  }
  return this;
}

function PickRandomWordTech2(frm) {
  var rnd = Math.ceil(Math.random() * NumberOfWordsTech2);

  frm.wordboxt2.value = techwords2[rnd];
}

//advanced
var NumberOfWordsTech3 = 15;
var techwords3 = new BuildArrayTech3(NumberOfWordsTech3);

techwords3[1] =
  "Topcoder: participate in both daily and weekly intense coding challenges. You get to earn real money! (refer to list)";
techwords3[2] =
  "Project Euler: built to involve critical thinking and problem solving in order to help you grow and learn more about the language you’re using (refer to list)"; //resource
techwords3[3] = "Create your very own hackathon!";
techwords3[4] =
  "Curate a weekly digest of contributions of your favourite social media accounts";
techwords3[5] = "PYTHON:Youtube video downloader";
techwords3[6] = "Make a weather application (web or mobile!)";
techwords3[7] = "Build a social media bot";
techwords3[8] = "Build a niche job board";
techwords3[9] = "Build a habit tracker (bonus: turn it into a game!)";
techwords3[10] = "JAVA: Build an Address Book Management System";
techwords3[11] = "Movie spoiler blocker (browser extension)";
techwords3[12] = "PYTHON: Create a personal speed typing test";
techwords3[13] = "PYTHON: Create a library management system";
techwords3[14] = "PYTHON: Build a plagiarism checker";
techwords3[15] = "Price comparison browser extension";

function BuildArrayTech3(size) {
  this.length = size;
  for (var i = 1; i <= size; i++) {
    this[i] = null;
  }
  return this;
}
function PickRandomWordTech3(frm) {
  var rnd = Math.ceil(Math.random() * NumberOfWordsTech3);

  frm.wordboxt3.value = techwords3[rnd];
}

//ENGINEERING
var NumberOfWordsEngineering = 24;

var engwords = new BuildArrayEng(NumberOfWordsEngineering);
// Use the following variables to
// define your random words:
engwords[1] = "Egg drop project";
engwords[2] = "Mousetrap car";
engwords[3] = "Rube Goldberg machine";
engwords[4] = "PVC longbow";
engwords[5] = "Simple robot";
engwords[6] = "Mini paddle boat";
engwords[7] = "Propeller car";
engwords[8] = "Cardboard box maze";
engwords[9] = "Rubberband helicopter";
engwords[10] = "Catapults";
engwords[11] = "Straw rockets";
engwords[12] = "Rainbow jar";
engwords[13] = "Paper airplane launcher";
engwords[14] = "Pattern block";
engwords[15] = "Paper roller coaster";
engwords[16] = "Straw roller coaster";
engwords[17] = "LEGO maze";
engwords[18] = "Kaleidoscope";
engwords[19] = "Ping pong ball launcher";
engwords[20] = "Marshmallow igloo";
engwords[21] = "Paper tower";
engwords[22] = "Spectroscope";
engwords[23] = "Popsicle stick bridge";
engwords[24] = "Weight raising pulley system";

function BuildArrayEng(size) {
  this.length = size;
  for (var i = 1; i <= size; i++) {
    this[i] = null;
  }
  return this;
}

function PickRandomEngineering(frm) {
  // Generate a random number between 1 and NumberOfWords
  var rnd = Math.ceil(Math.random() * NumberOfWordsEngineering);

  frm.WordBoxE.value = engwords[rnd];
}

//Art Code
const arraySize = 19;
var colorPaletteArray = [
  ["#FAB312", "#EDAB11", "#D4990F", "#AD7D0C", "#6E4F08"],
  ["#55FA12", "#4FED11", "#47D40F", "#3AAD0C", "#256E08"],
  ["#1EC7FA", "#1CBCED", "#19A8D4", "#158AAD", "#0D576E"],
  ["#C968FA", "#BF64ED", "#AB59D4", "#8C49AD", "#582E6E"],
  ["#FA907F", "#ED8879", "#D47A6C", "#AD6458", "#6E3F38"],
  ["#FABA20", "#EDAF1F", "#D49C1C", "#AD8017", "#6E510E"],
  ["#C8F5D2", "#C2EDCC", "#AED4B6", "#8EAD95", "#5A6E5E"],
  ["#466EF5", "#456CED", "#3D60D4", "#324FAD", "#20326E"],
  ["#F03535", "#ED3434", "#D42F2F", "#AD2626", "#6E1818"],
  ["#C0DAFA", "#B7CFED", "#A3B9D4", "#8697AD", "#54606E"],
  ["#F7604F", "#F7E681", "#F77668", "#4FF79F", "#6A5CF7"],
  ["#3F7FC4", "#446A94", "#68F7F6", "#F8B8A6", "#C4493F"],
  ["#5DAAFC", "#53BDE0", "#68F7F6", "#53E0B7", "#5DFCA0"],
  ["#7A6849", "#FBF1E2", "#FAD395", "#7A766E", "#C7A877"],
  ["#ADA95F", "#BBE8FA", "#FAF5A3", "#FA899E", "#AD6875"],
  ["#AD5E82", "#FFBDDB", "#FAA0C8", "#4CAD4F", "#A0FAA2"],
  ["#9EAD80", "#E0FAAC", "#FAA0C8", "#5EAD8D", "#93FAD0"],
  ["#FAEDE1", "#DECFC8", "#F6EDEB", "#DEC8C8", "#FAE1EB"],
  ["#CBE4FA", "#B4D5DE", "#D2F5F3", "#B4DED0", "#CBFADD"],
  ["#584F5C", "#D893F5", "#D2BDDB", "#50335C", "#A191A8"]
];
var writingPromptsArray = [
  "Impact of Women in STEAM",
  "Online Learning in Today's Pandemic",
  "Use of Electronic Device for Children's Entertainment",
  "Explain and Describe Influential People in your Life",
  "Research on the Mozart Effect",
  "The Climate Change Problem",
  "What is Sustainability?",
  "Your advice to your former self",
  "Homeschooling vs Regular Schooling",
  "Effects of School Dress Codes",
  "Science Ethics: Cloning",
  "From Industrial Revolution into Contemporary Living",
  "How Technology has transformed modern-day schooling",
  "Becoming a Green Citizen",
  "Technology and Smart City",
  "Science Ethics: Artificial Intelligence",
  "What is Ransomware?",
  "Science Ethics: Deep Fake",
  "Thoughts on Hackathons",
  "Future Alternative Food Source"
];
var drawTopicsArray = [
  "Landscape view from Window",
  "Scene From Song",
  "Bouquet of Flowers",
  "Favorite Animal",
  "Mythical Creature from a Book/Movie",
  "Movie Character",
  "Personal Logo",
  "Still Life: Food on Table",
  "Still Life: House Plants",
  "Still Life: Items on the Table",
  "Personal Website Layout",
  "Caricature of yourself",
  "Alternative Design of a Brand Logo",
  "Self-Portrait",
  "Countryside View",
  "City View",
  "Current Sky View",
  "Favorite Game Character",
  "Clothes or Dress Design",
  "Heavenly Bodies",
  "House Design"
];

function pickRandomColor() {
  // Generate a random number between 1 and arraySize
  var rnd = Math.ceil(Math.random() * arraySize);
  // Display the word inside the text box
  for (var i = 0; i < 5; i++) {
    document.getElementById("color-" + (i + 1)).style.backgroundColor =
      colorPaletteArray[rnd][i];
    document.getElementById("color-" + (i + 1)).innerHTML =
      colorPaletteArray[rnd][i];
  }
}
function pickRandomPrompt(frm) {
  // Generate a random number between 1 and arraySize
  var genNum1 = Math.ceil(Math.random() * arraySize);
  var genNum2 = Math.ceil(Math.random() * arraySize);
  var genNum3 = Math.ceil(Math.random() * arraySize);

  frm.WriteIdeas.value =
    "1. " +
    writingPromptsArray[genNum1] +
    "\n \n" +
    "2. " +
    writingPromptsArray[genNum2] +
    "\n \n" +
    "3. " +
    writingPromptsArray[genNum3];
}

function pickRandomTopic(frm) {
  // Generate a random number between 1 and arraySize
  var rnd = Math.ceil(Math.random() * arraySize);

  frm.DrawIdeas.value = drawTopicsArray[rnd];
}

//MATH
//Math Teasers

var NumberOfTeasersMath = 12;
var mathteasersarray = [
  "When Ashley was 15, her mother was 37. Now, her mother is twice her age. How old is Ashley?",
  "Using only addition, how can you use eight eights to get the number 1,000?",
  "You planted sunflower seeds in your back garden. Every day, the number of flowers doubles. If it takes 52 days for the flowers to fill the garden, how many days would it take for them to fill half the garden?",
  "Your sock drawer only contains 18 white socks and 18 blue socks. How many times do you need to reach inside the drawer and take out a sock to guarantee a matching pair?",
  "A farmer has 19 sheep on his land. One day, a big storm hits and all but seven run away. How many sheep does the farmer have left?",
  "A clerk at the butcher shop is six feet tall and wears size 10 shoes. What does he weigh?",
  "Divide 30 by ½ and add 10. What’s the answer?",
  "When Lisa was 6 years old, her sister Lucy was half her age. If Lisa is 40 years old today, how old is Lucy?",
  "What are three different whole numbers whose sum AND product are equal?",
  "What can you put between a 7 and an 8 so that the result is GREATER THAN 7, but LESS THAN 8?",
  "Which weights more: sixteen ounces of soda or a pound of solid gold?",
  "The total cost of a pair of shoes and a hoodie is $150. The hoodie costs $100 more than the pair of shoes does. How much does each item cost?",
  "You have two U.S. coins whose total value is $0.30. One of them is NOT a nickel! What are the two coins?"
];
function PickRandomMathTeaser(frm) {
  var rndmath = Math.ceil(Math.random() * NumberOfTeasersMath);
  frm.Teasers.value = mathteasersarray[rndmath];
}

//Algebra Problems

var NumberofAlgebra = 18;
var algwords = new AlgebraArray(NumberofAlgebra);
algwords[1] = "Solve for x: 2x - 8 = -x + 4";
algwords[2] = "Solve for x: 2x + 1/2 = 2/3";
algwords[3] = "Solve for x: -5/x = 2";
algwords[4] = "Solve for x: -x = 6";
algwords[5] = "Solve the inequality: x + 6 < 0";
algwords[6] = "Solve the inequality: 2(x - 2) < 12";
algwords[7] = "Find the reciprocal of 3/4";
algwords[8] = "Convert to fractions:  0.02";
algwords[9] = "Convert to decimals: 120%";
algwords[11] = "Simplify: (2x - 6) / 2";
algwords[12] = "Simplify: (-x - 2) / (x + 2)";
algwords[13] = "Simplify: (5x - 5)/10";
algwords[14] = "Simplify:  -2x + 5 + 10x - 9";
algwords[15] = "Simplify: 3(x + 7) + 2(-x + 4) + 5x";
algwords[16] = "Evaluate given values:  |4x - 2y| , for x = -2 and y = 3";
algwords[17] = "Find the reciprocal of 0.02";
algwords[18] = "Evaluate: (5 2/3) ÷ (4 1/5)";

function AlgebraArray(size) {
  this.length = size;
  for (var i = 1; i <= size; i++) {
    this[i] = null;
  }
  return this;
}
function PickRandomMathAlgebra(frm) {
  var rnd = Math.ceil(Math.random() * NumberofAlgebra);

  frm.Algebra.value = algwords[rnd];
}

//Math Problems
var NumberOfWordsMath = 9;
var mathwordsarray = [
  "Rook to the Top",
  "Divisors and Primes",
  "Byber Path",
  "Functionally Possible",
  "The Mobius Strip",
  "Check Your Calendar",
  "Making a List",
  "Collecting Pollen and Wood",
  "Three Equal Sides",
  "A Dicey Situation"
];
function PickRandomMathGame(frm) {
  var rndmath = Math.ceil(Math.random() * NumberOfWordsMath);
  frm.Activities.value = mathwordsarray[rndmath];
}
