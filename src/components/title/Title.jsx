import "./Title.scss";
import React from "react";
import { useLocation } from "react-router-dom";
import SearchCombo from "../search-combo/SearchCombo";

const Title = () => {
  let location = useLocation();

  let pathname = location.pathname;
  // let m = pathname.match(/(warehouses).*(inventories)$/);
  // let m_inv = pathname.match(/.*(inventories)$/);
  // let m_warehouse = pathname.match(/(warehouses)/);
  // let m = /^\/warehouses/;
  // let m_wh_inv = /^\/warehouses.+?(?=(inventories))/;
  let m = /(?=.*warehouses.*)(?!.*inventories).*/;
  let m_wh_inv = /(?=.*warehouses.*)(?=.*inventories).*/;
  let m_inv = /(?=.*inventories.*)/;
  // console.log("mwhinv", m_wh_inv.test(pathname));
  // console.log("m", m.test(pathname));

  // let m_wh_edit = pathname.match(/(warehouses).*(edit)/);
  // let m_inv_edit = pathname.match(/(inventories).*(edit)/);
  // let m_wh_add = pathname.match(/(warehouses).*(add)/);
  // let m_inv_add = pathname.match(/(inventories).*(add)/);
  // let mm = pathname.match(/^\/warehouses.+?(?=(inventories))/);
  //
  // console.log("mm", mm);
  // console.log("m_warehouse", m_warehouse);
  // console.log("m_inv", m_inv);

  const insertSearchComboComp = () => {
    // if (m_warehouse) return <SearchCombo show={true} />;
    // else if (m_inv) return <SearchCombo show={false} />;
    switch (true) {
      case m.test(pathname):
        console.log("matched /warehouses");
        return <SearchCombo show={true} />;
      case m_wh_inv.test(pathname):
        console.log("matched /warehouses/abc123/inventories");
        return <SearchCombo show={false} />;
      default:
        console.log("default", pathname);
    }
  };

  const renderTextComp = (pathname) => {
    console.log("switch_pathname", pathname);
    switch (true) {
      case m.test(pathname):
        console.log("matched /warehouses");
        return <div className="title__text">Warehouses</div>;
      case m_wh_inv.test(pathname):
        console.log("matched /warehouses/abc123/inventories");
        return <div className="title__text">Inventories</div>;
      default:
        console.log("default", pathname);
    }
  };

  const wh = m.test(pathname);
  const wh_inv = m_wh_inv.test(pathname);

  return (
    <>
      <div className="title" style={{ height: "180px" }}>
        <div className="title__text-con">
          {renderTextComp(pathname)}
          {(wh || wh_inv) && (
            <div className="searchcombo__con">{insertSearchComboComp()}</div>
          )}
        </div>
      </div>
    </>
  );
};

export default Title;
