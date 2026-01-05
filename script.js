const b1 = document.querySelector("#sim")
const b2 = document.querySelector("#nao")
const container = document.querySelector(".containerbotao")


b1.addEventListener("click", ()=>{
    window.alert("Por isso eu te amo meu amor, algum dia vamos casar!!!!!!")
})

b2.addEventListener("mouseover", ()=>{
    const larguraArea = container.clientWidth
    const alturaArea = container.clientHeight
    const larguraBtn = b2.offsetWidth
    const alturaBtn = b2.offsetHeight

    const novoX = Math.random() * (larguraArea - larguraBtn);
    const novoY = Math.random() * (alturaArea - alturaBtn);

    b2.style.left = novoX + 'px';
    b2.style.top = novoY + 'px';
})