window.onload = function () {
    let hour = document.querySelector( '.hour' );
    let minute = document.querySelector( '.minutes' );
    let second = document.querySelector( '.seconds' );

    let startButton = document.querySelector( '.start' );
    let stopButton = document.querySelector( '.stop' );
    let resetButton = document.querySelector( '.reset' );

    let isRunning = false;
    let timer;

    function startTimer() {
        isRunning = true;
        timer = setInterval( () => {
            let seconds = parseInt( second.textContent );
            let minutes = parseInt( minute.textContent );
            let hours = parseInt( hour.textContent );

            seconds++;

            if ( seconds / 60 === 1 ) {
                seconds = 0;
                minutes++;

                if ( minutes / 60 === 1 ) {
                    minutes = 0;
                    hours++;
                }

                if ( hours < 10 ) {
                    hour.textContent = '0' + hours;
                } else {
                    hour.textContent = hours;
                }
            }

            if ( minutes < 10 ) {
                minute.textContent = '0' + minutes;
            } else {
                minute.textContent = minutes;
            }

            if ( seconds < 10 ) {
                second.textContent = '0' + seconds;
            } else {
                second.textContent = seconds;
            }
        }, 1000 );
    }

    function stopTimer() {
        clearInterval( timer );
        isRunning = false;
    }

    function resetTimer() {
        clearInterval( timer );
        isRunning = false;
        hour.textContent = '00';
        minute.textContent = '00';
        second.textContent = '00';
    }

    startButton.addEventListener( 'click', function () {
        if ( !isRunning ) {
            startTimer();
        }
    } );

    stopButton.addEventListener( 'click', function () {
        if ( isRunning ) {
            stopTimer();
        }
    } );

    resetButton.addEventListener( 'click', function () {
        resetTimer();
    } );
};
