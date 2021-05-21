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
        scoFf.loadInitialData();
        scoFf.inputSave();
        console.log(scoFf.config);

    loadInitialData: () => {
        scoFf.config.scoTasks.push(
            { "title": "apple", "status": "pending" },
            { "title": "orange", "status": "completed" },
            { "title": "nectarine", "status": "active" },
            { "title": "banana", "status": "active" },
            { "title": "strawberry", "status": "pending" },
            { "title": "watermelon", "status": "completed" },
            // { "title": context.taskTitle, "status": context.taskStatus },
        );
        localStorage.setItem("scoTasks", JSON.stringify(scoFf.config.scoTasks));
    },


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
