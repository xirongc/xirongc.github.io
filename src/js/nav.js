
// ------------- actually this file is not being used, but just keep it for now --------------


// client side javascript, checking the routes, 
// for example when you are on the about pages, set new attributes to about on nav bar
const navLinks = document.querySelectorAll("[data-navLink]");

navLinks.forEach((link) => {
   if (link.getAttribute("href") === window.location.pathname) {
      link.setAttribute("aria-current", "page");
   }
})


// since this files is being imported to where it's needed (Nav.astro)
// the function defined inside is not globally accessed, so in order to trigger it 
// we let it listent to event called "DOMContentLoade", meaning when DOM is fully loaded 
// then it selects the first element with the class '.mode' and stores it in the variable modeDiv
// next check the if modeDev indeed exist, if yes, the attached 'click' event listener to 'modeDiv'
// will trigger toggleAnimation() function
