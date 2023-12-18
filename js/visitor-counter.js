function visitorCounter(){
  fetch("https://l28r77yfxk.execute-api.us-east-1.amazonaws.com/visitorCounter")
    .then(response => response.text())
    .then((body) => {
      document.getElementById("visitor-count").innerHTML=body
    })
    .catch(function(error) {
      console.log(error); 
    });  
  }  