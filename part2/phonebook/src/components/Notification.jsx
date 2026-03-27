const Notification = ({message}) => {
    const notificationStyle = { padding: '15px', color: 'red', border: '2px solid red', borderRadius: '10px', marginTop: '10px', marginBottom: '10px'}

    if ( message === null ) return null

    return (
        <div style={notificationStyle}>
            <p>{message}</p>
        </div>
    )

}

export default Notification