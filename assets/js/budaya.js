function showTab(tabId, element) {
    
    const contents = document.querySelectorAll(".tab-content");
    contents.forEach((content) => {
        content.classList.add("opacity-0");
        setTimeout(() => content.classList.add("hidden"), 500);
    });

    
    const activeContent = document.getElementById(tabId);
    if (activeContent) {
        setTimeout(() => {
            activeContent.classList.remove("hidden");
            setTimeout(() => activeContent.classList.remove("opacity-0"), 50);
        }, 500);
    }

    
    const links = document.querySelectorAll(".tab-link");
    links.forEach((link) =>
        link.classList.remove("text-[#432719]", "bg-[#FFE7A7]")
    );
    if (element) {
        element.classList.add("text-[#432719]", "bg-[#FFE7A7]");
    }
}


const counters = document.querySelectorAll('.counter1, .counter2, .counter3');
const targetValues = [38, 718, 17000]; 
let hasStarted = [false, false, false]; 


function startCounter(counterEl, index, targetValue) {
  if (hasStarted[index]) return; 
  hasStarted[index] = true; 

  let counterNumber = 0; 

  const updateCounter = setInterval(() => {
    counterNumber += Math.ceil(targetValue / 100);
    if (counterNumber >= targetValue) {
      counterNumber = targetValue; 
      clearInterval(updateCounter); 
    }
    
    counterEl.textContent = index === 2 
      ? counterNumber.toLocaleString('id-ID') + "+" 
      : counterNumber.toLocaleString('id-ID'); 
  }, 30);
}


function isElementInViewport(el) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top >= 0 &&
    rect.left >= 0 &&
    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}


window.addEventListener('scroll', () => {
  counters.forEach((counterEl, index) => {
    if (isElementInViewport(counterEl)) {
      startCounter(counterEl, index, targetValues[index]); 
    }
  });
});

