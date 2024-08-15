let person=["0", "0", "0", "0", "0"];
let membership=[

["2","Norma", "Barber","normskib2@gmail.com" , "01656652965"],
["3", "Dennis", "Barker", "denbarker@talktalk.net", "01446 793028"],
["4", "Hilary", "Bevington", "hilary.bevington@btopenworld.com", "01446773511"],
["5", "Di", "Burlington", "diburlington@aol.com", "01446775736"],
["17", "Andy", "Dick", "ardick2000@gmail.com", "07548748264"],
["21", "Allan", "Evans", "allan.evans1@sky.com", "01656766967"],
["33", "Shani", "Fancett", "shani.fancett1812@gmail.com", "07464001226"],
["24", "Val", "Finucane", "daniels168@btinternet.com", "01446775258"],
["27", "Gill", "Harding", "gillharding@aol.co.uk", "01446 774494"],
["29", "Angela", "Hawkins", "angelajeanhawkins@me.com", "01446793600"],
    
["30", "Colin", "Hawkins", "colin.hawkins@gmail.com", "01446793600"],
["31", "Wendy", "Hewitt-Sayer", "wendy_hs@hotmail.com", "01446790222"],
["39", "Carole", "Jones", "car47@live.co.uk", "01446 774325"],
["41", "Edward", "Jones", "allan.evans1@sky.com", "01446 774325"],
["37", "Jeanette", "Jones", "jeanettejones56@gmail.com", "01446772276"],
["61", "Ysobel", "Jones", "ysobeljones@gmail.com", "007764 605727"],
["42", "Anna", "Keeling", "ajkeeling52@gmail.com", "01446 793610"],
["93", "Julia", "Lee-Jones", "j_leejones@hotmail.com", " "],
["46", "Andrew", "Leonard", "andrew.leonard3697@gmail.com", "01446 793697"],
["45", "Caroline", "Leonard", "carolineleonard3697@gmail.com", "01446 793697"],
    
["49", "Alison", "Littlejohn", "alimarlit@gmail.com", "01446 796322"],
["48", "Howard", "Littlejohn", "howard.littlejohn@gmail.com", "01446 796322"],
["53", "Carol", "Marchant", "crmcourt@hotmail.com", "01446773355"],
["54", "Ros", "Martin-Jones", "rosmjones@gmail.com", "01446794614"],
["94", "Lorraine", "Matthews", "larryamatthews@hotmail.co.uk", " "],
["62", "Julie", "Phelps", "juliekphelps@sky.com", "01446793954"],
["63", "Meryl", "Phillips", "merylphillips9@gmail.com", "01446794501"],
["73", "Hugh", "Thomas", "thomasmaghu5@gmail.com", "01446 773382"],
["74", "Margaret", "Thomas", "thomasmaghu5@gmail.com", "01446 790422"],
["6", "Sian", "Thomas", "sian_thomas@hotmail.co.uk", "01656 890562"],

["75", "Pam", "Treadwell", "treadwellpam.08@gmail.com", "07973 720211"],
["79", "Dorothy", "Williams", "dotandesgadlys@talktalk.net", "07912640212"]
]

function myCalc(lbl){
    for (let i=0; i<=(membership.length-1); i++){      
    if (lbl==membership[i][1].concat(" ",membership[i][2])){
    person=membership[i];}
    }
return person;  
}

function togglePopup(){

    document.getElementById("titl").innerHTML = person[1].concat(" ",person[2]);
    document.getElementById("mailE").innerHTML = person[3];
    document.getElementById("teleNum").innerHTML = person[4];
    document.getElementById("bridgeNumb").innerHTML = "Bridge ID "+ person[0];
    document.getElementById("popup-1") .classList.toggle("active");

}

const btn1=document.getElementById("btn1");
btn1.addEventListener("click",function(e){   
myCalc(btn1.innerText);
togglePopup();
});
const btn2=document.getElementById("btn2");
btn2.addEventListener("click",function(e){   
myCalc(btn2.innerText);
togglePopup();
});
const btn3=document.getElementById("btn3");
btn3.addEventListener("click",function(e){   
myCalc(btn3.innerText);
togglePopup();
});
const btn4=document.getElementById("btn4");
btn4.addEventListener("click",function(e){   
myCalc(btn4.innerText);
togglePopup();
});
const btn5=document.getElementById("btn5");
btn5.addEventListener("click",function(e){   
myCalc(btn5.innerText);
togglePopup();
});
const btn6=document.getElementById("btn6");
btn6.addEventListener("click",function(e){   
myCalc(btn6.innerText);
togglePopup();
});
const btn7=document.getElementById("btn7");
btn7.addEventListener("click",function(e){   
myCalc(btn7.innerText);
togglePopup();
});
const btn8=document.getElementById("btn8");
btn8.addEventListener("click",function(e){   
myCalc(btn8.innerText);
togglePopup();
});
const btn9=document.getElementById("btn9");
btn9.addEventListener("click",function(e){   
myCalc(btn9.innerText);
togglePopup();
});
const btn10=document.getElementById("btn10");
btn10.addEventListener("click",function(e){   
myCalc(btn10.innerText);
togglePopup();
});
const btn11=document.getElementById("btn11");
btn11.addEventListener("click",function(e){   
myCalc(btn11.innerText);
togglePopup();
});
const btn12=document.getElementById("btn12");
btn12.addEventListener("click",function(e){   
myCalc(btn12.innerText);
togglePopup();
});
const btn13=document.getElementById("btn13");
btn13.addEventListener("click",function(e){   
myCalc(btn13.innerText);
togglePopup();
});
const btn14=document.getElementById("btn14");
btn14.addEventListener("click",function(e){   
myCalc(btn14.innerText);
togglePopup();
});
const btn15=document.getElementById("btn15");
btn15.addEventListener("click",function(e){   
myCalc(btn15.innerText);
togglePopup();
});
const btn16=document.getElementById("btn16");
btn16.addEventListener("click",function(e){   
myCalc(btn16.innerText);
togglePopup();
});
const btn17=document.getElementById("btn17");
btn17.addEventListener("click",function(e){   
myCalc(btn17.innerText);
togglePopup();
});
const btn18=document.getElementById("btn18");
btn18.addEventListener("click",function(e){   
myCalc(btn18.innerText);
togglePopup();
});
const btn19=document.getElementById("btn19");
btn19.addEventListener("click",function(e){   
myCalc(btn19.innerText);
togglePopup();
});
const btn20=document.getElementById("btn20");
btn20.addEventListener("click",function(e){   
myCalc(btn20.innerText);
togglePopup();
});
const btn21=document.getElementById("btn21");
btn21.addEventListener("click",function(e){   
myCalc(btn21.innerText);
togglePopup();
});
const btn22=document.getElementById("btn22");
btn22.addEventListener("click",function(e){   
myCalc(btn22.innerText);
togglePopup();
});
const btn23=document.getElementById("btn23");
btn23.addEventListener("click",function(e){   
myCalc(btn23.innerText);
togglePopup();
});
const btn24=document.getElementById("btn24");
btn24.addEventListener("click",function(e){   
myCalc(btn24.innerText);
togglePopup();
});
const btn25=document.getElementById("btn25");
btn25.addEventListener("click",function(e){   
myCalc(btn25.innerText);
togglePopup();
});

const btn26=document.getElementById("btn26");
btn26.addEventListener("click",function(e){   
myCalc(btn26.innerText);
togglePopup();
});
const btn27=document.getElementById("btn27");
btn27.addEventListener("click",function(e){   
myCalc(btn27.innerText);
togglePopup();
});
const btn28=document.getElementById("btn28");
btn28.addEventListener("click",function(e){   
myCalc(btn28.innerText);
togglePopup();
});
const btn29=document.getElementById("btn29");
btn29.addEventListener("click",function(e){   
myCalc(btn29.innerText);
togglePopup();
});
const btn30=document.getElementById("btn30");
btn30.addEventListener("click",function(e){   
myCalc(btn30.innerText);
togglePopup();
});
const btn31=document.getElementById("btn31");
btn31.addEventListener("click",function(e){   
myCalc(btn31.innerText);
togglePopup();
});
const btn32=document.getElementById("btn32");
btn32.addEventListener("click",function(e){   
myCalc(btn32.innerText);
togglePopup();
});
