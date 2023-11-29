function updateTotalPrice() {
        var quantity = document.getElementById('quantity').value;
        var unitPrice = 34400; // Assuming unit price is 34,400원, you can adjust this value

        var totalPrice = quantity * unitPrice;
        document.getElementById('total-price').innerText = totalPrice.toLocaleString('en-US') + '원';
    }
    function showImages() {
            var container = document.getElementById("imageContainer");

            // Toggle the 'partial' class for the container
            container.classList.toggle("partial");

            // Update the button text based on the container class
            var buttonText = container.classList.contains("partial") ? "전체 이미지 보기" : "초기 이미지 보기";
            document.getElementById("image-container-button").innerText = buttonText;
        }
        // 팝업 열기
        function openPopup() {
            
            var modal = document.getElementById("myModal");
            modal.style.display = "block";
          }
          

// 팝업 닫기
function closePopup() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
  }

// 모달 영역 외의 부분 클릭 시 팝업 닫기
    window.onclick = function(event) {
        var modal = document.getElementById('myModal');
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
    // Function to open 선물함 modal
    function openGiftPopup() {
    // Display the gift popup
    var giftModal = document.getElementById('giftModal');
    giftModal.style.display = 'block';
}
// Function to close 선물함 modal
function closeGiftPopup() {
    // Close the gift popup
    var giftModal = document.getElementById('giftModal');
    giftModal.style.display = 'none';
}