<template>
	<div class="wrapper container">
		<widgets-nav />
		<div class="wrapper__body">
			<sections-default title="Разворачивание проекта" id="start">
				<p>Для быстрого развертывания нового проекта мы используем npm пакет <accent link="https://www.npmjs.com/package/@kirano/starter">@kirano/starter</accent>. Его необходимо установить глобально, и это делается лишь 1 раз:</p>
				<shared-code>npm i -g <accent>@kirano/starter</accent></shared-code>
				<p>Далее в директории, где хотим развернуть проект, пишем:</p>
				<shared-code>kirano create:<accent>vue</accent> <folder>app</folder></shared-code>
				<p>Здесь <accent>app</accent> — название проекта</p>
				<p>На этом разворчание готово.</p>
			</sections-default>
			<sections-default title="Этапы работы над проектом" id="stages">
				<shared-li>1. <accent>Дизайн ревью</accent>. Просмотр всего дизайна, оценка объема работы, обсуждение с дизайнером прототипа работы сайта</shared-li>
				<shared-li>2. <accent>Верстка</accent>. В нее входит так же адаптив и проверка своего кода</shared-li>
				<shared-li>3. <accent>Проверка и правки</accent>.</shared-li>
				<shared-li>4. <accent>Интеграция с API</accent>.</shared-li>
				<shared-li>5. <accent>Конечные правки</accent>. Завершающий этап, после него проект деплоится и отдается клиенту</shared-li>
			</sections-default>
			<sections-default title="Файловая структура" id="file-structure">
				<node
					name="public"
					comment="Фавикон, публичные картинки, роботс"
				>
					<template #help>
						Содержит в себе все что доступно публично. Можно хранить моковые данные до подключения бекенда на этапе разработки
					</template>
					
					<node
						name="assets"
						comment="Моковые данные"
					>
						<node
							name="img"
							comment="Моковые картинки"
						>
							<template #help>
								Картинки желательно хранить в структуре по названиям репозиториев и пронумерованными, к примеру products/1.png, products/2.png и т.д
							</template>
						</node>
					</node>
					<node
						name="favicon.ico"
						comment="Фавикон"
					/>
					<node
						name="favicon.svg"
						comment="Фавикон SVG"
					/>
					<node
						name="favicon-96x96.png"
						comment="Фавикон 96x96"
					/>
					<node
						name="site.webmanifest"
						comment="Манифест для PWA"
					/>
					<node
						name="web-app-manifest-192x192.png"
						comment="Фавикон для PWA"
					/>
					<node
						name="web-app-manifest-512x512.png"
						comment="Фавикон для PWA"
					/>
				</node>
				<node
					name="src"
					comment="Корневая директория"
				>
					<node
						name="assets"
						comment="Стили, Шрифты, Иконки, Картинки"
					>
						<node
							name="fonts"
							comment="Шрифты"
						/>
						<node
							name="icons"
							comment="Иконки"
						/>
						<node
							name="scss"
							comment="Стили"
						>
							<template #help>
								Эта директория не должна содержать других файлов, кроме тех, что указаны ниже. Все остальные стили необходимо писать в самих компонентах
							</template>
							<node
								name="app.scss"
								comment="Сборка стилей"
							>
								<template #help>
									Не изменять.
								</template>
							</node>
							<node
								name="_global.scss"
								comment="Глобальные стили"
							>
								<template #help>
									Здесь можно указывать глобальные стили для всего сайта, к примеру стили текста, body и т.д.
								</template>
							</node>
							<node
								name="_fonts.scss"
								comment="Подключение шрифтов"
							/>
							<node
								name="_base.scss"
								comment="Базовые стили"
							>
								<template #help>
									Стили сброса дефолтных значений, общих стилей для тегов и т.д.
								</template>
							</node>
							<node
								name="_vars.scss"
								comment="Переменные"
							>
								<template #help>
									Все цвета, размеры шрифтов, и все, что касается общей темы сайта. Должно быть написано и использовано так, чтобы в любой момент, изменив только лишь этот файл, можно было перекрасить весь сайт целиком
								</template>
							</node>
							<node
								name="_utils.scss"
								comment="Вспомогательные стили"
							>
								<template #help>
									Стили контейнера, вспомогательных стилей вроде .mt-1 .mb-2 и т.д.
								</template>
							</node>
						</node>
					</node>
					<node
						name="components"
						comment="Компоненты"
					>
						<node
							name="fields"
							comment="Поля формы"
						>
							<template #help>
								Любые инпуты, которые используются в форме (Текстовый, Телефон, Селект, Текстареа и т.д.).
							</template>
						</node>
						<node
							name="forms"
							comment="Формы"
						/>
						<node
							name="modals"
							comment="Модальные окна"
						/>
						<node
							name="cards"
							comment="Карточки"
						/>
						<node
							name="containers"
							comment="Контейнеры карточек"
						>
							<template #help>
								Контейнеры - компоненты, которые состоят из родительского блока, в котором через цикл перебираются карточки
							</template>
						</node>
						<node
							name="widgets"
							comment="Виджеты"
						>
							<template #help>
								Компоненты, которые используются лишь 1 раз на сайте / странице, но недостаточно большие, чтобы являться секцией
							</template>
						</node>
						<node
							name="layout"
							comment="Шаблонные компоненты"
						>
							<template #help>
								Компоненты, которые используются в шаблонах (Header, Footer, BreadCrumbs ...)
							</template>
						</node>
						<node
							name="sections"
							comment="Секции"
						>
							<template #help>
								Компоненты, из которых полностью состоят страницы
							</template>
						</node>
						<node
							name="shared"
							comment="Базовые переиспользуемые компоненты"
						>
							<template #help>
								Любые односоставные компоненты, которые можно переиспользовать в любых частях сайта. Должны реализовывать только лишь 1 элемент (Кнопка, Тег, Заголовок ...)
							</template>
						</node>
					</node>
					<node
						name="hooks"
						comment="Хуки"
					>
						<template #help>
							Хуки - функции, в которых вынесена переиспользуемая логика.
						</template>
						
						<node
							name="useRepositoryData.js"
							comment="Хук получения списка сущностей"
						/>
						<node
							name="useRepositorySingle.js"
							comment="Хук получения записи по ID"
						/>
					</node>
					<node
						name="http"
						comment="Инстанс работы с API"
					>
						<template #help>
							Единый Axios Instance, через который осуществляются все запросы к API
						</template>
						
						<node
							name="index.js"
							comment="Инстанс работы с API"
						/>
					</node>
					<node
						name="layouts"
						comment="Шаблоны страниц"
					>
						<template #help>
							Возможные шаблоны помимо дефолтного - шаблон входа / регистрации. шаблон гостя / авторизованного пользователя.
						</template>
						
						<node
							name="app-layout.js"
							comment="Входной шаблон"
						>
							<template #help>
								Не изменять. Компонент для проброса нужного шаблона
							</template>
						</node>
						<node
							name="app-layout-default.js"
							comment="Базовый шаблон"
						>
							<template #help>
								Базовый шаблон. В большинстве случаев хватает только его одного
							</template>
						</node>
						<node
							name="index.js"
							comment="Перечень шаблонов"
						>
							<template #help>
								Здесь можно указать какие еще шаблоны помимо дефолтного могут быть использованы на сайте. Ключ шаблона можно использовать в meta конфигурации роутов для проброса шаблона
							</template>
						</node>
					</node>
					<node
						name="repositories"
						comment="Репозитории"
					>
						<node
							name="index.js"
							comment="Перечень репозиториев"
						/>
						<node
							name="Repository.js"
							comment="Базовый репозиторий"
						>
							<template #help>
								Класс, в котором реализована большая часть необходимого функционала репозиториев.
							</template>
						</node>
					</node>
					<node
						name="router"
						comment="Навигация по страницам"
					>
						<node
							name="middlewares"
							comment="Посредники"
						>
							<template #help>
								Посредники (Middleware) - функции, выполняющиеся между навигацией по сайту
							</template>
							<node
								name="layout.js"
								comment="Шаблон страницы"
							>
								<template #help>
									Не изменять. Функционал, позволяющий использовать шаблоны для страниц
								</template>
							</node>
						</node>
						<node
							name="index.js"
							comment="Инстанс роутера"
						>
							<template #help>
								Не изменять. Все что нужно уже есть
							</template>
						</node>
					</node>
					<node
						name="stores"
						comment="Менеджеры состояний"
					>
						<template #help>
							Менеджер состояния (Store) - класс, в котором можно определить глобальные данные, доступные даже во время навигации по сайту, и далее методы для работы с ними
						</template>
						
						<node
							name="ResourceStore.js"
							comment="Менеджер состояния данных с API"
						>
							<template #help>
								Не изменять. Реализует функционал, необходимый для работы репозиториев
							</template>
						</node>
					</node>
					<node
						name="utils"
						comment="Утилиты - помощники"
					>
						<template #help>
							Функции для выноса простого функционала, по типу вычисления, перебора и т.д.
						</template>
						
						<node
							name="passedTime.js"
							comment="Прошло ли X секунд с текущего момента"
						/>
						<node
							name="sortObjectAb.js"
							comment="Сортировка ключей объекта по алфавиту"
						/>
						<node
							name="trans.js"
							comment="Достает из объекта с ключами по языкам значение текущей локали"
						/>
					</node>
					<node
						name="views"
						comment="Страницы"
					>
						<node
							name="index.vue"
							comment="Главная страница"
						/>
					</node>
					<node
						name="App.vue"
						comment="Входная точка Vue приложения"
					/>
					<node
						name="icons.js"
						comment="Перечень OhVueIcons иконок"
					>
						<template #help>
							Не обязательный файл, если все иконки берутся с дизайна в /assets/icons
						</template>
					</node>
					<node
						name="main.js"
						comment="Инициализация Vue приложения"
					>
						<template #help>
							Здесь можно глобально регистрировать shared компоненты для упрощения работы
						</template>
					</node>
				</node>
				<node
					name=".env.example"
					comment="Пример файла окружения"
				>
					<template #help>
						На этапе подключения бекенда необходимо переименовать в .env, и в переменную VITE_API_URL указать адрес бекенда
					</template>
				</node>
				<node
					name="index.html"
					comment="Входная точка приложения"
				>
					<template #help>
						Необходимо установить дефолтный title, а так же фавикон
					</template>
				</node>
				<node
					name="jsconfig.json"
					comment="Настройки для IDE"
				>
					<template #help>
						Не изменять. Конфигурация для IDE, чтобы правильно распознавались пути с алиасами
					</template>
				</node>
				<node
					name="vite.config.js"
					comment="Конфигурация Vite"
				>
					<template #help>
						Конфигурация Vite - сборщика приложения. Читать документацию
					</template>
				</node>
			</sections-default>
			<sections-default title="Нейминг" id="naming">
				<shared-li>Все страницы и компоненты в нижнем регистре, <accent>kebab-case</accent></shared-li>
				<shared-li>Хуки в <accent>camelCase</accent>, с префиксом <accent>use</accent>. Пример: <accent>use</accent>RepositoryData, <accent>use</accent>RepositorySingle</shared-li>
				<shared-li>Использование компонентов в коде в <accent>kebab-case</accent>. Пример: sections-hero, shared-button</shared-li>
				<shared-li>Локальные функции компонентов / страниц, завязанные на события — с префиксом <accent>handle</accent>, а также в <accent>camelCase</accent>. Пример: <accent>handle</accent>Submit, <accent>handle</accent>Open</shared-li>
				
				<p>Стандартный набор названий страниц:</p>
				<shared-li><accent>index</accent> (Главная)</shared-li>
				<shared-li><accent>about</accent> (О Нас)</shared-li>
				<shared-li><accent>contacts</accent> (Контакты)</shared-li>
				<shared-li><accent>policy</accent> (Политика конфиденциальности)</shared-li>
				<shared-li><accent>terms</accent> (Улсовия пользования)</shared-li>
				<shared-li><accent>thanks</accent> (Страница "Спасибо")</shared-li>
			</sections-default>
			<sections-default title="Импорт" id="import">
				<shared-li>Ипорт иконок в <accent>camelCase</accent>, с постфиксом <accent>Icon</accent>. Пример: Star<accent>Icon</accent>, Times<accent>Icon</accent></shared-li>
			</sections-default>
			<sections-default title="Форматы" id="formats">
				<shared-li>Все иконки в <accent>svg</accent> формате, <important>должны</important> содержать только название иконки в <accent>нижнем регистре</accent>, <important>без</important> слова "icon"</shared-li>
				<shared-li>Формат моковых картинок неважен</shared-li>
				<shared-li>Картинки в <folder>/assets/img</folder> <important>должны</important> быть в <accent>webp</accent> формате. При этом нужно следить за качеством картинок</shared-li>
			</sections-default>
			<sections-default title="Общие правила" id="rules">
				<shared-li>Использование <accent>Composition API</accent> является <important>обязательным</important></shared-li>
				<shared-li>В <folder>/public/assets/img</folder> <important>должны</important> храниться только моковые картинки на этапе разработки. После подключения бекенда данная директория <important>должна</important> быть очищена</shared-li>
				<shared-li>В <folder>/assets/scss</folder> <important>не должно</important> быть никаких лишних файлов, кроме тех что создались во время разворачивания проекта. Все стили должны находиться в них / внутри компонентов, страниц</shared-li>
				<shared-li>Фавикон <important>должен</important> быть сгенерирован из svg картинки размером минимум <accent>256x256 px</accent> на сайте <accent link="https://realfavicongenerator.net">realfavicongenerator.net</accent></shared-li>
				<shared-li>Шрифты в <folder>/assets/fonts</folder> <important>должны</important> находиться в одноименной названию шрифта директории, включаищей только используемые вариации</shared-li>
				<shared-li><important>Нельзя</important> заменять иконки с дизайна на эмодзи/символы</shared-li>
				<shared-li>У всех картинок <important>должны</important> быть заданы ширина / высота</shared-li>
				<shared-li>Взаимодействие с API <important>должно</important> производиться только через <accent internal link="#repository-pattern">репозитории</accent></shared-li>
				<shared-li>Иконки <important>должны</important> быть реализованны следующим образом:</shared-li>
				<shared-code>
					<code-line>import StarIcon from "@icons/star.svg?raw"</code-line>
					<code-next />
					<code-line content='<i v-html="StarIcon" />'></code-line>
				</shared-code>
			</sections-default>
			<sections-default title="Паттерн репозиториев" id="repository-pattern">
				<p>Для облегчения и унификации работы с API мы используем repository pattern. </p>
				<p>Паттерн репозиториев — это паттерн, при котором соблюдается четкое распределение сущностей, а так же присваивается отдельный класс (репозиторий), через который осуществляется вся работа с сущностью (получение списка, получение единой записи по идентификатору).</p>
				<p>Помимо репозиториев, привязанных к сущностям, допускается создание и использование отдельных репозиториев, предназначенных для работы с действиями сохранения / обновления состояния в базе данных. Это может быть отправка формы, работа с данными авторизованного пользователя и тд.</p>
				<p>Все репозитории должны находиться в директории <folder>/repositories</folder>, и расширять базовый класс <accent>Repository</accent>.</p>
				<p>Таким образом, в любой части приложения у нас есть возможность вызвать любой из методов репозиториев</p>
				<p>Мы воспользуемся хуками <accent>useRepositoryData</accent> и <accent>useRepositorySingle</accent>:</p>
				<shared-code>
					<code-line>// Получаем список всех статей</code-line>
					<code-line>const { data: articles } = useRepositoryData('articles')</code-line>
					<code-next />
					<code-line>// Или одной по идентификатору</code-line>
					<code-line>const { data: article } = useRepositorySingle('articles', route.params.id)</code-line>
				</shared-code>
				<p>Рассмотрим пример с отправкой формы. Здесь воспользоваться хуками уже не получится, но это и не требуется, т.к. отправка формы и так гарантирует, что будет выполнена лишь раз.</p>
				<shared-code>
					<code-line>import $repositories from "@/repositories"</code-line>
					<code-next />
					<code-line>const handleSubmit = async () => {</code-line>
					<code-line :tab="1">await $repositories.applies.submit(formData)</code-line>
					<code-next />
					<code-line :tab="1">showSuccessModal()</code-line>
					<code-line :tab="1">clearFormData()</code-line>
					<code-line>}</code-line>
				</shared-code>
			</sections-default>
			<sections-default title="DRY" id="dry">
				<p><important>DRY</important> (Do not repeat yourself) - <important>Не повторяйся</important>. Правило, которое говорит само за себя. Если вы видите у себя в коде, что какие - то компоненты очень похожи друг на друга, значит, что - то вы делаете не так</p>
			</sections-default>
			<sections-default title="Использование сторонних зависимостей" id="dependencies">
				<shared-li>Для работы с API — <accent link="https://axios-http.com/docs/intro">axios</accent></shared-li>
				<shared-li>Для сторонних иконок — <accent link="https://oh-vue-icons.js.org/">oh-vue-icons</accent></shared-li>
				<shared-li>Для анимации взимодействия с DOM — <accent link="https://auto-animate.formkit.com/">@formkit/auto-animate</accent></shared-li>
				<shared-li>Для инпута с номером телефона — <accent link="https://github.com/jackocnr/intl-tel-input">intl-tel-input</accent></shared-li>
				<shared-li>Для слайдеров — <accent link="https://swiperjs.com/">swiper</accent></shared-li>
				<shared-li>Для приближения картинок — <accent link="https://fancyapps.com/">@fancyapps/ui</accent></shared-li>
				<shared-li>Для роутинга — <accent link="https://github.com/hannoeru/vite-plugin-pages">vite-plugin-pages</accent>. <important>* Dev зависимость</important></shared-li>
				<shared-li>Для scss — <accent link="https://www.npmjs.com/package/sass-embedded">sass-embedded</accent>. <important>* Dev зависимость</important></shared-li>
				<shared-li>Использование других модулей без согласования <important>запрещается</important></shared-li>
			</sections-default>
		</div>
	</div>
</template>
<script setup lang="ts">
</script>