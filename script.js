document.getElementById('toggleButton').addEventListener('click', function() {
    // التبديل بين الوضعين "عادي" و "مظلم"
    document.body.classList.toggle('dark');
    
    // تغيير النص على الزر بناءً على الوضع الحالي
    if (document.body.classList.contains('dark')) {
      this.textContent = 'التبديل للوضع العادي';
    } else {
      this.textContent = 'التبديل للوضع المظلم';
    }
  });
  