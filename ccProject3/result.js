document.addEventListener("DOMContentLoaded",function(){
    
    //Class, fighter scout tact tank
    let result0 = localStorage.getItem("result0")

    //Front or Back, front q1B back
    let result1 = localStorage.getItem("result1")

    //Play for, self q2B team
    let result2 = localStorage.getItem("result2")

    //Ability type, off q3B def
    let result3 = localStorage.getItem("result3")

    //Reliance, yes no
    let result4 = localStorage.getItem("result4")


    //Jett Image
    function jett(){
        var image = document.getElementById("tbh");
        image.src = "Images/jett.png"
    }

    //Reyna Image
    function reyna(){
        var image = document.getElementById("tbh");
        image.src = "Images/reyna.png"
    }

    //Phoenix Image
    function phoenix(){
        var image = document.getElementById("tbh");
        image.src = "Images/phoenix.png"
    }

    //Raze Image
    function raze(){
        var image = document.getElementById("tbh");
        image.src = "Images/raze.png"
    }

    //Yoru Image
    function yoru(){
        var image = document.getElementById("tbh");
        image.src = "Images/yoru.png"
    }

    //Neon Image
    function neon(){
        var image = document.getElementById("tbh");
        image.src = "Images/neon.png"
    }

    //Iso Image
    function iso(){
        var image = document.getElementById("tbh");
        image.src = "Images/iso.png"
    }

    //Sova Image
    function sova(){
        var image = document.getElementById("tbh");
        image.src = "Images/sova.png"
    }

    //Breach Image
    function breach(){
        var image = document.getElementById("tbh");
        image.src = "Images/breach.png"
    }

    //Skye Image
    function skye(){
        var image = document.getElementById("tbh");
        image.src = "Images/skye.png"
    }

    //Kay/o Image
    function kayo(){
        var image = document.getElementById("tbh");
        image.src = "Images/kayo.png"
    }

    //Fade Image
    function fade(){
        var image = document.getElementById("tbh");
        image.src = "Images/fade.png"
    }

    //Gekko Image
    function gekko(){
        var image = document.getElementById("tbh");
        image.src = "Images/gekko.png"
    }

    //Omen Image
    function omen(){
        var image = document.getElementById("tbh");
        image.src = "Images/omen.png"
    }

    //Viper Image
    function viper(){
        var image = document.getElementById("tbh");
        image.src = "Images/viper.png"
    }

    //Brimstone Image
    function brim(){
        var image = document.getElementById("tbh");
        image.src = "Images/brim.png"
    }

    //Astra Image
    function astra(){
        var image = document.getElementById("tbh");
        image.src = "Images/astra.png"
    }

    //Harbor Image
    function harbor(){
        var image = document.getElementById("tbh");
        image.src = "Images/harbor.png"
    }

    //Sage Image
    function sage(){
        var image = document.getElementById("tbh");
        image.src = "Images/sage.png"
    }

    //Chamber Image
    function chamber(){
        var image = document.getElementById("tbh");
        image.src = "Images/chamber.png"
    }

    //Cypher Image
    function cypher(){
        var image = document.getElementById("tbh");
        image.src = "Images/cypher.png"
    }

    //Killjoy Image
    function killjoy(){
        var image = document.getElementById("tbh");
        image.src = "Images/killjoy.png"
    }

    //Deadlock Image
    function deadlock(){
        var image = document.getElementById("tbh");
        image.src = "Images/deadlock.png"
    }

    //FIGHTER

    //Jett
    if (result0 == "fighter" && result2 == "self" && result3 == "q3B" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Jett is for you!";
        jett();
    } else if (result0 == "fighter" && result2 == "self" && result3 == "def" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Jett is for you!";
        jett();
    }

    //Reyna
    if (result0 == "fighter" && result2 == "self" && result3 == "q3B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Reyna is for you!";
        reyna();
    } else if (result0 == "fighter" && result2 == "self" && result3 == "def" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Reyna is for you!";
        reyna();
    }

    //Phoenix
    if (result0 == "fighter" && result2 == "q2B" && result3 == "q3B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Phoenix is for you!";
        phoenix();
    } else if (result0 == "fighter" && result2 == "team" && result3 == "q3B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Phoenix is for you!";
        phoenix();
    } else if (result0 == "fighter" && result2 == "team" && result3 == "def" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Phoenix is for you!";
        phoenix();
    } else if (result0 == "fighter" && result2 == "team" && result3 == "off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Phoenix is for you!";
        phoenix();
    } else if (result0 == "fighter" && result2 == "q2B" && result3 == "def" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Phoenix is for you!";
        phoenix();
    }
    
    //Raze
    if (result0 == "fighter" && result2 == "self" && result3 == "off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Raze is for you!";
        raze();
    }

    //Yoru
    if (result0 == "fighter" && result2 == "q2B" && result3 == "off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Yoru is for you!";
        yoru();
    } else if (result0 == "fighter" && result2 == "team" && result3 == "off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Yoru is for you!";
        yoru();
    }

    //Neon
    if (result0 == "fighter" && result2 == "self" && result3 == "off" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Neon is for you!";
        neon();
    }

    //Iso
    if (result0 == "fighter" && result2 == "q2B" && result3 == "q3B" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Iso is for you!";
        iso();
    } else if (result0 == "fighter" && result2 == "team" && result3 == "q3B" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Iso is for you!";
        iso();
    } else if (result0 == "fighter" && result2 == "team" && result3 == "off" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Iso is for you!";
        iso();
    } else if (result0 == "fighter" && result2 == "team" && result3 == "def" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Iso is for you!";
        iso();
    } else if (result0 == "fighter" && result2 == "q2B" && result3 == "off" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Iso is for you!";
        iso();
    } else if (result0 == "fighter" && result2 == "q2B" && result3 == "def" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Iso is for you!";
        iso();
    }



    //SCOUT

    //Sova
    if (result0 == "scout" && result1 == "back" && result2 == "team" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Sova is for you!";
        sova();
    }

    //Breach
    if (result0 == "scout" && result1 == "front" && result2 == "q2B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Breach is for you!";
        breach();
    } else if (result0 == "scout" && result1 == "front" && result2 == "team" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Breach is for you!";
        breach();
    } 

    //Skye
    if (result0 == "scout" && result1 == "q1B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Skye is for you!";
        skye();
    } else if (result0 == "scout" && result1 == "back" && result2 == "q2B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Skye is for you!";
        skye();
    } else if (result0 == "scout" && result1 == "back" && result2 == "team" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Skye is for you!";
        skye();
    } else if (result0 == "scout" && result1 == "back" && result2 == "self" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Skye is for you!";
        skye();
    } 

    //Kay/o
    if (result0 == "scout" && result1 == "q1B" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Kay/o is for you!";
        kayo();
    } else if (result0 == "scout" && result1 == "back" && result2 == "q2B" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Kay/o is for you!";
        kayo();
    } else if (result0 == "scout" && result1 == "back" && result2 == "self" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Kay/o is for you!";
        kayo();
    }

    //Fade
    if (result0 == "scout" && result1 == "front" && result2 == "team" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Fade is for you!";
        fade();
    } else if (result0 == "scout" && result1 == "front" && result2 == "self" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Fade is for you!";
        fade();
    } else if (result0 == "scout" && result1 == "front" && result2 == "q2B" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Fade is for you!";
        fade();
    }

    //Gekko
    if (result0 == "scout" && result1 == "front" && result2 == "q2B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Gekko is for you!";
        gekko();
    } else if (result0 == "scout" && result1 == "front" && result2 == "self" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Gekko is for you!";
        gekko();
    } 



    //Tactician

    //Omen
    if (result0 == "tact" && result1 == "q1B" && result2 == "q1B" && result3 == "q3B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
        omen();
    } else if (result0 == "tact" && result1 == "front" && result2 == "self" && result3 == "off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
        omen();
    } else if (result0 == "tact" && result1 == "q1B" && result2 == "team" && result3 == "off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
        omen();
    } else if (result0 == "tact" && result1 == "front" && result2 == "q2B" && result3 == "off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
        omen();
    } else if (result0 == "tact" && result1 == "front" && result2 == "q2B" && result3 == "q3B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
        omen();
    } else if (result0 == "tact" && result1 == "front" && result2 == "q2B" && result3 == "def" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
        omen();
    } else if (result0 == "tact" && result1 == "front" && result2 == "team" && result3 == "off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
        omen();
    } else if (result0 == "tact" && result1 == "front" && result2 == "team" && result3 == "q3B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
        omen();
    } else if (result0 == "tact" && result1 == "front" && result2 == "team" && result3 == "def" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
        omen();
    } else if (result0 == "tact" && result1 == "q1B" && result2 == "self" && result3 == "off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
        omen();
    } else if (result0 == "tact" && result1 == "q1B" && result2 == "self" && result3 == "q3B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
        omen();
    } else if (result0 == "tact" && result1 == "back" && result2 == "self" && result3 == "q3B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
        omen();
    } else if (result0 == "tact" && result1 == "back" && result2 == "q2B" && result3 == "off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
        omen();
    } else if (result0 == "tact" && result1 == "back" && result2 == "q2B" && result3 == "q3B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Omen is for you!";
        omen();
    }

    //Viper
    if (result0 == "tact" && result1 == "back" && result3 == "q3B" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Viper is for you!";
        viper();
    } else if (result0 == "tact" && result1 == "back" && result2 == "team" && result3 == "off" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Viper is for you!";
        viper();
    } else if (result0 == "tact" && result1=="q1B" && result2 == "team" && result3 =="q3B" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Viper is for you!";
        viper();
    } else if (result0 == "tact" && result1=="back" && result2 == "self" && result3 =="off" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Viper is for you!";
        viper();
    } else if (result0 == "tact" && result1=="back" && result2 == "self" && result3 =="off" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Viper is for you!";
        viper();
    } else if (result0 == "tact" && result1=="back" && result2 == "q2B" && result3 =="off" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Viper is for you!";
        viper();
    }

    //Brimstone
    if (result0 == "tact" && result1 == "q1B" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Brimstone is for you!";
        brim();
    } else if (result0 == "tact" && result1 == "front" && result2 == "team" && result3 == "def" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Brimstone is for you!";
        brim();
    } else if (result0 == "tact" && result1 == "back" && result2 == "self" && result3 == "def" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Brimstone is for you!";
        brim();
    } else if (result0 == "tact" && result1 == "back" && result2 == "q2B" && result3 == "def" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Brimstone is for you!";
        brim();
    } else if (result0 == "tact" && result1 == "back" && result2 == "team" && result3 == "def" && result4 == "no"){
        document.querySelector("#new-message").innerHTML = "Brimstone is for you!";
        brim();
    }



    //Astra
    if (result0 == "tact" && result1 == "back" && result2 == "team" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Astra is for you!";
        astra();
    } else if (result0 == "tact" && result1=="back" && result2 == "q2B" && result3 =="def" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Astra is for you!";
        astra();
    }

    //Harbor
    if (result0 == "tact" && result1 == "q1B" && result2 == "q2B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Harbor is for you!";
        harbor();
    } else if (result0 == "tact" && result1 == "front" && result2 == "self" && result3 == "def" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Harbor is for you!";
        harbor();
    } else if (result0 == "tact" && result1 == "q1B" && result2 == "team" && result3 == "def" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Harbor is for you!";
        harbor();
    } else if (result0 == "tact" && result1 == "q1B" && result2 == "self" && result3 == "def" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Harbor is for you!";
        harbor();
    } else if (result0 == "tact" && result1 == "front" && result2 == "self" && result3 == "q3B" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Harbor is for you!";
        harbor();
    } else if (result0 == "tact" && result1=="back" && result2 == "self" && result3 =="off" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Harbor is for you!";
        harbor();
    } else if (result0 == "tact" && result1=="back" && result2 == "self" && result3 =="def" && result4 == "yes"){
        document.querySelector("#new-message").innerHTML = "Harbor is for you!";
        harbor();
    }



    //Tank

    //Sage
    if (result0 == "tank" && result2 == "team" && result3 =="def"){
        document.querySelector("#new-message").innerHTML = "Sage is for you!";
        sage();
    }

    //Chamber
    if (result0 == "tank" && result2 == "self" && result3 =="q3B"){
        document.querySelector("#new-message").innerHTML = "Chamber is for you!";
        chamber();
    } else if (result0 == "tank" && result2 == "self" && result3 =="off"){
        document.querySelector("#new-message").innerHTML = "Chamber is for you!";
        chamber();
    }  else if (result0 == "tank" && result2 == "q2B" && result3 =="off"){
        document.querySelector("#new-message").innerHTML = "Chamber is for you!";
        chamber();
    }

    //Cypher
    if (result0 == "tank" && result2 == "q2B" && result3 =="def"){
        document.querySelector("#new-message").innerHTML = "Cypher is for you!";
        cypher();
    } else if (result0 == "tank" && result2 == "self" && result3 =="def"){
        document.querySelector("#new-message").innerHTML = "Cypher is for you!";
        cypher();
    }

    //Killjoy
    if (result0 == "tank" && result2 == "q2B" && result3 =="q3B"){
        document.querySelector("#new-message").innerHTML = "Killjoy is for you!";
        killjoy();
    }

    //Deadlock
    if (result0 == "tank" && result2 == "team" && result3 =="q3B"){
        document.querySelector("#new-message").innerHTML = "Deadlock is for you!";
        deadlock();
    } else if (result0 == "tank" && result2 == "team" && result3 =="off"){
        document.querySelector("#new-message").innerHTML = "Dealock is for you!";
        deadlock();
    }



    console.log(result0)
    console.log(result1)
    console.log(result2)
    console.log(result3)
    console.log(result4)
})