
 class Noticia{
   constructor(titulo, data_da_publi, autor, resumo){
    this.titulo = titulo;
    this.data_da_publi = data_da_publi;
    this.autor = autor;
    this.resumo = resumo;
  }
  mostrarNoticia(){
    return this.titulo + "\n" + this.data_da_publi + "\n" + this.autor + "\n" + this.resumo 
  }
}

let requestURL = "https://www.luizpicolo.com.br/api.json";
let request = new XMLHttpRequest();

  request.open("GET", requestURL)
  request.responseType = "Json";
  request.send();
  request.onload = function(){
  let resposta = request.response;
  noticias = JSON.parse(resposta)

   // console.log(noticias)
  let titulodaNot = noticias.articles[0].title  
  let datadaNot = noticias.articles[0].publishedAt 
  let autordaNot = noticias.articles[0].author
  let resumodaNot = noticias.articles[0].description
  
   // articles.forEach(function(noticia){
  
//})
    
  let noticia = new Noticia(titulodaNot, datadaNot, autordaNot, resumodaNot);
  console.log(noticia.mostrarNoticia())
}


