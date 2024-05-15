import Livro from "../modelo/Livro";

const livros: Livro[] = [
  new Livro(1, 4, "1984", "1984 por George Orwell: Um romance distópico que retrata um futuro totalitário governado pelo Partido e Big Brother, onde Winston Smith desafia a manipulação estatal.", ["George Orwell"]),
  new Livro(2, 5, "O Hobbit", "O Hobbit por J.R.R. Tolkien: Bilbo Bolseiro, um hobbit, embarca em uma jornada inesperada com Gandalf e treze anões para recuperar um tesouro roubado por um dragão.", ["J.R.R. Tolkien"]),
  new Livro(3, 6, "O Senhor dos Anéis", "O Senhor dos Anéis por J.R.R. Tolkien: Frodo Bolseiro lidera uma comunidade diversificada em uma jornada para destruir o Um Anel e salvar a Terra-média da escuridão.", ["J.R.R. Tolkien "])
];

class ControleLivros {
  obterLivros(): Livro[] {
    return livros;
  }

  incluir(livro: Livro): void {
    livro.codigo = livros.length + 1;
    livros.push(livro);
  }

  excluir(codigo: number): void {
    const index = livros.findIndex(livro => livro.codigo === codigo);
    if (index !== -1) {
      livros.splice(index, 1);
    }
  }
}

export default ControleLivros;
