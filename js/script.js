const asideBtn = document.querySelector(".aside-btn");
const aside = document.querySelector(".aside");
const backdrop = document.querySelector(".bg-backdrop");

asideBtn.addEventListener("click", () => {
  aside.classList.add("show");
  backdrop.classList.add("offcanvas-backdrop");
  backdrop.classList.add("show");
});

backdrop.addEventListener("click", () => {
  aside.classList.remove("show");
  backdrop.classList.remove("offcanvas-backdrop");
  backdrop.classList.remove("show");
});

// ChartJS
const labels = [
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "20",
  "21",
];

const data = {
  labels: labels,
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      borderRadius: 10,
      data: [
        0, 10, 5, 2, 20, 30, 45, 5, 2, 15, 26, 20, 30, 55, 31, 3, 5, 2, 20, 30,
        4,
      ],
    },
    {
      label: "My Second dataset",
      backgroundColor: "rgb(255, 99, 132, 0.2)",
      borderColor: "rgb(255, 99, 132)",
      borderRadius: 10,
      data: [
        0, 10, 5, 2, 20, 30, 45, 5, 2, 15, 26, 20, 30, 55, 31, 3, 5, 2, 20, 30,
        4,
      ],
    },
  ],
};

const config = {
  type: "bar",
  data: data,
  options: {
    maintainAspectRatio: false,

    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderColor: "transparent",
        },

        ticks: {
          // forces step size to be 50 units
          stepSize: 20,
        },
      },
    },

    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },

        position: "bottom",
        align: "start",
      },
    },
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);

// DataTable
$(document).ready(function () {
  $("#example").DataTable({
    pageLength: 5,
  });
});

// ChartJSSecond
const uVLabels = ["January", "February", "March", "April", "May", "June"];

const uVData = {
  labels: uVLabels,
  datasets: [
    {
      label: "iPhone",
      backgroundColor: "rgb(255, 99, 132)",
      borderColor: "rgb(255, 99, 132)",
      borderRadius: 10,
      data: [2, 10, 5, 2, 20, 30],
    },
    {
      label: "Android",
      backgroundColor: "#5493FF",
      borderColor: "#5493FF",
      borderRadius: 10,
      data: [30, 55, 31, 3, 5, 4],
    },
  ],
};

const uVConfig = {
  type: "bar",
  data: uVData,
  options: {
    maintainAspectRatio: false,

    scales: {
      x: {
        grid: {
          display: false,
        },
      },
      y: {
        grid: {
          borderColor: "transparent",
        },

        ticks: {
          // forces step size to be 50 units
          stepSize: 20,
        },
      },
    },

    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },

        position: "bottom",
        align: "start",
      },
    },
  },
};

const myUnitedVisitor = new Chart(
  document.getElementById("myUnitedVisitor"),
  uVConfig
);
