import cors from 'cors';
import express from 'express';

import { donwload } from './download.js';

const app = express();
app.use(cors());

app.get('/summary/:id', (request, response) => {
  donwload(request.params.id)
  response.json({ result: "Donwload do vídeo realizado com sucesso !" })
});

app.listen(3333, () => console.log('Servidor com porta 3333'));