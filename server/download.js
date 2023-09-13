import ytdl from 'ytdl-core';
import fs from 'fs';
import { error, log } from 'console';

export const donwload = (videoId) => {

  const videoURL = 'https://www.youtube.com/shorts/' + videoId

  console.log('Iniciando donwload do Shorts.');

  ytdl(videoURL, { quality: 'lowestaudio', filter: 'audioonly'}).on('info', (info)=>{
    const seconds = info.formats[0].approxDurationsMs / 1000

    if(seconds > 60){
      throw new Error('A duração desse vídeo é maior do que 60 segundos.')
    }
  }).on('end', () => {
    console.log('Download finalizado :) !');
  }).on('error', ()=> {
    console.log("Não foi possível realizar o download do vídeo :( . Detalhes do erro:", error)
  }).pipe(fs.createWriteStream('./tmp/audio.mp4'))
}