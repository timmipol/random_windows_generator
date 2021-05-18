let windowsList = [
  ['Windows 1.0', 'https://static.wikia.nocookie.net/windows/images/8/88/Microsoft_Windows_logo_1985.svg'],
  ['Windows 2.0', 'https://static.wikia.nocookie.net/windows/images/8/88/Microsoft_Windows_logo_1985.svg'],
  ['Windows 3.0', 'https://static.wikia.nocookie.net/windows/images/8/88/Microsoft_Windows_logo_1985.svg'],
  ['Windows 3.1', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Windows_logo_-_1992.svg/1200px-Windows_logo_-_1992.svg.png'],
  ['Windows NT 3.1', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Windows_logo_-_1992.svg/1200px-Windows_logo_-_1992.svg.png'],
  ['Windows NT 3.5', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f5ad18b7-74e3-42a4-a6c3-ed075ba5d058/dcnq9vn-5937a4f1-bee4-4937-abef-b413121284c3.png'],
  ['Windows NT 3.51', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f5ad18b7-74e3-42a4-a6c3-ed075ba5d058/dcnq9vn-5937a4f1-bee4-4937-abef-b413121284c3.png'],
  ['Windows Chicago', 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Logo_%281992-2001%29.svg'],
  ['Windows 95', 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Logo_%281992-2001%29.svg'],
  ['Windows Nashville (windows 96)', 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Logo_%281992-2001%29.svg'],
  ['Windows NT 4.0', 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Logo_%281992-2001%29.svg'],
  ['Windows NT 5.0', 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Logo_%281992-2001%29.svg'],
  ['Windows Memphis', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Logo_%281992-2001%29.svg/1200px-Windows_Logo_%281992-2001%29.svg.png'],
  ['Windows 98', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Logo_%281992-2001%29.svg/1200px-Windows_Logo_%281992-2001%29.svg.png'],
  ['Windows 98 SE', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Logo_%281992-2001%29.svg/1200px-Windows_Logo_%281992-2001%29.svg.png']
  ['Windows Neptune', 'https://upload.wikimedia.org/wikipedia/commons/1/14/Windows_Neptune_logo.png'],
  ['Windows 2000', 'https://img2.pngio.com/windows-2000-logo-png-picture-751114-windows-2000-logo-png-windows-2000-png-755_496.png'],
  ['Windows ME', 'https://cdn.freebiesupply.com/logos/large/2x/microsoft-windows-millenium-edition-logo-png-transparent.png'],
  ['Windows Whistler', 'images/whistler-transp.png'],
  ['Windows XP', 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/54/Microsoft_Windows_XP_Logo.svg/1158px-Microsoft_Windows_XP_Logo.svg.png'],
  ['Windows Server 2003', 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/54/Microsoft_Windows_XP_Logo.svg/1158px-Microsoft_Windows_XP_Logo.svg.png'],
  ['Windows Server 2003 R2', 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/54/Microsoft_Windows_XP_Logo.svg/1158px-Microsoft_Windows_XP_Logo.svg.png'],
  ['Windows Vista', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b7f449a-caf4-4e8f-85d2-756552080ab7/d2d6qv3-9afe61d2-5656-4dad-93b2-a4802948835d.png/v1/fill/w_600,h_599,strp/windows_vista_logo_by_francr2009_d2d6qv3-fullview.png'],
  ['Windows Server 2008', 'https://upload.wikimedia.org/wikipedia/ru/archive/3/33/20200302132354%21Windows_7_logo.svg'],
  ['Windows Server 2008 R2', 'https://upload.wikimedia.org/wikipedia/ru/archive/3/33/20200302132354%21Windows_7_logo.svg'],
  ['Windows 7', 'https://upload.wikimedia.org/wikipedia/ru/archive/3/33/20200302132354%21Windows_7_logo.svg'],
  ['Windows Home Server', 'https://upload.wikimedia.org/wikipedia/ru/archive/3/33/20200302132354%21Windows_7_logo.svg'],
  ['Windows Home Server 2011', 'https://upload.wikimedia.org/wikipedia/ru/archive/3/33/20200302132354%21Windows_7_logo.svg'],
  ['Windows Server 2012', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1024px-Windows_logo_-_2012.svg.png'],
  ['Windows 8', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1024px-Windows_logo_-_2012.svg.png'],
  ['Windows 8.1', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1024px-Windows_logo_-_2012.svg.png'],
  ['Windows 10', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1024px-Windows_logo_-_2012.svg.png'],
  ['Windows Server 2016', 'https://www.pngkey.com/png/full/14-146918_open-windows-10-icon-png.png'],
  ['Windows Server 2019', 'https://www.pngkey.com/png/full/14-146918_open-windows-10-icon-png.png']
];


let button = document.querySelector('.button');
let phrase = document.querySelector('.phrase');
let advice = document.querySelector('.advice');
let image = document.querySelector('.image');


function getRandomElement(arr) {
  let randIndex = Math.floor(Math.random() * arr.length);
  return arr[randIndex];
}

function setRandomElement() {
  let randomElement = getRandomElement(windowsList);
  phrase.textContent = randomElement[0];
  if (randomElement.length > 40 ){
    advice.style.fontSize = '33px'
  }
  image.setAttribute('src', randomElement[1])
}

setRandomElement();

button.addEventListener('click', function () {
    setRandomElement();
});