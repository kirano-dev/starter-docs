<template>
	<div class="wrapper container">
		<widgets-nav />
		<div class="wrapper__body">
			<sections-default title="Разворачивание проекта" id="start">
				<p>Для быстрого развертывания нового проекта мы используем npm пакет <accent link="https://www.npmjs.com/package/@kirano/starter">@kirano/starter</accent>. Его необходимо установить глобально, и это делается лишь 1 раз:</p>
				<shared-code>npm i -g @kirano/starter</shared-code>
				<p>Далее в директории, где хотим развернуть проект, пишем:</p>
				<shared-code>kirano create:vue app</shared-code>
				<p>Здесь <accent>app</accent> — название проекта</p>
				<p>На этом разворчание готово.</p>
			</sections-default>
			<sections-default title="Файловая структура" id="file-structure">
				<node
					name="public"
					comment="Фавикон, публичные картинки, роботс"
				>
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
							<node
								name="app.scss"
								comment="Сборка стилей"
							/>
							<node
								name="_global.scss"
								comment="Глобальные стили"
							/>
							<node
								name="_fonts.scss"
								comment="Подключение шрифтов"
							/>
							<node
								name="_base.scss"
								comment="Базовые стили"
							/>
							<node
								name="_vars.scss"
								comment="Переменные"
							/>
							<node
								name="_utils.scss"
								comment="Вспомогательные стили"
							/>
						</node>
					</node>
					<node
						name="components"
						comment="Компоненты"
					>
						<node
							name="cards"
							comment="Карточки"
						/>
						<node
							name="containers"
							comment="Контейнеры карточек"
						/>
						<node
							name="widgets"
							comment="Виджеты"
						/>
						<node
							name="layout"
							comment="Шаблонные компоненты"
						/>
						<node
							name="sections"
							comment="Секции"
						/>
						<node
							name="shared"
							comment="Базовые переиспользуемые компоненты"
						/>
					</node>
					<node
						name="hooks"
						comment="Хуки"
					>
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
						<node
							name="index.js"
							comment="Инстанс работы с API"
						/>
					</node>
					<node
						name="layouts"
						comment="Шаблоны страниц"
					>
						<node
							name="app-layout.js"
							comment="Входной шаблон"
						/>
						<node
							name="app-layout-default.js"
							comment="Базовый шаблон"
						/>
						<node
							name="index.js"
							comment="Перечень шаблонов"
						/>
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
						/>
					</node>
					<node
						name="router"
						comment="Навигация по страницам"
					>
						<node
							name="middlewares"
							comment="Посредники"
						>
							<node
								name="layout.js"
								comment="Шаблон страницы"
							/>
						</node>
						<node
							name="index.js"
							comment="Инстанс роутера"
						/>
						<node
							name="routes.js"
							comment="Перечень роутов"
						/>
					</node>
					<node
						name="stores"
						comment="Менеджеры состояний"
					>
						<node
							name="ResourceStore.js"
							comment="Менеджер состояния данных с API"
						/>
					</node>
					<node
						name="utils"
						comment="Утилиты - помощники"
					>
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
					/>
					<node
						name="main.js"
						comment="Инициализация Vue приложения"
					/>
				</node>
				<node
					name=".env.example"
					comment="Пример файла окружения"
				/>
				<node
					name="index.html"
					comment="Входная точка приложения"
				/>
				<node
					name="jsconfig.json"
					comment="Настройки для IDE"
				/>
				<node
					name="vite.config.js"
					comment="Конфигурация Vite"
				/>
			</sections-default>
			<sections-default title="Нейминг" id="naming">
				<shared-li>Все страницы и компоненты в нижнем регистре, <accent>kebab-case</accent></shared-li>
				<shared-li>Хуки в <accent>camel-case</accent>, с префиксом <accent>use</accent>. Пример: <accent>use</accent>RepositoryData, <accent>use</accent>RepositorySingle</shared-li>
				<shared-li>Использование компонентов в коде в <accent>kebab-case</accent>. Пример: sections-hero, shared-button</shared-li>
				<shared-li>Локальные функции компонентов / страниц, завязанные на события — с префиксом <accent>handle</accent>, а также в <accent>camel-case</accent>. Пример: <accent>handle</accent>Submit, <accent>handle</accent>Open</shared-li>
			</sections-default>
			<sections-default title="Импорт" id="import">
				<shared-li>Ипорт иконок в <accent>camel-case</accent>, с постфиксом <accent>Icon</accent>. Пример: Star<accent>Icon</accent>, Times<accent>Icon</accent></shared-li>
			</sections-default>
			<sections-default title="Форматы" id="formats">
				<shared-li>Все иконки в <accent>svg</accent> формате</shared-li>
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
				<shared-li>Взаимодействие с API <important>должно</important> производиться только через <accent>репозитории</accent></shared-li>
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
			<sections-default title="Использование сторонних зависимостей" id="dependencies">
				<shared-li>Для работы с API — <accent link="https://axios-http.com/docs/intro">axios</accent></shared-li>
				<shared-li>Для сторонних иконок — <accent link="https://oh-vue-icons.js.org/">oh-vue-icons</accent></shared-li>
				<shared-li>Для анимации взимодействия с DOM — <accent link="https://auto-animate.formkit.com/">@formkit/auto-animate</accent></shared-li>
				<shared-li>Для инпута с номером телефона — <accent link="https://github.com/jackocnr/intl-tel-input">intl-tel-input</accent></shared-li>
				<shared-li>Для слайдеров — <accent link="https://swiperjs.com/">swiper</accent></shared-li>
				<shared-li>Для приближения картинок — <accent link="https://fancyapps.com/">@fancyapps/ui</accent></shared-li>
				<shared-li>Для scss — <accent link="https://www.npmjs.com/package/sass-embedded">sass-embedded</accent>. <important>* Dev зависимость</important></shared-li>
				<shared-li>Использование других модулей без согласования <important>запрещается</important></shared-li>
			</sections-default>
		</div>
	</div>
</template>
<script setup lang="ts">
</script>