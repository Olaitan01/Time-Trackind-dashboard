const container = document.querySelector(".contain");
const btns = document.querySelectorAll(".btn");
const wkC = document.querySelector(".wk-current");
const wkP = document.querySelector(".wk-previous");
const plC = document.querySelector(".pl-current");
const plP = document.querySelector(".pl-previous");
const stC = document.querySelector(".st-current");
const stP = document.querySelector(".st-previous");
const exC = document.querySelector(".ex-current");
const exP = document.querySelector(".ex-previous");
const soC = document.querySelector(".so-current");
const soP = document.querySelector(".so-previous");
const sfC = document.querySelector(".sc-current");
const sfP = document.querySelector(".sc-previous");

/**Fetch data using XMLHTttpRequest */
let data = new XMLHttpRequest();
data.open("GET", "data.json", true);
data.send();
data.onload = () => {
  if (data.status === 200) {
    timelinePeriodicity();
  } else {
    throw Error("Data couldn't be  fetched");
    alert(Error);
  }
};

/**The data retrieved from the object is passed into a function */
function timelinePeriodicity() {
  const response = JSON.parse(data.response);
  let timeframes = response[0].timeframes;

    /**The buttons looped in order to get the clicked button */
  btns.forEach((btn) => {
    btn.addEventListener("click", () => {
       
        /**Display a particular time if it passess a condition */
      if(btn.innerText==="Daily") {
        wkC.innerText = response[0].timeframes.daily.current;
        wkP.innerText = response[0].timeframes.daily.previous;
        plC.innerText = response[1].timeframes.daily.current;
        plP.innerText = response[1].timeframes.daily.previous;
        stC.innerText = response[2].timeframes.daily.current;
        stP.innerText = response[2].timeframes.daily.previous;
        exC.innerText = response[3].timeframes.daily.current;
        exP.innerText = response[3].timeframes.daily.previous;
        soC.innerText = response[4].timeframes.daily.current;
        soP.innerText = response[4].timeframes.daily.previous;
        sfC.innerText = response[5].timeframes.daily.current;
        sfP.innerText = response[5].timeframes.daily.previous;
    
      } else if(btn.innerText == "Weekly") {
        wkC.innerText = response[0].timeframes.weekly.current;
        wkP.innerText = response[0].timeframes.weekly.previous;
        plC.innerText = response[1].timeframes.weekly.current;
        plP.innerText = response[1].timeframes.weekly.previous;
        stC.innerText = response[2].timeframes.weekly.current;
        stP.innerText = response[2].timeframes.weekly.previous;
        exC.innerText = response[3].timeframes.weekly.current;
        exP.innerText = response[3].timeframes.weekly.previous;
        soC.innerText = response[4].timeframes.weekly.current;
        soP.innerText = response[4].timeframes.weekly.previous;
        sfC.innerText = response[5].timeframes.weekly.current;
        sfP.innerText = response[5].timeframes.weekly.previous;
        
      } else {
        wkC.innerText = response[0].timeframes.monthly.current;
        wkP.innerText = response[0].timeframes.monthly.previous;
        plC.innerText = response[1].timeframes.monthly.current;
        plP.innerText = response[1].timeframes.monthly.previous;
        stC.innerText = response[2].timeframes.monthly.current;
        stP.innerText = response[2].timeframes.monthly.previous;
        exC.innerText = response[3].timeframes.monthly.current;
        exP.innerText = response[3].timeframes.monthly.previous;
        soC.innerText = response[4].timeframes.monthly.current;
        soP.innerText = response[4].timeframes.monthly.previous;
        sfC.innerText = response[5].timeframes.monthly.current;
        sfP.innerText = response[5].timeframes.monthly.previous;
        
      }
    });
  });


}
