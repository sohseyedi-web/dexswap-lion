import { NavLink } from "react-router-dom";

type CustomLinkProps = {
  name: string;
  to: string;
};

export const Customlink = ({ name, to }: CustomLinkProps) => {
  const navlinkClass = "transition-all duration-300 text-lg font-semibold";

  return (
    <li className="list-none">
      <NavLink
        to={to}
        className={({ isActive }) =>
          isActive ? `${navlinkClass} text-[#2cb67d]` : `${navlinkClass} hover:text-[#27cb67]`
        }
      >
        {name}
      </NavLink>
    </li>
  );
};
