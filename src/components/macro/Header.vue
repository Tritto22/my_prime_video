<template>
    <header>
       <div class="nav-container d-flex justify-content-center">
            <nav class="d-flex align-items-center">
                <a href="#" class="logo">
                    <h3>prime video</h3>
                </a>
                <ul class="d-flex filter">
                    <li><a href="#">Home<i class="fa-solid fa-chevron-down"></i><i class="fa-solid fa-chevron-up"></i></a></li>
                    <li><a href="#">Store<i class="fa-solid fa-chevron-down"></i><i class="fa-solid fa-chevron-up"></i></a></li>
                    <li><a href="#">TV in diretta</a></li>
                    <li><a href="#">Categorie<i class="fa-solid fa-chevron-down"></i><i class="fa-solid fa-chevron-up"></i></a></li>
                </ul>
                <ul class="user d-flex align-items-center">
                    <li @click="toggleChange()" :class="toggleReverse">
                        <a href="#" >
                            <i class="fa-solid fa-magnifying-glass"></i>
                        </a>
                    </li>
                    <li @click="toggleChange()" :class="toggle">
                        <a href="#">
                            <i class="fa-solid fa-xmark"></i>
                        </a>
                    </li>
                    <li><a href="#">Iscriviti</a></li>
                    <li><a href="#">IT<i class="fa-solid fa-chevron-down"></i><i class="fa-solid fa-chevron-up"></i></a></li>
                    <li><a href="#"><img src="../../assets/img/user_img.png" alt="user img"></a></li>
                </ul>
                <SearchBar id="search-bar" :class="toggle"/>
            </nav>
       </div>
    </header>
</template>

<script>
import SearchBar from '../commons/SearchBar.vue'
export default {
    name: 'Header',
    components: {
        SearchBar
    },
    data(){
        return{
            toggle: 'disable',
            toggleReverse: ''
        }
    },
    methods: {
        toggleChange(){
            if(this.toggle === 'disable'){
                this.toggle = 'active';
                this.toggleReverse = 'disable';
            } else{
                this.toggle = 'disable';
                this.toggleReverse = '';
            }
            
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../../assets/variables.scss';
.disable{
    display: none !important;
}
.active{
    display: flex;
    background-color: #191e25;
}
.user img{
    width: 35px;
}
.nav-container{
    #search-bar{
        position: absolute;
        bottom: 0;
        transform: translate;
        transform: translatey(100%);
        width: 100%;
        height: 100%;
    }
    nav{
        position: relative;
        border-radius: 8px;
        margin: 5px;
        height: 40px;
        .filter{
            margin: 0 50px;
        }
        ul{
            height: 100%;
            li{
                display: flex;
                align-items: center;
                padding: 0 20px;
                color: $nav-txt-color-light;
                font-weight: bold;
                height: 100%;
                .fa-chevron-down,.fa-chevron-up{
                    margin: 0 0 2px 6px;
                    font-size: 12px;
                }
                .fa-magnifying-glass,.fa-xmark{
                    font-size: 25px;
                }
                .fa-chevron-up{
                    display: none;
                }
                &:hover{
                    background-color: #191e25;
                    color: $primary-txt-color-light;
                }
                &:hover .fa-chevron-up{
                    display: inline-block;
                }
                &:hover .fa-chevron-down{
                    display: none;
                }
            }
        }
    }
}
</style>