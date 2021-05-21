console.log("linked in");
let scoTabs = (cityName) =>  {
    let i;
    let x = document.getElementsByClassName("listParent");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
}
        scoFf.footerDate();
        scoFf.inputSave();
    footerDate: () => {
        // console.log("wired in");
        let dateHolder = document.getElementById("dateHolder"),
            d = new Date().getFullYear();
        dateHolder.innerHTML = d;
    },
    inputSave: () => {
        const addButton = document.getElementById("mainButton");

        let foo = document.getElementsByTagName("input");


        addButton.addEventListener("click", function(){
            console.log(foo);
        });
    }
