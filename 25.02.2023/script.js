var word
const getData = async () => {
    const response  = await axios('https://wordofdayserver.aleksandrlitvin.repl.co/', {headers: {"Access-Control-Allow-Origin": "*"}})
    const title = document.querySelector('.title')
    title.classList.add('smooth')
    title.innerText = response.data.toUpperCase() || ''
}
const delay = setTimeout(() => getData(), 3000)
