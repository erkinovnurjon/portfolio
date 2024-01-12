import Document from "next/document";

// form.js
Document.querySelector('form').addEventListener('submit', async function (e) {
      e.preventDefault();

      const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phoneNumber: document.getElementById('phoneNumber').value,
      };

      try {
            const response = await fetch('http://localhost:3000/saveData', {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(formData),
            });

            const result = await response.json();
            console.log(result.message);
      } catch (error) {
            console.error('Xato yuz berdi:', error);
      }
});
