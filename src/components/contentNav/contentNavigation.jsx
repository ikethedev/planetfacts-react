import './contentNavigation.css'

export default function ContentNavigation(props) {
    const {handleClick} = props
    console.log(handleClick)
  return (
    <nav className="content__nav-container">
      <ul className="content__nav">
        <li onClick={handleClick} className="nav__list-item" data-tab="overview">
          <span className="content__number">01</span>Overview
        </li>
        <li onClick={handleClick} className="nav__list-item" data-tab="internal">
          <span className="content__number">02</span>Structure
        </li>
        <li onClick={handleClick} className="nav__list-item" data-tab="surface">
          <span className="content__number">03</span>Geology
        </li>
      </ul>
    </nav>
  );
}
