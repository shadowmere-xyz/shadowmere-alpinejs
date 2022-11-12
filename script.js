window.dataLayer = window.dataLayer || [];

function gtag() {
	dataLayer.push(arguments);
}

gtag("js", new Date());

gtag("config", "G-KQ4KMVJEXY");

window.addEventListener("load", function () {
	window.wpcc.init({
		border: "thin",
		corners: "small",
		colors: {
			popup: {
				background: "#f6f6f6",
				text: "#000000",
				border: "#cfcfcf",
			},
			button: {
				background: "#303030",
				text: "#ffffff",
			},
		},
		position: "bottom",
	});
});

function getFlagEmoji(countryCode) {
	const codePoints = countryCode
		.toUpperCase()
		.split("")
		.map((char) => 127397 + char.charCodeAt());
	return String.fromCodePoint(...codePoints);
}

function getPercentage(portion, total) {
	return Math.trunc((portion * 100) / total);
}

document.addEventListener("alpine:init", () => {
	Alpine.store("comps", {
		proxies: null,
		home: false,
		last: false,
		serversonline: false,
		countries: false,
		marker: false,
		shadownav: false,
		modal1: false,
		modal2: false,
		stringPaises: [],
		open: false,
		rangeValue: 1,
		isDarkLoader: false,
		menu: "",
		qr_code: false,
		notTouchBgServers: false,
		notTouchBgCountries: false,
		notTouchBgMenuMobile: false,
		notTouchBgQR: false,
		idQrServer: null,
		//opciones menu navbar
		about: false,
		listaHome: true,
		why: false,
		support: false,
		activeTab: 'sub',
    
	});
});

function copyToClickBoard(content, flagSuccess) {
	navigator.clipboard.writeText(content);
}

const totalServersPages = (totalServers, entriesLimit) => {
	if (totalServers % entriesLimit == 0) {
		return Math.trunc(totalServers / entriesLimit);
	} else {
		return Math.trunc(totalServers / entriesLimit) + 1;
	}
};

const GoToNextPage = (count) => {
	count++;
};

const endpointURL = (counter, port, country) => {
  const endPoint = 'https://shadowmere.akiel.dev/api/proxies/?format=json&is_active=true' + '&location_country_code=' + country + '&port=' + port + '&page=' + counter.toString();
  return endPoint;
};

const getApiUrl = (code) => {
	const endPoint = "https://restcountries.com/v3.1/alpha/" + code;
	return endPoint;
};

const localArray = async (arr) => {
	var country = new Object();
	var world = { code: "UN", name: "Worldwide" };
	var codeString = new Array();
	codeString.push(world);
	for (i = 0; i < arr.length; i++) {
		var countryNames = await getCountry(arr[i]);
		country = { code: arr[i], name: countryNames };
		codeString.push(country);
	}
	return codeString;
};