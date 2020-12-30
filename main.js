function tinhTienTip(event){
    event.preventDefault();
    var tienThanhToan = document.getElementById("tienThanhToan").value;
    var tienTip = document.getElementById("tienTip").value;
    var tienShare = document.getElementById("tienShare").value;
    var ketQua =(tienThanhToan * tienTip) / tienShare;
    document.getElementById("thongBao").innerHTML = "TIP AMOUNT $ " +ketQua + " mỗi người";
    document.getElementById("thongBao").style.display = "block";
}