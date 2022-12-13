
document.querySelector(
    "#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

// select the elements to manipulate (output to)
const datefield = document.querySelector(".date");
const datefieldUK = document.querySelector("aside"); // for european/family history format with day first.

// derive the current date using a date object
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
    now
);
const fulldateUK = new Intl.DateTimeFormat("en-UK", {
    dateStyle: "full"
}).format(now);


datefield.innerHTML = `<em>${fulldate}</em>`;



function toggleMenu() {
    document.getElementById('primaryNav').classList.toggle("open");  //toggles hamburger button according to page size.
    document.getElementById("hamburgerBtn").classList.toggle("open");
}

const x = document.getElementById('hamburgerBtn')
x.onclick = toggleMenu;



