import React, {Component} from 'react';
import logo, {ReactComponent} from './logo.svg';
import './App.css';
// import SanPham from './compoments/SanPham/SanPham';
import SinhVien from './compoments/SinhVien/SinhVien';


class App extends Component {
  state ={
    sinhVien : [
      {hoten: "Nguyễn thị quỳnh như", tuoi:35, sothich: "ăn hàng"},
      {hoten:"Nguyễn văn quân", tuoi:15, sothich:"chơi thể thao"}
    ],
    lop: "Lập trình ReactJS"
  }
  xuLyCapNhat =() => {
    this.setState(
      {
        sinhVien : [
          {hoten: "Nguyễn thị kim anh", tuoi:30, sothich: "ăn hàng"},
          {hoten:"Nguyễn quang huy", tuoi:20, sothich:"chơi thể thao , nge nhạc "}
        ],
      }
    );
  }


  render(){
    return(
      // <div className="App">
      //   <SanPham tenSanPham = "Cà phê Trung Nguyên" maSanPham = "01" giaSanPham = "120.000 VND">
      //     Hàng chính hãng
      //   </SanPham>
      //   <SanPham tenSanPham = "Cà phê Chồn " maSanPham = "02" giaSanPham = "16.000.000 VND / 1KG">
      //     Hàng chính hãng
      //   </SanPham>
      //   <SanPham tenSanPham = "Cà phê Blue Mountain" maSanPham = "03" giaSanPham = "100$ / 1KG">
      //     Hàng chính hãng
      //   </SanPham>
      //   <SanPham tenSanPham="cà phê thường" maSanPham ="04" giaSanPham= "200 VND / 2kg">
      //     Hàng chính hãng
      //   </SanPham>
      // </div>

    
    
      <div className = "App">
        <marquee><h1>Ứng dụng React Đầu Tiên</h1></marquee>
        <p>Đến từ Nguyễn Quang Huy  -Lớp: {this.state.lop}</p>
        <button onClick = {this.xuLyCapNhat}>
          Cập nhật
        </button>
        <SinhVien

         hoten ={this.state.sinhVien[0].hoten} 
         tuoi ={this.state.sinhVien[0].tuoi}>
          Sở thích:{this.state.sinhVien[0].sothich}

        </SinhVien>
        <SinhVien 

         hoten = {this.state.sinhVien[1].hoten}
         tuoi= {this.state.sinhVien[1].tuoi}>
          Sở thích: {this.state.sinhVien[1].sothich}

        </SinhVien>
        
      </div>
    );
    
  }
}
export default App;