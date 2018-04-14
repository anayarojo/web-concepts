
const windowsUtility = function() {

    scrollTo = function(element, offset = 0){
        window.scrollBy({ top: element.getBoundingClientRect().top - offset, left: 0, behavior: 'smooth' });
    }
}

export default windowsUtility