import Editora from "../modelo/Editora";

const editoras: Editora[] = [
  new Editora(4, "Editora Companhia das Letras"),
  new Editora(5, "Editora Martins Fontes"),
  new Editora(6, "Editora Martins Fontes")
];

class ControleEditora {
  getNomeEditora(codEditora: number): string | undefined {
    const editora = editoras.find(editora => editora.codEditora === codEditora);
    return editora ? editora.nome : undefined;
  }

  getEditoras(): Editora[] {
    return editoras;
  }
}

export default ControleEditora;
