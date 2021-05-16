let windows_list = [
  ['windows 1.0', 'https://static.wikia.nocookie.net/windows/images/8/88/Microsoft_Windows_logo_1985.svg/revision/latest?cb=20161012141957'],
  ['windows 2.0', 'https://static.wikia.nocookie.net/windows/images/8/88/Microsoft_Windows_logo_1985.svg/revision/latest?cb=20161012141957'],
  ['windows 3.0', 'https://static.wikia.nocookie.net/windows/images/8/88/Microsoft_Windows_logo_1985.svg/revision/latest?cb=20161012141957'],
  ['windows 3.1', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Windows_logo_-_1992.svg/1200px-Windows_logo_-_1992.svg.png'],
  ['windows NT 3.1', 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Windows_logo_-_1992.svg/1200px-Windows_logo_-_1992.svg.png'],
  ['windows NT 3.5', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f5ad18b7-74e3-42a4-a6c3-ed075ba5d058/dcnq9vn-5937a4f1-bee4-4937-abef-b413121284c3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y1YWQxOGI3LTc0ZTMtNDJhNC1hNmMzLWVkMDc1YmE1ZDA1OFwvZGNucTl2bi01OTM3YTRmMS1iZWU0LTQ5MzctYWJlZi1iNDEzMTIxMjg0YzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LWM_N0HdR8VsMNlq5N0IzrBKVlxBFNEJyaYndbVTveU'],
  ['windows NT 3.51', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/f5ad18b7-74e3-42a4-a6c3-ed075ba5d058/dcnq9vn-5937a4f1-bee4-4937-abef-b413121284c3.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2Y1YWQxOGI3LTc0ZTMtNDJhNC1hNmMzLWVkMDc1YmE1ZDA1OFwvZGNucTl2bi01OTM3YTRmMS1iZWU0LTQ5MzctYWJlZi1iNDEzMTIxMjg0YzMucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.LWM_N0HdR8VsMNlq5N0IzrBKVlxBFNEJyaYndbVTveU'],
  ['windows Chicago', 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Logo_%281992-2001%29.svg'],
  ['windows 95', 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Logo_%281992-2001%29.svg'],
  ['windows Nashville (windows 96)', 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Logo_%281992-2001%29.svg'],
  ['windows NT 4.0', 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Logo_%281992-2001%29.svg'],
  ['windows NT 5.0', 'https://upload.wikimedia.org/wikipedia/commons/6/6d/Windows_Logo_%281992-2001%29.svg'],
  ['windows Memphis', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Logo_%281992-2001%29.svg/1200px-Windows_Logo_%281992-2001%29.svg.png'],
  ['windows 98', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Logo_%281992-2001%29.svg/1200px-Windows_Logo_%281992-2001%29.svg.png'],
  ['windows 98 SE', 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Windows_Logo_%281992-2001%29.svg/1200px-Windows_Logo_%281992-2001%29.svg.png']
  ['windows Neptune', 'https://upload.wikimedia.org/wikipedia/commons/1/14/Windows_Neptune_logo.png'],
  ['windows 2000', 'https://img2.pngio.com/windows-2000-logo-png-picture-751114-windows-2000-logo-png-windows-2000-png-755_496.png'],
  ['windows ME', 'https://cdn.freebiesupply.com/logos/large/2x/microsoft-windows-millenium-edition-logo-png-transparent.png'],
  ['windows Whistler', 'images/whistler-transp.png'],
  ['windows XP', 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/54/Microsoft_Windows_XP_Logo.svg/1158px-Microsoft_Windows_XP_Logo.svg.png'],
  ['windows Server 2003', 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/54/Microsoft_Windows_XP_Logo.svg/1158px-Microsoft_Windows_XP_Logo.svg.png'],
  ['windows Server 2003 R2', 'https://upload.wikimedia.org/wikipedia/ru/thumb/5/54/Microsoft_Windows_XP_Logo.svg/1158px-Microsoft_Windows_XP_Logo.svg.png'],
  ['windows Vista', 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2b7f449a-caf4-4e8f-85d2-756552080ab7/d2d6qv3-9afe61d2-5656-4dad-93b2-a4802948835d.png/v1/fill/w_600,h_599,strp/windows_vista_logo_by_francr2009_d2d6qv3-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NTk5IiwicGF0aCI6IlwvZlwvMmI3ZjQ0OWEtY2FmNC00ZThmLTg1ZDItNzU2NTUyMDgwYWI3XC9kMmQ2cXYzLTlhZmU2MWQyLTU2NTYtNGRhZC05M2IyLWE0ODAyOTQ4ODM1ZC5wbmciLCJ3aWR0aCI6Ijw9NjAwIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.Keq2OhFsydRRUEtmOrCIicDRUx_wsOcXxfV9Ly5DBeg'],
  ['windows Server 2008', 'https://upload.wikimedia.org/wikipedia/ru/archive/3/33/20200302132354%21Windows_7_logo.svg'],
  ['windows Server 2008 R2', 'https://upload.wikimedia.org/wikipedia/ru/archive/3/33/20200302132354%21Windows_7_logo.svg'],
  ['windows 7', 'https://upload.wikimedia.org/wikipedia/ru/archive/3/33/20200302132354%21Windows_7_logo.svg'],
  ['windows Home Server', 'https://upload.wikimedia.org/wikipedia/ru/archive/3/33/20200302132354%21Windows_7_logo.svg'],
  ['windows Home Server 2011', 'https://upload.wikimedia.org/wikipedia/ru/archive/3/33/20200302132354%21Windows_7_logo.svg'],
  ['windows Server 2012', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1024px-Windows_logo_-_2012.svg.png'],
  ['windows 8', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1024px-Windows_logo_-_2012.svg.png'],
  ['windows 8.1', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1024px-Windows_logo_-_2012.svg.png'],
  ['windows 10', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Windows_logo_-_2012.svg/1024px-Windows_logo_-_2012.svg.png'],
  ['windows Server 2016', 'https://www.pngkey.com/png/full/14-146918_open-windows-10-icon-png.png'],
  ['windows Server 2019', 'https://www.pngkey.com/png/full/14-146918_open-windows-10-icon-png.png']
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
  let randomElement = getRandomElement(windows_list);
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