
function tsar_fish () {
    var title = document.getElementById('title');
    var text = document.getElementById('text');
    title.innerHTML = '<h3>🦈Царь-Рыба</h3>';
    text.innerHTML = '<p>Смотровая площадка на Слизнёвском утёсе появилась в 1970-х годах по инициативе Петра Алексеевича Старовойтова — легендарного директора дорожного предприятия. Благоустройство площадки поручили его заместителю Борису Михайловичу Лишневскому, который объявил конкурс на лучшее оформление. Победил проект студента архитектурного факультета Алексея Мякоты. Сама Статуя Появилась в 2004 Году Возле Овсянки. От Туда Отличный Вид На Поселок!</p>';
}

function surikov () {
    var title = document.getElementById('title');
    var text = document.getElementById('text');
    title.innerHTML = '<h3>📝Суриков</h3>';
    text.innerHTML = '<a href="https://gusini-siniy.github.io/surikov/">Ссылка На Сайт</a>';
}

function astafeev () {
    var title = document.getElementById('title');
    var text = document.getElementById('text');
    title.innerHTML = '<h3>👨Астафьев</h3>';
    text.innerHTML = '<p>Виктор Петрович Астафьев (1924–2001) — русский писатель, драматург, публицист и сценарист, признанный классик при жизни. Его произведения переведены на 35 языков. Родился В Овсянке.</p>';
}

function statue () {
    var title = document.getElementById('title');
    var text = document.getElementById('text');
    title.innerHTML = '<h3>🗽Андрей Дубенский</h3>';
    text.innerHTML = '<p>Памятник Основателю Красноярска Возле Мед. Института. Поставлен в 1997 Году. И Именно На Этом Месте Андрей Написал Письмо Царю О Основании Города.</p>';
}

function park () {
    var title = document.getElementById('title');
    var text = document.getElementById('text');
    title.innerHTML = '<h3>🌲Столбы</h3>';
    text.innerHTML = '<p>Огромный Национальный Заповедник В Красноярском Крае. Находятся Главные Достопримечательности: Столбы Из Каменных Пород, Перья, Дед, Бабка и др. Площадь — 47 219 га. Живут Очень Много Животных. Такие Как: Медведи, Белки, Орлы и Другие.</p>';
}





function eventchanging () {
    var tipsselection = document.getElementById("tip_selection");
    const index = tipsselection.selectedIndex;
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
    if(index == 5)
    {
        park();
    }

}