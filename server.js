//Importar o Framework Express

const express = require("express");

//Criando servidor
const app = express();

//Criando rota principal (/)
//Estrutura: servidor.verbo("caminho", (req, res)=> {Função})

app.get("/", (req, res) => {
  res.send("API de Filmes");
});

//Criação da porta (onde servidor roda)
const PORT = 3000;

//Servidor (app), escute (listen) a nossa porta(PORT) e faça tal coisa: Mostre no local
app.listen(PORT, () => {
  console.log(` Servidor rodando na porta http:localhost:${PORT}`);
});

//Criando mini banco de dados, array de objetos [{}, {},{}] - formato JSON

const filmes = [
  {
    id: 1,
    titulo: "Interestelar",
    genero: "Ficção Científica",
  },
  {
    id: 2,
    titulo: "Velozes e Furiosos 5",
    genero: "Ação",
  },
  {
    id: 3,
    titulo: "As branquelas",
    genero: "Comédia",
  },
  {
    id: 4,
    titulo: "O poderoso chefão",
    genero: "Drama",
  },
  {
    id: 5,
    titulo: "Missão impossível",
    genero: "Ação",
  },
  {
    id: 6,
    titulo: "Oblivion",
    genero: "Ficção Científica",
  },
  {
    id: 7,
    titulo: "Titanic",
    genero: "Romance",
  }
];

//Criando uma rota para mostrar os filmes

app.get("/filmes", (req, res) => {
  res.json(filmes);
});

//Parâmetros de rotas

app.get("/filmes/:id", (req, res) => {
  const idQueFoiPegoNaURL = Number(req.params.id);

  const filmesEncontrado = filmes.find(
    (filmes) => filmes.id === idQueFoiPegoNaURL,
  );

  //retorne em formato JSON

  res.json(filmesEncontrado);

});


// Cadastrando um novo filme

app.post("filmes", (req, res) => {

    filmes.push(req.body) //Adicionar o filme no fim da array
    res.send("Filme cadastrado com sucesso!")

})
