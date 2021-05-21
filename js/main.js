console.log("linked in");
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
