const Button = (props) => {

    const {icon, children} = props;
    return (
        <button className="rounded-lg w-full bg-blue-800 hover:bg-blue-700 text-white px-3 py-3 md:px-7 md:py-5 mt-5 text-xl md:text-2xl font-regular">
        {icon && <i className={`bi ${icon} me-2`}></i>}
        {children}</button>
    )
}

export default Button;