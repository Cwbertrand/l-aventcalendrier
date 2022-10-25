const month = document.createElement('div')
month.classList.add('days')

const eventImg = document.createElement('img')
eventImg.classList.add('event-images')


const calender = document.querySelector('#calender')

function random_bg_color(){
        var x = Math.floor(Math.random() * 256);
        var y = Math.floor(Math.random() * 256);
        var z = Math.floor(Math.random() * 256);
        var bgColor = "rgb(" + x + "," + y + "," + z + ")";
        
        return bgColor;
}

let nb = true;

for (let i = 1; i <= 24; i++) {
        var colors = random_bg_color();
        eventImg.src = '/images/'+ i +'.jpg'
        let neweventImg = eventImg.cloneNode()
        neweventImg.innerElement = i
        let newmonth = month.cloneNode()
        newmonth.innerText = i
        newmonth.style.backgroundColor = colors;
        calender.append(newmonth)
        newmonth.appendChild(neweventImg)

        newmonth.addEventListener('click', function () {
                if(nb == true){
                        neweventImg.classList.toggle('event-click')
                }
        })
}

