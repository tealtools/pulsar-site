import React, { useEffect } from "react";
import useScrollPosition from "../../useScrollPosition";

import s from './Parallax.module.css';

type ParallaxProps = {
  children: React.ReactNode
}

const Parallax = (props: ParallaxProps) => {
  const { children } = props;
  const scrollPosition = useScrollPosition();

  return (
    <div className={s.container}>
      <div className={`${s.component} ${scrollPosition > 0 ? s.component_disappeared : ''}`}>
        {children}
      </div>
    </div>
  );
};

export default Parallax;
