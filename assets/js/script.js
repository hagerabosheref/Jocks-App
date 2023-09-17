var butt = document.querySelector('.butt');
var jokeContent = document.querySelector('.joke-content');

butt.addEventListener('click', getJoke);
var index = 0;
function getJoke() {
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'assets/js/index.json', true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      var joke = JSON.parse(xhr.responseText);
      //console.log(joke[index]);
      jokeContent.innerHTML = `
                              <div style="padding:2rem;">
                              <span style="margin-bottom:2rem; font-size: clamp(1em, 5vw, 2.5em); display:block;">${joke[index].title}</span>
                              <span style="margin-bottom:2rem; font-size: clamp(0.5em, 5vw, 1.5em);">${joke[index].text}</span>
                              </div>
                            `;
      (index==joke.length-1)?index=0:index+=1;
    }
  };
  xhr.send();
}