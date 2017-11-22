const myApp = {};

const goku = {name: "Son Goku", age: "737", desc: "The face of the entire Dragon Ball franchise, Goku continues to shine in DBZ, where his peer group solidifies, his family comes to fruition, and he essentially carries the saiyan race on his back. Goku is among the most powerful beings in the universe, along with his eldest son Gohan and Super Buu. Despite his great strength, Goku is incredibly humble and kind, with a great capacity for forgiveness, which is crucial during the rehabilitation of Vegeta, Piccolo, and #18. He's a wholly good character whose flaws only make him more likeable.", alias: "Kakarot" , species: "Saiyan" , };

const vegeta = {name: "Vegeta", age: "732", desc: "From enemy of the Z fighters, to mutineer, to full-on anti-hero, Vegeta’s character arc is one of the most impressive in the series. He contrasts with Goku’s nobility, but over time he develops his own code of honor, fighting alongside his one-time nemesis. He attempts to become universe’s most powerful warrior, an effort that never really comes to fruition with Goku around. Through relationships with his wife and young son, he eventually becomes a full-on protagonist willing to fight to protect the same planet he once sought to destroy.", alias: "Vegita" , species: "Saiyan" , };

const gohan = {name: "Son Gohan", age: "757", desc: "The Gohan character arc was so promising: a young, vulnerable boy slowly crawls out of his shell and becomes the most powerful being in the North Quadrant. He is the first saiyan to go Super Saiyan 2, and becomes even more powerful than his father, defeating Cell in the process. The only thing holding him back how swiftly his arc drops off after that. As a teenager, Chi-Chi relegates him to student life and halts his training. It’s mostly downhill from there, with the Great Saiyaman Saga being rock bottom.", alias: "Great Saiyaman" , species: "Saiyan/Human" ,};

const piccolo = {name:"Piccolo", age: "461", desc: "Piccolo is the only member of the original Z fighters who keeps pace with the saiyans' constantly increasing power. Many of his most important moments come only after fusing with other characters, but he's on the fringes of almost every major DBZ battle. He plays a role in shaping young Gohan, and he sacrifices his life to save the boy. An expert strategist, he's usually the voice of reason.", alias: "King Piccolo" , species: "Namekian" , };

const bulma = {name:"Bulma", age: "733", desc: "Bulma is the most important supporting protagonist in the entire series. She is Goku’s oldest friend and she frequently aids the Z fighters in a non-combative capacity. Her knack for getting kidnapped is a consistent plot point. She is arguably the smartest person in the DBZ universe, inventing both the Dragon Radar and the time machine that brings her son, Trunks, back to fix the past. She is the only female character who exists on her own merits outside of a relationship to a man.", alias: "Mrs. Vegeta" , species: "Human" , };

const roshi = {name: "Master Roshi", age: "430", desc: "Master Roshi, or the Turtle Hermit, invented the Kamehameha, which many characters use in multiple DBZ sagas. Though his role deteriorates with the saiyans' arrival, he still pops up to offer advice, support, and comic relief.", alias: "Turtle Boy" , species: "Human" ,}

const krillin = {name: "Krillin", age: "736", desc: "He is very short in height and is bald", alias: "Turillin" , species: "Human" ,}

const eighteen = {name: "Android 18", age: "736", desc: "is Dr. Gero's eighteenth Android creations vendettas against Goku. She is Android 17's sister. While her interests do not deviate from this expectation, Android 18's curiosity to activate Android 16 in spite of Gero's orders not to do so leads Android 17 to take it upon himself to kill Dr.Gero.", alias: "Turillin" , species: "Android/human" ,}

const allchars = [goku, vegeta, gohan, piccolo, bulma, roshi, krillin, eighteen];
let inputValue = "";

myApp.search = function() {

	// search function that shows/hides certain characters
	$('.search').on('change', function(e) {
		e.preventDefault();
		inputValue = $('.search').val();
		console.log(inputValue);

		if(inputValue === "goku") {
			$(this).show()
			$('.vegeta').hide();
			$('.gohan').hide();
			$('.piccolo').hide();
			$('.bulma').hide();
			$('.roshi').hide();
			$('.krillin').hide();
			$('.eighteen').hide();
			$('.fieri').hide();

		}

		if(inputValue === "vegeta") {
			$(this).show()
			$('.goku').hide();
			$('.gohan').hide();
			$('.piccolo').hide();
			$('.bulma').hide();
			$('.roshi').hide();
			$('.eighteen').hide();
			$('.fieri').hide();
		}

		if(inputValue === "gohan") {
			$(this).show()
			$('.vegeta').hide();
			$('.goku').hide();
			$('.piccolo').hide();
			$('.bulma').hide();
			$('.roshi').hide();
			$('.krillin').hide();
			$('.eighteen').hide();
			$('.fieri').hide();

		}

		if(inputValue === "piccolo") {
			$(this).show()
			$('.vegeta').hide();
			$('.gohan').hide();
			$('.goku').hide();
			$('.bulma').hide();
			$('.roshi').hide();
			$('.fieri').hide();
		}

		if(inputValue === "bulma") {
			$('.bulma').show()
			$('.vegeta').hide();
			$('.gohan').hide();
			$('.piccolo').hide();
			$('.goku').hide();
			$('.roshi').hide();
			$('.krillin').hide();
			$('.eighteen').hide();
			$('.fieri').hide();

		}

		if(inputValue === "roshi") {
			$(this).show()
			$('.vegeta').hide();
			$('.gohan').hide();
			$('.piccolo').hide();
			$('.bulma').hide();
			$('.goku').hide();
			$('.krillin').hide();
			$('.eighteen').hide();
			$('.fieri').hide();

		}

		if(inputValue === "krillin") {
			$(this).show()
			$('.vegeta').hide();
			$('.gohan').hide();
			$('.piccolo').hide();
			$('.bulma').hide();
			$('.roshi').hide();
			$('.eighteen').hide();
			$('goku').hide();
			$('fieri').hide();
		}

		if(inputValue === "eighteen") {
			$(this).show()
			$('.vegeta').hide();
			$('.gohan').hide();
			$('.piccolo').hide();
			$('.bulma').hide();
			$('.roshi').hide();
			$('.krillin').hide();
			$('fieri').hide();
		}
		
		if(inputValue === "fieri") {
			$(this).show()
			$('.vegeta').hide();
			$('.gohan').hide();
			$('.piccolo').hide();
			$('.bulma').hide();
			$('.roshi').hide();
			$('.krillin').hide();
		}
	})

	//resets inputs and restores all images
	$('.reset').on('click', function(e) {
		e.preventDefault();
		$('.goku').show()
		$('.vegeta').show();
		$('.gohan').show();
		$('.piccolo').show();
		$('.bulma').show();
		$('.roshi').show();
		inputValue = $('.search').val('');

	})
}

myApp.init = function() {
	//event listeners for modal box pop ups
	$('.goku').on('click', function() {
		$('.popUpBox').fadeIn()
		$('.popUpBox-main').css('display', 'block').html("<p>" + "<span>" + "Name: " + "</span>" + goku.name + "</p>" + "<p>" + "<span>" + "Description: " + "</span>" + goku.desc + "</p>" + "<p>" + "<span>" + "Age: " + "</span>" + goku.age + "<p>" + "<span>" + "Alias: " + "</span>" + goku.alias + "<p>" + "<span>" + "Species: " + "</span>" + goku.species + "</p>")
		$('.popUpBox-bg').css('display', 'block');
	});

	$('.vegeta').on('click', function() {
		$('.popUpBox').fadeIn();
		$('.popUpBox-main').css('display', 'block').html("<p>" + "Name: " + vegeta.name + "</p>" + "<p>" + "Description: " + vegeta.desc + "</p>" + "<p>" + "Age: " + vegeta.age + "<p>" + "Alias: " + vegeta.alias + "<p>" + "Species: " + vegeta.species + "</p>")
	});

	$('.gohan').on('click', function() {
		$('.popUpBox').fadeIn();
		$('.popUpBox-main').css('display', 'block').html("<p>" + "Name: " + gohan.name + "</p>" + "<p>" + "Description: " + gohan.desc + "</p>" + "<p>" + "Age: " + gohan.age + "<p>" + "Alias: " + gohan.alias + "<p>" + "Species: " + gohan.species + "</p>")
		$('.popUpBox-bg').css('display', 'block')
	});

	$('.piccolo').on('click', function() {
		$('.popUpBox').fadeIn();
		$('.popUpBox-main').css('display', 'block').html("<p>" + "Name: " + piccolo.name + "</p>" + "<p>" + "Description: " + piccolo.desc + "</p>" + "<p>" + "Age: " + piccolo.age + "<p>" + "Alias: " + piccolo.alias + "<p>" + "Species: " + piccolo.species + "</p>")
		$('.popUpBox-bg').css('display', 'block')
	});

	$('.bulma').on('click', function() {
		$('.popUpBox').fadeIn();
		$('.popUpBox-main').css('display', 'block').html("<p>" + "Name: " + bulma.name + "</p>" + "<p>" + "Description: " + bulma.desc + "</p>" + "<p>" + "Age: " + bulma.age + "<p>" + "Alias: " + bulma.alias + "<p>" + "Species: " + bulma.species + "</p>")
		$('.popUpBox-bg').css('display', 'block')
	});

	$('.roshi').on('click', function() {
		$('.popUpBox').fadeIn();
		$('.popUpBox-main').css('display', 'block').html("<p>" + "Name: " + roshi.name + "</p>" + "<p>" + "Description: " + roshi.desc + "</p>" + "<p>" + "Age: " + roshi.age + "<p>" + "Alias: " + roshi.alias + "<p>" + "Species: " + roshi.species + "</p>")
		$('.popUpBox-bg').css('display', 'block')
	});

	$('.krillin').on('click', function() {
		$('.popUpBox').fadeIn();
		$('.popUpBox-main').css('display', 'block').html("<p>" + "Name: " + krillin.name + "</p>" + "<p>" + "Description: " + krillin.desc + "</p>" + "<p>" + "Age: " + krillin.age + "<p>" + "Alias: " + krillin.alias + "<p>" + "Species: " + krillin.species + "</p>")
		$('.popUpBox-bg').css('display', 'block')
	});

	$('.eighteen').on('click', function() {
		$('.popUpBox').fadeIn();
		$('.popUpBox-main').css('display', 'block').html("<p>" + "Name: " + eighteen.name + "</p>" + "<p>" + "Description: " + eighteen.desc + "</p>" + "<p>" + "Age: " + eighteen.age + "<p>" + "Alias: " + eighteen.alias + "<p>" + "Species: " + eighteen.species + "</p>")
		$('.popUpBox-bg').css('display', 'block')
	});

	$('.popUpBox').on('click', function() {
		$('.popUpBox').fadeOut();
		$('.popUpBox-main').fadeOut();
		$('.popUpBox-bg').fadeOut();

	})
};

$(function() {
	myApp.init();
	myApp.search();
});