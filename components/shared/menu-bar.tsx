import Link from 'next/link';
import React from 'react'

const MenuBar = () => {
  return (
    <ul className="list  ">
      <li>
        <Link href={"/projects"} className="link">
          Projects
        </Link>
      </li>
      <li>
        <Link href={"/blog"} className="link  ">
          Blog
        </Link>
      </li>
      <li>
        <Link href={"/contact"} className="link">
          Contact
        </Link>
      </li>
    </ul>
  );
}

export default MenuBar