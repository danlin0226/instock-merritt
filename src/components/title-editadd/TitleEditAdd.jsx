import "./TitleEditAdd.scss";
// import Backarrow from "../../assets/Icons/arrow_back-24px.svg";

const TitleEditAdd = ({ verb, table }) => {
  // return (
  //   <div className="title-editadd">
  //     <div className="title-editadd__backarrow">
  //       <img
  //         className="title-editadd__img-back"
  //         src={require("../../assets/Icons/arrow_back-24px.svg").default}
  //         alt="backarrow"
  //       />
  //     </div>
  //     <div className="title-editadd__table-text">
  //       {verb} {table}
  //     </div>
  //   </div>
  // );

  return (
    <>
      <div className="title-editadd">
        <div className="title-editadd__text-con">
          <div className="title-editadd__img-con">
            <img
              className="title-editadd__img-back"
              src={require("../../assets/Icons/arrow_back-24px.svg").default}
              alt="backarrow"
            />
          </div>
          <div className="title-editadd__text">{` ${verb} ${table} `}</div>
        </div>
      </div>
    </>
  );
};

export default TitleEditAdd;
