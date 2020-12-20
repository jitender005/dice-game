var z=0;
var v=0;
var p=0;
var w=0;
var q=0;
var counter=1;
var flag=0;

function roll_function() {

if(flag==1)
  {
    p=0;
  var x=document.getElementById('roll_score').innerHTML=Math.floor(Math.random() * 6)+1;
  if (x==1) {
    document.getElementById('active_mike').style.display= "none"
    document.getElementById('active_john').style.display= "block";
    document.getElementById('score1').innerHTML=0;   //
    z=0;
    flag=0;
  }
  else{
  x=x+z;
  v=x;
    document.getElementById('score1').innerHTML=x;
    z=x;
    x=0;

}
}

  else{
    p=0;
  var x=document.getElementById('roll_score').innerHTML=Math.floor(Math.random() * 6)+1;

  if (x==1) {
    document.getElementById('active_mike').style.display= "block"
    document.getElementById('active_john').style.display= "none";
    document.getElementById('score').innerHTML=0;
    z=0;
    flag=1;
  }
  else{
  x=x+z;
  v=x;
    document.getElementById('score').innerHTML=x;
    z=x;
    x=0;
}
}
   
  }
  function hold_function(){
    
    if (flag==0) {
      document.getElementById('active_mike').style.display= "block"
    document.getElementById('active_john').style.display= "none";
    document.getElementById('roll_score').innerHTML="SCORE";
    document.getElementById('score').innerHTML=0;
    q=document.getElementById('john_score1').innerHTML=v+p+q;
    
    p=p+v;
    v=0;
    x=0;
    z=0;
    flag=1;
    if (q>=100) {
      alert("winner is john");
    }
  }
  else{
    document.getElementById('active_mike').style.display= "none"
    document.getElementById('active_john').style.display= "block";
    document.getElementById('roll_score').innerHTML="SCORE";
    document.getElementById('score1').innerHTML=0;
    w=document.getElementById('mike_score1').innerHTML=v+p+w;
    console.log(w);
    p=p+v;
    v=0;
    x=0;
    z=0;
     flag=0;
     if (w>=100) {
      alert("winner is mike");
    }
  }
  }