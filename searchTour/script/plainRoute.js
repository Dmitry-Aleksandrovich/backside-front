

globalThis.createRouteAccess = false;
function savePoints( point ){
    if ( !sessionStorage.getItem("pointOne") ) sessionStorage.getItem("pointOne", point)
    else sessionStorage.getItem("pointTwo", point); globalThis.createRouteAccess = true;
}

function submitPoint(){
    let submitPointBtn = document.createElement("button");
    submitPointBtn.textContent = "принять?";

    submitPointBtn.addEventListener("click", ( ev ) => {
        let currentPOint = maps
    })
}