let requisicaoURL = 'https://www.luizpicolo.com.br/api.json';
let request = new XMLHttpRequest();
request.open('get', requisicaoURL);
request.responseType = 'json';
request.send();

request.onload = function() {
   class ErroCostumizado extends Error{
   constructor(nome, mensagem){
     super(nome, mensagem)
     this.name = nome;
     this.message = mensagem;
   }
     mensagem(){
       let linha1 = this.stack.split("\n")[1]
       let linha2 = linha1.split(":")[1]
       let linha3 = linha2.split(")")[0]
       
     return this.name + this.message + "\n" + "Há um erro na linha " + linha3
      }
  }
   class Noticias{
   constructor(nome, link, titulo, data_da_publi, autor){
 
    this.nome = nome;
    this.link = link;
    this.titulo = titulo;
    this.data_da_publi = data_da_publi;
    this.autor = autor;
  }
   
  mostrarNoticia(){
    
    if(this.nome && this.link && this.titulo && this.data_da_publi && this.autor == undefined ){
       throw new ErroCostumizado("Erro:", "Faltam campos a serem preenchidos.")
      }
     else{
       return `
<center>
<div class="bg-secondary bg-opacity-50 rounded" style="max-width: 50rem;">
 <h5>${this.nome}</h5> 
  <h5>Publicado em:${this.data_da_publi}</h5>
  <a class="text-decoration-none text-dark" href="${this.link}"> <h1 class="m-4" class="fs 3">${this.titulo} </h1> </a>
  <h5> ${this.autor}</h5>
</div>
</center>
`
     }
    }
   }
  
class NoticiaDestaque extends Noticias{
  constructor(imagem, nome, link, titulo, data_da_publi, autor, resumo){
    super(nome, link, titulo, data_da_publi, autor);
    this.imagem = imagem;
    this.resumo = resumo;
  }
  
  mostrarDestaque(){
     
    if(this.imagem && this.nome && this.link && this.titulo  && this.data_da_publi && this.autor && this.resumo == undefined){
       throw new ErroCostumizado("Erro:", "Faltam campos a serem preenchidos.")
      }
     else{
      return `
   <h1 class="text-center"> Notícias <h1>
  <div class="text-center mb-3" >
  <img class="rounded img-fluid" src="${this.imagem}">
  <h5>${this.nome}</h5>
  <h5>Publicado em: ${this.data_da_publi} </h5>
  <a class="text-decoration-none text-dark" href="${this.link}"> <h1 class="fs-1">${this.titulo} </h1> </a>
  <h5> ${this.autor}</h5>
  <center> <p class="fs-4 fw-lighter w-50"> ${this.resumo}</p> </center>
</div>
`
    }
  }
} 
  let resposta = request.response;
  const elemento = document.getElementById('lista');
  console.log(resposta)
   
      
  resposta.articles.forEach(noticia => {
  let noticiaa = new Noticias(noticia.source.name, noticia.url, noticia.title, noticia.publishedAt, noticia.author)
  elemento.insertAdjacentHTML('afterbegin', noticiaa.mostrarNoticia())
 })
    let noticiasDestaque = new NoticiaDestaque(resposta.articles[0].urlToImage,
                                               resposta.articles[0].source.name,
                                               resposta.articles[0].url,
                                               resposta.articles[0].title,
                                               resposta.articles[0].publishedAt,  
                                               resposta.articles[0].author, 
                                               resposta.articles[0].description)
    elemento.insertAdjacentHTML('afterbegin', noticiasDestaque.mostrarDestaque())
}





// class Pessoa{
  
// }

// class Fornecedor extends Pessoa{
//   constructor(credito, divida, empresa){
//     super();
//     this.valorCredito = credito;
//     this.valorDivida = divida;
//     this.empresa = empresa;
//   }

  
//  }




    // let titulo= `<div class="noticia">${noticia.title}</div>`;
    // elemento.insertAdjacentHTML('beforeend', titulo);

    // let data= `<div class="noticia">${noticia.publishedAt}</div>`;
    // elemento.insertAdjacentHTML('beforeend', data);

    // let autor= `<div class="noticia">${noticia.author}</div>`;
    // elemento.insertAdjacentHTML('beforeend', autor);

    // let descricao= `<div class="noticia">${noticia.description}</div>`;
    // elemento.insertAdjacentHTML('beforeend', descricao);

