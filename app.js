//Changing case
//q1
// var cap=prompt("Enter Any letters");
// document.write(cap.toUpperCase());


//q2

// var userInput=prompt("Enter your name");
// var title = userInput.charAt(0).toUpperCase();
// var title1 = userInput.substr(1).toLowerCase();
// document.write(title+title1);


//Strings: measuring length and extracting parts

//q1

// var mob=prompt("Enter your favourite mobile phone model");
// var len= mob.length;
// document.write("Lenght of the string: "+ len);


//q2

// var str=prompt("Enter a string");
// document.write(str.slice(-1));

//Strings: finding segments

//q1
// var country="Pakistani";
// document.write("Index no. of 'n': " +country.indexOf("n"));



//q2
// var userName=prompt("Enter your name");
// var res = ("a-z", "A-Z");
// if(userName==res)
// {
//  document.write("Your Username is valid!");
// }
// else
// {
// document.write("Please enter valid username!");
// }


//q3
// var word="The quick brown fox jumps over the lazy dog";
// var findIndex=word.indexOf("the");
// document.write("Number of Occurence word 'the': "+findIndex);


//Strings: finding a character at a location

//q1
// var w="Pakistani";
// var find = w.charAt(5);
// document.write(find);


//Strings: replacing characters

//q1
// var text="Hyderabad";
// var newText=text.replace("Hyder","Islam");
// document.write(newText);


//q2
// var text="Ali and Sami are best friends.They play cricket and football together.";
// var newText=text.replace(/and/g,"&");
// document.write(newText);


//Rounding numbers

//q1 a and b
// var num=+prompt("Enter a number");
// var rnd=Math.round(num);
// document.write(rnd);


 //c
//  var num=+prompt("Enter a number");
//  var rnd=Math.floor(num);
//  document.write(rnd);

 //d
//  var num=+prompt("Enter a number");
//  var rnd=Math.ceil(num);
//  document.write(rnd);


 //q2 a and b
//  var num=+prompt("Enter a number");
//  var rnd=Math.round(num);
//  document.write(rnd);

 //c
// var num=+prompt("Enter a number");
// var rnd=Math.floor(num);
// document.write(rnd);

 //d
// var num=+prompt("Enter a number");
// var rnd=Math.ceil(num);
// document.write(rnd);

//Generating random numbers

//q1
// var rand=Math.random();
// document.write(rand);


// q2 HEAD TAIL GAME

// var player1= prompt("PLAYER 1: HEADS/TAILS")
// var player2= prompt("PLAYER 2: HEADS/TAILS")
// var num= Math.round(Math.random()*2);

// if(num == 0 )
// {
// alert("DRAWWWWWWWWWWW :)")
// }

// else if(num == 1 )
// {
// alert("ITS TAILS,,,,,,,,,,,,,,PLAYER 2 WINS")
// }

// else if(num == 2 )
// {
// alert("ITS HEAD,,,,,,,,,,,,,,PLAYER 1 WINS")
// }

// document.write(num)


//q3 
// var num = Math.ceil(Math.random() * 10);
// document.write(num);
//  var guessNum = prompt("Guess the number between 1 and 10 ");
//  if (guessNum == num)
//    {
//        alert('Matched');
//    }

//        else
//   {
//    alert("Not matched");
//   }


//Converting strings to integers and decimals

//q1
// var weight = prompt("ENTER YOUR WEIGHT :")
// var intWeight = parseInt(weight);
// document.write(intWeight);

//Converting strings to numbers, numbers to strings
//q1
// var num ="472";
// var afterNum = typeof(num);
// document.write(num +" is a  " + "  "+ afterNum)


//q2
// var num = 35.36 ;
// var str = num.toString().replace(".", "");
// document.write(str);



//q3
// var percentage = 30 / 45 * 100;
// var total = percentage.toFixed(2);
// document.write(total);
