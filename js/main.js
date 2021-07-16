
function showText(value, detail='') {
    document.getElementById("featureName").innerText = value
    document.getElementById("featureDetail").innerText = detail
}

function main() {
    /*
    let allGrids = document.getElementsByClassName("grid").forEach(element => {
        element.style = `height:100px;width:100px`
    })*/
}

window.addEventListener('load', (event) => {
    main()
})