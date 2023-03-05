var lastScrollTop = 0;
var nav = document.querySelector(".nav");
var scrollSection = document.querySelector(".scroll");
var title = document.querySelector(".title");
var btn = document.querySelector(".showModal");
var btnClose = document.querySelector(".myclose");
var modal = document.querySelector(".mymodal");
var list = document.querySelector(".rank-list");
var isModalOpen = false;
var name = ''
var scrollTop = 0 
window.addEventListener("scroll", function () {
  if (!isModalOpen) {
    scrollTop += 10 + Math.random() * 5
    title.innerText = `Scrolled: ${scrollTop}`;
    scrollSection.style.height = `${(scrollSection.offsetHeight + 10) % window.innerHeight }px`;
    if (scrollTop > lastScrollTop) {
      nav.classList.add("hidden");
      document.body.classList.add("scrolled");
    } else {
      nav.classList.remove("hidden");
      document.body.classList.remove("scrolled");
    }
    lastScrollTop = scrollTop;
  }
});

function nameCutter(str, num) {
    if (str.length > num) {
        return str.slice(0, num) + '...';
    } else {
        return str;
    }
}
const topTen = (array) => {
    list.innerHTML = ''
    for (const item of array) {
        const li = document.createElement('li')
        const itemName = nameCutter(item.name, 20)
        console.log(`${itemName} ${item.scroll}`)
        li.innerText = `${item.scroll} ${item.name}`
        list.appendChild(li)
    }
}
btn.addEventListener("click", async () => {
  modal.style.display = "flex";
  isModalOpen = true;
  if (!name) {
      name = prompt('Enter your name: ')
  }
    axios.post('https://scrollRank.aleksandrlitvin.repl.co', {
        name: `${name}`,
        scroll: scrollTop || 0
    })
        .then(function (response) {
            topTen(response.data)
        })
        .catch(function (error) {
            console.log(error);
        });

});

btnClose.addEventListener("click", () => {
  modal.style.display = "none";
  isModalOpen = false;
});
console.log("here");


document.addEventListener('mousedown', event => {
    if (event.button === 1) {
        event.preventDefault();
    }
});

document.addEventListener('keydown', event => {
    const keysToDisable = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'PageUp', 'PageDown', 'Home', 'End', ' '];
    if (keysToDisable.includes(event.key)) {
        event.preventDefault();
    }
});
