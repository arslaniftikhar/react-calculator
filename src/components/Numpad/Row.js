const Row = (props) => {

    const keyPressHandler = (event) => {
        props.onClick(event.target.value);
    }

    const buttons = props.labels.map((label, index) => {
        const isLast = index + 1 === props.labels.length;
        const classes = label === '=' ? 'orange' : (isLast ? 'secondary-color' : '');
        return (
            <div key={index}>
                <button className={classes} value={label} onClick={keyPressHandler}>{label}</button>
            </div>
        )
    }
    )
    return (
        <div className="row">
            {buttons}
        </div>
    )
}
export default Row;