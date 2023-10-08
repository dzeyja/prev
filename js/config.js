var server_url = "https://provence-backend.onrender.com/provence"

function loader(){
    var container_9 = document.getElementById("container_9")
    var loader = document.querySelector(".clock-loader")
    console.log(loader, "  ", container_9)
    if(container_9 === null){
        document.querySelector("body").style.visibility = "hidden";
        document.querySelector(".clock-loader").style.visibility = "visible";
        console.log("loader")
        setTimeout(() => {
            loader()
        }, 1000);
    } else {
        document.querySelector(".clock-loader").style.visibility = "hidden";
        document.querySelector("body").style.visibility = "visible";
        console.log("body")
    }
}