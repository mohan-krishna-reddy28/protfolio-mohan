import {Link} from "react-router-dom";

export default function ProjectCard({ id, img, name, languages }) {
  return (
    <Link to={`/projects/${id}`} className="no-decoration">
      <div className="simple-card">
        <img src={img} alt={name} className="simple-card-img" />
        <h3 className="simple-card-title">{name}</h3>
        <ul className="languages-contianer">
          {languages.map((lang, index) => (
            <li key={index} className="simple-card-language">
              {lang}
            </li>
          ))}
        </ul>
      </div>
    </Link>
  );
}
