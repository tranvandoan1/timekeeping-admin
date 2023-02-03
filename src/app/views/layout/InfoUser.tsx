import { Avatar } from 'antd';
import React from 'react'
/// @ts-ignore
import { Size } from './../component/size';
import styles from "./layoutAdmin.module.css";

const InfoUser = () => {
    const sizes = Size()
    return (
        <React.Fragment>
            <span className={styles.name} style={{ color: sizes?.width > 1023 ? '#fff' : 'black', background: '#D53F8C', lineHeight: 2, padding: '0 5px', borderRadius: 2 }}>Trần văn Đoàn</span>
            <Avatar
                src="https://haycafe.vn/wp-content/uploads/2022/02/Anh-gai-xinh-Viet-Nam.jpg"
                size={40}
            />
        </React.Fragment>
    )
}

export default InfoUser