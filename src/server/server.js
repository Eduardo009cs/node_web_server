import express from 'express';
import { join } from 'path';

export const startServer = (options) => {
    const{ port, public_path = 'public' } = options

    const app = express();
    app.use(express.static(public_path))

    app.get('*', (req, res) => {
        const indexPath = join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)
    }) 

    app.listen(port, () => {
        console.log(`Escuchando en el puerto ${port}`)
    })

}
