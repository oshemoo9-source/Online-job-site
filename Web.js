document.getElementById("applyForm").addEventListener("submit", function(e) {
    e.preventDefault();

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let job = document.getElementById("job").value;
    let msg = document.getElementById("msg").value;

    alert("تم إرسال طلبك بنجاح يا " + name + " ✔️");
});
