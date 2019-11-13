'use strict';

let books = [
  { author: 'Cowlishaw, Mike', dewey: '005.133', title: 'The REXX Language' },
  { author: 'Sams', dewey: '005.133', title: 'Teach Yourself C++ In 21 Days' },
  { author: 'Stroustrup., Bjarne', dewey: '005.133', title: 'The C++ Programming Language' },
  { author: 'Crockford, Douglas', dewey: '005.2762', title: 'JavaScript: The Good Parts' },
  { author: 'Flanagan, David', dewey: '005.2762', title: 'JavaScript: The Definitive Guide' },
  { author: 'Schmidt, Meinhard', dewey: '005.44684', title: 'Windows Vista for Dummies' },
  { author: 'Zondervan', dewey: '220.52081', title: 'NIV Study Bible' },
  { author:'Humphries, Russell, Dr.', dewey: '231.7652', title: 'Starlight and Time' },
  { author: 'Jane, Frederick Thomas', dewey: '623.82509051', title: 'Jane\'s Fighting Ships' },
  { author: 'Norris, Chuck', dewey: '796.8092', title: 'The Official Chuck Norris Fact Book' }
];



function findBook(dewey, title, books, start=0, end = books.length-1) {
  if(start > end) {
    console.log('Book not found');
    return -1;
  }
  let index = Math.floor((start + end) / 2);
  let item = books[index]; 


  if(item.dewey === dewey && item.title === title){
    return 'Book found';
  }
  else if(item.dewey < dewey) {
    return findBook(dewey, title, books, index + 1, end);
  }
  else if(item.dewey > dewey) {
    return findBook(dewey, title, books, start, index - 1);
  }
}

console.log(findBook('796.8092', 'The Official Chuck Norris Fact Book' , books));

// 14 15 19 25 27 35 79 89 90 91 in-order
// 35 25 15 14 19 27 89 79 91 90 pre-order

//in-order => left, root, right
//pre-order => root, left, right
//post-order => left, right, root

//4-1)

//         35
//       /    \           
//     25      89
//    /  \    /  \
//   15  27  79   91
//  /  \           /
// 14   19        90  
    
// 14 x y 19 15 27 25 79 90 91 89 35


//4-2)
//5 7 6 9 11 10 8

//       8
//     /   \
//    6     10
//  /  \   /   \
// 5   7   9    11

// 8 6 5 7 10 9 11

function preOrderTraversal(t) {

}

function postOrderTraversal(t) {

}

function inOrderTraverasal(t){

}