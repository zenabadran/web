const btn = document.getElementById("btn");

        btn.addEventListener("click", () => {
            btn.style.display = "none";

            const video = document.getElementById("video");
            video.style.display = "block";
            const playvideo = document.getElementById("playvideo");
            playvideo.style.background = "none";
        });