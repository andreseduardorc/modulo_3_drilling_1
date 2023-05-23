function showText (){
    const cardText = document.getElementById('text_info');
    const card = document.createElement('div')
    card.classList.add('text_info')
    const text = document.createElement('h2')
    
    text.innerText = '¡Apresurese!';
    const text2 = document.createElement('p');
    text2.innerText = 'El plazo maximo para incribirse es solo 2 dias desde de la siguiente fecha:';
    const text_date = document.createElement('p')
    text_date.innerText = new Date().toLocaleDateString()

     card.appendChild(text);
     card.appendChild(text2)
     card.appendChild(text_date)
     cardText.appendChild(card)
}
showText()
