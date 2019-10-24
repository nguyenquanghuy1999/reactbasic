import React, {Component} from 'react';
import logo, {ReactComponent} from './logo.svg';
import './App.css';
import SanPham from './compoments/SanPham/SanPham';


class App extends Component {
  render(){
    return(
      <div className="App">
        <SanPham tenSanPham = "Cà phê Trung Nguyên" maSanPham = "01" giaSanPham = "120.000 VND">
          Hàng chính hãng
        </SanPham>
        <SanPham tenSanPham = "Cà phê Chồn " maSanPham = "02" giaSanPham = "16.000.000 VND / 1KG">
          Hàng chính hãng
        </SanPham>
        <SanPham tenSanPham = "Cà phê Blue Mountain" maSanPham = "03" giaSanPham = "100$ / 1KG">
          Hàng chính hãng
        </SanPham>
        <SanPham tenSanPham="cà phê thường" maSanPham ="04" giaSanPham= "200 VND / 2kg">
          Hàng chính hãng
        </SanPham>
      </div>

    
    
      // <div className = "App">
      //   <h1>Ứng dụng React Đầu Tiên</h1>
      //   <p>Nguyễn Quang Huy</p>
      //   <SinhVien hoten ="nguyễn như quỳnh" tuoi ="20">
      //     Sở thích: chơi thể thao, đi xem phim......
         
      //   </SinhVien>
      //   <SinhVien hoten = "nguyễn kim anh" tuoi ="19">
      //     Sở thích: bơi lội, xem phim, nge nhạc......
      //   </SinhVien>
      //   <SinhVien/> 
      // </div>
    );
    
  }
}
export default App;