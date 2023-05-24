export const Task = (props) => {
    return (
        <div>
            <h3 style={{color: props.isComplete ? "green" : "black"}}>
                {props.taskName}</h3>
            <button onClick={() => props.markComplete(props.id)}>Complete</button>
            <button onClick={() => props.deleteTask(props.id)}> X </button>
        </div>
    )
}