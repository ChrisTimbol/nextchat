import styles from '@/styles/ChatBox.module.css'


/* Aligns text right/changes blue if sent by user */
export default function ChatReceiver(props) {

    return <div className={styles.chatSender}>
        <div className={styles.user}>{props.user}</div>
        <div className={styles.chatSenderWidth}>
            <div className={styles.chatSenderColor}>{props.chatMessage} </div>
        </div>
    </div>


}