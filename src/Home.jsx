import "./Home.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="wrap">
      {/* 빛나는 동그라미는 장식용 요소로 분리 */}
      <div className="orb" aria-hidden="true" />
      <div className="text-block">
        <h1 className="reveal-line is-title" style={{ "--d": "0s" }}>
          <span className="inner underline">사람이 되자</span>
        </h1>

        <p className="reveal-line subtitle" style={{ "--d": "0.25s" }}>
          <span className="inner">거북이에서 사람으로,</span>
        </p>
      </div>

      <button className="cta" onClick={() => navigate("/index")}>
        start
      </button>
    </div>
  );
}
