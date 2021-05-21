let scoTabs = (cityName) =>  {
    var i;
    var x = document.getElementsByClassName("listParent");
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
        scoFf.loadInitialData();

        scoFf.listAll();
        scoFf.listActive();
        scoFf.listComplete();

        scoFf.inputSave();
        scoFf.footerDate();
        console.log(scoFf.config);
    },

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


    listAll: () => {
        const listDataActive = JSON.parse(localStorage.getItem("scoTasks")),
            divShowData = document.querySelector("#all .dataHolder");

        console.log(listDataActive);

        divShowData.innerHTML = JSON.stringify(listDataActive);

    },

    listActive: () => {
        const listDataActive = JSON.parse(localStorage.getItem("scoTasks")),
            divShowData = document.querySelector("#active .dataHolder");

        var listDataActiveResult = listDataActive.filter(obj => obj.status == "active");

        console.log(listDataActive);
        console.log(listDataActiveResult);

        divShowData.innerHTML = JSON.stringify(listDataActiveResult);








        // listCompleteResult.forEach(element => {
            // divShowData.innerHTML = JSON.stringify(element);
            // divShowData.innerHTML = element.title + ' ' + element.status;
        // });

        // console.log("*---*");
    },

    listComplete: () => {
        const listDataActive = JSON.parse(localStorage.getItem("scoTasks")),
            divShowData = document.querySelector("#completed .dataHolder");

        var listCompleteResult = listDataActive.filter(obj => obj.status == "completed");

        console.log(listDataActive);
        console.log(listCompleteResult);

        divShowData.innerHTML = JSON.stringify(listCompleteResult);

        // console.log("*---*");
    },

    inputSave: () => {
        const addButton = document.getElementById("mainButton");

        let foo = document.getElementsByTagName("input");


        addButton.addEventListener("click", function () {
            console.log(foo);
        });
    },

    footerDate: () => {
        let dateHolder = document.getElementById("dateHolder"),
            d = new Date().getFullYear();
        dateHolder.innerHTML = d;
    },

};

window.addEventListener("load", () => {
    scoFf.init();
});
