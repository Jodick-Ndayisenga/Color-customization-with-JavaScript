function color(color, bgcolor='black'){
    let html = document.querySelector('html');
    html.style.backgroundColor = bgcolor;
    html.style.color = color
}
addEventListener('change', ()=>{
    let selected;
    selected = document.querySelector('#choice').value;

    if (selected == 'black'){
        color('white')

    } else if (selected == 'green'){
        color('green')

    }else if (selected == 'yellow'){
        color('#ff7200')
    }else{
        color('black', 'white')}
       
   }
)