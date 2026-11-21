/* ==================================================
   FOCUSOS UI JAVASCRIPT
   UI ONLY
================================================== */


/* ==================================================
   GOAL MODAL ELEMENTS
================================================== */

const goalModal =
    document.getElementById("goalModal");

const changeGoalButton =
    document.getElementById("changeGoalButton");

const closeGoalButton =
    document.getElementById("closeGoalModal");

const saveGoalButton =
    document.getElementById("saveGoalButton");

const goalType =
    document.getElementById("goalType");

const goalText =
    document.getElementById("goalText");

const currentGoalDisplay =
    document.getElementById("currentGoalDisplay");


/* ==================================================
   OPEN GOAL MODAL
================================================== */

function openGoalModal() {

    if (!goalModal) {
        return;
    }

    goalModal.classList.remove("hidden");

    goalModal.setAttribute(
        "aria-hidden",
        "false"
    );
}


/* ==================================================
   CLOSE GOAL MODAL
================================================== */

function closeGoalModalWindow() {

    if (!goalModal) {
        return;
    }

    goalModal.classList.add("hidden");

    goalModal.setAttribute(
        "aria-hidden",
        "true"
    );
}


/* SET GOAL BUTTON */

if (changeGoalButton) {

    changeGoalButton.addEventListener(
        "click",
        function () {

            openGoalModal();

        }
    );
}


/* X BUTTON */

if (closeGoalButton) {

    closeGoalButton.addEventListener(
        "click",
        function () {

            closeGoalModalWindow();

        }
    );
}


/* CLICK OUTSIDE MODAL */

if (goalModal) {

    goalModal.addEventListener(
        "click",
        function (event) {

            if (event.target === goalModal) {

                closeGoalModalWindow();

            }

        }
    );
}


/* ESC KEY */

document.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Escape" &&
            goalModal &&
            !goalModal.classList.contains("hidden")
        ) {

            closeGoalModalWindow();

        }

    }
);


/* ==================================================
   SAVE GOAL TO UI
================================================== */

if (saveGoalButton) {

    saveGoalButton.addEventListener(
        "click",
        function () {

            const selectedGoalType =
                goalType.value;

            const enteredGoal =
                goalText.value.trim();


            if (!selectedGoalType) {

                alert(
                    "Please select a goal type."
                );

                return;
            }


            if (!enteredGoal) {

                alert(
                    "Please enter your specific goal."
                );

                return;
            }


            /*
            UI ONLY

            The backend can later use:
            goalType.value
            goalText.value
            */


            if (currentGoalDisplay) {

                currentGoalDisplay.textContent =
                    enteredGoal;

            }


            closeGoalModalWindow();

        }
    );
}


/* ==================================================
   SESSION ELEMENTS
================================================== */

const startButton =
    document.getElementById("startButton");

const endButton =
    document.getElementById("endButton");

const sessionScan =
    document.getElementById("sessionScan");

const cameraStatus =
    document.getElementById("cameraStatus");

const monitorMessage =
    document.getElementById("monitorMessage");

const currentStatus =
    document.getElementById("currentStatus");


/* ==================================================
   START SESSION UI
================================================== */

if (startButton) {

    startButton.addEventListener(
        "click",
        function () {

            /*
            Require the user to select
            a goal before changing the UI.
            */

            if (
                currentGoalDisplay &&
                currentGoalDisplay.textContent ===
                "No goal selected"
            ) {

                openGoalModal();

                return;
            }


            if (sessionScan) {

                sessionScan.classList.remove(
                    "hidden"
                );

            }


            if (cameraStatus) {

                cameraStatus.textContent =
                    "● ACTIVE";

            }


            if (monitorMessage) {

                monitorMessage.textContent =
                    "● Session active";

            }


            if (currentStatus) {

                currentStatus.textContent =
                    "Focused";

            }


            startButton.textContent =
                "Session Active";


            startButton.disabled =
                true;

        }
    );
}


/* ==================================================
   END SESSION UI
================================================== */

if (endButton) {

    endButton.addEventListener(
        "click",
        function () {

            if (sessionScan) {

                sessionScan.classList.add(
                    "hidden"
                );

            }


            if (cameraStatus) {

                cameraStatus.textContent =
                    "● READY";

            }


            if (monitorMessage) {

                monitorMessage.textContent =
                    "● Ready to monitor";

            }


            if (currentStatus) {

                currentStatus.textContent =
                    "Ready";

            }


            if (startButton) {

                startButton.textContent =
                    "Start Session";


                startButton.disabled =
                    false;

            }

        }
    );
}


/* ==================================================
   ALERT PREVIEW
================================================== */

const alertButton =
    document.getElementById("alertButton");

const distractionAlert =
    document.getElementById("distractionAlert");

const closeAlert =
    document.getElementById("closeAlert");


if (
    alertButton &&
    distractionAlert
) {

    alertButton.addEventListener(
        "click",
        function () {

            distractionAlert.classList.remove(
                "hidden"
            );

        }
    );
}


if (
    closeAlert &&
    distractionAlert
) {

    closeAlert.addEventListener(
        "click",
        function () {

            distractionAlert.classList.add(
                "hidden"
            );

        }
    );
}


/* ==================================================
   DASHBOARD PERIOD BUTTONS
================================================== */

const periodButtons =
    document.querySelectorAll(
        ".period-button"
    );


periodButtons.forEach(
    function (button) {

        button.addEventListener(
            "click",
            function () {

                periodButtons.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                button.classList.add(
                    "active"
                );


                /*
                UI ONLY.

                Your backend can later
                fetch the correct data
                for Today / Week / Month.
                */

            }
        );

    }
);


/* ==================================================
   DASHBOARD SIDEBAR
================================================== */

const sidebarLinks =
    document.querySelectorAll(
        ".sidebar-link"
    );


sidebarLinks.forEach(
    function (link) {

        link.addEventListener(
            "click",
            function () {

                const destination =
                    link.getAttribute("href");


                /*
                Only change active styling
                for links that stay on
                the dashboard page.
                */

                if (
                    !destination ||
                    !destination.startsWith("#")
                ) {

                    return;

                }


                sidebarLinks.forEach(
                    function (item) {

                        item.classList.remove(
                            "active"
                        );

                    }
                );


                link.classList.add(
                    "active"
                );

            }
        );

    }
);

/* =========================================
   LOGIN FORM
========================================= */

const loginForm =
    document.getElementById("loginForm");

const loginError =
    document.getElementById("loginError");

const loginErrorText =
    document.getElementById("loginErrorText");

const emailInput =
    document.getElementById("email");

const passwordInput =
    document.getElementById("password");


if (loginForm) {

    loginForm.addEventListener(
        "submit",
        function (event) {

            event.preventDefault();


            const email =
                emailInput.value.trim();

            const password =
                passwordInput.value.trim();


            /* Clear old errors */

            hideLoginError();


            /* Empty email */

            if (!email) {

                showLoginError(
                    "Please enter your email address."
                );

                emailInput.classList.add(
                    "input-error"
                );

                return;
            }


            /* Empty password */

            if (!password) {

                showLoginError(
                    "Please enter your password."
                );

                passwordInput.classList.add(
                    "input-error"
                );

                return;
            }


           

            showLoginError(
                "We couldn't find an account with those login details."
            );

        }
    );
}


/* SHOW LOGIN ERROR*/

function showLoginError(message) {

    if (!loginError) {
        return;
    }


    loginErrorText.textContent =
        message;


    loginError.classList.remove(
        "hidden"
    );
}


/* HIDE LOGIN ERROR*/

function hideLoginError() {

    if (!loginError) {
        return;
    }


    loginError.classList.add(
        "hidden"
    );


    if (emailInput) {

        emailInput.classList.remove(
            "input-error"
        );
    }


    if (passwordInput) {

        passwordInput.classList.remove(
            "input-error"
        );
    }
}


/* REMOVE ERROR WHEN USER TYPES AGAIN */

if (emailInput) {

    emailInput.addEventListener(
        "input",
        hideLoginError
    );
}


if (passwordInput) {

    passwordInput.addEventListener(
        "input",
        hideLoginError
    );
}