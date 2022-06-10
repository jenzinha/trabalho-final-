

// let requestURL = "https://www.luizpicolo.com.br/api.json";
// let request = new XMLHttpRequest();
//   request.open("GET", requestURL)
//    request.responseType = 'json';
//    request.send();

//    request.onload = function(){
//   let resposta = request.response;
// const elemento = document.getElementById('lista');
// let noticias = JSON.parse(resposta)

// let titulo = `<h1>Noticias</h1>`;
//   elemento.insertAdjacentHTML('afterbegin', titulo);

//   resposta.articles.forEach(noticias => {
//     let nome = `<div class="noticias">${noticias.source.title}</div>`;
//     elemento.insertAdjacentHTML('beforeend', nome);
//   });
// }


//  let titulodaNot = noticias.articles[0].title  
//  let datadaNot = noticias.articles[0].publishedAt 
//  let autordaNot = noticias.articles[0].author
//  let resumodaNot = noticias.articles[0].description
  

    
//    let noticia = new Noticia(titulodaNot, datadaNot, autordaNot, resumodaNot);
//    console.log(noticia.mostrarNoticia())


let requisicaoURL = 'https://www.luizpicolo.com.br/api.json';
let request = new XMLHttpRequest();
request.open('get', requisicaoURL);
request.responseType = 'json';
request.send();

request.onload = function() {
  
   class Noticias{
   constructor(nome, titulo, data_da_publi, autor, resumo, link){
    
    this.nome = nome;
    this.titulo = titulo;
    this.data_da_publi = data_da_publi;
    this.autor = autor;
    this.resumo = resumo;
    this.link = link;
  }
   
  mostrarNoticia(){
    return `
      <h1>${this.titulo} </h1> 
      <p> ${this.data_da_publi}</p>
      <p> ${this.autor}</p>
      <p> ${this.resumo}</p>
`
  }
}
  
class NoticiaDestaque extends Noticias{
  constructor(imagem, titulo, data_da_publi, autor, resumo){
    super(titulo, data_da_publi, autor, resumo)
    this.imagem = imagem;
  }
  
  mostrarDestaque(){
    return `<img src="https://techcrunch.com/wp-content/uploads/2021/06/GettyImages-186872728.jpg?w=600">${this.imagem} 
            <h1>${this.titulo} </h1> 
      <p> ${this.data_da_publi}</p>
      <p> ${this.autor}</p>
      <p> ${this.resumo}</p>
`  
  }
}
  
  let resposta = request.response;
  console.log(resposta)
  const elemento = document.getElementById('lista');

  
      let noticiasDestaque = new NoticiaDestaque(resposta.urlToImage, resposta.title, resposta.author, resposta.publishedAt, resposta.author, resposta.description)
    elemento.insertAdjacentHTML('afterbegin', noticiasDestaque.mostrarDestaque())

  resposta.articles.forEach(noticia => {


    let noticiaa = new Noticias(noticia.title, noticia.author, noticia.publishedAt, noticia.author, noticia.description)
    elemento.insertAdjacentHTML('afterbegin', noticiaa.mostrarNoticia())


    
    // let titulo= `<div class="noticia">${noticia.title}</div>`;
    // elemento.insertAdjacentHTML('beforeend', titulo);

    // let data= `<div class="noticia">${noticia.publishedAt}</div>`;
    // elemento.insertAdjacentHTML('beforeend', data);

    // let autor= `<div class="noticia">${noticia.author}</div>`;
    // elemento.insertAdjacentHTML('beforeend', autor);

    // let descricao= `<div class="noticia">${noticia.description}</div>`;
    // elemento.insertAdjacentHTML('beforeend', descricao);

  });
}