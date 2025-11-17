// check if anyform is no value
function check() {
    const camps = document.querySelectorAll("input, select");
    for (let camp of camps) {
        const tag = camp.tagName;
        const val = (camp.value || "").trim();

        if (tag === "SELECT") {

            if (!val || val.toLowerCase() === "selecione") {
                camp.focus();
                return false;
            }
        } else {

            if (val === "") {
                camp.focus();
                return false;
            }

            if ((camp.type === "text" || camp.tagName === "INPUT") && val.length < 8) {
                camp.focus();
                return false;
            }
        }
    }
    return true;
}

// info check and config buttons

const dateSc = document.getElementById("dateSc");
const date = document.getElementById("date");

const timeToStart = document.getElementById("horario");
const convenio = document.getElementById("convenio");
const cpa = document.getElementById("CPA");


dateSc.addEventListener("input", function(e){
    let dateSc = e.target.value.replace(/\D/g, "");
    
    dateSc = dateSc.slice(0, 8);

    if(dateSc.length > 4 && dateSc.length <= 6) {
        dateSc = dateSc.slice(0, 4) + "-" + dateSc.slice(4);
    } else if(dateSc.length > 6){
        dateSc = dateSc.slice(0,4) + "-" + dateSc.slice(4, 6) + "-" + dateSc.slice(6);
    }

    e.target.value = dateSc;

})

dateSc.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        if (check()) {
        timeToStart.focus();
    }
    }});

timeToStart.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        convenio.focus();
        if (check());
    }});

convenio.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        cpa.focus();
        if (check());
    }});

    cpa.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        date.focus();
        if (check());
    }});


date.addEventListener("input", function(e){
    let date = e.target.value.replace(/\D/g, "");
    
    date = date.slice(0, 8);

    if(date.length > 4 && date.length <= 6) {
        date = date.slice(0, 4) + "-" + date.slice(4);
    } else if(date.length > 6){
        date = date.slice(0,4) + "-" + date.slice(4, 6) + "-" + date.slice(6);
    }

    e.target.value = date;
    
})

date.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        e.preventDefault();
        if (check());
        
    }});




const mainsave = document.getElementById("main-save");
mainsave.addEventListener("click", function(){

});


