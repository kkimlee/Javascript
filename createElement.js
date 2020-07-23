console.log(hr = document.createElement("hr"));
console.log(document.body.appendChild(hr));
console.log(document.body.insertBefore(hr, document.body.children[3]));

console.log(hr2 = hr.cloneNode());
console.log(document.body.insertBefore(hr2, document.body.children[6]));
