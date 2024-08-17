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

for (let x=1; x<=(membership.length); x++){ 

    let z="btn".concat(x);
    const y=document.getElementById(z);
    y.addEventListener("click",function(e){   
        myCalc(y.innerText);
        togglePopup();
        })};

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


