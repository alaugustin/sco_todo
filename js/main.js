console.log("linked in");
        scoFf.footerDate();
    footerDate: () => {
        // console.log("wired in");
        let dateHolder = document.getElementById("dateHolder"),
            d = new Date().getFullYear();
        dateHolder.innerHTML = d;
    },
