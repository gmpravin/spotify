if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", afterLoaded);
} else {
  afterLoaded();
}

function afterLoaded() {

  var resizer = document.querySelector("#resizer");
  var sidebar = document.querySelector("#sidebar");
  
  resizer.addEventListener("mousedown", (event) => {
    document.addEventListener("mousemove", resize, false);
    document.addEventListener("mouseup", () => {
      document.removeEventListener("mousemove", resize, false);
    }, false);
  });
  
  function resize(e) {
    
  let width = window.innerWidth;

  console.log(width)

    const size = `${e.x}px`;
    sidebar.style.flexBasis = size; 

  }
  
  sidebar.style.flexBasis = '200px'; 
}
