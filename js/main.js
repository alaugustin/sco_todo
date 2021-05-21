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

        // Extract value from table header.
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        let col = [];
        for (let i = 0; i < listDataActive.length; i++) {
            for (let key in listDataActive[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        const table = document.createElement("table");
        // Create table header row using the extracted headers above.
        let tr = table.insertRow(-1); // table row.

        for (let i = 0; i < col.length; i++) {
            let th = document.createElement("th"); // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);

        }

        // add json data to the table as rows.
        for (let i = 0; i < listDataActive.length; i++) {

            tr = table.insertRow(-1);

            for (let j = 0; j < col.length; j++) {
                let tabCell = tr.insertCell(-1);
                tabCell.innerHTML = listDataActive[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        // const divShowData = document.getElementById('showData');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);

    },

    listActive: () => {
        const listDataActive = JSON.parse(localStorage.getItem("scoTasks")),
            divShowData = document.querySelector("#active .dataHolder");

        var listDataActiveResult = listDataActive.filter(obj => obj.status == "active");

        console.log(listDataActive);

        // Extract value from table header.
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        let col = [];
        for (let i = 0; i < listDataActiveResult.length; i++) {
            for (let key in listDataActiveResult[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        const table = document.createElement("table");
        // Create table header row using the extracted headers above.
        let tr = table.insertRow(-1); // table row.

        for (let i = 0; i < col.length; i++) {
            let th = document.createElement("th"); // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);

        }

        // add json data to the table as rows.
        for (let i = 0; i < listDataActiveResult.length; i++) {

            tr = table.insertRow(-1);

            for (let j = 0; j < col.length; j++) {
                let tabCell = tr.insertCell(-1);
                tabCell.innerHTML = listDataActiveResult[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        // const divShowData = document.getElementById('showData');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);








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

        // Extract value from table header.
        // ('Book ID', 'Book Name', 'Category' and 'Price')
        let col = [];
        for (let i = 0; i < listCompleteResult.length; i++) {
            for (let key in listCompleteResult[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }

        // Create a table.
        const table = document.createElement("table");
        // Create table header row using the extracted headers above.
        let tr = table.insertRow(-1); // table row.

        for (let i = 0; i < col.length; i++) {
            let th = document.createElement("th"); // table header.
            th.innerHTML = col[i];
            tr.appendChild(th);

        }

        // add json data to the table as rows.
        for (let i = 0; i < listCompleteResult.length; i++) {

            tr = table.insertRow(-1);

            for (let j = 0; j < col.length; j++) {
                let tabCell = tr.insertCell(-1);
                tabCell.innerHTML = listCompleteResult[i][col[j]];
            }
        }

        // Now, add the newly created table with json data, to a container.
        // const divShowData = document.getElementById('showData');
        divShowData.innerHTML = "";
        divShowData.appendChild(table);

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
