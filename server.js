//Importar o Framework Express

const express = require("express");

//Criando servidor
const app = express();

app.use(express.json()); //Middleware fica entre a requisição e a resposta, ele interpreta se formato JSON.

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
  },
  {
    id: 8,
    titulo: "The Matrix",
    genero: "Ficção Científica",
  },
  {
    id: 9,
    titulo: "The Godfather",
    genero: "Crime",
  },
  {
    id: 10,
    titulo: "Jurassic Park",
    genero: "Aventura",
  },
  {
    id: 11,
    titulo: "The Dark Knight",
    genero: "Ação",
  },
  {
    id: 12,
    titulo: "Forrest Gump",
    genero: "Drama",
  },
  {
    id: 13,
    titulo: "Toy Story",
    genero: "Animação",
  },
  {
    id: 14,
    titulo: "The Conjuring",
    genero: "Terror",
  },
  {
    id: 15,
    titulo: "Gladiator",
    genero: "Histórico",
  },
  {
    id: 16,
    titulo: "The Hangover",
    genero: "Comédia",
  },
  {
    id: 17,
    titulo: "Interstellar",
    genero: "Ficção Científica",
  },
  {
    id: 18,
    titulo: "Avatar",
    genero: "Fantasia",
  },
  {
    id: 19,
    titulo: "Rocky",
    genero: "Esporte",
  },
  {
    id: 20,
    titulo: "The Silence of the Lambs",
    genero: "Suspense",
  },
  {
    id: 21,
    titulo: "Finding Nemo",
    genero: "Animação",
  },
  {
    id: 22,
    titulo: "Mad Max: Fury Road",
    genero: "Ação",
  },
  {
    id: 23,
    titulo: "The Notebook",
    genero: "Romance",
  },
  {
    id: 24,
    titulo: "Parasite",
    genero: "Drama",
  },
  {
    id: 25,
    titulo: "Shrek",
    genero: "Comédia",
  },
  {
    id: 26,
    titulo: "The Exorcist",
    genero: "Terror",
  },
];

//-----------------------------------------
// Criando uma rota para mostrar os filmes
// ROTA: /filmes
//-----------------------------------------

app.get("/filmes", (req, res) => {
  res.json(filmes);
});

//Parâmetros de rotas

app.get("/filmes/:id", (req, res) => {
  const idQueFoiPegoNaURL = Number(req.params.id); //Pega a String da url "/filmes/2" e converte em Número.

  //Método "find()" irá percorrer o array, porém retorna o id correto do filmes escolhido =true.
  const filmesEncontrado = filmes.find(
    (filmes) => filmes.id === idQueFoiPegoNaURL,
  );

  //retorne em formato JSON

  res.json(filmesEncontrado);
});

//-----------------------------------------
// Cadastrando um novo filme
// POST: /filmes
//-----------------------------------------

app.post("/filmes", (req, res) => {
  const novoFilme = {
    id: filmes.length + 1, //ID é gerado com base no tamanho da array.

    titulo: req.body.titulo,
    genero: req.body.genero,
  };

  filmes.push(novoFilme); //Adiciona novo objeto "novoFilme" no final da array.
  res.send(`O Filme ${novoFilme.titulo} foi cadastrado com sucesso!`); //Retorna mensagem se objeto foi cadastro com sucesso.
});

//-----------------------------------------

// BANCO DE DADOS FICTÍCIO (SÉRIES)

//-----------------------------------------

//Array de séries

const series = [
  {
    id: 1,
    titulo: "Breaking Bad",
    genero: "Drama",
  },
  {
    id: 2,
    titulo: "Stranger Things",
    genero: "Ficção cientifica",
  },
  {
    id: 3,
    titulo: "Game of Thrones",
    genero: "Fantasia",
  },
  {
    id: 4,
    titulo: "The Office",
    genero: "Comédia",
  },
  {
    id: 5,
    titulo: "The Walking Dead",
    genero: "Terror",
  },
  {
    id: 6,
    titulo: "Sherlock",
    genero: "Suspense",
  },
  {
    id: 7,
    titulo: "Friends",
    genero: "Comédia",
  },
  {
    id: 8,
    titulo: "Dark",
    genero: "Ficção cientifica",
  },
  {
    id: 9,
    titulo: "Vikings",
    genero: "Histórico",
  },
  {
    id: 10,
    titulo: "Peaky Blinders",
    genero: "Crime",
  },
];

//-----------------------------------------
// Criando rota de séries
// ROTA: /series
//-----------------------------------------

app.get("/series", (req, res) => {
  res.send(series);
});

//-----------------------------------------
// Cadastrando uma nova série
// POST: /série
//-----------------------------------------

app.post("/series", (req, res) => {

  const novaSerie = {
    id: series.length + 1,
    titulo: req.body.titulo,
    genero: req.body.genero,
  }

  series.push(novaSerie);
  res.send(`A série ${novaSerie.titulo} foi cadastrada com sucesso!`);


});
