window.onload = function() { attachCanvas(); }

let resolutions = document.getElementById("resolutions");

for(let i = 0; i < resolutions.childElementCount; i++) {
    resolutions.children[i].addEventListener('click', function(event) {
        let size = this.innerHTML.split("x");
        attachCanvas(size[0], size[1]); 
        highlightBtn(this);
    });
}

function attachCanvas(width = 360, height = 640) {
    let logoCnt = document.getElementById("canvas_cnt");    
    logoCnt.innerHTML = "<canvas id='canvas' width=" + width + " height=" + height + "></canvas>"
    
    let canvas = document.getElementById("canvas");
    let ctx = canvas.getContext("2d");
    
    ctx.font = "500 36px Ubuntu";
    ctx.fillStyle = "#989587";
    ctx.textAlign = "left";
    ctx.fillText("Canvas", 20, 50);
    ctx.fillText( width + "x" + height, 20, 100);
    ctx.fillText("Portrait", 20, 150);   
}

function highlightBtn(btn) {
    if(!btn.classList.contains('active')) {
        let remove = document.querySelector(".active");
        remove.classList.remove('active');
        btn.classList.add('active');
    } else {
        return;
    }
}