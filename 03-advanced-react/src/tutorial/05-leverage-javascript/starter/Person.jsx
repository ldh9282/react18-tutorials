import avatar from "../../../assets/default-avatar.svg";
import React from "react";
export function Person({ name, nickName = "defaultValue", images }) {
    // const img = images && images[0] && images[0].small && images[0].small.url;
    // const img = images?.[0]?.small?.url || avatar;
    const img = images?.[0]?.small?.url ?? avatar; // ??은 || 과 달리 undefined 랑 null 일때만 기본값 출력

    return (
        <div>
            <img src={img} alt={name} style={{ width: "50px" }} />
            <h4>{name}</h4>
            <p>Nickname : {nickName}</p>
        </div>
    );
}
