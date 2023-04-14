document.addEventListener('DOMContentLoaded', function(){
	/******************nav */

	window.addEventListener('scroll', function() {
		var nav = document.getElementById('nav');
		var headerNavLink=document.querySelectorAll(".header-nav-link");
		if (window.scrollY > 0) {
		  nav.style.backgroundColor = '#000';
		  nav.style.padding = '10px';
		  nav.style.position='fixed';
		  nav.style.zIndex="100";
		} else {
		  nav.style.backgroundColor = '';
		  nav.style.padding = '';
		  nav.style.position= "initial";
		}
	  });



    /***************effet header */
    let header = document.getElementById("content-header");
    let title = document.getElementById("header-titre");
    let headers = ["Vivez l'aventure de Star Wars au Parc Star Wars", "Vivez les moments les plus marquants de Star Wars", "Venez rencontrer vos personnages préférés de Star Wars"];
    let back_ground=["assets/image/header.jpg" ,"assets/image/header2.jpg","assets/image/header3.jpg" ]
    let currentHeader = 0;


    header.setAttribute("style", "background:url('"+back_ground[currentHeader]+"'); background-size: cover ; background-position: center center; background-repeat: no-repeat; transition: background-image 0.3s;");
    title.innerHTML = headers[currentHeader];

    setInterval(function changeHeader() {
        title.innerHTML = headers[currentHeader];
        header.setAttribute("style", "background:url('"+back_ground[currentHeader]+"'); background-size: cover ; background-position: center center; background-repeat: no-repeat; transition: background-image 0.3s;");
        currentHeader = (currentHeader +1) % headers.length;
    }, 5000);
    /******************fin effet*/

    /******************Ajax pour afficher form */
    let form_billet= document.getElementById("billets_form");
    form_billet.addEventListener('click', function(){
        // On initialise la variable dans laquelle va être stockée notre objet XMLHTTPRequest
		var xhr = new XMLHttpRequest();	
		
		// On initialise la variable dans laquelle va être stockée le contenu de notre fichier... ou un message d'erreur
		var affiche_retour;
		
		// Puisque il 'y une click sur l' élément biellets_form, on effectue l'appel AJAX
		
		// Nous vérifions que la fonction getRequest a parfaitement fonctionnée : si le navigateur de l'utilisateur ne supporte pas l'AJAX, 
		// cette fonction nous retourne le booléen "false".
			if(xhr != false){
				// En utilisant la méthode .open, nous construisons un appel AJAX vers le fichier adapté
				xhr.open("GET", "vue/includes/form_billet.html", true);
				
				xhr.onreadystatechange = function() {
					// Test de l'état du dialogue
					// 1er test ==> on attend que le serveur soit prêt en testant la valeur qu'il retourne suite à la méthode .readyState
					// 2nd test ==> on vérifie qu'il n'y a pas eu d'erreur de communication avec la page appelée en testant la valeur retournée suite à la méthode .status
					if(xhr.readyState == 4 && xhr.status == 200){
						// Nous récupérons le contenu du fichier appelé en faisant appel à la méthode .responseText
						// .responseText est une méthode qui récupère sous forme de chaine de caractère "brute" la totalité de la réponse.
						// Généralement, ce type de retour est utilisé quand on traite la totalité de la réponse, pour de l'affichage par exemple
						// Notez que tout le contenu du fichier appelé est stocké dans une seule variable appelée "affiche_retour"!
						affiche_retour = xhr.responseText;
					}else{
						// Puisque la communication ne s'est pas correctement déroulée (problème serveur ou page inaccessible/introuvable/etc...), nous stockons un message d'erreur dans la variable "affiche_retour"
						affiche_retour = "Erreur dans l'appel du fichier form_billet.html";
					}

					// Que l'appel AJAX se soit déroulé correctement ou pas, la variable "affiche_retour" contient forcément un message.
					// Soit il s'agit du contenu du fichier, soit un message d'erreur.
					// Grâce à la méthode .innerHTML, nous affichons le contenu de cette variable dans la division de retour adaptée
					document.getElementById('billets').innerHTML = affiche_retour;
				}
				xhr.send();
			}
		
    })


    /****************************************bouton retour */
    // var refreshButton= document.querySelector(".retour");
    // refreshButton.addEventListener("click", function() {
    // location.reload();
    // });

	/********************plan affichage*/
	var aff_plan=document.getElementById('consign_plan');
	var plan=document.getElementById('image_plan');
	var remove_plan=document.getElementById('remove_plan')
	
	aff_plan.addEventListener('click', function(){
		if(plan.style.display='none'){
			plan.style.display='block';
		}
	})
	remove_plan.addEventListener('click', function(){
		if(plan.style.display='block'){
		plan.style.display='none';
		}
	})

	/*****************************slogan */
	const root = document.documentElement;
	const changeBtn = document.getElementById('changeBtn-slogan');
	let mode = false;

	let whiteColor = getComputedStyle(root).getPropertyValue("--main-color-blanc");
	let blackColor = getComputedStyle(root).getPropertyValue("--main-color-noir");

	changeBtn.addEventListener('click', (e) => changeColor());

	function changeColor() {
		mode = !mode;
		if (mode) {
			root.style.setProperty('--main-color-blanc', blackColor);
			root.style.setProperty('--main-color-noir', whiteColor);
		} else {
			root.style.setProperty('--main-color-blanc', whiteColor);
			root.style.setProperty('--main-color-noir', blackColor);
		}
	}

	const textone = document.getElementById("textone-slogan")
	const texttwo = document.getElementById("texttwo-slogan")
	const bar = document.getElementById("bar-slogan")
	const slidebar = document.getElementById("slidebar-slogan")

	texttwo.style.opacity = "0"
	bar.style.transform = "scaleY(0.1)"

	let slideTL = function () {
		bar.style.transform = "translateY(225px) scaleY(1)"
		slidebar.style.transform = "translateX(600px)"
		setTimeout(() => {
			slidebar.style.transform = "translateX(0px)"
		}, 1000);
		setTimeout(() => {
			slidebar.style.transform = "translateX(600px)"
		}, 2000);
		setTimeout(() => {
			bar.style.transform = "translateY(500px) scaleY(0.1)"
		}, 3000);
	}

	let maskTL = function () {
		textone.style.clipPath = "polygon(0 0, 91% 0, 81% 100%, 0% 100%)"
		setTimeout(() => {
			texttwo.style.opacity = "1"
		}, 1000);
		setTimeout(() => {
			textone.style.clipPath = "polygon(0 0, 18% 0, 8% 100%, 0% 100%)"
		}, 2000);
		setTimeout(() => {
			textone.style.clipPath = "polygon(0 0, 91% 0, 81% 100%, 0% 100%)"
		}, 3000);
	}

	let mainTL = function () {
		slideTL();
		setTimeout(() => {
			maskTL();
		}, 1500);
	}

	setInterval(mainTL, 5000);


	/*******curo */
	const hotelCarousel = document.getElementById('hotel-carousel');
    const hotelSlides = hotelCarousel.getElementsByClassName('hotel-slide');
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    let currentSlide = 0;
    const totalSlides = hotelSlides.length;
    
    prevBtn.addEventListener('click', () => {
        hotelSlides[currentSlide].classList.remove('active');
        currentSlide = currentSlide > 0 ? currentSlide - 1 : totalSlides - 1;
        hotelSlides[currentSlide].classList.add('active');
    });
    
    nextBtn.addEventListener('click', () => {
        hotelSlides[currentSlide].classList.remove('active');
        currentSlide = currentSlide < totalSlides - 1 ? currentSlide + 1 : 0;
        hotelSlides[currentSlide].classList.add('active');
    });

	/*********contact footer */
	const contactFooter=document.getElementById('contact-footer');
	const formFooter=document.getElementById('contact-form-footer');
	contactFooter.addEventListener('click', () => {
		formFooter.style.display="block";
	})
	contactFooter.addEventListener('dblclick', () => {
		formFooter.style.display="none";
	});

	
})

