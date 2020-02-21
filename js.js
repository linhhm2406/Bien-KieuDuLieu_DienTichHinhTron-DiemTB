

    function tinhtong() {


        let diemly = parseInt(document.getElementById("ly").value);
        let diemhoa = parseInt(document.getElementById("hoa").value);
        let diemsinh = parseInt(document.getElementById("sinh").value);


        let td= diemly + diemhoa + diemsinh;
        let dtb=td/3;
        document.getElementById("td").value = td;
    }
    function tinhdtb() {


        let diemly = parseInt(document.getElementById("ly").value);
        let diemhoa = parseInt(document.getElementById("hoa").value);
        let diemsinh = parseInt(document.getElementById("sinh").value);


        let td= diemly + diemhoa + diemsinh;
        let dtb=td/3;
        document.getElementById("dtb").value = dtb;
    }