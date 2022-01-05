import Row from "./Row";

const Numpad = (props) => {
    return (
        <div>
            <Row onClick={props.onClick} labels={['AC', '←', '%', '/']} />
            <Row onClick={props.onClick} labels={['7', '8', '9', '*']} />
            <Row onClick={props.onClick} labels={['4', '5', '6', '+']} />
            <Row onClick={props.onClick} labels={['3', '2', '1', '-']} />
            <Row onClick={props.onClick} labels={['0', '.', '=']} />

            <div className="error">
                <h2>{props.error}</h2>
            </div>
        </div>

    )
}
export default Numpad;