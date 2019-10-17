import React, {Component} from 'react';
import logo, {ReactComponent} from './logo.svg';
import './App.css';
import SinhVien from './compoments/SinhVien/SinhVien';


class App extends Component {
  render(){
    return(
    
      <div className = "App">
        <h1>Ứng dụng React Đầu Tiên</h1>
        <p>Nguyễn Quang Huy</p>
        <SinhVien hoten ="nguyễn như quỳnh" tuoi ="20">
          Sở thích : chơi thể thao, xem phim, nghe nhạc.....
        </SinhVien>
        <SinhVien hoten = "nguyễn kim anh" tuoi ="19">
          Sở thích: bơi lội, xem phim, nge nhạc......
        </SinhVien>
        

        <SinhVien/> 
      </div>
    );
  }
}
export default App;