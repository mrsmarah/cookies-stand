`use strict`;

function getRandomCustomer(minCustomersHour,maxCustomerHour) {
    minCustomersHour = Math.ceil(minCustomersHour);
    maxCustomerHour = Math.floor(maxCustomerHour);
    return Math.floor(Math.random() * (maxCustomerHour - minCustomersHour)) + minCustomersHour; //The maximum is exclusive and the minimum is inclusive
  }



var seattle = {
    name : 'seattle',
    minCustomersHour : 23,
    maxCustomerHour : 65,
    avgCookiesDay : 6.3,
    workingHours : ['6 am ','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm',],
    random : [],
    total : 0,
    amount : [],

    randomCustomer : function(minCustomersHour,maxCustomerHour){
        for (var i = 0 ;i < this.workingHours.length ;i++){
            this.random[i] = getRandomCustomer(minCustomersHour,maxCustomerHour);
            console.table(this.workingHours[i], this.random[i]);
        }
    },

    cookiesAmountHour : function(){
       for (var i = 0 ;i < this.workingHours.length ;i++){
        this.amount[i] = this.avgCookiesDay*this.random[i];
        this.amount[i] = Math.ceil(this.amount[i]);
        this.total = this.total + this.amount[i];
        this.total = Math.ceil(this.total);

        console.table(`${this.workingHours[i]}, ${this.random[i]} customer , ${this.amount[i]} cookies`);
        console.log(` Total= ${this.total}`)
        }
    },

    
    
    render : function(){
    
        var container = document.getElementById('salmon-cookies');
        var articleEl = document.createElement('article');
        console.log(articleEl);

        
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        
        
        var pEl = document.createElement('p');
        articleEl.appendChild(pEl);
        
        var ulEl = document.createElement('ul');
        pEl.appendChild(ulEl);
        
        for(var i = 0 ; i < this.workingHours.length ; i++){
            var liEl = document.createElement('li');
            liEl.textContent = `${this.workingHours[i]} : ${this.amount[i]} cookies`;
            ulEl.appendChild(liEl);
        }

        var totalEl = document.createElement('p');
        articleEl.appendChild(totalEl);
        totalEl.textContent = ` Total= ${this.total}`

    }

};
console.log(seattle);
console.log(seattle.render());
seattle.render();
console.table(seattle.randomCustomer(23,65));
console.table(seattle.cookiesAmountHour());




var Tokyo = {
    name : 'Tokyo',
    minCustomersHour : 3,
    maxCustomerHour : 24,
    avgCookiesDay : 1.2,
    workingHours : ['6 am ','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm',],
    random : [],
    total : 0,
    amount : [],

    randomCustomer : function(minCustomersHour,maxCustomerHour){
        for (var i = 0 ;i < this.workingHours.length ;i++){
            this.random[i] = getRandomCustomer(minCustomersHour,maxCustomerHour);
            console.table(this.workingHours[i], this.random[i]);
        }
    },

    cookiesAmountHour : function(){
       for (var i = 0 ;i < this.workingHours.length ;i++){
        this.amount[i] = this.avgCookiesDay*this.random[i];
        this.amount[i] = Math.ceil(this.amount[i]);
        this.total = this.total + this.amount[i];
        this.total = Math.ceil(this.total);

        console.table(`${this.workingHours[i]}, ${this.random[i]} customer , ${this.amount[i]} cookies`);
        console.log(` Total= ${this.total}`)
        }
    },

    
    
    render : function(){
    
        var container = document.getElementById('salmon-cookies');
        var articleEl = document.createElement('article');
        console.log(articleEl);

        
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        
        
        var pEl = document.createElement('p');
        articleEl.appendChild(pEl);
        
        var ulEl = document.createElement('ul');
        pEl.appendChild(ulEl);
        
        for(var i = 0 ; i < this.workingHours.length ; i++){
            var liEl = document.createElement('li');
            liEl.textContent = `${this.workingHours[i]} : ${this.amount[i]} cookies`;
            ulEl.appendChild(liEl);
        }

        var totalEl = document.createElement('p');
        articleEl.appendChild(totalEl);
        totalEl.textContent = ` Total= ${this.total}`

    }

};
console.log(Tokyo);
console.log(Tokyo.render());
Tokyo.render();
console.table(Tokyo.randomCustomer(23,65));
console.table(Tokyo.cookiesAmountHour());



var Dubai = {
    name : 'Dubai',
    minCustomersHour : 11,
    maxCustomerHour : 38,
    avgCookiesDay : 3.7,
    workingHours : ['6 am ','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm',],
    random : [],
    total : 0,
    amount : [],

    randomCustomer : function(minCustomersHour,maxCustomerHour){
        for (var i = 0 ;i < this.workingHours.length ;i++){
            this.random[i] = getRandomCustomer(minCustomersHour,maxCustomerHour);
            console.table(this.workingHours[i], this.random[i]);
        }
    },

    cookiesAmountHour : function(){
       for (var i = 0 ;i < this.workingHours.length ;i++){
        this.amount[i] = this.avgCookiesDay*this.random[i];
        this.amount[i] = Math.ceil(this.amount[i]);
        this.total = this.total + this.amount[i];
        this.total = Math.ceil(this.total);

        console.table(`${this.workingHours[i]}, ${this.random[i]} customer , ${this.amount[i]} cookies`);
        console.log(` Total= ${this.total}`)
        }
    },

    
    
    render : function(){
    
        var container = document.getElementById('salmon-cookies');
        var articleEl = document.createElement('article');
        console.log(articleEl);

        
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        
        
        var pEl = document.createElement('p');
        articleEl.appendChild(pEl);
        
        var ulEl = document.createElement('ul');
        pEl.appendChild(ulEl);
        
        for(var i = 0 ; i < this.workingHours.length ; i++){
            var liEl = document.createElement('li');
            liEl.textContent = `${this.workingHours[i]} : ${this.amount[i]} cookies`;
            ulEl.appendChild(liEl);
        }

        var totalEl = document.createElement('p');
        articleEl.appendChild(totalEl);
        totalEl.textContent = ` Total= ${this.total}`

    }

};
console.log(Dubai);
console.log(Dubai.render());
Dubai.render();
console.table(Dubai.randomCustomer(23,65));
console.table(Dubai.cookiesAmountHour());


var Paris = {
    name : 'Paris',
    minCustomersHour : 20,
    maxCustomerHour : 38,
    avgCookiesDay : 2.3,
    workingHours : ['6 am ','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm',],
    random : [],
    total : 0,
    amount : [],

    randomCustomer : function(minCustomersHour,maxCustomerHour){
        for (var i = 0 ;i < this.workingHours.length ;i++){
            this.random[i] = getRandomCustomer(minCustomersHour,maxCustomerHour);
            console.table(this.workingHours[i], this.random[i]);
        }
    },

    cookiesAmountHour : function(){
       for (var i = 0 ;i < this.workingHours.length ;i++){
        this.amount[i] = this.avgCookiesDay*this.random[i];
        this.amount[i] = Math.ceil(this.amount[i]);
        this.total = this.total + this.amount[i];
        this.total = Math.ceil(this.total);

        console.table(`${this.workingHours[i]}, ${this.random[i]} customer , ${this.amount[i]} cookies`);
        console.log(` Total= ${this.total}`)
        }
    },

    
    
    render : function(){
    
        var container = document.getElementById('salmon-cookies');
        var articleEl = document.createElement('article');
        console.log(articleEl);

        
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        
        
        var pEl = document.createElement('p');
        articleEl.appendChild(pEl);
        
        var ulEl = document.createElement('ul');
        pEl.appendChild(ulEl);
        
        for(var i = 0 ; i < this.workingHours.length ; i++){
            var liEl = document.createElement('li');
            liEl.textContent = `${this.workingHours[i]} : ${this.amount[i]} cookies`;
            ulEl.appendChild(liEl);
        }

        var totalEl = document.createElement('p');
        articleEl.appendChild(totalEl);
        totalEl.textContent = ` Total= ${this.total}`

    }

};
console.log(Paris);
console.log(Paris.render());
Paris.render();
console.table(Paris.randomCustomer(23,65));
console.table(Paris.cookiesAmountHour());


var Lima = {
    name : 'Lima',
    minCustomersHour : 2,
    maxCustomerHour : 16,
    avgCookiesDay : 4.6,
    workingHours : ['6 am ','7 am','8 am','9 am','10 am','11 am','12 pm','1 pm','2 pm','3 pm','4 pm','5 pm','6 pm','7 pm',],
    random : [],
    total : 0,
    amount : [],

    randomCustomer : function(minCustomersHour,maxCustomerHour){
        for (var i = 0 ;i < this.workingHours.length ;i++){
            this.random[i] = getRandomCustomer(minCustomersHour,maxCustomerHour);
            console.table(this.workingHours[i], this.random[i]);
        }
    },

    cookiesAmountHour : function(){
       for (var i = 0 ;i < this.workingHours.length ;i++){
        this.amount[i] = this.avgCookiesDay*this.random[i];
        this.amount[i] = Math.ceil(this.amount[i]);
        this.total = this.total + this.amount[i];
        this.total = Math.ceil(this.total);

        console.table(`${this.workingHours[i]}, ${this.random[i]} customer , ${this.amount[i]} cookies`);
        console.log(` Total= ${this.total}`)
        }
    },

    
    
    render : function(){
    
        var container = document.getElementById('salmon-cookies');
        var articleEl = document.createElement('article');
        console.log(articleEl);

        
        var h2El = document.createElement('h2');
        articleEl.appendChild(h2El);
        h2El.textContent = this.name;
        
        
        var pEl = document.createElement('p');
        articleEl.appendChild(pEl);
        
        var ulEl = document.createElement('ul');
        pEl.appendChild(ulEl);
        
        for(var i = 0 ; i < this.workingHours.length ; i++){
            var liEl = document.createElement('li');
            liEl.textContent = `${this.workingHours[i]} : ${this.amount[i]} cookies`;
            ulEl.appendChild(liEl);
        }

        var totalEl = document.createElement('p');
        articleEl.appendChild(totalEl);
        totalEl.textContent = ` Total= ${this.total}`

    }

};
console.log(Lima);
console.log(Lima.render());
Lima.render();
console.table(Lima.randomCustomer(23,65));
console.table(Lima.cookiesAmountHour());











