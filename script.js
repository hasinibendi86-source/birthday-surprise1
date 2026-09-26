document.addEventListener("DOMContentLoaded", function () {

    const countdown = document.querySelector(".countdown");
    const openButton = document.getElementById("openButton");
    const heart = document.querySelector(".heart");
    const envelope = document.querySelector(".envelope");

    let number = 3;

    /*
     * Initially disable the button
     */
    openButton.classList.add("is-disabled");
    openButton.setAttribute("aria-disabled", "true");
    openButton.setAttribute("tabindex", "-1");

    /*
     * Countdown
     */
    const timer = setInterval(function () {

        number--;

        if (number > 0) {

            countdown.textContent = number;

            countdown.classList.remove("count-pop");

            void countdown.offsetWidth;

            countdown.classList.add("count-pop");

        }

        else {

            clearInterval(timer);

            /*
             * Show final countdown
             */
            countdown.textContent = "1";

            countdown.classList.remove("count-pop");

            void countdown.offsetWidth;

            countdown.classList.add("count-pop");

            /*
             * Wait 1 second after 1
             */
            setTimeout(function () {

                countdown.textContent = "💗";

                /*
                 * Start red heart blooming
                 */
                envelope.classList.add("heart-open");

                if (heart) {
                    heart.classList.add("bloom");
                }

                /*
                 * Enable button
                 */
                setTimeout(function () {

                    openButton.classList.remove("is-disabled");

                    openButton.removeAttribute("aria-disabled");

                    openButton.removeAttribute("tabindex");

                    openButton.innerHTML =
                        "💌 Open My Message 💗";

                    /*
                     * Small glow effect
                     */
                    openButton.classList.add("ready");

                }, 1200);

            }, 1000);

        }

    }, 1000);


    /*
     * Prevent opening before countdown finishes
     */
    openButton.addEventListener("click", function (event) {

        if (openButton.classList.contains("is-disabled")) {

            event.preventDefault();

        }

    });

});
