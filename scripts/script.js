var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
  ];
// creating the main element 
let mainEl = document.querySelector('main');
mainEl.style.backgroundColor = 'var(--main-bg)';
console.log(mainEl);
mainEl.innerHTML = '<h1>DOM Manipulation</h1>';
mainEl.classList.add('flex-ctr');

// creating the top menu 
let topMenuEl = document.getElementById('top-menu');
topMenuEl.style.height = '100%';
topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';
topMenuEl.classList.add('flex-around');

// creating anchor elements to the nav bar
for (let link of menuLinks){
    let newLink = document.createElement('a');
    newLink.setAttribute('href', link.href);
    newLink.textContent = link.text; 
    topMenuEl.appendChild(newLink);
}

// Creating the sub menu 
let subMenuEl = document.getElementById('sub-menu');

// Set the height subMenuEl element to be "100%".
subMenuEl.style.height = '100%';

// Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add('flex-around');
