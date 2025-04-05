document.getElementById('rsvpForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const guests = document.getElementById('guests').value;
    const menu = document.getElementById('menu').value;
    const preferences = document.getElementById('preferences').value;
    const children = document.getElementById('children').checked ? 'Да' : 'Нет';
  
    const data = {
      name: name,
      guests: guests,
      menu: menu,
      preferences: preferences,
      children: children
    };
  
    fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        access_key: 'f8f624d2-ffa6-42d4-912a-fa1efafba0dc',
        ...data
      })
    })
    .then(response => response.json())
    .then(result => {
      if(result.success) {
        alert(`Спасибо, ${name}! Ваша информация успешно отправлена.`);
      } else {
        alert('Произошла ошибка при отправке. Пожалуйста, попробуйте позже.');
      }
    })
    .catch(() => {
      alert('Произошла ошибка при соединении.');
    });
  });
  