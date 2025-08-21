import { NavLink } from 'react-router';

function MainPage() {
  return (
    <div className="text-3xl">
      <div>
        <NavLink to="/about">About</NavLink>
      </div>
      <div>{'main page'}</div>
    </div>
  );
}

export default MainPage;
