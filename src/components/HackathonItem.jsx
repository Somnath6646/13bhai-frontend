import "../css/JobItem.css";

export const HackathonItem = ({ ...props }) => {
  return (
    <div className="job-item">
      <div className="job-title-and-description-container">
        <div className="job-title-text">{props.title}</div>
        {props.budget ? (
          <div className="job-description-text">{props.description} </div>
        ) : (
          <div
            className="job-description-text"
            dangerouslySetInnerHTML={{ __html: props.description }}
          ></div>
        )}
      </div>
      <a href={props.url} className="url-text">
        apply here
      </a>
    </div>
  );
};
