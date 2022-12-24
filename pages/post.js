class PostPage {
    #html;
    constructor(display,bg='white'){
        this.#html = `<div ${this.divTageStyle(bg)}><p ${this.pTageStyle()}>${display}<p/></div>`;
    };

    pTageStyle(){
        return 'style="font-size:3rem;  font-family:Helvetica;" ';
    };

    divTageStyle(bg){
        return `style="background-color:${bg};width:100vw;  height:100vh; display:flex; flex-direction:column; justify-content:center;align-items: center;" `;
    };

    getHtml(){
        return this.#html;
    };
};

module.exports = PostPage;