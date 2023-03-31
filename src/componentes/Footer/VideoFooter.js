import React from 'react'
import "./VideoFooter.css"
import MusicNoteIcon from '@mui/icons-material/MusicNote';


function VideoFooter() {
  return (
    <div className='videoFooter'>
        <div className='videoFooter__texto'>
            <h3>@Paulo Ebac</h3>
            <p>Descrição do video</p>

            <div className='videoFooter__musica'>
                <MusicNoteIcon className="videoFooter__icone"/>
                <div className='videoFooterMusica__texto'>
                    <p>titulo da musica</p>
                </div>
            </div>
        </div>
        <img className="videoFooter__vinil" alt="Imagem de um disco de vinil girando" src='https://firebasestorage.googleapis.com/v0/b/jornada3-a7924.appspot.com/o/vinil.png?alt=media&token=8ab56d00-5de7-4332-a680-c6c22134c365'/>
    </div>
  )
}

export default VideoFooter