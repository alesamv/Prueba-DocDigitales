if(document.getElementById("showModal")){
    var modal = document.getElementById("myModal");
    var btn = document.getElementById("showModal");
    var span = document.getElementsByClassName("close")[0];
    var body = document.getElementsByTagName("body")[0];

    btn.onclick = function() {
        modal.style.display = "block";

        // body.style.position = "static";
        body.style.height = "100%";
        // body.style.overflow = "hidden";
    }

    span.onclick = function() {
        modal.style.display = "none";

        body.style.position = "inherit";
        body.style.height = "auto";
        body.style.overflow = "visible";
    }
}