document.addEventListener("DOMContentLoaded", function() {
    // Hiển thị hình ảnh của Tom, Jerry, Spike
    document.getElementById("hinh_anh_Tom").innerHTML = `
        <img src="Tom-image.jpg" alt="Hình ảnh của Tom" width="300">
    `;
    document.getElementById("hinh_anh_Tom").style.display = 'block';

    document.getElementById("hinh_anh_Jerry").innerHTML = `
        <img src="Jerry-image.jpg" alt="Hình ảnh của Jerry" width="300">
    `;
    document.getElementById("hinh_anh_Jerry").style.display = 'block';

    document.getElementById("hinh_anh_Spike").innerHTML = `
        <img src="Spike-image.jpg" alt="Hình ảnh của Spike" width="300">
    `;
    document.getElementById("hinh_anh_Spike").style.display = 'block';

    // Thêm sự kiện cho nút "Press me"
    document.getElementById("pressMeButton").addEventListener("click", function() {
        // Hiển thị tên 3 thành viên nhóm khi nhấn nút
        alert("Tên thành viên nhóm: Alice, Bob, Charlie");
    });
});
