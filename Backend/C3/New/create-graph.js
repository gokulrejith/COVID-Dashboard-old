/*
 * Parse the data and create a graph with the data.
 */

function ker(keralaa) {

	var s ="wo.csv"
	console.log(s);

	Papa.parse(s, {
		download: true,
		complete: function(results) {
			keralaa(results.data);
		}
	});
}

function keralaa(data) {
	var e = document.getElementById("cars").value;
	var date = [];
	var cured = ["Cured"];
	var death=["Death"]
	var confirmed=["confirmed"]
	var s=1;
	for (var i = 1; i < data.length-1; i++) {
		if((data[i][1])==e){
			var q =i;
			if((data[i-1][1])!=(data[i][1])){
				var t =i;

		}
		}

	}
	console.log(t);
	console.log(q);
	for (var i = t; i <=q; i++) {

		date.push(data[i][0]);
	cured.push(data[i][2]);
	death.push(data[i][3])
	confirmed.push(data[i][4])
}

console.log(cured);

var chart = c3.generate({
	bindto: '#chart',
	data: {
		columns: [

			death,
			cured,
			confirmed


		]
	},
	axis: {
		x: {
			type: 'category',
			categories: date,
			tick: {
				multiline: false,

				culling: {
					max: 15
				}
			}
		}
	},
	zoom: {
		enabled: true

	},
	legend: {
		position: 'right'
	}
});
}

ker(keralaa);
