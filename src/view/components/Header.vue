<template>
    <header class="header">
        <div class="header__conteiner">
            <div class="header__logo">
                <img src="../../asset/logo.png" alt="logo">
                <div class="logo__text">
                    <h2>Тарифный калькулятор </h2>
                    <p>Лучший в своём роде!</p>
                </div>
            </div>
            <div class="header__menu">
                <button>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"/>
                    </svg>
                </button>
            </div>
        </div>
    </header>
</template>

<script></script>

<style lang="scss" scoped>
.header {
    width: 100%;
    height: 120px;
    padding: 0 10%;
    background: rgb(84, 84, 84);

    @media (max-width: 425px) {
        padding: 0 5%;
    }

    .header__conteiner {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        @media (max-width: 425px) {
            transform: scale(0.8);
        }
        
        .header__logo {
            cursor: pointer;
            display: flex;
            flex-direction: row;

            @media (max-width: 425px) {
                transform: scale(0.9);
            }

            img {
                user-select: none;
                width: 70px;
                height: auto;
            }

            .logo__text {
                margin-left: 20px;

                h2 {
                    font-size: 25px;
                    font-weight: 700;
                }

                p {
                    font-size: 18px;
                }
            }
        }
    }

    .header__menu {

        button {
            cursor: pointer;
            background: transparent;
            border: none;

            svg {
                width: 50px;
                height: auto;
            }
        }
    }
}
</style>