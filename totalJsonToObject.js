
function TotalConver() {
    this.students = [
    {
        id       : 01,
        name     : 'Ariful Islam',
        age      : 25,
        skill    : 'JavaScript',
        location : 'Sirajganj'

    },
    {
        id       : 02,
        name     : 'Raju',
        age      : 24,
        skill    : 'PHP',
        location : 'Mirpur'

    },
{
        id       : 03,
        name     : 'Shariful Islam',
        age      : 25,
        skill    : 'JavaScript',
        location : 'Dhaka'

    },
    {
        id       : 04,
        name     : 'Tariful Islam',
        age      : 25,
        skill    : 'JavaScript',
        location : 'Bogura'

    },
    {
        id       : 05,
        name     : 'Mehedi Hasan',
        age      : 25,
        skill    : 'PHP',
        location : 'Gazipur'

    }       

],
this.phone = [
    {
        name     : 'Ashikur Rahman',
        number   : '0174785975',
        relation : 'Brother'

    },
    {
        name     : 'Harun',
        number   : '0184785975',
        relation : 'Brother'

    },
    {
        name     : 'Raju',
        number   : '0194785975',
        relation : 'Friend'

    },
    {
        name     : 'Ridoy',
        number   : '0154785975',
        relation : 'Friend'

    },

    {
        name     : 'Mehedi Hasan',
        number   : '0184785975',
        relation : 'Brother'

    },
    {
        name     : 'Hasan',
        number   : '0174785975',
        relation : 'Uncle'

    }
],
this.devs = [
    {
        id       : 01,
        name     : 'Ariful Islam',
        age      : 25,
        skill    : 'MERN stack',
        location : 'Sirajganj'

    },
    {
        id       : 02,
        name     : 'Raju',
        age      : 24,
        skill    : 'Laravel',
        location : 'Mirpur'

    },
{
        id       : 03,
        name     : 'Shariful Islam',
        age      : 25,
        skill    : 'Django',
        location : 'Dhaka'

    },
    {
        id       : 04,
        name     : 'Tariful Islam',
        age      : 25,
        skill    : 'GoLan',
        location : 'Bogura'

    },
    {
        id       : 05,
        name     : 'Mehedi Hasan',
        age      : 25,
        skill    : 'WordPress',
        location : 'Gazipur'

    },
     {
        id       : 06,
        name     : 'Rubel Hasan',
        age      : 25,
        skill    : 'Java',
        location : 'Gazipur'

    }
    ]   
}

let totalData = new TotalConver();

let convetJson = JSON.stringify(totalData)

console.log(convetJson);


const totalJson = '{"students":[{"id":1,"name":"Ariful Islam","age":25,"skill":"JavaScript","location":"Sirajganj"},{"id":2,"name":"Raju","age":24,"skill":"PHP","location":"Mirpur"},{"id":3,"name":"Shariful Islam","age":25,"skill":"JavaScript","location":"Dhaka"},{"id":4,"name":"Tariful Islam","age":25,"skill":"JavaScript","location":"Bogura"},{"id":5,"name":"Mehedi Hasan","age":25,"skill":"PHP","location":"Gazipur"}],"phone":[{"name":"Ashikur Rahman","number":"0174785975","relation":"Brother"},{"name":"Harun","number":"0184785975","relation":"Brother"},{"name":"Raju","number":"0194785975","relation":"Friend"},{"name":"Ridoy","number":"0154785975","relation":"Friend"},{"name":"Mehedi Hasan","number":"0184785975","relation":"Brother"},{"name":"Hasan","number":"0174785975","relation":"Uncle"}],"devs":[{"id":1,"name":"Ariful Islam","age":25,"skill":"MERN stack","location":"Sirajganj"},{"id":2,"name":"Raju","age":24,"skill":"Laravel","location":"Mirpur"},{"id":3,"name":"Shariful Islam","age":25,"skill":"Django","location":"Dhaka"},{"id":4,"name":"Tariful Islam","age":25,"skill":"GoLan","location":"Bogura"},{"id":5,"name":"Mehedi Hasan","age":25,"skill":"WordPress","location":"Gazipur"},{"id":6,"name":"Rubel Hasan","age":25,"skill":"Java","location":"Gazipur"}]}'

let convert = JSON.parse(totalJson)
console.log(convert);