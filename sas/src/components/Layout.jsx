import { Link, NavLink } from 'react-router-dom';
import hldiLogoUrl from '../../../hldiLogo.png?url';

const navItems = [
  { to: '/', label: 'Analyze' },
  { to: '/reports', label: 'Reports' }
];

function Layout({ children }) {
  return (
    <div className="sas-shell">
      <header className="portfolio-header sas-header">
        <div className="nav-container sas-nav-container">
          <Link className="sas-brand" to="/">
            <img className="sas-brand-logo" src={hldiLogoUrl} alt="HLDI logo" />
            <span className="sas-brand-copy">
              <span className="sas-brand-label">hldesignedit.com</span>
              <span className="sas-brand-subtext">Site Analysis System</span>
            </span>
          </Link>
          <nav className="sas-nav" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) => `nav-link sas-nav-link${isActive ? ' is-active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="sas-page-shell">{children}</main>
    </div>
  );
}

export default Layout;