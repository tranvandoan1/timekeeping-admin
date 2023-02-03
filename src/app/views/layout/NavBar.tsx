import React, { useEffect, useState, Suspense } from "react";
import {
  FileAddOutlined,
  RadarChartOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import styles from "./layoutAdmin.module.css";
import "../../../assets/css/Applayout.css";
import { useNavigate } from "react-router-dom";

/// @ts-ignore
import { Size } from "./../component/size";
import { TypedUseSelectorHook } from 'react-redux/es/exports';
import { RootState } from "../../redux/store";
import { useSelector } from 'react-redux/es/exports';
/// @ts-ignore
import Loading from "../component/loading";
import { RiDeleteBin6Line, RiPenNibLine } from 'react-icons/ri'
import { BsLightningCharge, BsBox } from 'react-icons/bs'
import { HiOutlineUsers } from 'react-icons/hi'
import { CgCoffee } from 'react-icons/cg'
import { FiImage, FiBookOpen } from 'react-icons/fi'
interface Props {
  openMenu?: boolean;
  openMenuMobile?: boolean;
  hiddeMenu?: () => void
}

export const NavBar = React.memo(({ openMenu, openMenuMobile, hiddeMenu }: Props) => {
  const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
  const language = useAppSelect((data: any) => data.language)
  const textNavbar = language?.value?.data.navbar
  const sizes = Size();
  const navigate = useNavigate();
  const [activeMenu, setActiveMenu] = useState<number | null | string>();
  const getActiveMenu = async () => {
    const getMenu = localStorage.getItem("activeMenu");
    setActiveMenu(getMenu);
  };
  useEffect(() => {
    getActiveMenu();
  }, [activeMenu]);
  const menu = [
    {
      id: 1,
      key: 1,
      name: textNavbar.timekeeping,
      icon: <RadarChartOutlined />,
      link: `/timesheets`
    },
    {
      id: 2,
      key: 2,
      name: textNavbar.request,
      icon: <FileAddOutlined />,
      link: `/requesta-and-approve`
    },
    {
      id: 3,
      key: 3,
      name: textNavbar.wage,
      icon: <RiPenNibLine style={{ transform: `rotate(85deg)` }} />,
      link: `/wage/list`
    },
    {
      id: 4,
      key: 4,
      name: textNavbar.file,
      icon: <FiImage />,
      link: `/timesheets`
    },
    {
      id: 5,
      key: 5,
      name: textNavbar.user,
      icon: <HiOutlineUsers />,
      link: `/timesheets`
    },
    {
      id: 6,
      key: 6,
      name: textNavbar.subscriptions,
      icon: <BsLightningCharge />,
      link: `/timesheets`
    },
    {
      id: 7,
      key: 7,
      name: textNavbar.archived_pages,
      icon: <RiDeleteBin6Line />,
      link: `/timesheets`
    },
    {
      id: 8,
      key: 8,
      name: textNavbar.themes,
      icon: <FiBookOpen />,
      link: `/timesheets`
    },
    {
      id: 9,
      key: 9,
      name: textNavbar.plugins,
      icon: <BsBox />,
      link: `/timesheets`
    },
    {
      id: 10,
      key: 10,
      name: textNavbar.upgrade_plans,
      icon: <CgCoffee />,
      link: `/timesheets`
    },

  ];
  const datamenu = (condition: any) => {
    const renderMenu = menu.map((item: any, index: any) => {
      if (condition == 1 ? index < 7 : index >= 7) {
        return {
          key: item.id,
          icon: item.icon,
          label: (
            <div className={styles.flex}>
              {(openMenu == false || openMenuMobile == true) && (
                <span
                  style={{
                    fontWeight: item.id == activeMenu ? "800" : "500",
                  }}
                >
                  {item.name}
                </span>
              )}
              {item.id == activeMenu && (
                <span
                  style={{
                    width: openMenu == false ? 15 : 12,
                    height: openMenu == false ? 15 : 12,
                    borderRadius: "100%",
                    background: "#D53F8C",
                  }}
                ></span>
              )}
            </div>
          ),
          onClick: () => {
            localStorage.removeItem("activeMenu");
            localStorage.setItem("activeMenu", JSON.stringify(item.id));
            setActiveMenu(item.id);
            /// @ts-ignore
            hiddeMenu()
            navigate(`${item.link}`);
          }
        }
      }
    });
    return renderMenu
  }

  return (
    <div
      style={{
        width:
          sizes?.width > 1024
            ? openMenu == true
              ? "6%"
              : "17%"
            : openMenuMobile == true
              ? "100%"
              : "0%",
        transition: "0.3s",
      }}
    >
      <Suspense fallback={<Loading />}>
        {(openMenu == false || openMenuMobile == true) && (
          <div className={styles.dashboard}>
            <RadarChartOutlined style={{ marginRight: 10, fontSize: 25 }} />
            <span style={{ fontSize: 20 }}>Dashboard</span>
          </div>
        )}
        <div
          style={{ height: "100%", overflow: "auto", width: "100%" }}
          className={styles.menu}
        >
          <div style={{ marginTop: 10 }}>
            <span style={{ color: "#4299E1", fontSize: 17, marginLeft: 28 }}>
              {textNavbar.manage.slice(0, 1)}{(openMenu == false || openMenuMobile == true) && `${textNavbar.manage.slice(1, 9)}`}
            </span>
            <Menu
              style={{
                fontWeight: "400",
                fontSize: 17,
                background: sizes?.width > 1024 ? "#EDF2F7" : "#fff",
                color: "#2C5282",
              }}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              /// @ts-ignore
              items={datamenu(1)}
            />
          </div>
          <div>
            <span style={{ color: "#4299E1", fontSize: 17, marginLeft: 28 }}>
              {textNavbar.pro_features.slice(0, 1)}{(openMenu == false || openMenuMobile == true) && `${textNavbar.pro_features.slice(1, 9)}`}
            </span>
            <Menu
              style={{
                fontWeight: "400",
                fontSize: 17,
                background: sizes?.width > 1024 ? "#EDF2F7" : "#fff",
                color: "#2C5282",
              }}
              theme="dark"
              mode="inline"
              defaultSelectedKeys={["1"]}
              /// @ts-ignore
              items={datamenu(2)}

            />
          </div>
        </div>
      </Suspense>
    </div>
  );
})
  ;
