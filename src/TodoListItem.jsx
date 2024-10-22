
export default function TodoListItem({ listItems , printSome}) {
    return (
        <>
            <div>
                <ol>
                    {
                        listItems.map((item) => (
                            <li key={item.id}>
                                <span>{item.task}</span>
                                <button onClick={() => printSome(item.id)} >Delete</button>
                            </li>
                        ))
                    }
                </ol>
            </div>
        </>
    )
}