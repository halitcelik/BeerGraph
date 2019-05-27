var ilkOlcum = document.getElementById('ilkOlcum');
var sonOlcum = document.getElementById('sonOlcum');
var abv = document.getElementById('abv');
ilkOlcum.addEventListener('input', function(){
	ilkOlcum = document.getElementById('ilkOlcum').value;
	sonOlcum = parseFloat(document.getElementById('sonOlcum').value);
	console.log(ilkOlcum, sonOlcum)
	if(ilkOlcum && sonOlcum){
	console.log(ilkOlcum, sonOlcum)
		let sg = 1 + (ilkOlcum / (258.6 - ( (ilkOlcum / 258.2) * 227.1) ) )
		let fg = 1 + (sonOlcum / (258.6 - ( (sonOlcum / 258.2) * 227.1) ) )
		document.getElementById('abv').value = Math.round(((sg - fg) * 131.25) * 100) / 100;
		}
	 });

sonOlcum.addEventListener('input', function(){
	ilkOlcum = parseFloat(document.getElementById('ilkOlcum').value);
	sonOlcum = parseFloat(document.getElementById('sonOlcum').value);
	if(ilkOlcum && sonOlcum){
		 console.log(ilkOlcum, sonOlcum)
		let sg = 1 + (ilkOlcum / (258.6 - ( (ilkOlcum / 258.2) * 227.1) ) )
		let fg = 1 + (sonOlcum / (258.6 - ( (sonOlcum / 258.2) * 227.1) ) )
		document.getElementById('abv').value = Math.round(((sg - fg) * 131.25) * 100) / 100;
		}
	 });



var form = document.getElementById('form')
form.addEventListener('submit', function(e){
	e.preventDefault();
	var bira = e.target.name.value;
	var ilkOlcum = e.target.ilkOlcum.value;
	var sonOlcum = e.target.sonOlcum.value;
	var abv = e.target.abv.value;
	var kaynatma = e.target.kaynatma.value;
	var mash = e.target.mash_time.value;
	var maltMiktari = e.target.malt_miktari.value;
	var hopMiktari = e.target.hop_miktari.value;
	var mayalama = e.target.mayalama.value

	function toJSONString(formulaire) {
					var obj = {};
					var elements = form.querySelectorAll( "input, select, textarea" );
					for( var i = 0; i < elements.length; ++i ) {
						var element = elements[i];
						var name = element.name;
						var value = element.value;
						if( name ) {
							obj[ name ] = value;
						}
					}
					return JSON.stringify( obj );
				};

	var formData = toJSONString(form)
	/* {
		'name':bira,
		'ilk_olcum':parseFloat(ilkOlcum),
		'son_olcum':parseFloat(sonOlcum),
		'mash_time':parseInt(mash),
		'kaynatma':parseInt(kaynatma),
		'malt_miktari':parseFloat(maltMiktari),
		'hop_miktari':parseInt(hopMiktari),
		'abv':parseFloat(abv),
		'mayalama': parseInt(mayalama),

	};*/
	console.log(formData)
	fetch('/api/add', {
		headers: {
			'X-CSRFToken':(/csrftoken\=([\w\d]+)/.exec(document.cookie) || {1:''})[1],
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		},
		method: "POST",
		body: formData
	})
	.then(()=> {
		window.location.href = '/'
	})
})
