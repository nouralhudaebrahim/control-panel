
 import Chart from 'chart.js/auto';
const ctx = document.getElementById('examble-chart');

const chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['يناير', 'فبراير', 'مارس', 'ابريل', 'ماي', 'يونيو' , 'يوليو' ,'أغسطس', 'سبتمبر', 'اكتوبر','نوفمبر' ,'ديسمبر'],
    datasets: [{
      label: 'مبيعات الشهر ',
      data: [126, 198, 358, 515, 289, 365, 256 , 985 ,  789 ,586 ,  1250 , 2000 ],
      borderColor : '#2541b2',
      backgroundColor: "transparent",
      lineTension : 0.2 ,
    }]
  },
  options: {
    plugins:{
      legend:{
        display: false,
      }

    },
    scales: {
      y: {
        display: false
      },
      x: {
        position: 'top'
      }
    }
  }
});

const navigation = document.querySelector(".c-table__navigation");
const randomArray = (mylenght , max) => Array.from({length: mylenght}, () => Math.round(Math.random()* max));

navigation.addEventListener('click' , () => {
  chart.data.datasets[0].data = randomArray( 12 , 1200);
  chart.update();
});