function Navigation({ handleNav, main }) {
  const tabs = ['About', 'Projects', 'Contact', 'Resume']
  return (
    <div className="nav">
      {tabs.map((tab, i) => (
        <li
          key={i}
          className={`nav-link ${tab === main && `active`}`}
          onClick={() => handleNav(tab)}
        >
          {tab}
        </li>
      ))}
    </div>
  )
}

export default Navigation
