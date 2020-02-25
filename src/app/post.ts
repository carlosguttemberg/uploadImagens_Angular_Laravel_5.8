export class Post{
    constructor(
        public nome      : string,
        public titulo    : string,
        public subTitulo : string,
        public email     : string,
        public mensagem  : string,
        //parametros opcionais
        public arquivo?  : string,
        public id?       : number,
        public likes?    : number
    ){}
}