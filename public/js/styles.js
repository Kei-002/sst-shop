$(document).ready(function () {

    // CRUDS STYLES 

    const tabs = document.querySelector(".wrapper");
    const tabbut = document.querySelectorAll(".tab-button");
    const contents = document.querySelectorAll(".content");

    tabs.onclick = e => {

        const id = e.target.dataset.id;

        if (id) {
            tabbut.forEach(btn => {
                btn.classList.remove("active");
            });
            e.target.classList.add("active");

            contents.forEach(content => {
                content.classList.remove("active");
            });

            const element = document.getElementById(id);
            element.classList.add("active");
        }

    }

    // END CRUDS STYLES

});
