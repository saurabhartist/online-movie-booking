


function includeHTML() {
    var z, i, elmnt, file, xhttp;
    /* Loop through a collection of all HTML elements: */
    z = document.getElementsByTagName("*");
    for (i = 0; i < z.length; i++) {
        elmnt = z[i];
        /*search for elements with a certain atrribute:*/
        file = elmnt.getAttribute("w3-include-html");
        if (file) {
            /* Make an HTTP request using the attribute value as the file name: */
            xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4) {
                    if (this.status == 200) { elmnt.innerHTML = this.responseText; }
                    if (this.status == 404) { elmnt.innerHTML = "Page not found."; }
                    /* Remove the attribute, and call this function once more: */
                    elmnt.removeAttribute("w3-include-html");
                    includeHTML();
                }
            }
            xhttp.open("GET", file, true);
            xhttp.send();
            /* Exit the function: */
            return;
        }
    }
}

setTimeout(()=>{
    editMovieUrl()
    includeHTML()
},100)



    function myFunction(city){
       
        var lableArr = document.querySelectorAll('.container-lable')
        lableArr.forEach((element)=>{
           if(element.id == city){
            element.style.pointerEvents = 'none'
           }else{
            element.style.pointerEvents = 'auto'
            element.getElementsByTagName('input')[0].checked=false
           
           }
        })

        var cityArr = document.querySelectorAll('.city')
        console.log(cityArr)
        cityArr.forEach((element , index) => {
            if(element.classList.contains(city)){
                element.style.display='block'
            }else{
               
                element.style.display="none"
            }
        });
        }

       function movieName(){
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
          });

          if(params.movie){
            document.getElementById('movie').innerText=params.movie
          }
        }

        function editMovieUrl(){
            try {
                setTimeout(() => {
                    let movie = document.getElementsByClassName('movie-name')[0].innerText
                    var cityArr = document.querySelectorAll('.city')      
                    cityArr.forEach((element)=>{
                     let city = element.classList[0]
                     element.setAttribute("href" , `/bookSeat.html?city=${city}&movie=${movie}`)
                    })
                }, 100);
               
            } catch (error) {
               console.log(error) 
            }
          
        }

