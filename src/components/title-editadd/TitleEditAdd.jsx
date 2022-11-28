import "./TitleEditAdd.scss";

const TitleEditAdd = ({ verb, table }) => {
  return (
    <div className="title-editadd">
      <div className="title-editadd__backarrow"></div>
      <div className="title-editadd__table-text">
        {verb} {table}
      </div>
    </div>
  );
};
