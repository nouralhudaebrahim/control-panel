(function () {
   const closeBanners = document.querySelectorAll(".c-banner--close");
   closeBanners.forEach( closeBanners => {
    closeBanners.addEventListener("click" , event => {
        const banner= event.target.parentNode;
        banner.classList.add("collaps");
    })
   })
})();
