export function debounce(cb,delay = 1000){
    let timer;
    return (...args) => {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            cb(...args);
        },delay);
    }
}