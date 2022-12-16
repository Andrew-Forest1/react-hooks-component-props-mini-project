import Article from "./Article"

const ArticleList = ({posts}) => {
    const displayPosts = posts.map((post) => {
        return <Article title={post.title} date={post.date} preview={post.preview} id={post.id} minutes={post.minutes}/>
    })

    return (
        <main>
            {displayPosts}
        </main>
    )
}

export default ArticleList