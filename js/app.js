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












