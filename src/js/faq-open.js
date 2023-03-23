const questions = document.querySelectorAll(".question");
const imgs = document.querySelectorAll(".question>.img");

questions.forEach((question) => {
    question.addEventListener('click', () => {
        questions.forEach((q) => {
            if (q !== question && q.classList.contains('active')) {
                q.classList.remove('active');
                q.querySelector('.img').classList.remove('up');
                q.querySelector('.img').classList.add('down');
                q.querySelector('.answer').style.maxHeight = 0;
            }
        });
        question.classList.toggle('active');
        const icon = question.querySelector('.img');
        if (icon.classList.contains('down')) {
            icon.classList.remove('down');
            icon.classList.add('up');
            question.querySelector('.answer').style.maxHeight = question.querySelector('.answer').scrollHeight + 'px';
        } else {
            icon.classList.remove('up');
            icon.classList.add('down');
            question.querySelector('.answer').style.maxHeight = 0;
        }
    });
});