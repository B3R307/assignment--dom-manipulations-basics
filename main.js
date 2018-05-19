
document.querySelector("#inject-html button").addEventListener('click',function(){
  // TASK #1
  var answerBoxEl = document.querySelector('#inject-html .answer-box')
  answerBoxEl.innerHTML = "<h2>Here is some text for you!!</h2>"
})



document.querySelector("#double button").addEventListener('click', function(){
  // TASK #2
    var answerPTagWithValueEl = document.querySelector('#compoundInvestment')
   // console.log(answerPTagWithValue);

    var clickAdd = answerPTagWithValueEl.textContent
    // console.log(typeof clickAdd);
    var clickAddtoNum = parseInt(clickAdd);
    // console.log(typeof clickAddtoNum);

    answerPTagWithValueEl.textContent = clickAddtoNum * 2
})


document.querySelector("#color-circle button").addEventListener('click',function(){  //aqui se activa el listener del elemento del dom
  // TASK #3
  var colorEl = document.querySelector('#circle-bw') //aqui se accede al elemento del dom sobre el que se va a interactuar
    // console.log(colorEl);
    var colorStyle = window.getComputedStyle(colorEl); // se crea una variable  que lea el color de fondo del  elemento del dom(circulo) con el metodo backgroundcolor
      // console.log(colorStyle.backgroundColor);   se indica backgroundColor para ser más especifico e imprimnir el FONDO del objeto del dom

      if(colorStyle.backgroundColor === 'rgb(255, 255, 255)'){   //Se aplica la condicion a la variable creada que lee el color de fondo del el de dom y lo conmpara con rgb...
          colorEl.style.backgroundColor = 'rgb(0, 0, 0)'   // si los colores son iguales ,el metodo style.backgroundColor se aplica a la variable que señala el color de fondo para devolver un color distinto

         // console.log(colorStyle.backgroundColor);
      } else if(colorEl.style.backgroundColor = 'rgb(0, 0, 0)'){  // si los colores no son iguales se devueleve
        colorEl.style.backgroundColor = 'rgb(255, 255, 255)'  //
        // console.log(colorStyle.backgroundColor);
      }

})

document.querySelector("#blow-up button").addEventListener('click',function(){
  // TASK #4}
    var blowUpEl = document.querySelector('.circle-red')
       // console.log(blowUpEl);
       var blowupStyle = window.getComputedStyle(blowUpEl);
            // console.log(typeof blowupStyle);
            // console.log(blowupStyle.height);
            // console.log(blowupStyle.width);

         var blowUpWidth = parseInt(blowupStyle.width);
            // console.log(blowUpWidth);
            // console.log(typeof blowUpWidth);
            // console.log(blowUpEl.offsetHeight);
            // console.log(blowUpEl.offsetWidth);    //para que se utliza?
         if(blowUpWidth < 320){
            var newSize = blowUpWidth * 2;
         } else{
           newSize = 40;
           alert('Has llegado al limite');
         }

            var maxSize = newSize.toString();
            blowUpEl.style.width = maxSize + 'px'
            blowUpEl.style.height = maxSize + 'px'
            console.log(maxSize);

        //  if(blowUpEl.style.width === `40px`){
        //      blowUpEl.style.width = `${blowUpWidth} * 2px`
        //      console.log(blowUpEl.style.width);
        //
        // }
})


document.querySelector("#remove button").addEventListener('click',function(){
  // TASK #5
     var listEl = document.querySelectorAll('#user-list .inactive')
     // console.log(typeof listEl);

    var infoEl = [ ...listEl];
    // console.log(infoEl);
    infoEl.forEach(function(domLiEl, i){
      // console.log(el.textContent);
      var pad = domLiEl.parentNode

      pad.removeChild(domLiEl);
       // console.log(el.textContent);
       // console.log(el);

    })

})


document.querySelector("#reverse-squares button").addEventListener('click',function(){
  // TASK #6

    var colorBoxEl = document.querySelectorAll('.answer-box .square')
    // console.log(colorBoxEl);

    var colorArr = [ ...colorBoxEl]   // convertir nodelist en array , hacer reversa a ese array con .reverse depues innerHtml forEach y finalmente appendChild
    // console.log(colorArr);
    var colorArrReverse = colorArr.reverse();
    // console.log(colorArrReverse);
    //
  var colorContenedorEl =  document.querySelector('#reverse-squares .answer-box')
    colorContenedorEl.innerHTML = ''

    colorArrReverse.forEach(function(colorEl){
        colorContenedorEl.appendChild(colorEl)
    })

})

document.querySelector("#pig-latin button").addEventListener('click',function(){
  // TASK #7
   var textBoxEl = document.querySelectorAll('#tasks li') // selecciona el elemento a manipular
    // console.log(textBoxEl);

   var textArr = [ ...textBoxEl]  //convertimos el nodelist a array
    // console.log(textArr);

for(var i = 0; i < textArr.length; i++){  //iteramos sobre cada elemento del array

     var textBox = textArr[i];
     // console.lo(textBox.textContent);  // para ingresar al contenido de textBox textContent

     var text  = textBox.textContent.split('').reverse(); // convertimos el array a string ( con .split) y aqui mismo reversamos el strong hecho
     // console.log(text);

    var revStr = text.join(''); // para quitar las comas al string utilizamos .join
    console.log(revStr);
     textBox.innerHTML = revStr

    }

  })

document.querySelector("#cycle-image button").addEventListener('click',function(){
   //TASK #8
})
