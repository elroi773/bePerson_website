import './Home.css';
import { useNavigate } from "react-router-dom";


export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="wrap">
      {/* 빛나는 동그라미는 장식용 요소로 분리 */}
      <div className="orb" aria-hidden="true" />

      <h1>사람이 되자</h1>
      <p>거북이에서 사람으로,</p>
      <button className="cta" onClick={() => navigate("/index")}>start</button>
    </div>
  );
}
