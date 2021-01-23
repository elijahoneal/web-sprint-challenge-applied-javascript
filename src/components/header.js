const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const header = document.createElement('div')
  header.classList.add('header')
  const newDate = document.createElement('span')
  newDate.classList.add('date')
  newDate.textContent = date
  const h1 = document.createElement('h1')
  h1.textContent = title
  const newTemp = document.createElement('span')
  newTemp.classList.add('temp')
  newTemp.textContent = temp
  header.appendChild(newDate)
  header.appendChild(h1)
  header.appendChild(newTemp)
  return header
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
 
 const newHeader = Header('SummerJam','June','95degrees'); 
   const addHeader = document.querySelector(selector)
   return addHeader.appendChild(newHeader)
}

export { Header, headerAppender }
