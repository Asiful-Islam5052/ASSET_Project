
  let nav = document.querySelector(".navbar");
  window.addEventListener("scroll", function(){
      let p = window.scrollY;

      if(p>180){
          nav.classList.add("stiky");
      }else{
          nav.classList.remove("stiky");
      }
  })


  let scrolltop = document.querySelector(".scrolltop");
  window.addEventListener("scroll", function(){
      let p2 = window.scrollY;

      if(p2>1000){
          scrolltop.style.display = "block";
      }else{
          scrolltop.style.display = "none";
      }
  })

    //date
        let date = new Date();
        let day = date.getDate();
        let month = date.getMonth() + 1;
        let year = date.getFullYear();

        let fulldate = day + "/" + month + "/" + year;

        document.getElementById("show").innerHTML = "Date : " + fulldate;

    //date

    //time

        setInterval(time, 1000);

        function time() {
          const date = new Date();
          document.getElementById("demo").innerHTML ="Time : " + date.toLocaleTimeString();
        }

    //time

    