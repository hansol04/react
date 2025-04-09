const Header = () => {
    return (
        <div className='Header'>
            <h3>TO DO LIST </h3>
            <h2>{new Date().toDateString()}</h2>
        </div>
    )
}
export default Header;