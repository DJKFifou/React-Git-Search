export default function Input({onChange, onKeyDown, placeholder, className}) {
    return <input type="text" onChange={onChange} onKeyDown={onKeyDown} placeholder={placeholder} className={className} />
}