let player1 = true
let player2 = false

let score1 = document.querySelector(".score1")
let score2 = document.querySelector(".score2")

let player1_score = 0
let player2_score = 0

let player1_choise = null
let player2_choise = null

let info = document.querySelector(".info")

let rounde = document.querySelector(".rounde")
let rounder = 0

let choise1 = document.querySelector(".choice-player-1")
let choise2 = document.querySelector(".choice-player-2")

document.addEventListener('keydown', function(e){
    if(player1 == true && player2 == false){
        if(e.code == "KeyA"){
            console.log("камень")
            info.innerHTML = "player2"
            player1 = false
            player2 = true

            player1_choise = "камень"
        }
        else if(e.code == "KeyS"){
            console.log("ножницы")
            info.innerHTML = "player2"
            player1 = false
            player2 = true

            player1_choise = "ножницы"
        }
        else if(e.code == "KeyD"){
            console.log("бумага")
            info.innerHTML = "player2"
            player1 = false
            player2 = true

            player1_choise = "бумага" 
        } 
    }  
    if(player1 == false && player2 == true){
        if(e.code == "KeyJ"){
            console.log("камень")
            player2 = false

            player2_choise = "камень"
            info.innerHTML = "..."
            setTimeout(show, 500)
            setTimeout(finish, 1000)
            setTimeout(newround, 3000)
        }
        else if(e.code == "KeyK"){
            console.log("ножницы")
            player2 = false

            player2_choise = "ножницы"
            info.innerHTML = "..."
            setTimeout(show, 500)
            setTimeout(finish, 1000)
            setTimeout(newround, 3000)
        }
        else if(e.code == "KeyL"){
            console.log("бумага") 
            player2 = false

            player2_choise = "бумага"
            info.innerHTML = "..."
            setTimeout(show, 500)
            setTimeout(finish, 1000)
            setTimeout(newround, 3000)
        }    
    }
})

let show = function(){
    if(player1_choise == "камень"){
        choise1.style.backgroundSize = "100% 100%"
        choise1.style.backgroundImage = "url(ka.png)"
        choise1.style.backgroundColor = "white"
    }
    else if(player1_choise == "ножницы"){
        choise1.style.backgroundSize = "100% 100%"
        choise1.style.backgroundImage = "url(no.png)"
        choise1.style.backgroundColor = "white"
    }
    else if(player1_choise == "бумага"){
        choise1.style.backgroundSize = "100% 100%"
        choise1.style.backgroundImage = "url(bu.png)"
        choise1.style.backgroundColor = "white"
    }

    if(player2_choise == "камень"){
        choise2.style.backgroundSize = "100% 100%"
        choise2.style.backgroundImage = "url(ka.png)"
        choise2.style.backgroundColor = "white"
    }
    else if(player2_choise == "ножницы"){
        choise2.style.backgroundSize = "100% 100%"
        choise2.style.backgroundImage = "url(no.png)"
        choise2.style.backgroundColor = "white"
    }
    else if(player2_choise == "бумага"){
        choise2.style.backgroundSize = "100% 100%"
        choise2.style.backgroundImage = "url(bu.png)"
        choise2.style.backgroundColor = "white"
    }
}
let finish = function(){
    if(player1_choise == player2_choise){
        info.innerHTML = "ничья"
        player1_score = player1_score + 1
        player2_score = player2_score + 1
        score1.innerHTML = player1_score
        score2.innerHTML = player2_score
         rounder = rounder + 1
        rounde.innerHTML = rounder
    }
    else if(player1_choise == "камень" && player2_choise == "ножницы"){
        info.innerHTML = "победил1"
        player1_score = player1_score + 1
        score1.innerHTML = player1_score
        rounder = rounder + 1
        rounde.innerHTML = rounder
    }
    else if(player1_choise == "ножницы" && player2_choise == "бумага"){
        info.innerHTML = "победил1"
        player1_score = player1_score + 1
        score1.innerHTML = player1_score
         rounder = rounder + 1
        rounde.innerHTML = rounder
    }
    else if(player1_choise == "бумага" && player2_choise == "камень"){
        info.innerHTML = "победил1"
        player1_score = player1_score + 1
        score1.innerHTML = player1_score
         rounder = rounder + 1
        rounde.innerHTML = rounder
    }
    else{
        info.innerHTML = "победил2"
        player2_score = player2_score + 1
        score2.innerHTML = player2_score
         rounder = rounder + 1
        rounde.innerHTML = rounder
    }
    
}
let newround = function(){
    player1 = true
    player2 = false
    choise1.style.background = "black"
    choise2.style.background = "black"
    info.innerHTML = "player1"
}
