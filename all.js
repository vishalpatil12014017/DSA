


// {
//     //type of creating objects

//     {
//         var obj = Object.create(null)
//         // console.log(obj);//[Object: null prototype] {}
//     }
    
//     {
//         class Data {
//             constructor(name, age) {
//                 this.name = name;
//                 this.age = age
//             }
//         }
//         var object = new Data("vishal", 22) //Data { name: 'vishal', age: 22 }
//         object.city = "sangli"
//         let obj = {};
//         obj.__proto__ = object
//         //console.log(obj.city) //sangli
//     }
//     {
//         function Data(name, age) {
//             this.name = name;
//             this.age = age
//         }
//         var object = new Data("vishal", 21)
//         // console.log( object) // Data { name: 'vishal', age: 21 }
//     }

//     {
//         function Data(name, age) {
//             var obj = {}
//             obj.name = name;
//             obj.age = age;
//             return obj
//         }
//         var object = Data("vishal", 21)
//         // console.log(object) // { name: 'vishal', age: 21 }
//     }
// }

// {
//     // call,apply,bind
//     {
//         //call

//         var obj1 = { firstName: 'Vishal', lastName: 'Patil' };

//         function invite(first_parameter, second_parameter) {
//             // console.log(this);//{ firstName: 'Vishal', lastName: 'Patil' }
//             console.log(first_parameter + ' ' + this.firstName + ' ' + this.lastName + ', ' + second_parameter);
//         }

//          invite.call(obj1, 'Hi', 'How are you?'); // hi Vishal Patil, How are you?
//     }
//     {
//         //apply

//         var obj = {
//             firstName: 'Vishal', lastName: 'Patil', age: 22
//         }
//         function invite(first, second, third) {
//             console.log(first + " " + this.firstName + " " + second + third);
//         }
//         // invite.apply(obj, ["Hlo", "why you are here? ", "are you fine?"]) //Hlo Vishal why you are here? are you fine?
//     }
//     {
//         // bind

//         var obj1 = { firstName: 'Vishal', lastName: 'Patil' };

//         function invite(first_parameter, second_parameter) {
//             console.log(first_parameter + ' ' + this.firstName + ' ' + this.lastName + ', ' + second_parameter);
//         }

//         var bindingdata = invite.bind(obj1, 'Hi', 'How are you?');
//         //bindingdata()  // hi Vishal Patil, How are you?
//         // bindingdata('hey', 'How are you?') // hi Vishal Patil, How are you?
//     }
// }
// {
//     //unarey function
//     //it will take only one argument
//     //const unaryFunction = a => console.log (a + 10); // Add 10 to the given argument and display the value
// }
// {
//     //curring function

//     const multiArgFunction = (a, b, c) => a + b + c;
//     //console.log(multiArgFunction(1, 2, 3));// 6

//     const curryUnaryFunction = a => b => c => a + b + c;;
//     // console.log(curryUnaryFunction(1)("b")("c"));// returns 1bc
//     // console.log(curryUnaryFunction(1)(2)("c"));; // returns 3c
//     // console.log(curryUnaryFunction(1)(2)(3)); // returns the number 6
// }
// {
//     //immediatly invoked function
//     (function (a, b) {
//         // console.log(a+b); //11
//     })(5, 6)
// }
// {

//     const map = new Map()
//     map.set("name", "vishal")
//     map.set("age", 21)

//     // console.log(map.has("name1"));
//     for (const [key, value] of map) {
//         // console.log(key+":"+value);
//     }
// }
// {
//     const object = {
//         a: 'Good morning',
//         b: 100
//     };
//     // console.log(Object.entries(object))//[ [ 'a', 'Good morning' ], [ 'b', 100 ] ]
//     // console.log(Object.values(object))//[ 'Good morning', 100 ]
//     // console.log(Object.keys(object))//[ 'a', 'b' ]
// };

// {
//     counter = 100;
//     (function () {
//         let counter = 1
//         //console.log(arguments[0], counter);
//     })(counter)
//     //console.log(counter);
// }
// {
//     let obj = {
//         name: "vishal",
//         age: 21
//     }
//     // console.log(Object.values(obj).join("\n"));
//     // vishal
//     // 21
// }
// {
//     let arrayIterable = [10, 20, 30, 40, 50];

//     for (value of arrayIterable) {
//         value++;
//         // console.log(value); // 11 21 31 41 51
//     }
// }
// {
//     let str = [...'John Resig']
//     //console.log(str);
//     // [
//     //     'J', 'o', 'h', 'n',
//     //     ' ', 'R', 'e', 's',
//     //     'i', 'g'
//     //   ]

// }
// {
//     // console.log("AZ".charCodeAt(1)); //90
// }
// {
//     function myFunction(parameter1, parameter2, parameter3) {
//         // console.log(arguments[0]===parameter1) // true
//         // console.log(arguments[1]) // "argument2"
//         // console.log(arguments[2]) // "argument3"
//     }
//     myFunction("argument1", "argument2", "argument3")
// }
// {
//     let obj = {
//         name: "vishal",
//         age: 21
//     }
//     let obj2 = { ...obj };
//     //Object.assign(obj2,obj);
//     obj2.name = "ank";
//     // console.log(obj,obj2);
// }
// {
//     // console.log(null);//null;
//     // console.log(+null);//0;
//     // console.log(undefined);//undefined;
//     // console.log(+undefined);//NaN
//     // console.log(['a'] + ['b']);  // "ab"
//     // console.log([] + []); // ""
//     // console.log((![] + [])); // "false", because ![] returns false.
//     // console.log(+false);//0
//     //console.log(NaN); // NaN
//     // console.log(+NaN); // NaN
//     // console.log(+""); // 0
//     //console.log(+null===0);//true
//     //console.log(!!1===true);//true
//     // console.log(Math.max()); //-Infinity
//     // console.log(Math.min()); //Infinity
//     //console.log(NaN==NaN);//false
//     //console.log(typeof NaN.toString()==="string")//true;
// }
// {
//     let obj = [
//         { name: "vishal", age: 21, id: 1, new1: { name1: "vishal" } },
//         { name: "visha", age: 20, id: 2 },
//         { name: "vish", age: 19, id: 3 },
//         { name: "vis", age: 18, id: 4 },
//         { name: "vi", age: 17, id: 5 },
//     ]
//     //  console.table(obj);
//     // ┌─────────┬──────────┬─────┬────┬─────────────────────┐
//     // │ (index) │   name   │ age │ id │        new1         │
//     // ├─────────┼──────────┼─────┼────┼─────────────────────┤
//     // │    0    │ 'vishal' │ 21  │ 1  │ { name1: 'vishal' } │
//     // │    1    │ 'visha'  │ 20  │ 2  │                     │
//     // │    2    │  'vish'  │ 19  │ 3  │                     │
//     // │    3    │  'vis'   │ 18  │ 4  │                     │
//     // │    4    │   'vi'   │ 17  │ 5  │                     │
//     // └─────────┴──────────┴─────┴────┴─────────────────────┘

// }
// {
//     const myArray = [false, null, 1, 5, undefined]
//         ; // [1, 5] // is same as myArray.filter(x => x);
//     // console.log( myArray.filter((x)=>!!x===true));
// }
// {
//     const countries = [
//         { name: 'India', capital: 'Delhi' },
//         { name: 'US', capital: 'Washington' },
//         { name: 'Russia', capital: 'Moscow' },
//         { name: 'Singapore', capital: 'Singapore' },
//         { name: 'China', capital: 'Beijing' },
//         { "name": 'France', capital: 'Paris' },
//     ];


//     for (value of countries) {
//         //console.dir(Object.entries(value)[1][1]);
//         // Delhi
//         // Washington
//         // Moscow
//         // Singapore
//         // Beijing
//         // Paris

//     }
// }
// {
//     const user = { "name": "John", "id": 1, "city": "Delhi" };
//     // console.warn(user)
//     // console.dir(user);
// }
// {
//     const data = () => arguments.length;

//     //console.log(data(1, 2, 3, 5, 4, 2));
// }
// {


//     //This was the given function and I supposed to print "hello" first and "World" after 3 seconds

//     async function main() {
//         console.log('hello')

//         await delay(3)

//         console.log('world')
//     }

//     //---------------My Answer------------------

//     function delay(i) {
//         let startTime = new Date().getTime();
//         currentTime = startTime
//         while (currentTime < startTime + (i * 1000)) {
//             currentTime = new Date().getTime();
//         }
//     }

//     // function delay(i) {
//     //     return new Promise((res, rej)=> {
//     //         setTimeout(()=> {
//     //             res()
//     //         }, i * 1000)
//     //     })
//     // }


//    // main()
// }
// {
//     const map1 = new Map();

// map1.set('a', 1);
// map1.set('b', 2);
// map1.set("z",10)
// map1.set('c', 3);
// // console.log(map1) //Map(4) { 'a' => 1, 'b' => 2, 'z' => 10, 'c' => 3 }
// }
// {
//     let counter = 30;
// if (counter === 30) {
//  //"let"; var counter = 31; //Identifier 'counter' has already been declared so we have to put let here
//   //console.log(counter); // 31
// }
// //console.log(counter); // 30 (because the variable in if block won't exist here)
// function data(){
//     console.log(arguments);
// }
// data(21)
// }

// {
//     function data(...argu) {
//         // console.log(argu);//[ 'vishal', 21 ]
//         // console.log(arguments);//[Arguments] { '0': 'vishal', '1': 21 }

//     }
//     data("vishal",21)
// }
// {
//     let str="abcd";
//     let new1=str.split("")
//     new1[0]=new1[0].toUpperCase();
//    // console.log(new1.join(""));
// }
// {
//     let obj={
//         name:"vishal",
//         age:21
//     }
//     let obj1={}
//     Object.assign(obj1,obj)
//     obj1.name="shashank"
//     console.log(obj1,obj);
// }
// {
//     const arr = [];
//     try {
//         arr.push("try")
//         throw new Error()
//     } catch (e) {
//         arr.push("catch")
//     } finally {
//         arr.push("fin")
//     }
//     console.log(arr);
// }
// {
//     let x = "fog";
//     function first() {
//         console.log(x);
//     }
//     x = "dog";
//     function sec() {
//         let x = "log";
//         first()
//     }
//     sec()
// }
// {
//     const obj={
//         prop:1
//     }
//     console.log(obj.prop);
//     Object.defineProperty(obj,"prop",{
//         writable:false,
//         value:2
//     })
//     console.log(obj.prop);
//     obj.prop=3;
//     console.log(obj.prop);
//     function my() {
//        console.log("true");
//     }
//     my()
// }
// {
//     const arr=new Array(2);
//     arr[1]=1;
//     arr[3]=3;
//     console.log("Length:",arr);
//     console.log('elements:');
//     for (ele of arr) {
//        console.log("\t",ele);

//     }
// }
// {
//     function* gen1() {
//         console.log(yield 1);
//         console.log(yield 2);
//         console.log(yield 3);
//     }
//     const iterator=gen1()
//     console.log(iterator.next("a").value);
//     console.log(iterator.next("b").value);
//     console.log(iterator.next("c").value);
// }
// {
// function map(arr,met) {
//     let res=[];
//     arr.forEach(el => {
//         const value=met(el)
//     });
//     return res
// }
// }
// {
//     let arr = ["1", '2', '15', '-7', "-6", '300', "1000"]
//     //console.log("-7".charCodeAt());
//     let y = arr.sort()
//     // console.log(y);
//     //[
//     //     '-6',  '-7',
//     //     '1',   '1000',
//     //     '15',  '2',
//     //     '300'
//     //   ]
// }
// {
//     let arr = [1, 3, 2, 3, 1, 2, 2, 3, 3, 4, 5]
//     let set = new Set(arr)
//     // console.log([...set]);
//     // let obj={...arr}
//     // console.log(obj);
// }
// {
//    let str=[2,3,3,4,5,1,1,6];
//    let ans=str.filter((x,i)=>{
//        return str.indexOf(x)==i?x:null
//    })
//    console.log(ans);
// }
// {
//     let str='abcdefghi';
//     let str1='bc'
//     console.log(str.indexOf(str1));
// }