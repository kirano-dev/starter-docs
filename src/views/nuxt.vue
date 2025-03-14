<template>
	<div class="wrapper container">
		<widgets-nav />
		<div class="wrapper__body">
			<sections-default title="Разворачивание проекта" id="start">
				<p>Для быстрого развертывания нового проекта мы используем npm пакет <accent link="https://www.npmjs.com/package/@kirano/starter">@kirano/starter</accent>. Его необходимо установить глобально, и это делается лишь 1 раз:</p>
				<shared-code>npm i -g <accent>@kirano/starter</accent></shared-code>
				<p>Далее в директории, где хотим развернуть проект, пишем:</p>
				<shared-code>kirano create:<accent>nuxt</accent> <folder>app</folder></shared-code>
				<p>Здесь <accent>app</accent> — название проекта</p>
				<p>На этом разворчание готово.</p>
			</sections-default>
			<sections-default title="Файловая структура" id="file-structure">
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
					name="composables"
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
					<node
						name="useSettings.js"
						comment="Хук получения настроек"
					/>
				</node>
				
				<node
					name="layouts"
					comment="Шаблоны страниц"
				>
					<node
						name="default.vue"
						comment="Основной шаблон"
					/>
				</node>
				
				<node
					name="pages"
					comment="Страницы"
				>
					<node
						name="index.vue"
						comment="Главная страница"
					/>
				</node>
				
				<node
					name="plugins"
					comment="Плагины"
				>
					<node
						name="repositories.js"
						comment="Репозитории"
					/>
				</node>
				
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
					<node
						name="SettingRepository.js"
						comment="Репозиторий настроек"
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
					name="app.vue"
					comment="Входная точка приложения"
				/>
				
				<node
					name="nuxt.config.ts"
					comment="Конфигурация Nuxt"
				/>
			</sections-default>
			<sections-default title="Нейминг" id="naming">
				<shared-li>Все страницы и компоненты в нижнем регистре, <accent>kebab-case</accent></shared-li>
				<shared-li>Хуки в <accent>camelCase</accent>, с префиксом <accent>use</accent>. Пример: <accent>use</accent>RepositoryData, <accent>use</accent>RepositorySingle</shared-li>
				<shared-li>Использование компонентов в коде в <accent>kebab-case</accent>. Пример: sections-hero, shared-button</shared-li>
				<shared-li>Локальные функции компонентов / страниц, завязанные на события — с префиксом <accent>handle</accent>, а также в <accent>camelCase</accent>. Пример: <accent>handle</accent>Submit, <accent>handle</accent>Open</shared-li>
			</sections-default>
			<sections-default title="Импорт" id="import">
				<shared-li>Ипорт иконок в <accent>camelCase</accent>, с постфиксом <accent>Icon</accent>. Пример: Star<accent>Icon</accent>, Times<accent>Icon</accent></shared-li>
				<shared-li>Ипорт компонентов в nuxt автоматический, основанный на файловой структуре, в связи с чем <important>не желательно</important> импортировать компоненты вручную. Пример: sections-hero, shared-button</shared-li>
				<shared-li>Ипорт composable в nuxt автоматический, в связи с чем <important>не желательно</important> импортировать composable вручную. Пример: useRepositoryData, useRepositorySingle</shared-li>
				<shared-li>Ипорт utils в nuxt автоматический, в связи с чем <important>не желательно</important> импортировать utils вручную.</shared-li>
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
				<shared-li><important>Нельзя</important> отключать <accent>SSR</accent></shared-li>
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
				<p>В директории <folder>/plugins</folder> создается плагин <accent>repositories.js</accent>, в котором пробрасывается в контекст приложения константа <accent>$repositories</accent>, содержащая в себе все доступные репозитории. Сами репозитории должны находиться в директории <folder>/repositories</folder>, и расширять базовый класс <accent>Repository</accent>.</p>
				<p>Таким образом, в любой части приложения у нас есть возможность вызвать любой из методов репозиториев:</p>
				<shared-code>
					<code-line>const { $repositories } = useNuxtApp()</code-line>
					<code-next />
					<code-line>// Получаем список всех статей</code-line>
					<code-line>const { data: articles } = await $repositories.articles.all()</code-line>
					<code-next />
					<code-line>// Или одной по идентификатору</code-line>
					<code-line>const { data: article } = await $repositories.articles.show(route.params.id)</code-line>
				</shared-code>
				<p>Однако, необходимо так же работать с <accent>кешированием</accent> получаемых данных, т.к. любой подобный запрос к API <important>задерживает</important> отрисовку всей страницы, и мы заставляем пользователя ждать. Поэтому мы используем встроенный <accent>composable</accent> из nuxt — <accent>useState</accent>. Он позволяет хранить в себе данные, которые будут доступны во время перехода по страницам. Благодаря такому подходу, мы можем избежать повторных запросов.</p>
				<p>Функционал, эффективно работающий с кешированием, уже написан, и нам остается только использовать его. Для этого мы воспользуемся composable <accent>useRepositoryData</accent> и <accent>useRepositorySingle</accent>:</p>
				<shared-code>
					<code-line>// Получаем список всех статей</code-line>
					<code-line>const { data: articles } = await useRepositoryData('articles')</code-line>
					<code-next />
					<code-line>// Или одной по идентификатору</code-line>
					<code-line>const { data: article } = await useRepositorySingle('articles', route.params.id)</code-line>
				</shared-code>
				<p>Теперь, если мы даже напишем этот код несколько раз подряд, запрос будет выполнен лишь однажды.</p>
				<p>Рассмотрим пример с отправкой формы. Здесь воспользоваться composable уже не получится, но это и не требуется, т.к. отправка формы и так гарантирует, что будет выполнена лишь раз.</p>
				<shared-code>
					<code-line>const { $repositories } = useNuxtApp()</code-line>
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
				<shared-li>Для мультиязычности — <accent link="https://nuxt.com/modules/nuxt-i18n-micro">nuxt-i18n-micro</accent></shared-li>
				<shared-li>Для анимации по ходу скролла — <accent link="https://nuxt.com/modules/aos">nuxt-aos</accent></shared-li>
				<shared-li>Для анимации взимодействия с DOM — <accent link="https://auto-animate.formkit.com/">@formkit/auto-animate</accent></shared-li>
				<shared-li>Для инпута с номером телефона — <accent link="https://github.com/jackocnr/intl-tel-input">intl-tel-input</accent></shared-li>
				<shared-li>Для слайдеров — <accent link="https://swiperjs.com/">swiper</accent></shared-li>
				<shared-li>Для Google Tag — <accent link="https://nuxt.com/modules/gtag">nuxt-gtag</accent></shared-li>
				<shared-li>Для Yandex Metrica — <accent link="https://github.com/digitalcortex/yandex-metrika-module-nuxt3">yandex-metrika-module-nuxt3</accent></shared-li>
				<shared-li>Для авторизации — <accent link="https://nuxt.com/modules/nuxt-auth-sanctum">nuxt-auth-sanctum</accent></shared-li>
				<shared-li>Для инпута ввода кода подтверждения — <accent link="https://www.npmjs.com/package/@venegrad/vue3-code-input">@venegrad/vue3-code-input</accent></shared-li>
				<shared-li>Для приближения картинок — <accent link="https://fancyapps.com/">@fancyapps/ui</accent></shared-li>
				<shared-li>Для scss — <accent link="https://www.npmjs.com/package/sass-embedded">sass-embedded</accent>. <important>* Dev зависимость</important></shared-li>
				<shared-li>Использование других модулей без согласования <important>запрещается</important></shared-li>
			</sections-default>
		</div>
	</div>
</template>
<script setup lang="ts">
</script>