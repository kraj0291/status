window.onload=function(){

	let lte = "http://jiofi.local.html/st_lte.w.xml";
	let batt = "http://jiofi.local.html/st_dev.w.xml";
	let dataDiv = document.querySelector(".data");

	var http2 = new XMLHttpRequest();
	http2.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myFunction2(this);
		}
	};
	http2.open("GET",batt,true);
	http2.send();
	function myFunction2(xml) {
		let xmlDoc = xml.responseXML;
		dataDiv.innerHTML+=`<p>IMEI :: ${xmlDoc.getElementsByTagName("imei")[0].childNodes[0].nodeValue}</p>`;
		dataDiv.innerHTML+=`<p>Mobile :: ${xmlDoc.getElementsByTagName("msisdn")[0].childNodes[0].nodeValue}</p>`;
		dataDiv.innerHTML+=`<p>Battery :: ${xmlDoc.getElementsByTagName("batt_per")[0].childNodes[0].nodeValue}%</p>`;
	}

	var http1 = new XMLHttpRequest();
	http1.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myFunction1(this);
		}
	};
	http1.open("GET",lte,true);
	http1.send();
	function myFunction1(xml){
		let xmlDoc = xml.responseXML;
		let band = xmlDoc.getElementsByTagName("freq_info")[0].childNodes[0].nodeValue.split(",")[6]+" ";
		band+=xmlDoc.getElementsByTagName("freq_info")[0].childNodes[0].nodeValue.split(",")[7];
		dataDiv.innerHTML += `<p>Lte Band :: ${band}</p><p>Signal Strength :: ${xmlDoc.getElementsByTagName("rssi_info")[0].childNodes[0].nodeValue.split(",")[0]}</p>`
	}

};