import { NavLink } from 'react-router';

function AboutPage() {
  return (
    <div className="text-3xl">
      <div>
        <NavLink to="/main">Main</NavLink>
      </div>

      <div>{'About Page'}</div>
    </div>
  );
}

export default AboutPage;
