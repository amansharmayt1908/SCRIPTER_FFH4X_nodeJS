let color = document.querySelector(".color-button");
let isDark = false;

color.addEventListener("click", () => {
    if (!isDark) {
        document.body.style.backgroundColor = "black";
        document.querySelectorAll('.cta span').forEach(span => {
            span.style.color = "white";
        });
        document.querySelectorAll('.glass').forEach(glass => {
            glass.style.background = "black";
            glass.style.borderColor = "rgba(255, 255, 255, 0.2)";
        });
        color.textContent = "Light Mode";
        isDark = true;
    } else {
        document.body.style.backgroundColor = "white"; 
        document.querySelectorAll('.cta span').forEach(span => {
            span.style.color = "white";
        });
        document.querySelectorAll('.glass').forEach(glass => {
            glass.style.background = "black";
            glass.style.borderColor = "rgba(255, 255, 255, 0.2)";
        });
        color.textContent = "Dark Mode";
        isDark = false;
    }
});
let basic = document.querySelector("#b");
let advance = document.querySelector("#ad"); 
let supreme = document.querySelector("#s");

basic.addEventListener("click", () => {
    window.location.href = '/BasicSensi';
});

advance.addEventListener("click", () => {
    window.location.href = '/AdvanceSensi';
});

supreme.addEventListener("click", () => {
    window.location.href = '/SupremeSensi';
});
