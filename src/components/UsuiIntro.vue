<template>
  <section class="usui__intro">
            <div class="container">
                <h1 class="h1">Formations reiki</h1>
                <h2>Reiki Usui Shiki Ryoho</h2>
                <div class="usui__intro--religion">
                    <p>Le reiki est une énergie accessible à tous et qui ne nécessite aucun pré-requis.</p>
                    <p>Il se transmet et se pratique en dehors de toute religion ou dogme.</p>
                </div>
                <div class="usui__intro--text-wrapper">
                    <p>Le reiki Usui shiki ryoho est une technique énergétique qui consiste à transmettre l'énergie universelle de vie.</p>
                    <p>J'enseigne le reiki tel que je l'ai reçu en 3 degrés, chaque degré est complet en soi.</p> 
                    <p class="margin">Les stages se déroulent en présentiel, en groupe (4 à 6 personnes maximum) ou en individuel. Je conseille les groupes plutôt que l'apprentissage individuel. La dynamique qui se met en place est enrichissante pour chacun, tant dans l'apprentissage de la pratique que dans le partage d'expérience.</p> <p>Chaque stage comporte : <ul>
                        <li>une partie enseignement/pratique,</li>
                        <li>une ou plusieurs initiations,</li>
                        <li>un certificat de formation délivré à la fin du degré,</li>
                        <li>21 jours d'auto-traitement à l'issue desquels nous échangeons pour faire le point.</li>
                    </ul></p>
                </div>
                <img src="../../public/images/leafsinthewind2.svg" alt="Feuilles dans le vent">
            </div>
        </section>
</template>

<script>
export default {
name : 'UsuiIntro'
}
</script>

<style lang="scss" scoped>
.usui__intro {
        padding: 50px 0 100px 0;
        @include min($lg) {
            padding: 100px 0;
        }
        .container {
            position: relative;
            > img {
                display: none;
                @include min($md) {
                    display: block;
                    position: absolute;
                    bottom: -8%;
                    right: 0;
                }
                @include min($xl) {
                    bottom: 0;
                    right: 10%;
                }
            }
        }
        h1 {
            margin-bottom: 30px;
            @include min($lg) {
                margin-bottom: 80px;
            }
            @include min($xxxl) {
                margin-bottom: 0;
            }
        }
        h2 {
            background-color: $color-005;
            position: relative;
            padding: 20px 50px;
            width: fit-content;
            width: -moz-fit-content;
            margin: 0 auto;
            display: block;
            text-align: center;
            &::after {
                content: '';
                width: 100%;
                height: 100%;
                position: absolute;
                border: 3px solid $color-009;
                left: 3%;
                bottom: 10%;
                z-index: -1;
            }
        }
        &--religion {
            display: flex;
            flex-direction: column;
            align-items: center;
            margin: 40px 0;
            @include min($lg) {
                margin: 75px 0;
            }
            p {
                font-style: italic;
            }
        }
        p,
        li {
            color: $color-003;
        }
        &--text-wrapper {
            max-width: 82%;
        }
        ul {
            padding-left: 0;
        }
        li {
            font-size: 16px;
            font-family: $font-001;
            @include min($xxl) {
                font-size: 21px;
            }
            &::before {
                content: '-';
                margin-right: 5px;
            }
        }
        .margin {
            margin: 20px 0;
        }
    }
</style>