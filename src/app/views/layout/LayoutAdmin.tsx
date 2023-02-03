import React, { useEffect, useState, useReducer } from "react";
import {
  LoadingOutlined,
  MenuFoldOutlined,
  MenuOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons";
import { Drawer, Layout } from "antd";
import logo from "../../../assets/images/Logo.png";
import styles from "./layoutAdmin.module.css";
import "../../../assets/css/Applayout.css";
import { Outlet } from "react-router-dom";
import colors from "../../../res/colors";

/// @ts-ignore
import { Size } from "./../component/size";
import InfoUser from "./InfoUser";
import SelectLanguage from "./SelectLanguage";
import { NavBar } from "./NavBar";

const { Header, Content } = Layout;
type State = {
  openMenu: boolean;
  activeMenu: number | null | string;
  openMenuMobile: boolean;
  loading: boolean;
};
const LayoutAdmin: React.FC = () => {
  const sizes = Size();

  const [state, setSate] = useReducer(
    (state: any, newState: Partial<any>) => ({
      ...state,
      ...newState,
    }),
    {
      openMenu: false,
      activeMenu: undefined,
      openMenuMobile: false,
      loading: false,
    }
  );

  const getActiveMenu = async () => {
    const getMenu = localStorage.getItem("activeMenu");
    setSate({ activeMenu: getMenu });
  };
  useEffect(() => {
    getActiveMenu();
  }, [state.activeMenu]);
  // // Encode
  // const message = '0329903787';
  // const encodedMessage = btoa(message);
  // console.log(encodedMessage,'encodedMessage');

  // // Decode
  // const decodedMessage = atob(encodedMessage);
  // console.log(decodedMessage,'decodedMessage');
  return (
    <Layout style={{ height: "100vh", position: 'relative' }}>

      <Layout style={{ height: "100%" }}>

        <Header className={styles.header} style={{ background: "#2C5282" }}>
          <div className={styles.headerLogo}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                height: "100%",
                zIndex: 10,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  zIndex: 10,
                }}
              >
                <div className={styles.logo}>
                  <img src={logo} alt="" />
                </div>
                <div style={{ fontSize: 20, marginLeft: 9 }}>
                  <span
                    style={{ color: colors._color_white }}
                    className={styles.name_web}
                  >
                    Vnshine <span style={{ color: "#63B3ED" }}>CMS</span>
                  </span>
                </div>
              </div>
              {sizes?.width > 1023 ? (
                state.openMenu == false ? (
                  <MenuUnfoldOutlined
                    onClick={() =>
                      sizes?.width == 1024
                        ? setSate({ openMenuMobile: true })
                        : setSate({ openMenu: true })
                    }
                    style={{
                      marginLeft: 70,
                      cursor: "pointer",
                      color: "#fff",
                      fontSize: 24,
                    }}
                  />
                ) : (
                  <MenuFoldOutlined
                    onClick={() =>
                      sizes?.width == 1024
                        ? setSate({ openMenuMobile: false })
                        : setSate({ openMenu: false })
                    }
                    style={{
                      marginLeft: 70,
                      cursor: "pointer",
                      color: "#fff",
                      fontSize: 24,
                    }}
                  />
                )
              ) : null}
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
              }}
            >
              {sizes?.width > 1023 ? (
                <React.Fragment>
                  <SelectLanguage
                    loading={state.loading}
                    callBack={(e: boolean) => setSate({ loading: e })}
                  />
                  <InfoUser />
                </React.Fragment>
              ) : (
                <div>
                  <MenuOutlined
                    className={styles.icon_menu_reponsive}
                    onClick={() => setSate({ openMenuMobile: true })}
                  />
                </div>
              )}
            </div>
          </div>
        </Header>
        <Content className={styles.content}>
          <Layout
            style={{
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                paddingLeft:
                  sizes?.width > 1024 ? (state.openMenu == true ? 0 : 30) : 0,
              }}
              className={styles.layout_main}
            >
              {sizes?.width > 1024 && (
                <NavBar openMenu={state.openMenu} hiddeMenu={() => null} />
              )}
              <Layout
                className="site-layout"
                style={{
                  transition: "0.3s",
                  width:
                    sizes?.width > 1024
                      ? state.openMenu == true
                        ? "95%"
                        : "80%"
                      : "100%",
                }}
              >
                <Content
                  className={styles.content2}
                  style={{
                    background: colors._color_white,
                    overflow: "auto",
                  }}
                >
                  <Outlet />
                </Content>
              </Layout>
            </div>
          </Layout>
        </Content>
      </Layout>

      <Drawer
        title={
          <div
            className={styles.flex}
            style={{ justifyContent: "space-between" }}
          >
            <InfoUser />
          </div>
        }
        placement="right"
        onClose={() => setSate({ openMenuMobile: false })}
        open={state.openMenuMobile}
      >
        <NavBar
          openMenuMobile={state.openMenuMobile}
          hiddeMenu={() => setSate({ openMenuMobile: false })}
        />
      </Drawer>
      {state.loading == true && (
        <div
          className={styles.loading}
        >
          <LoadingOutlined className={styles.iconLoading} />
        </div>
      )}
    </Layout>
  );
};

export default LayoutAdmin;
