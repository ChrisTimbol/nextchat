import styles from '@/styles/ChatBox.module.css'

/* Aligns text left/color gray if sent by other then the user */
export default function ChatSender(props) {

    return <div className={styles.chatReceiver}>
        <div className={styles.user}>{props.user}</div>
        <div className={styles.chatReceiverWidth}>
            <div className={styles.chatReceiverColor}>{props.chatMessage}</div>
        </div>
    </div>


}