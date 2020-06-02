/* global */
let bgMode = "yes";

/* local storge */
/* -color storage */
let ColorStorage = localStorage.getItem("color-option");
if (ColorStorage !== null) {
	document.documentElement.style.setProperty("--color-one", ColorStorage);
	document.querySelectorAll(".colors-list li").forEach((element) => {
		element.classList.remove("active");
		if (element.dataset.color === ColorStorage) {
			element.classList.add("active");
		}
	});
}
/* -bg storage */
let BgStorageOption = localStorage.getItem("BgStorageOption");
if (BgStorageOption !== null) {
	if (BgStorageOption === "yes") {
		bgMode = "yes";
	} else {
		bgMode = "no";
	}

	document.querySelectorAll(".background-option span").forEach((element) => {
		element.classList.remove("active");
	});
	if (BgStorageOption === "yes") {
		document
			.querySelector(".background-option .yes")
			.classList.add("active");
	} else {
		document
			.querySelector(".background-option .no")
			.classList.add("active");
	}
}

/* Setting */
let ToggleSetting = document.querySelector(".toggle-setting .fa-gear");
let Setting = document.querySelector(".setting");

ToggleSetting.onclick = function () {
	this.classList.toggle("fa-spin");
	Setting.classList.toggle("open");
};

/* site colores option*/
const ColorLi = document.querySelectorAll(".colors-list li");
ColorLi.forEach((li) => {
	li.addEventListener("click", (e) => {
		/* change color var el "--color-one"  */
		document.documentElement.style.setProperty(
			"--color-one",
			e.target.dataset.color
		);
		/* add al color to local storge */
		localStorage.setItem("color-option", e.target.dataset.color);
		/* remove all active class from all children */
		e.target.parentElement
			.querySelectorAll(".active")
			.forEach((element) => {
				element.classList.remove("active");
			});
		/* add active class to the clic el */
		e.target.classList.add("active");
	});
});

/* site background option */
let headerAreaBg = document.querySelector(".header-area");
let bgArray = [
	"banner.jpg",
	"nambers.jpg",
	"hotel-3.jpg",
	"stitus-2.jpg",
	"banner2.jpg",
];
let bgInterval;

const BGoption = document.querySelectorAll(".background-option span");

function randomImgs() {
	if (bgMode == "yes") {
		bgInterval = setInterval(() => {
			let randomNum = Math.floor(Math.random() * bgArray.length);
			headerAreaBg.style.backgroundImage =
				'url("imgs/' + bgArray[randomNum] + '")';
		}, 4000);
	}
}
randomImgs();
BGoption.forEach((span) => {
	span.addEventListener("click", (e) => {
		handelactive(e);
		/* if click on yes start and if no stop */
		if (e.target.dataset.bg === "yes") {
			bgMode = "yes";
			randomImgs();
			localStorage.setItem("BgStorageOption", "yes");
		} else {
			bgMode = "no";
			clearInterval(bgInterval);
			localStorage.setItem("BgStorageOption", "no");
		}
	});
});

/* functions */
function handelactive(e) {
	/* remove all active class from all children */
	e.target.parentElement.querySelectorAll(".active").forEach((element) => {
		element.classList.remove("active");
	});
	/* add active class to the clic el */
	e.target.classList.add("active");
}
