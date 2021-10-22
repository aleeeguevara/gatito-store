export class Carousel{
    constructor(anterior, proximo, listaProdutos, navegacao){
        this.anterior= document.querySelector(anterior)
        this.proximo= document.querySelector(proximo)
        this.listaProdutos= document.querySelector(listaProdutos)
        this.navegacao= document.querySelector(navegacao)

        this.slides= this.getListaSlides()
        this.indicadores= this.getListaIndicadores()
        this.tamanhoSlide= this.getTamanhoSlide()

        
        console.log(this.tamanhoSlide)
   } 


getListaSlides(){
    return Array.from(this.listaProdutos.children);
}

getListaIndicadores() {
    return Array.from(this.navegacao.children);
}
getTamanhoSlide(){
    return this.slides[0].getBoundingClientRect().width
}
}