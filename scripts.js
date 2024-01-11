const modalVar = document.querySelector(".modal");
const overlayVar = document.querySelector(".overlay");

// modal open fucntion
const openModal = () => {
    console.log("modal is open");
    modalVar.classList.add("active");
    overlayVar.classList.add("overlayactive");
};

// modal close function 
const closeModal = () =>{
    console.log("modal is closed");
    modalVar.classList.remove("active");
    overlayVar.classList.remove("overlayactive");
};