feather.replace();

//Elements
const totalValue = document.getElementById('totalValue')
const payableValue = document.getElementById('payableValue')


//Getting Values
function getTotal(){
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            const value = (data.total.value).toFixed(2)
            totalValue.innerHTML = `R$${value.replace(".",",")}`
        })
}
getTotal()

function getPayable(){
    fetch('./data.json')
        .then(response => response.json())
        .then(data => {
            const value = (data.payable.value).toFixed(2)
            payableValue.innerHTML = `R$${value.replace(".",",")}`
        })
}
getPayable()


function getExtract(){
  fetch('./data.json')
      .then(response => response.json())
      .then(data => {
        for(i=0; i<data.extract.operations.length; i++){
          const extractContent = document.getElementById('extractContent')
          const div = document.createElement('div')
          const img = document.createElement('img')
          const divLeft = document.createElement('div')
          const name = document.createElement('p')
          const desc = document.createElement('p')
          const divRight = document.createElement('div')
          const value = document.createElement('p')
          const date = document.createElement('p')
        
          div.classList.add('operation')
          img.classList.add('iconExtract')
          divLeft.classList.add('left')
          name.classList.add('name')
          desc.classList.add('description')
          divRight.classList.add('right')
          value.classList.add('value')
          date.classList.add('date')

          if(data.extract.operations[i].type){
            img.src = './assets/positive.svg'
          } else {
            img.src = './assets/negative.svg'
          }

          name.innerHTML = data.extract.operations[i].name
          desc.innerHTML = data.extract.operations[i].description
          value.innerHTML = `R$${((data.extract.operations[i].value).toFixed(2)).replace('.',',')}`
          date.innerHTML = data.extract.operations[i].date
          extractContent.appendChild(div)
          div.appendChild(img)
          div.appendChild(divLeft)
          divLeft.appendChild(name)
          divLeft.appendChild(desc)
          div.appendChild(divRight)
          divRight.appendChild(value)
          divRight.appendChild(date)
        }
      })
}
getExtract()


//Getting Chart Data
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Balance in BRL",
        data: [445.6, 567.5, 235.6, 3445.3, 2435.7, 4452.6, 45.6, 3445.6, 4765.6, 1445.6,
          2445.6, 3445.6],
        backgroundColor: "#ffd100",
        borderColor: "#ffd100",
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

