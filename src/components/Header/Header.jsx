import logo from '../../assets/logo.svg';

export const Header = () => {
  return (
    <header>
        <div className="left">
            <h2>My balance</h2>
            <h1>$921.48</h1>
        </div>
        <div className="right">
            <img src={logo} alt="logo" />
        </div>
    </header>
  )
}
