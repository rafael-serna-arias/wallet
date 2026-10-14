
import { useProgress } from "@react-three/drei";
import { useEffect, useState } from "react";
import "./loader.scss";
import LogoIcon from "../components/ui/icons/logo-icon/LogoIcon";

export default function Loader() {
  const { progress, active } = useProgress();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // console.log("Loader:", { active, progress });

    if (!active && progress === 100) {
      const timeout = setTimeout(() => {
        setVisible(false);
      }, 1000);

      return () => clearTimeout(timeout);
    }
  }, [active, progress]);

  if (!visible) return null;

  return (
    <div className="loader">

      

      <div className="loader__content">
        <LogoIcon  className="loader__logo-icon"/>  
        <p className="loader__label">Loading experience</p>

        <p className="loader__percentage">
          {Math.round(progress)}%
        </p>

        <div className="loader__track">
          <div
            className="loader__bar"
            style={{ width: `${progress}%` }}
          />
        </div>
        
      </div>

    </div>
  );
}

