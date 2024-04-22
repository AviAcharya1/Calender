window.onload = () => {
    const month = document.querySelector("#month");
    const date = document.querySelector("#date");
    const days = document.querySelector("#days");

    const prevMonthBtn = document.querySelector("#prevMonth");
    const nextMonthBtn = document.querySelector("#nextMonth");
    let currentDate = new Date();
    let currentMonth = currentDate.getMonth();
    let currentYear = currentDate.getFullYear();

    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

    function renderCalendar(year, month) {
        const firstDay = new Date(year, month, 1).getDay();
        const lastDay = new Date(year, month + 1, 0).getDate();

        const monthName = months[month];
        const formattedDate = `${monthName} ${currentDate.getFullYear()}`;

        month.innerText = monthName;
        date.innerText = formattedDate;

        let result = "";
        for (let i = 0; i < firstDay; i++) {
            result += `<div class="empty"></div>`;
        }
        for (let i = 1; i <= lastDay; i++) {
            const currentDateObj = new Date(year, month, i);
            result += currentDateObj.toDateString() === currentDate.toDateString()
                ? `<div class="today">${i}</div>`
                : `<div>${i}</div>`;
        }
        days.innerHTML = result;
    }

    function prevMonth() {
        currentMonth--;
        if (currentMonth < 0) {
            currentMonth = 11;
            currentYear--;
        }
        renderCalendar(currentYear, currentMonth);
    }

    function nextMonth() {
        currentMonth++;
        if (currentMonth > 11) {
            currentMonth = 0;
            currentYear++;
        }
        renderCalendar(currentYear, currentMonth);
    }

    renderCalendar(currentYear, currentMonth);

    prevMonthBtn.addEventListener("click", prevMonth);
    nextMonthBtn.addEventListener("click", nextMonth);
}