import React, { useState } from "react";
import styles from "./layoutAdmin.module.css";
import vn from "../../../assets/images/🇻🇳.png";
import gb from "../../../assets/images/🇬🇧.png";
import { DownOutlined } from "@ant-design/icons";
import colors from "../../../res/colors";
import { AppDispatch, RootState } from "../../redux/store";
import { TypedUseSelectorHook, useDispatch } from 'react-redux/es/exports';
import { setLanguage } from './../../features/language/languageSlice';
import { useSelector } from 'react-redux/es/exports';
type Props = {
    loading: boolean
    callBack: (e: boolean) => void
}
const SelectLanguage: React.FC<Props> = ({ loading, callBack }) => {
    const [showSelectLanguage, setShowSelectLanguage] = useState<boolean>(false);
    const dispatch = useDispatch<AppDispatch>()
    const useAppSelect: TypedUseSelectorHook<RootState> = useSelector;
    const language = useAppSelect((data: any) => data.language)
    const checkLanguage = language?.value?.language
    return (
        <div
            className={`${styles["flex"]} ${styles["language"]}`}
            onClick={() => setShowSelectLanguage(!showSelectLanguage)}
        >
            <span style={{ fontSize: 14, fontWeight: "400", marginRight: 5,textTransform:'uppercase' }}>
                {checkLanguage}
            </span>{" "}
            <DownOutlined style={{ fontSize: 11 }} />
            {showSelectLanguage == true && (
                <div className={styles.showSelectLanguage}>
                    <div
                        className={`${styles["flex"]} ${styles["title_language"]}`}
                        style={{
                            justifyContent: "space-around",
                            lineHeight: 2.5,
                        }}
                        onClick={async () => {
                            await callBack(true)
                            const time = setTimeout(async () => {
                                await dispatch(setLanguage('es'))
                                setShowSelectLanguage(false)
                            }, 1000);
                            setTimeout(async () => {
                                clearTimeout(time)
                                await callBack(false)
                            }, 1100);
                        }}
                    >
                        <span
                            style={{
                                color: colors._color_black,
                                fontSize: 14,
                                fontWeight: "500",
                            }}
                        >
                            Tiếng Anh
                        </span>
                        <div className={styles.logo} style={{ width: 14, height: 14 }}>
                            <img src={gb} alt="" />
                        </div>
                    </div>
                    <div
                        className={`${styles["flex"]} ${styles["title_language"]}`}
                        style={{
                            justifyContent: "space-around",
                            lineHeight: 2.5,
                        }}
                        onClick={async () => {
                            await callBack(true)
                            const time = setTimeout(async () => {
                                await dispatch(setLanguage('vn'))
                                setShowSelectLanguage(false)
                            }, 1000);
                            setTimeout(async () => {
                                clearTimeout(time)
                                await callBack(false)
                            }, 1100);
                        }}
                    >
                        <span
                            style={{
                                color: colors._color_black,
                                fontSize: 14,
                                fontWeight: "500",
                            }}
                        >
                            Tiếng Việt
                        </span>
                        <div className={styles.logo} style={{ width: 14, height: 14 }}>
                            <img src={vn} alt="" />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SelectLanguage;
