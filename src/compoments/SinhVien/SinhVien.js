import React from "react";

const intuoi = () => {
    return Math.floor(Math.random()* 100);
}

const sinhVien = (props) => {
    return(
        <div>
             <p>{ props.hoten } -tuổi: { props.tuoi} </p>
             <p>{ props.children}</p>
        </div>
    );
   
}

export default sinhVien;
