import PropTypes from 'prop-types';

export default function NavLink({ route }) {
  const { name, path } = route;
  return (
    <li>
      <a href={path}>{name}</a>
    </li>
  );
}

NavLink.propTypes = { route: PropTypes.object };
