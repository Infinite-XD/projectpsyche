import { useNavigate } from "react-router-dom";
import "/Users/mustafa/repos/Personal-website/src/Dropdown.css"; // <-- add this new CSS file

export default function Dropdown() {
  const navigate = useNavigate();

  function handleChange(e) {
    navigate(e.target.value);
  }

  return (
    <div className="dropdown-bar">
      <div className="dropdown-wrapper">
        <select className="dropdown-select" onChange={handleChange}>
          <option value="/">Home</option>
          <option value="/page2">Math</option>
        </select>
        <span className="dropdown-arrow">⌄</span>
      </div>
    </div>
  );
}