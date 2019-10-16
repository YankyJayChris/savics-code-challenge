
const storedRecord = [];

// class Medical record
class Record {
    constructor(fistName,lastName,gender,age,city,country,hasDiabet){
        this.fistName = fistName;
        this.lastName= lastName;
        this.gender = gender;
        this.age = age;
        this.city = city;
        this.country = country;
        this.hasDiabet = hasDiabet;
    }
}

// Ui class 
class UI {
    
    static displayRecords(data){
        
        const list = document.querySelector("#record-list");
        if (data.length !== 0){
       let output = data.map(rec => {
            return  `<li class="list-group-item">${rec.fistName} ${rec.lastName}, ${rec.age}-${rec.city}(${rec.country})</li>`
        });
        list.innerHTML = output.join("");
        }else{
            list.innerHTML = '<li class="list-group-item">please add reacord</li>';
        }
    }

    static addRecordTolist(rec){
       
        storedRecord.push(rec);
        this.displayRecords(storedRecord);
    }

    static filterRecord(rec){
       const filterdRecord = rec.filter((re) => re.age < 18);
       this.displayRecords(filterdRecord);
    }
}


// event : display records
document.addEventListener('DOMContentLoaded', () => UI.displayRecords(storedRecord));

// event: add record
document.querySelector('#record-form').addEventListener('submit',(e)=>{
    e.preventDefault();
    const fistName = document.querySelector('#first-name').value;
    const lastName = document.querySelector('#last-name').value;
    const gender = document.querySelector('input[name=gender]:checked').value;
    const age = document.querySelector('#age').value;
    const citye = document.querySelector('#city');
    const city = citye.options[citye.selectedIndex].value;
    const countrye = document.querySelector('#country');
    const country = countrye.options[countrye.selectedIndex].value;
    const hasDiabet = document.querySelector('input[name=diabetes]:checked').value;
    const record = new Record(fistName,lastName,gender,age,city,country,hasDiabet);
    console.log(record);

    UI.addRecordTolist(record);
});

const checkbox= document.querySelector("#checkbox");

// event: minor
checkbox.addEventListener( 'change', function() {
    if(this.checked) {
        UI.filterRecord(storedRecord);
    } else {
        UI.displayRecords(storedRecord);
    }
});
