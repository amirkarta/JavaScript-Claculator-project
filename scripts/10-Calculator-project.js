 let calculation = localStorage.getItem('calculation') || '';

      // Display the calculation when the page first loads.
      showCalculuation ()

      function updateCalculation(value) {
        calculation += value;
       // Display the calculation on the page
        // instead of console.log
        showCalculuation ();
       saveCalculation()
      }

    
      function saveCalculation() {
        localStorage.setItem('calculation', calculation);
      }


      function showCalculuation (){
        document.querySelector('.js-calculation-text').innerHTML = calculation
      }

