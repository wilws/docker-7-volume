class GetPost {

  #html;
  constructor(title, content, bg="#a4a4d7") {
    this.#html = 
    `<div ${this.divTageStyle(bg)}>
        <h1 ${this.childStyle()}> Post Title : ${title}<h1/>
        <p ${this.childStyle()}>${content}<p/>
    </div>`;
  };

  childStyle(n = 3) {
    return `style="font-size:${n}rem;  font-family:Helvetica;" `;
  };

  divTageStyle(bg) {
    return `style="background-color:${bg};width:100vw;  height:100vh; display:flex; flex-direction:column; justify-content:center;align-items: center;" `;
  };

  getHtml(){
    return this.#html;
  };
};

module.exports = GetPost;