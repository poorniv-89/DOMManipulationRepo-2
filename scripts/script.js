// Updated the menuLinks array
var menuLinks = [
  { text: 'about', href: '/about' },
  {
    text: 'catalog', href: '#', subLinks: [
      { text: 'all', href: '/catalog/all' },
      { text: 'top selling', href: '/catalog/top' },
      { text: 'search', href: '/catalog/search' },
    ]
  },
  {
    text: 'orders', href: '#', subLinks: [
      { text: 'new', href: '/orders/new' },
      { text: 'pending', href: '/orders/pending' },
      { text: 'history', href: '/orders/history' },
    ]
  },
  {
    text: 'account', href: '#', subLinks: [
      { text: 'profile', href: '/account/profile' },
      { text: 'sign out', href: '/account/signout' },
    ]
  },
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
for (let link of menuLinks) {
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
subMenuEl.style.position='absolute';
subMenuEl.style.top='0';
// Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
let topMenuLinks = topMenuEl.querySelectorAll('a');

// Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener('click', handleClick);

function handleClick(e) {
  // The first line of code of the event listener function should call the event object's preventDefault() method.
  e.preventDefault();
  // The second line of code of the function should immediately return if the element clicked was not an <a> element.
  if (e.target.tagName !== 'A')
    return;
  // Log the content of the <a> to verify the handler is working.
  console.log(e.target.textContent);

  // The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it.
  if (e.target.classList.contains('active')) {
    e.target.classList.remove('active');
    subMenuEl.style.top = '0%';
  }
  else {
    e.target.classList.add('active');
    
    for (let link of menuLinks) {
      console.log(e.target.textContent);
      console.log(link.text);
      if (link.text === e.target.textContent && link.subLinks) {
        console.log(link.subLinks);
        subMenuEl.style.top ='100%';
        break;
      }
    }

  }

  // The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
  for (link of topMenuLinks) {
    console.log(link)
    console.log(e.target);
    if (link !== e.target) {
      link.classList.remove('active');
    }
  }
}
