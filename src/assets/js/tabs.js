(function(){
    const tabs= document.querySelectorAll(".js-tabs");
    Array.from(tabs , tab => {
        const tabslinks = tab.querySelectorAll(".js-tab-link");
        let currentactivetab = tab.querySelector(".js-tab-link.is-active");

        const toggletab= ( toggledtablink = currentactivetab)=> {
            currentactivetab = toggledtablink || currentactivetab ;
            toggledtablink.classList.toggle("is-active");


            const toggledtabdata = toggledtablink.dataset.index;
            const toggledtabarea = tab.querySelector('.js-tab-area [data-indexed=${toggledtabdata}]');
            toggeledtabarea.classList.toggle("is-active");
        }
        if(!currentactivetab){
            toggletab(tabslinks[0]);
        }
        tabslinks.forEach( tabslinks => {
            tabslinks.addEventListener("click" , function(event){
                if (currentactivetab === this){
                    return;
                }
                if(currentactivetab){
                    return toggletab();
                }
                toggletab(this)

            })
        })
    })
    
})();