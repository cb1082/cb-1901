import tabbar from "./components/tab-bar.vue";
import { Icon ,Toast,Lazyload  } from 'vant';
import Scroll from './components/scroll.vue';
import item from './components/item';
import header from './components/app-header';

export default{
    install(vue){
        vue.component(tabbar.name,tabbar);
        vue.component(Scroll.name,Scroll);
        vue.component(item.name,item);
        vue.component(header.name,header);
        vue.use(Icon);
        vue.use(Toast);
        vue.use(Lazyload);
    }
}