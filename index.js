// Write your code here!
document.querySelector('#main').remove();

const newHeader = document.createElement('h1');
document.body.append(newHeader);
newHeader.id = 'victory';
newHeader.innerText = "Thomas Angotti is the champion"