class Student{
    constructor(index, math, pol, bio, geo, phy, che, inf){
        this.index = index;
        this.matematyka = math;
        this.polski = pol;
        this.biologia = bio;
        this.geografia = geo;
        this.fizyka = phy;
        this.chemia = che;
        this.informatyka = inf;
        this.avg = 0;
    }
}

let tabStudent = [];

function addStudent(){
    let getStudent = document.querySelectorAll('[id^=uczen'), tabSubject = [];
    for(let i=0; i<getStudent.length; i++){
        tabSubject = getStudent[i].querySelectorAll('input[type=number]');
        let student = new Student(i+1, parseFloat(tabSubject[0].value), parseFloat(tabSubject[1].value), parseFloat(tabSubject[2].value), parseFloat(tabSubject[3].value), parseFloat(tabSubject[4].value), parseFloat(tabSubject[5].value), parseFloat(tabSubject[6].value));
        tabStudent.push(student);
    }
}

function countAvg(){
    let getStudent = document.querySelectorAll('[id^=uczen'), tabSpecSubject = [];
    for(let i=0; i<getStudent.length; i++){
        tabSpecSubject[i] = getStudent[i].querySelector('.zajecia-dodatkowe').value.split(', ');

        /* check special subject */

        for(j=0; j<tabSpecSubject[i].length; j++){
            if(tabStudent[i][tabSpecSubject[i][j]]!=undefined){
                if(tabStudent[i][tabSpecSubject[i][j]]!=6) tabStudent[i][tabSpecSubject[i][j]]+=0.5;
            }
        }
        let keys = Object.values(tabStudent[i]);
        for(let j=1; j<keys.length-1; j++){
            tabStudent[i].avg += keys[j];
        }
        tabStudent[i].avg = Math.round((tabStudent[i].avg/(keys.length-2))*100)/100;
    }
}

function rateStudent(){
    let getStudent, keys;
    for(let i=0; i<tabStudent.length; i++){
        getStudent = document.querySelector('#uczen'+tabStudent[i].index);
        getStudent.querySelector('.srednia').innerHTML = tabStudent[i].avg;
        keys = Object.values(tabStudent[i]);

        getStudent.classList.remove('good');
        getStudent.classList.remove('bad');

        /* bad student */

        for(let j=1; j<keys.length-1; j++){
            if(keys[j]==1) getStudent.classList.add('bad');
        }

        /* good student */

        if(tabStudent[i].avg > 4.75) getStudent.classList.add('good');
    }
};

document.getElementById('oblicz').addEventListener('click',  function(){
    addStudent();
    countAvg();
    rateStudent();
});
