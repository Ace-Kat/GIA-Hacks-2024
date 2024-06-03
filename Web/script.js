document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll("ul li");
  
    const isElementInViewport = (el) => {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    };
  
    const toggleItems = () => {
        items.forEach((item) => {
            if (isElementInViewport(item)) {
                item.classList.add("show");
            } else {
                item.classList.remove("show");
            }
        });
    };
  
    window.addEventListener("scroll", toggleItems);
    window.addEventListener("resize", toggleItems);
  
    // Initial check
    toggleItems();
  });
  
  