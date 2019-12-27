console.log(document.querySelectorAll('[id^=uczen'));
let tabStudent = document.querySelectorAll('[id^=uczen');
function rateStudent(){
    let tabSubject;
    for(let i=0; i<tabStudent.length; i++){
        console.log(tabStudent[i].querySelectorAll('input[type=number]'));
        tabSubject = tabStudent[i].querySelectorAll('input[type=number]');
        let avg=0;
        for(let j=0; j<tabSubject.length; j++){
            if(parseFloat(tabSubject[j].value)==1) tabStudent[i].style.backgroundColor = 'maroon';
            avg += parseFloat(tabSubject[j].value);
        }
        avg = Math.round(avg/tabSubject.length*100)/100
        tabStudent[i].querySelector('span.srednia').innerHTML = avg;
        if(avg>4.75) tabStudent[i].style.backgroundColor = '#006600';
        console.log(avg);
    }
};
// rateStudent();
document.getElementById('oblicz').addEventListener('click',  function(){
    rateStudent();
});