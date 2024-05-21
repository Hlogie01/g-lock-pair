let count = document.getElementsByClassName("count");
let inc = [];

function intervalFunc(){
  for(let i=0; i<count.length; i++){
    inc.push(1);
    if(inc[i] != count[i].getAttribute("max-data")){
      inc[i]++;
    }
    count[i].innerHTML = inc[i];
  }
}

intervalFunc();