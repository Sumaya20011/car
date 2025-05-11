const cars = [
    { type: 'sedan', name: 'Toyota Camry', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYA0AWspcQJUVjPqEk7LKXlSOZn2Ptho5Aqg&s' },
    { type: 'suv', name: 'Jeep Wrangler', image: ' https://i.pinimg.com/236x/7c/92/f6/7c92f62a080e4bb590fffe646f3d0e85.jpg' },
    { type: 'coupe', name: 'Ford Mustang', image: ' https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT81B0e3avlI6dhcUnnF5B00LHKC6_vjRCxJw&s' },
    { type: 'sedan', name: 'Honda Accord', image: 'https://rental.ua/content/documents/15/1445/images/2021_mazda_6_sedan_carbon-edition_fq_oem_1_1600.jpeg' },
    { type: 'suv', name: 'Toyota RAV4', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR73xmiI5iEVxD4isRo-WErrzq96XyRIReDzm63tvEaAcLzSq3HZjSZ_I9juF-UXy3cgoQ&usqp=CAU' },
    { type: 'coupe', name: 'BMW 4 Series', image: 'https://rental.ua/content/documents/15/1445/images/2021_mazda_6_sedan_carbon-edition_fq_oem_1_1600.jpeg' },
  ];
  
  function filter(type) {
    const gallery = document.getElementById("gallery");
    gallery.innerHTML = ""; // очищаем
  
    const filtered = type === 'all' ? cars : cars.filter(car => car.type === type);
  
    if (filtered.length === 0) {
      gallery.innerHTML = "<p>Нет автомобилей для отображения.</p>";
      return;
    }
  
    for (let car of filtered) {
      const card = document.createElement("div");
      card.className = "card";
      card.innerHTML = `
        <img src="${car.image}" alt="${car.name}">
        <h3>${car.name}</h3>
      `;
      gallery.appendChild(card);
    }
  }
  
  // Загрузить все при старте
  window.onload = () => filter('all');