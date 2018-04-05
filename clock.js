//Elementos HTML
var clockHours, clockMinutes, clockSeconds;

clockHours = document.querySelector('#horas');
clockMinutes = document.querySelector('#minutos');
clockSeconds = document.querySelector('#segundos');

// Formata o numero para 2 digitos adicionando um zero na frente
function toTimeFormat(t) {
	if (t.toString().length < 2) {
		var tFormated = "0" + t.toString();
		return tFormated;
	}

	else {
		return t.toString();
	}
}

function updateTime() {
	var time, hours, minutes, seconds;

	time = new Date(); //Objeto date
	//Armazema as horas, minutos e segundos
	hours = time.getHours();
	minutes = time.getMinutes();
	seconds = time.getSeconds();

	//Printa a hora no formato hh:mm:ss no console
	console.log(toTimeFormat(hours) + ":" + toTimeFormat(minutes) + 
		":" + toTimeFormat(seconds));
	
	//Preenche os elementos HTML
	clockHours.innerHTML = toTimeFormat(hours);
	clockMinutes.innerHTML = toTimeFormat(minutes);
	clockSeconds.innerHTML = toTimeFormat(seconds);

	//chama a função setTimeout que recursivamente chama update time
	//a cada segundo
	setTimeout(updateTime,1000);
}


updateTime();