function numberWithCommas(x) {
    x = x.toString();
    x = x.replace(".", ",");
    var pattern = /(-?\d+)(\d{3})/;
    while (pattern.test(x))
        x = x.replace(pattern, "$1.$2");
    return x;
}

function ammoTicketsF() {
	if (($("input[name='amountOfTickets']").val() < '1')) {
		$("input[name='amountOfTickets']").val('1');
		console.log('invalid input, value defaulted to 1');
	}
	var a = parseFloat(document.getElementById('priceTicket').innerHTML).toFixed(2);

	var b = parseFloat($("input[name='amountOfTickets']").val(), 10).toFixed(2);
	var c = parseFloat(a * b).toFixed(2);
	$('#amountToPay').empty();
	// don't try to change dis because all is securely computed server-side, dumdum
	$('#amountToPay').append(numberWithCommas(c));
}

if (top.location.pathname === '/ayyqr/purchase') {
	$(document).ready(ammoTicketsF);
}

function clearCookies() {
	var cookies = document.cookie.split(";");
	for(var i=0; i < cookies.length; i++) {
	   var equals = cookies[i].indexOf("=");
	   var name = equals > -1 ? cookies[i].substr(0, equals) : cookies[i];
	   var sessidd = " PHPSESSID";
	   if (name == sessidd) {
	       console.log(sessidd);
	       // alert("yes");
	   } else {
	       document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
	       console.log(name);
	       // alert(name);
	   }
	}
}
