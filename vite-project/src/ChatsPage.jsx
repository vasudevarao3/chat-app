// import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'
import { PrettyChatWindow } from 'react-chat-engine-pretty'

export default function ChatsPage(props) {
    // const chatProps = useMultiChatLogic(
    //     '8c0952cd-7f5f-4495-adca-c0ced321bcc8',
    //     props.user.username,
    //     props.user.secret)
  return (
    <div style={{height: '100vh'}}>
        {/* <MultiChatSocket {...chatProps}/>
        <MultiChatWindow {...chatProps} style={{height: '100vh'}}/> */}
        <PrettyChatWindow 
            projectId= "8c0952cd-7f5f-4495-adca-c0ced321bcc8"
            username={props.user.username}
            secret={props.user.secret}
            style={{height:'100%'}}
        />
    </div>
  )
}
