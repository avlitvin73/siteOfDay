const title = document.querySelector('.title')
const fonts = [
    'Alegreya',
    'Alegreya Sans',
    'Archivo Narrow',
    'BioRhyme',
    'Cormorant',
    'DM Sans',
    'Eczar',
    'Fira Sans',
    'IBM Plex Sans',
    'Inknut Antiqua',
    'Inter',
    'Karla',
    'Lato',
    'Libre Baskerville',
    'Libre Franklin',
    'Lora',
    'Manrope',
    'Montserrat',
    'Playfair Display',
    'Poppins',
    'Proza Libre',
    'Roboto',
    'Roboto Slab',
    'Source Sans Pro',
    'Source Serif Pro',
    'Space Grotesk',
    'Space Mono',
    'Spectral',
    'Syne',
    'Work Sans',
]

const startTimer = () => {
    setTimeout(() => {
        title.style.fontFamily = fonts[Math.ceil((Math.random() * fonts.length -1))]
        startTimer()
    }, 500)
}
startTimer()