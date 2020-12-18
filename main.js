function func(){
    var f = document.getElementById('heading').innerHTML
    f = parseInt(f)
    document.getElementById('heading').innerHTML= f+1
}
function reset(){
    document.getElementById('heading').innerHTML = 0;
}
function countdown(){
     var f = document.getElementById('heading').innerHTML
    f = parseInt(f)
    document.getElementById('heading').innerHTML= f-1
}
