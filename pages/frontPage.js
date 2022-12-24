class FrontPage {

    #html;
    constructor(port){
       this.#html = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <link href="style.css" rel="stylesheet">
                <title>Docker - Volume</title>
            </head>
            <body>
                <h1>Docker 7 - How Volumn Work in Docker</h1>
                <form action="http://localhost:${port}/post" method="post">
                <label>Input the Post Name</label>
                <input type='text' name=postName>
                <label>Input the Post Content</label>
                <textarea type='textarea'  rows="10" cols="10" name=postContent></textarea>
                <button type="submit">Submit Post</button>
                </form>
            </body>
            </html>
        `;
    };

    getHtml(){
        return this.#html;
    };
};

module.exports = FrontPage;