import React          from 'react';

import Paper          from '@material-ui/core/Paper'
import InputBase      from '@material-ui/core/InputBase'
import Divider        from '@material-ui/core/Divider'
import IconButton     from '@material-ui/core/IconButton'
import MicIcon        from '@material-ui/icons/Mic'
import CameraAltIcon  from '@material-ui/icons/CameraAlt'
import MessageIcon    from '@material-ui/icons/Message'
import WallpaperIcon  from '@material-ui/icons/Wallpaper'

import { makeStyles } from '@material-ui/core/styles'
import { primary,
         secondary   } from './Themes'

const useStyles = makeStyles(
{
  roo :
  {
    padding         : '2px 4px',
    display         : 'flex',
    alignItems      : 'center',
    width           : 351,
    marginTop       : 8,
    backgroundColor : 'beige'
  },

  txt :
  {
    marginLeft : 8,
    flex       : 1,
  },

  cam :
  {
  },

  mic :
  {
  },
  
  ask :
  {
  //backgroundColor : primary,
    color           : primary
  },  

  sep :
  {
    width  : 1,
    height : 28,
    margin : 4,
  },
})

export default function QuizBox(props, hey) {

  console.log(`client > QuizBox : props = ${JSON.stringify(props, null, 2)} : ${JSON.stringify(hey)}`)

  const cls = useStyles()

  return (
    <Paper        className={cls.roo}>
      <IconButton className={cls.cam} onClick={() => props.onClickCam()}><CameraAltIcon /></IconButton>
      <InputBase  className={cls.txt} placeholder="Ask a Question" value={props.context.question} />
      <IconButton className={cls.mic} onClick={() => props.onClickMic()}><MicIcon       /></IconButton>
      <Divider    className={cls.sep} />
      <IconButton className={cls.ask} onClick={() => props.onClickAsk()}><MessageIcon   /></IconButton>
    </Paper>
  )
}