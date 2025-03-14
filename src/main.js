import '@/assets/scss/app.scss'

import {createApp} from 'vue'
import App from './App.vue'
import Title from "@/components/shared/title.vue";
import Folder from "@/components/shared/folder.vue";
import Default from "@/components/sections/default.vue";
import Code from "@/components/shared/code.vue";
import Li from "@/components/shared/li.vue";
import Important from "@/components/shared/important.vue";
import Accent from "@/components/shared/accent.vue";
import Nav from "@/components/widgets/nav.vue";
import CodeLine from "@/components/shared/code-line.vue";
import CodeNext from "@/components/shared/code-next.vue";
import Node from "@/components/shared/node.vue";

import hljs from 'highlight.js/lib/core';
import bash from 'highlight.js/lib/languages/bash';
import javascript from 'highlight.js/lib/languages/javascript';
import php from 'highlight.js/lib/languages/php';
import xml from 'highlight.js/lib/languages/xml';
import 'highlight.js/styles/atom-one-dark-reasonable.min.css';
import {autoAnimatePlugin} from "@formkit/auto-animate/vue";
import router from "@/router/index.js";
import hljsVuePlugin from "@highlightjs/vue-plugin";
import Modal from "@/components/shared/modal.vue";

const app = createApp(App)

hljs.registerLanguage('xml', xml);
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('php', php);
hljs.registerLanguage('bash', bash);

app.use(autoAnimatePlugin)
app.use(router)
app.use(hljsVuePlugin)

app.component('node', Node)
app.component('shared-title', Title)
app.component('important', Important)
app.component('accent', Accent)
app.component('folder', Folder)
app.component('shared-li', Li)
app.component('shared-code', Code)
app.component('code-line', CodeLine)
app.component('code-next', CodeNext)
app.component('sections-default', Default)
app.component('widgets-nav', Nav)
app.component('shared-modal', Modal)

app.mount('#app')