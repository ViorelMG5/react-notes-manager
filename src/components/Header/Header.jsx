import { Logo } from "components/logo";
import s from "./style.module.css";
import logoSrc from "assets/images/logo.png";
import { ButtonPrimary } from "components/ButtonPrimary/ButtonPrimary";
import { useNavigate } from "react-router-dom";

export function Header(props) {
  const navigate = useNavigate();

  return (
    <div className={`row ${s.container}`}>
      <div className="col-xs-12 col-sm-4 col-4">
        <Logo
          title="NoteManager"
          subtitle="Mange your notes"
          onClick={() => navigate("/")}
          image={logoSrc}
        />
      </div>
      <div className="col-xs-12 col-sm-8 col-8 text-end">
        <ButtonPrimary onClick={() => navigate("/note/new")}>
          Add note +
        </ButtonPrimary>
      </div>
    </div>
  );
}
