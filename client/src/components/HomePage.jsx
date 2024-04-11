import CardGame from "./CardGame"

function HomePage({ gameItems }) {
    return (
        <>
            {/* render a CardGame component to each element of the props array */}
            <ul>
                {gameItems.map((item) => (
                    <CardGame key={item.title} gameItems={item} />
                ))}
            </ul>
        </>
    )
}

export default HomePage