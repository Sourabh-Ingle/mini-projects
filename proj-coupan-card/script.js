let openCoupon = document.querySelector('.open-coupon');
let applyCoupon = document.querySelector('.apply-coupon');
let couponInput = document.getElementById('coupon-input');
let couponCard = document.querySelector('.coupon-card');
let couponClose = document.querySelector('.coupon-close');
let copyBtn = document.querySelector('#copy-btn');
let copyCode = document.querySelector('#copy-code').innerText;
let priceDesc = document.querySelector('.price-desc');
let price = document.querySelector('.price');
let disCount = document.querySelector('.discount').innerText;
let alertMessage = document.querySelector('.alert-message');
let couponContainer = document.querySelector('.coupon-container');

openCoupon.addEventListener('click', handleOpenCoupon);
copyBtn.addEventListener('click', handleCopyCoupon);
applyCoupon.addEventListener('click', handleDiscontedPrice);


function handleOpenCoupon() {
    couponContainer.classList.add('coupon-active');
}

function handleCloseCoupon() {
    couponContainer.classList.remove('coupon-active');
    
}

function handleCopyCoupon() {
    navigator.clipboard.writeText(copyCode);
    copyBtn.innerText = "Copied";
    setTimeout(() => { copyBtn.innerText = "Copy Code"; }, 2000);
}

function handleDiscontedPrice() {
    //   let descPrice= priceDesc.innerText.split(" ");
    //   let price = descPrice.find(item=>!isNaN(item)) ; //if there is whole string but in many cases we got direct price
    let prevPrice = price.innerText;
    let discountedPrice = prevPrice * (100 - disCount) / 100;

    if (couponInput.value === copyCode) {
        applyCoupon.setAttribute('disabled', '');
        price.innerHTML = `<span class="cancel-price"> Rs ${prevPrice}</span> <span class="discount-price"> ${discountedPrice}</span>`;
        handleAlertMessage('success', "coupon code applied. please check price");
    } else if (couponInput.value === '') {
        handleAlertMessage('success', "No Coupon code applied");
    } else {
        handleAlertMessage('danger', "Your coupon code is not valid");
    }

}

function handleAlertMessage(action, message) {
    alertMessage.classList.add(`action-${action}`);
    alertMessage.innerText = message;

    setTimeout(() => {
        alertMessage.classList.remove(`action-${action}`);
        alertMessage.innerText = '';
    }, 2000)
}


