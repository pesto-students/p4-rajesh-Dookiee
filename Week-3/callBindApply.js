let personDetailsName = {
    firstname: 'VIGNESH',
    lastname: 'THANGARAJ',
    getName: function() {
        return this.firstname + ' ' + this.lastname;
    }
};

let personName = function(greet, where) {
    console.log('Hello '+this.getName() + '! ' + greet+ ' '+where);
};

//Bind will return function always
console.log(personName.bind(personDetailsName, 'Welcome', 'home')());

personName.call(personDetailsName, 'Hello', 'World')
personName.apply(personDetailsName, ['Hello', 'World'])
//############################################################################
function add(a, b) {
    console.log(this.a + this.b) ;
}

add.bind({ a: 1, b: 2 })();
add.call({ a: 1, b: 2 })
add.apply({ a: 1, b: 2 })