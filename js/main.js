let scoTabs = (cityName) =>  {
    let i;
    let x = document.getElementsByClassName("listParent");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    document.getElementById(cityName).style.display = "block";
}

/* -------------------- JS template below -------------------- */
let scoFf = {
    version: '1.0',
    author: 'Al Augustin',
    project: 'SCO TODO',
    Date: 'May 2021',

    // -------------------- INITIALIZATION --------------------
    init: function () {
        let context = this;

        // GLOBAL VARIABLES --------------------
        context.config = {
            // let
            foo: "bar",
            taskTitle: "",
            taskStatus: "",
            scoTasks: [],
        };

        // CALL DOM INVOKING FUNCTIONS HERE --------------------
        scoFf.footerDate();
        scoFf.inputSave();
        console.log(scoFf.config);

        scoFf.config.scoTasks.push(
            { "title": "grape", "statue": "pending" },
            { "title": "apple", "statue": "active" },
            { "title": "orange", "statue": "completed" },
            // { "title": context.taskTitle, "statue": context.taskStatus },
        );
        localStorage.setItem("scoTasks", JSON.stringify(scoFf.config.scoTasks));


    },

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

};

window.addEventListener("load", () => {
    scoFf.init();
});
