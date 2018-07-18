export function generateTemplate({scripts}){
    return `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>Title</title>
                <!--<link rel="stylesheet" type="text/css" href="./client.css">-->
                
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
                
            </head>
            <body>
            <div id="root">
                <!--REPLACE_ME-->
            </div>
            </body>
            </html>`
}
// export default  ``;