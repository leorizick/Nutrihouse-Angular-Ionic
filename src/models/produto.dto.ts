export interface ProdutoDto {
    id: string;
    nome: string;
    descricao: string;
    codBarras: string;
    quantidade: number;
    preco: number;
    tipoCadastro: string;
    imageUrl? : string;
}