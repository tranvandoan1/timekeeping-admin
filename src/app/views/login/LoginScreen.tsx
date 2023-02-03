import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import lock from "./../../../assets/images/lock.png";
import logo from "../../../assets/images/Logo.png";
import mail from "../../../assets/images/mail.png";
import styles from "./../../../assets/css/login.module.css";

import { Suspense } from "react";
import { RootState } from "../../redux/store";
import { TypedUseSelectorHook, useSelector } from "react-redux/es/exports";
import Loading from "../component/loading";
import ModaAddShifts from "../modal/ModalAddShifts";
import ModalExportPDF from "../modal/ModalExportPDF";
import ModalNotificationTime from "../modal/ModalNotificationTime";
import ModalAddWage from "../modal/ModalAddWage";
import ModalNotificationFixTime from "../modal/ModalNotificationFixTime";
import ModalOption from "../modal/ModalOption";
import ModalPresonInformation from "../modal/ModalPresonInformation";
import ModalRemoveRefuseAccept from "../modal/ModalRemoveRefuseAccept";
import ModalReview from "../modal/ModalReview";

const LoginScreen = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (user: any) => {
    console.log("adsdggf");
  };
  const navigate = useNavigate();
  const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
  const language = useAppSelect((data: any) => data.language);
  const textLanguage = language?.value?.data.login;
  return (
    <div
      className={styles.wrapper}
      style={{
        background: "#F7FAFC",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <Suspense fallback={<Loading />}>
        <div
          className={styles.logo}
          style={{
            width: 100,
            marginBottom: 78,
            height: 100,
            position: "relative",
          }}
        >
          <img src={logo} alt="" />
        </div>

        <div className={styles.formContent}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div
              style={{
                paddingTop: "20px",
              }}
            >
              <div
                style={{
                  marginLeft: "10%",
                }}
              >
                <img
                  src={mail}
                  style={{
                    width: 30,
                    paddingRight: 10,
                    marginTop: -7,
                  }}
                />
                <label className={styles.text_label}>
                  {textLanguage?.emailAddress}
                </label>
              </div>
              <input
                type="email"
                className={styles.input}
                {...register("email", { required: true })}
              />
            </div>
            <div>
              {errors.password && (
                <p
                  style={{
                    margin: "10px 10%",
                    color: "red",
                  }}
                >
                  {textLanguage?.checkValidate}
                </p>
              )}
            </div>
            <div>
              <div
                style={{
                  marginLeft: "10%",
                }}
              >
                <img
                  src={lock}
                  style={{
                    width: 30,
                    paddingRight: 10,
                    marginTop: -7,
                  }}
                />
                <label className={styles.text_label}>
                  {textLanguage?.password}
                </label>
              </div>
              <input
                type="password"
                className={styles.input}
                {...register("password", { required: true })}
              />
            </div>
            <div>
              {errors.password && (
                <p
                  style={{
                    margin: "10px 10%",
                    color: "red",
                  }}
                >
                  {textLanguage?.checkValidate}
                </p>
              )}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                margin: "20px 10%",
                alignItems: "center",
                marginBottom: "20px",
              }}
            >
              <Link to="#" className={styles.link}>
                {textLanguage?.forgotPassword}
              </Link>
              <button
                type="submit"
                className={styles.button}
                onClick={() => navigate("/timesheets")}
              >
                {textLanguage?.buttonSignIn}
              </button>
            </div>
          </form>
        </div>
      </Suspense>
      {/* <ModaAddShifts
        title="353"
        visible={true}
        btnAccept={(e) => {
          console.log(e, "btnAccept");
        }}
        btnCancel={() => {
          // setVisible(false);
        }}
        // status={false}
        btnCheckBox={(data) => {
          console.log(data, "nhan ra");
        }}
        dataTime={[
          {
            id: 1,
            value: "Thứ hai",
            check: true,
          },
          {
            id: 2,
            value: "Thứ ba",
            check: false,
          },
          {
            id: 3,
            value: "Thứ tư",
            check: false,
          },
          {
            id: 4,
            value: "Thứ năm",
            check: true,
          },
          {
            id: 5,
            value: "Thứ sáu",
            check: false,
          },
          {
            id: 6,
            value: "Thứ bảy",
            check: false,
          },
          {
            id: 7,
            value: "Chủ nhật",
            check: false,
          },
        ]}
        data={[
          {
            id: 1,
            title: "Ca chủ nhật (08:00 - 12:00)",
            check: true,
          },
          {
            id: 2,
            title: "Ca hành chính (08:00 - 12:00)",
            check: false,
          },
          {
            id: 3,
            title: "Ca đêm (08:00 - 12:00)",
            check: false,
          },
        ]}
      /> */}
      {/* <ModalAddWage
      
        visible={true}
        btnAccept={() => {
          console.log("btnAccept");
        }}
        btnCancel={() => {
          console.log("btnCancel");
        }}
      /> */}

      {/* <ModalExportPDF
        visible={true}
        btnAccept={() => {
          console.log("DASGS");
        }}
        btnCancel={() => {
          console.log("DASGS");
        }}
      /> */}
      {/* <ModalNotificationFixTime
      // title="dfs"
        visible={true}
        btnAccept={() => {}}
        btnCancel={() => {}}
      /> */}

        {/* <ModalNotificationTime
          visible={true}
          title="36436"
          btnAccept={(e) => {
            console.log(e, "btnAccept");
            // setVisible(false)
          }}
          btnCancel={() => {
            console.log("btnCancel");
          }}
          data={[
            {
              label: "loai1",
              value: "loai1",
            },
            {
              label: "loai2",
              value: "loai2",
            },
            {
              label: "loai3",
              value: "loai3",
            },
          ]}
        /> */}
      {/* <ModalOption
        visible={true}
        
        btnAccept={() => {
          console.log("btnAccept");
        }}
        btnCancel={() => {
          console.log("btnCancel");
        }}
      /> */}
      {/* <ModalPresonInformation visible={true} /> */}
      {/* <ModalRemoveRefuseAccept
        visible={true}
        title="remove"
        status={true}
        btnAccept={() => {}}
        btnCancel={() => {}}
      /> */}
      {/* <ModalReview
        status={false}
        btnAccept={() => {
          console.log("btnAccept");
        }}
        btnCancel={() => {
          console.log("btnCancel");
        }}
        visible={true}
      /> */}
    </div>
  );
};

export default LoginScreen;
