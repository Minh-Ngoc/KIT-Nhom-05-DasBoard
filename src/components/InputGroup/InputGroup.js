import './InputGroup.scss';

const InputGroup = ({ label, id, value, type, ...props }) => {
    return (
        <div className="input-group">
            <label htmlFor={id}> {label} <i>*</i> </label>
            <input 
                id={id} 
                type={!type ? "text" : type} 
                value={value} 
                {...props} 
            />
        </div>
    )
}

export default InputGroup;