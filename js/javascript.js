/**************************************
* DOCUMENT
**************************************/


/*
* DOCUMENT ELEMENTS
*/
var body = document.getElementsByTagName("BODY")[0];
var onLandingPage = true;
var pageSliding = false;




/*
* DOCUMENT FUNCIONS
*/
function slidePageLeft()
{
	if (!pageSliding && onLandingPage)
	{
		pageSliding = true;
		body.style.animation = "slidePageLeft 1s ease-in-out"
		body.style.animationFillMode = "forwards";
		setTimeout(function(){
			pageSliding = false;
			onLandingPage = false;
		}, 1000);
	}
}

function slidePageRight()
{
	if (!pageSliding && !onLandingPage)
	{
		pageSliding = true;
		body.style.animation = "slidePageRight 1s ease-in-out"
		body.style.animationFillMode = "forwards";  
		setTimeout(function(){
			pageSliding = false;
			onLandingPage = true;
		}, 1000);
	}
}

/**************************************
* LANDING-CONTAINER
**************************************/

/*
* DROPDOWN ELEMENTS
*/
var dropdownButton = document.getElementById("dropdown-icon");
var dropdownMask = document.getElementById("dropdown-mask");
var maskActive = true;
var maskMoving = false

var homeButton = document.getElementById("home-button");
var aboutButton = document.getElementById("about-button");
var courseButton = document.getElementById("course-button");
var projectButton = document.getElementById("project-button");
var contactButton = document.getElementById("contact-button");

/*
* DROPDOWN EVENTS
*/
dropdownButton.addEventListener("click", function(){
	if (!maskMoving)
	{	
		if (!maskActive)
		{
			maskMoving = true;
			dropdownMask.style.animation = "slideMaskUp .5s ease-out ";
			dropdownMask.style.animationFillMode = "forwards";  
			dropdownButton.classList.remove("dropdown-icon-active");
		}
		else
		{
			maskMoving = true;
			dropdownMask.style.animation = "slideMaskDown .5s ease-out ";
			dropdownMask.style.animationFillMode = "forwards";  
			dropdownButton.classList.add("dropdown-icon-active");
		}
		maskActive = !maskActive;
		setTimeout(function(){
			maskMoving = false;
		}, 500);
	}
});

homeButton.addEventListener("click", function(){
	slidePageRight();
	slideRoulette("Top");
});

aboutButton.addEventListener("click", function(){
	slidePageLeft();
	if (currentPage != "About")
	{
		console.log(aboutButton.style.borderLeftColor);
		aboutButton.style.backgroundColor = aboutButton.style.borderLeftColor;
		slideRoulette("About");
	}
});

courseButton.addEventListener("click", function(){
	slidePageLeft();
	if (currentPage != "Course")
	{
		slideRoulette("Course");
	}
});

projectButton.addEventListener("click", function(){
	slidePageLeft();
	if (currentPage != "Project")
	{
		slideRoulette("Project");
	}
});


/*
* DROPDOWN FUNCTIONS
*/
function allButtonsTransparent()
{
	aboutButton.style.backgroundColor = "white";
	courseButton.style.backgroundColor = "white";
	projectButton.style.backgroundColor = "white";
	contactButton.style.backgroundColor = "white";
}

/**************************************
* ROULETTE-CONTAINER
**************************************/
var rouletteContainer = document.getElementById("roulette-container");
var currentPage;
var rouletteIsSliding = false;

/*
* ROULETTE FUNCTIONS
*/
function slideRoulette(newPage)
{
	if (!rouletteIsSliding)
	{
		rouletteIsSliding = true;
		rouletteContainer.style.top = getPageYPos();
		if (newPage == "About")
		{
			rouletteContainer.style.animation = "slideToAbout 1s ease-in-out"
			rouletteContainer.style.animationFillMode = "forwards";  
		}
		else if (newPage == "Course")
		{
			rouletteContainer.style.animation = "slideToCourse 1s ease-in-out"
			rouletteContainer.style.animationFillMode = "forwards";  
		}
		else if (newPage == "Project")
		{
			rouletteContainer.style.animation = "slideToProject 1s ease-in-out"
			rouletteContainer.style.animationFillMode = "forwards";  
		}
		else if (newPage == "Contact")
		{
			rouletteContainer.style.animation = "slideToContact 1s ease-in-out"
			rouletteContainer.style.animationFillMode = "forwards";  
		}
		else if (newPage == "Top")
		{
			rouletteContainer.style.animation = "slideToTop 1s ease-in-out"
			rouletteContainer.style.animationFillMode = "forwards";  
		}
		
		setTimeout(function(){
				currentPage = newPage;
				rouletteIsSliding = false;
			}, 1000);
	}
}

function getPageYPos()
{
	if (currentPage == "About")
	{
		return "0vw";
	}
	else if (currentPage == "Course")
	{
		return "-100vh";
	}
	else if (currentPage == "Project")
	{
		return "-200vh";
	}
	else if (currentPage == "Contact")
	{
		return "-300vh";
	}
	else if (currentPage == "Top")
	{
		return "100vw";
	}
}

/**************************************
* ROULETTE EVENTS
**************************************/





















