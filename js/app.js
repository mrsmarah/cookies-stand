`use strict`;


function getRandomCustomer(minCustomersHour,maxCustomerHour) {
    minCustomersHour = Math.ceil(minCustomersHour);
    maxCustomerHour = Math.floor(maxCustomerHour);
    return Math.floor(Math.random() * (maxCustomerHour - minCustomersHour)) + minCustomersHour; //The maximum is exclusive and the minimum is inclusive
  }

 var workingHours = ['6 am ','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm',];

function Location(name,minCustomersHour,maxCustomerHour,avgCookiesDay,random,amount){
    this.name = name;
    this.minCustomersHour = minCustomersHour;
    this.maxCustomerHour = maxCustomerHour;
    this.avgCookiesDay = avgCookiesDay;
    this.random = random;
    this.amount = amount;
    this.total = 0 ;
}
    Location.prototype.randomCustomer = function(minCustomersHour,maxCustomerHour){
        for (var i = 0 ;i < workingHours.length ;i++){
            this.random[i] = getRandomCustomer(this.minCustomersHour,this.maxCustomerHour);
            // console.table(this.workingHours[i], this.random[i]);
        }
    };
    Location.prototype.cookiesAmountHour = function(){
        for (var i = 0 ;i < workingHours.length ;i++){
            this.amount[i] = this.avgCookiesDay*this.random[i];
            this.amount[i] = Math.ceil(this.amount[i]);
            this.total = this.total + this.amount[i];
            this.total = Math.ceil(this.total);
            console.table(`${workingHours[i]}, ${this.random[i]} customer , ${this.amount[i]} cookies`);
            console.log(` Total= ${this.total}`)
            }
    };
    Location.prototype.render = function(){
        var container = document.getElementById('salmon-cookies');
        var articleEl = document.createElement('article');
        container.appendChild(articleEl);
        console.log(articleEl);

        
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        
        
        var pEl = document.createElement('p');
        articleEl.appendChild(pEl);
        
        var ulEl = document.createElement('ul');
        pEl.appendChild(ulEl);
        
        for(var i = 0 ; i < workingHours.length ; i++){
            var liEl = document.createElement('li');
            liEl.textContent = `${workingHours[i]} : ${this.amount[i]} cookies`;
            ulEl.appendChild(liEl);
        }

        var totalEl = document.createElement('p');
        articleEl.appendChild(totalEl);
        totalEl.textContent = ` Total= ${this.total}`

    };

    
Location.prototype.renderTable = function(){
//header tree table 
    var container = document.getElementById('salmon-cookies');
    var tableEl = document.createElement('table');
    container.appendChild(tableEl);
    var tr1El = document.createElement('tr');
    tableEl.appendChild(tr1El);
    var th1El = document.createElement('th');
    th1El.textContent = '';
    tr1El.appendChild(th1El);
    for(var i = 0 ; i < workingHours.length ; i++){
        var thEl = document.createElement('th');
        thEl.textContent = workingHours[i];
        tr1El.appendChild(thEl);}
    var th2El = document.createElement('th');
    th2El.textContent = 'Daily Location Total';
    tr1El.appendChild(th2El);

//body tree table
    var tr2El = document.createElement('tr');
    tableEl.appendChild(tr2El);
var thEl = document.createElement('td');
    thEl.textContent = seattle.name;
    tr2El.appendChild(thEl);
for(var i = 0 ; i < workingHours.length ; i++){
var tdEl = document.createElement('td');
    tdEl.textContent = seattle.amount[i];
    tr2El.appendChild(tdEl);}
var tdEl = document.createElement('td');
    tdEl.textContent = seattle.total;
    tr2El.appendChild(tdEl);


var tr3El = document.createElement('tr');
tableEl.appendChild(tr3El);
var thEl = document.createElement('th');
    thEl.textContent = Tokyo.name;
    tr3El.appendChild(thEl);
for(var i = 0 ; i < workingHours.length ; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = Tokyo.amount[i];
    tr3El.appendChild(tdEl);}
var tdEl = document.createElement('td');
    tdEl.textContent = Tokyo.total;
    tr3El.appendChild(tdEl);


var tr4El = document.createElement('tr');
    tableEl.appendChild(tr4El);
var thEl = document.createElement('th');
    thEl.textContent = Dubai.name;
    tr4El.appendChild(thEl);
for(var i = 0 ; i < workingHours.length ; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = Dubai.amount[i];
    tr4El.appendChild(tdEl);}
var tdEl = document.createElement('td');
    tdEl.textContent = Dubai.total;
    tr4El.appendChild(tdEl);

var tr5El = document.createElement('tr');
    tableEl.appendChild(tr5El);
var thEl = document.createElement('th');
    thEl.textContent = Paris.name;
    tr5El.appendChild(thEl);
for(var i = 0 ; i < workingHours.length ; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = Paris.amount[i];
    tr5El.appendChild(tdEl);}
var tdEl = document.createElement('td');
    tdEl.textContent = Paris.total;
    tr5El.appendChild(tdEl);


var tr6El = document.createElement('tr');
    tableEl.appendChild(tr6El);
var thEl = document.createElement('th');
    thEl.textContent = Lima.name;
    tr6El.appendChild(thEl);
for(var i = 0 ; i < workingHours.length ; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = Lima.amount[i];
    tr6El.appendChild(tdEl);}
    var tdEl = document.createElement('td');
    tdEl.textContent = Lima.total;
    tr6El.appendChild(tdEl);

// footer tree table
var tr7El = document.createElement('tr');
tableEl.appendChild(tr7El);
var thEl = document.createElement('th');
    thEl.textContent = 'Total';
    tr7El.appendChild(thEl);
for(var i = 0 ; i < workingHours.length ; i++){
    var tdEl = document.createElement('td');
    tdEl.textContent = seattle.amount[i]+Tokyo.amount[i]+Dubai.amount[i]+Paris.amount[i]+Lima.amount[i];
    tr7El.appendChild(tdEl);    }
    var tdEl = document.createElement('td');
    tdEl.textContent = seattle.total+Tokyo.total+Dubai.total+Paris.total+Lima.total;
    tr7El.appendChild(tdEl);    
};

//creating new objects by the constructor

var seattle = new Location('seattle', 23 , 65 , 6.3 ,[] , []);
seattle.randomCustomer();
seattle.cookiesAmountHour();
seattle.render();


var Tokyo = new Location('Tokyo', 3 , 24 , 1.2 ,[] , []);
Tokyo.randomCustomer();
Tokyo.cookiesAmountHour();
Tokyo.render();

var Dubai = new Location('Dubai', 11 , 38 , 3.7 ,[] , []);
Dubai.randomCustomer();
Dubai.cookiesAmountHour();
Dubai.render();

var Paris = new Location('Paris', 11 , 38 , 3.7 ,[] , []);
Paris.randomCustomer();
Paris.cookiesAmountHour();
Paris.render();

var Lima = new Location('Lima', 11 , 38 , 3.7 ,[] , []);
Lima.randomCustomer();
Lima.cookiesAmountHour();
Lima.render();

//calling the table render 
seattle.renderTable();

