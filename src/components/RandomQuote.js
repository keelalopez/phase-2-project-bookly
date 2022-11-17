import {useState, useEffect} from "react"

function RandomQuote () {
    const [quote, setQuote] = useState({})

    useEffect(() => {
        fetch("https://api.quotable.io/random")
        .then(res => res.json())
        .then(data => setQuote(data))
    }, [])
    console.log(quote)
    return (
        <div>
            {quote.content}
            {quote.author}
        </div>
    )

}

export default RandomQuote;