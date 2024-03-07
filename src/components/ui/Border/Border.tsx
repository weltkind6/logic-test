import { ReactNode } from "react";
import "./styles.css";

interface BorderProps {
  children: ReactNode;
}

export default function Border({ children }: BorderProps) {
  return (
    <div className="container">
      <div className="content-area">
        <div className="content-bg"></div>
        <div className="content">
          <h3 className="text">{children}</h3>
        </div>
      </div>
    </div>
  );
}
