function dice(){
    // image1 
    var randomNumber1 = Math.random();
    randomNumber1 = randomNumber1*6;
    randomNumber1=Math.floor(randomNumber1) +1;
    var randomDiceImage = "dice" + randomNumber1 + ".png";
    var randomImage = "images/" + randomDiceImage;
    var image1 = document.querySelectorAll("img")[0];
    image1.setAttribute("src", randomImage);
    // image2
    var randomNumber2 = Math.random();
    randomNumber2 = randomNumber2*6;
    randomNumber2=Math.floor(randomNumber2) + 1;
    var randomDiceImage = "dice" + randomNumber2 + ".png";
    var randomImage = "images/" + randomDiceImage;
    var image2 = document.querySelectorAll("img")[1];
    image2.setAttribute("src", randomImage);
    // winner
    if(randomNumber1>randomNumber2){
    document.getElementById('win').innerHTML = `Player 1 winner!`
        }else if(randomNumber2>randomNumber1){
        document.getElementById('win').innerHTML = `Player 2 winner!`
        }else{
        document.getElementById('win').innerHTML = `Draw!`
        }
    }