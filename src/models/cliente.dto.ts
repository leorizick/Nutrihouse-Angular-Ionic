export interface ClienteDto{
    id: string;
    nome: string;
    descricao: string;
    tipoCliente: string;
    documento: string;
    tipoCadastro: string;
    imageUrl? : string;
}