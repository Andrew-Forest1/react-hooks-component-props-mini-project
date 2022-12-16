function Article({title, date="January 1, 1970", preview, id, minutes}){
    const emojis = (minutes) => {
        let emo = ""
        if(minutes < 30){
            for(let index=0; index < Math.floor(minutes / 5); index++){
                emo += "☕️" 
            }
            return emo + minutes +" minutes"
        }
        else{
            for(let index=0; index < Math.floor(minutes / 10); index++){
                emo += "🍱" 
            }
            return emo + minutes +" minutes"
        }
    }
    
    return (
        <article key={id}>
            <h3>{title}</h3>
            <small>{date}</small>
            <p>{preview}</p>
            <p>{emojis(minutes)}</p>
        </article>
    )
}

export default Article