const secondsGroup = document.getElementById('orbit-seconds');
        const minutesGroup = document.getElementById('orbit-minutes');
        const hoursGroup = document.getElementById('orbit-hours');
        /* these lines pick the group tags from the HTML. each group contains one planet. the planet is offset from the center so spinning the group causes the planet to swing around the center in a perfect circle. */

        function updateClock() { /* gets time from user's computer */
            const now = new Date();
            const hours = now.getHours();
            const minutes = now.getMinutes();
            const seconds = now.getSeconds();
            const ms = now.getMilliseconds();

            const accurateSeconds = seconds + (ms / 1000); /* fractions make the movement smoother because whole seconds makes it very jerky. 1000 milliseconds in one second, 60s in a min, 60m in an hour, etc*/
            const accurateMinutes = minutes + (accurateSeconds / 60);
            const accurateHours = hours + (accurateMinutes / 60);

            const secondDeg = (accurateSeconds / 60) * 360; /* convert to degrees */
            const minuteDeg = (accurateMinutes / 60) * 360;
            const hourDeg = (accurateHours / 24) * 360; 

            secondsGroup.style.transform = `rotate(${secondDeg}deg)`; /* apply rotation w/ css */
            minutesGroup.style.transform = `rotate(${minuteDeg}deg)`;
            hoursGroup.style.transform = `rotate(${hourDeg}deg)`;

            requestAnimationFrame(updateClock); /* good for endless loop */
        }

        requestAnimationFrame(updateClock);