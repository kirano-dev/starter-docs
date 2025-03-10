<template>
	<div class="wrapper container">
		<widgets-nav />
		<div class="wrapper__body">
			<sections-default title="Работа с медиа" id="media">
				<p>Документация - <accent link="https://spatie.be/docs/laravel-medialibrary/v11/installation-setup">spatie media</accent></p>
				<p>Установка:</p>
				<shared-code>
					<code-line>composer require "spatie/laravel-medialibrary"</code-line>
				</shared-code>
				<p>Публикация миграций</p>
				<shared-code>
					<code-line>php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider" --tag="medialibrary-migrations"</code-line>
				</shared-code>
				<p>Публикация конфига</p>
				<shared-code>
					<code-line>php artisan vendor:publish --provider="Spatie\MediaLibrary\MediaLibraryServiceProvider" --tag="medialibrary-config"</code-line>
				</shared-code>
				<p>На этом этапе лучше сразу увеличить лимит размера загружаемых файлов в <folder>/config/media-library.php</folder> (по умолчанию 10мб)</p>
				<shared-code>
					<code-line>'max_file_size' => 1024 * 1024 * 64, // 64mb</code-line>
				</shared-code>
				<p>Базовая разметка для моделей:</p>
				<shared-code>
					<code-line>class Article extends Model implements HasMedia {</code-line>
					<code-line :tab="1">use InteractsWithMedia;</code-line>
					<code-next></code-next>
					<code-line language="php" :tab="1">public function registerMediaCollections(): void {</code-line>
					<code-line :tab="2">$this->addMediaCollection('image')->singleFile();</code-line>
					<code-line :tab="1">}</code-line>
					<code-next></code-next>
					<code-line language="php" :tab="1">public function registerMediaConversions(?Media $media = null): void {</code-line>
					<code-line :tab="2">$this->addMediaConversion('webp')</code-line>
					<code-line :tab="3">->format('webp')</code-line>
					<code-line language="php" :tab="3">->nonOptimized()</code-line>
					<code-line language="php" :tab="3">->nonQueued();</code-line>
					<code-line :tab="1">}</code-line>
					<code-line>}</code-line>
				</shared-code>
			</sections-default>
			<sections-default title="Работа с СМС информированием" id="sms">
				<p>Устанавливаем пакет - <accent link="https://packagist.org/packages/kirano-dev/laravel-sms">kirano-dev/laravel-sms</accent></p>
				<shared-code>
					<code-line>composer require "kirano-dev/laravel-sms"</code-line>
				</shared-code>
				<p>Публикация конфига</p>
				<shared-code>
					<code-line>php artisan vendor:publish --provider="KiranoDev\LaravelSms\LaravelSmsServiceProvider"</code-line>
				</shared-code>
				<p>Теперь в <folder>/config/sms.php</folder> можно прописать настройки для каждой из доступных интеграций: <accent>Eskiz</accent>, <accent>GetSMS</accent>, <accent>PlayMobile</accent></p>
				<p>Далее нужно определить внешний сервис:</p>
				<shared-code>
					<code-line>// app/Providers/AppServiceProvider.php</code-line>
					<code-next></code-next>
					<code-line language="php">public function boot(): void {</code-line>
					<code-line :tab="1">app()->singleton(SmsService::class, Eskiz::class);</code-line>
					<code-line>}</code-line>
				</shared-code>
				<p>На этапе разработки можно использовать тестовый сервис <accent>SmsTemp</accent>:</p>
				<shared-code>
					<code-line>// Все сообщения будут падать в логи</code-line>
					<code-line>app()->singleton(SmsService::class, SmsTemp::class);</code-line>
				</shared-code>
				<p>Для отправки СМС можно использовать DI:</p>
				<shared-code>
					<code-line>public function login(Request $request, SmsService $smsService): {</code-line>
					<code-line :tab="1">// ...</code-line>
					<code-line :tab="1">$code = randint(1111, 9999);</code-line>
					<code-line :tab="1">$smsService->send($request->phone, $code);</code-line>
					<code-line :tab="1">// ...</code-line>
					<code-line>}</code-line>
				</shared-code>
			</sections-default>
			<sections-default title="Работа с платежными системами" id="payment">
				<p>Устанавливаем пакет - <accent link="https://packagist.org/packages/kirano-dev/laravel-payment">kirano-dev/laravel-payment</accent></p>
				<shared-code>
					<code-line>composer require "kirano-dev/laravel-payment"</code-line>
				</shared-code>
				<p>Публикация конфига, миграций, роутов и переводов:</p>
				<shared-code>
					<code-line>php artisan vendor:publish --provider="KiranoDev\LaravelPayment\LaravelPaymentServiceProvider"</code-line>
				</shared-code>
				<p>Теперь в <folder>/config/payment.php</folder> можно прописать настройки для каждой из доступных интеграций:</p>
				<shared-li>Click</shared-li>
				<shared-li>Payme</shared-li>
				<shared-li>Uzum</shared-li>
				<shared-li>QuickPay <important>(deprecated)</important></shared-li>
				<shared-li>InfinityPay</shared-li>
				<shared-li>Paynet</shared-li>
				<shared-li>Octobank</shared-li>
				<p>Далее нужно связать внешние контракты с моделями:</p>
				<shared-code>
					<code-line>// app/Providers/AppServiceProvider.php</code-line>
					<code-next></code-next>
					<code-line language="php">public function register(): void {</code-line>
					<code-line :tab="1">app()->bind(OrderModel::class, Order::class);</code-line>
					<code-line :tab="1">app()->bind(ProductModel::class, Product::class);</code-line>
					<code-line :tab="1">app()->bind(UserModel::class, User::class);</code-line>
					<code-line>}</code-line>
				</shared-code>
				<p>Все модели, которые являются продукцией должны имплементировать контракт <accent>Productable</accent>:</p>
				<shared-code>
					<code-line language="php">class Product implements Productable</code-line>
				</shared-code>
				<p>И реализовывать метод <accent>getFiscalizationInfo</accent>, который возвращает <accent>array</accent> со следующими значениями:</p>
				<shared-li>id - <accent>int</accent> (ID в системе)</shared-li>
				<shared-li>title - <accent>string</accent> (наименование позиции)</shared-li>
				<shared-li>price - <accent>int</accent> (цена в сумах)</shared-li>
				<shared-li>package_code - <accent>string</accent> (код упаковки)</shared-li>
				<shared-li>ikpu - <accent>string</accent> (ИКПУ код)</shared-li>
				<p><accent>Order</accent> модель должна иметь следующие колонки:</p>
				<shared-li>amount - <accent>int</accent></shared-li>
				<shared-li>payment_method - <accent>enum</accent> (\KiranoDev\LaravelPayment\PaymentMethod)</shared-li>
				<p>А также расширять класс <accent>OrderModel</accent>:</p>
				<shared-code>
					<code-line language="php">class Order extends OrderModel</code-line>
				</shared-code>
				<p>Теперь у <accent>Order</accent> есть метод <accent>generateUrl</accent>, который возвращает ссылку на платежную систему (<accent>string</accent>):</p>
				<shared-code>
					<code-line>return redirect()->url($order->generateUrl());</code-line>
				</shared-code>
				<p>После успешной оплаты у <accent>Order</accent> вызывается метод <accent>process</accent>, который можно реализовать согласно бизнес логике</p>
				<p>Callback URL:</p>
				<shared-li>Click - <accent copy>/api/v1/payment/click</accent></shared-li>
				<shared-li>Payme - <accent copy>/api/v1/payment/payme</accent></shared-li>
				<shared-li>Uzum - <accent copy>/api/v1/payment/uzum</accent></shared-li>
				<shared-li>QuickPay (<important>deprecated</important>) - <accent copy>/api/v1/payment/quickpay</accent></shared-li>
				<shared-li>InfinityPay:</shared-li>
				<shared-li tab>info - <accent copy>/api/v1/payment/infinitypay/info</accent></shared-li>
				<shared-li tab>pay - <accent copy>/api/v1/payment/infinitypay/pay</accent></shared-li>
				<shared-li tab>notify - <accent copy>/api/v1/payment/infinitypay/notify</accent></shared-li>
				<shared-li tab>cancel - <accent copy>/api/v1/payment/infinitypay/cancel</accent></shared-li>
				<shared-li tab>statement - <accent copy>/api/v1/payment/infinitypay/statement</accent></shared-li>
				<shared-li tab>fiscalization - <accent copy>/api/v1/payment/infinitypay/fiscalization</accent></shared-li>
				<shared-li>Paynet - <accent copy>/api/v1/payment/paynet</accent></shared-li>
				<shared-li>Octobank - <accent copy>/api/v1/payment/octobank</accent></shared-li>
				<p>Префикс <accent>api/v1</accent> можно поменять в <folder>/config/payment.php</folder></p>
				<shared-code>
					<code-line>'api_prefix' => 'api/v1',</code-line>
				</shared-code>
			</sections-default>
		</div>
	</div>
</template>
<script setup lang="ts">
import SharedLi from "@/components/shared/li.vue";
</script>