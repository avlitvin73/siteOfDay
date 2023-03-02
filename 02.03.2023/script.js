const elemset = document.querySelector(".set");
for (let j=0; j < 2; j++) {
  for (let i=0; i < 8 ; i++) {
    console.log('i', i )
    const elemdiv = document.createElement("div");
    const elemimg = document.createElement("img");
    elemimg.src = `./img/leaf_0${i % 5}.png`;
    elemdiv.style.left = `${i * 10 + Math.random() * 10}%`;
    elemdiv.style.animationDuration = `${5 + Math.random() * 30}s `
    elemdiv.appendChild(elemimg);
    elemset.appendChild(elemdiv);
  }
}
console.log('Here!')