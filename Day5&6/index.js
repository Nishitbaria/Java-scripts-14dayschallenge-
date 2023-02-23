// const Link = document.querySelectorAll('a');
// const BlockLink = Link[2];
// BlockLink.addEventListener('click', function(event){
//     console.log('backgroud se link block kar raha hu');
//     event.preventDefault();

// } 
//   );

let     element = document.querySelector('#wrapper'); 

element.addEventListener('click', function(event)
{
    if(event.target.nodeName === 'SPAN'){
        console.log('span pe click kiya' + event.target.textContent);
    }
}
);