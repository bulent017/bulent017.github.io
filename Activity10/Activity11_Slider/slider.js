$(document).ready(function() {
    var slider = $("#slider").bxSlider({
        auto: true, // Otomatik geçiş 
        minSlides: 1, // Her zaman sadece bir slide görüntülenir
        maxSlides: 1, // Her zaman sadece bir slide görüntülenir
        slideWidth: 540, 
        slideMargin: 10, 
        randomStart: true, // slide'ın rastgele seçilmesi
        moveSlides: 1, // Bir defada bir slide hareket ettirilir
        pause: 3000, 
        pager: false, // pager ı kapattım, kendi özel pager ı oluşturdum
        onSliderLoad: function(currentIndex) {
            // Slider yüklendiğinde çalışacak kod (mevcut slide numarsı ve toplam sliide sayısı pager a yazılır)
            $('#pager').text((currentIndex + 1) + '/' + slider.getSlideCount()); 
        },
        onSlideBefore: function($slideElement, oldIndex, newIndex) {
            // Slide değiştiğınde çalışaacak kod (mevcut slide numaraası ve toplam slıde sayısı pager a güncellenecek)
            $('#pager').text((newIndex + 1) + '/' + slider.getSlideCount()); 
        }
    });
});
