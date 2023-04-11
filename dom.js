// const div = {
//     id: 'mno',
//     class:'container',
//     style: {
//         color: 'red',
//         backgroundColor: 'yellow',
//         fontSize: 24
//     }
// }

// function changeTheColor(htmlElement) {
//     // htmlElement = #400
//     // change the color of that htmlElement from something else to "blue" 
//     // div.style.color = "blue" ;
//     div["style"]["color"] = "blue" ;
// }

// changeTheColor(div) // #400
// console.log(div)

// let obj = {
//     name : 'aravind'
// }
// obj.name = "Samudrala Aravind" ;
// console.log(obj)


// How to get the reference of an HTML element in the javascript ?

/*

document = {
    getElementById: function(str){
        // returns the reference of the HTML element whose id is the one it recieves
    }   
}

*/

function someFunc() {
    let element = document.getElementById("xyz"); ;
    let className = element.className;
    console.log(className)
    if(className == "success"){
        element.className = "error" ;
    }
    else {
        element.className = "success" ;
    }
}



