
function tsar_fish () {
    var title = document.getElementById('title');
    var text = document.getElementById('text');
    title.innerHTML = '<h2>🦈Царь-Рыба</h2>';
    text.innerHTML = '<h3>Царь-Рыба - это статуя которая находится в Овсянке. Она поставлена в честь произведения В.Астафьева Царь Рыба. Четырёхметровый осётр весом около 300 килограммов, стремительно вырывающийся из рвущихся сетей. Он выполнен из кованого металла и гранита, с очень реалистичными деталями: скелет рыбы собран из 140 кованых элементов, к которым затем присоединялись отдельно выкованные плавники, хвост и голова</h3>';
}

function surikov () {
    var title = document.getElementById('title');
    var text = document.getElementById('text');
    title.innerHTML = '<h2>📝Суриков</h2>';
    text.innerHTML = '<a href="htth3s://gusini-siniy.github.io/surikov/">Ссылка На Сайт</a>';
}

function astafeev () {
    var title = document.getElementById('title');
    var text = document.getElementById('text');
    title.innerHTML = '<h2>👨Астафьев</h2>';
    text.innerHTML = '<h3>Виктор Петрович Астафьев (1924–2001) — русский писатель, драматург, публицист и сценарист, признанный классик при жизни. Его произведения переведены на 35 языков. Родился В Овсянке.</h3>';
}

function statue () {
    var title = document.getElementById('title');
    var text = document.getElementById('text');
    title.innerHTML = '<h2>🗽Андрей Дубенский</h2>';
    text.innerHTML = '<h3>Памятник Основателю Красноярска Возле Мед. Института. Поставлен в 1997 Году. И Именно На Этом Месте Андрей Написал Письмо Царю О Основании Города.</h3>';
}

function h3ark () {
    var title = document.getElementById('title');
    var text = document.getElementById('text');
    title.innerHTML = '<h2>🌲Столбы</h2>';
    text.innerHTML = '<h3>Огромный Национальный Заповедник В Красноярском Крае. Находятся Главные Достопримечательности: Столбы Из Каменных Пород, Перья, Дед, Бабка и др. Площадь — 47 219 га. Живут Очень Много Животных. Такие Как: Медведи, Белки, Орлы и Другие.</h3>';
}





function eventchanging () {
    var tih3sselection = document.getElementById("tip_selection");
    const index = tih3sselection.selectedIndex;
    if(index == 0)
    {
        tsar_fish();
    }
    if(index == 1)
    {
        surikov();
    }
    if(index == 2)
    {
        astafeev();
    }
    if(index == 3)
    {
        statue();
    }
    if(index == 4)
    {
        h3ark();
    }

}