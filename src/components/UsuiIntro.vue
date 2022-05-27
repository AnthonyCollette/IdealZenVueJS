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
                    <p>Le reiki Usui est une technique énergétique qui consiste à transmettre l’énergie
universelle de vie</p>
                    <p>J’enseigne le reiki Usui shiki ryoho tel que je l’ai reçu, en 3 degrés. Chaque degré
est complet en soi et vous serez capable de transmettre l’énergie dès le 1er degré.</p> 
                    <p class="margin">Les stages se déroulent en groupe de 6 personnes maximum, les initiations sont
individuelles. Une formation peut être envisagée en individuel même si je conseille
plutôt les groupes. La dynamique qui se met en place est enrichissante pour chacun,
tant dans l'apprentissage de la pratique que dans le partage d'expérience.
</p> <p>Chaque stage comporte : <ul>
                        <li>une partie théorique,</li>
                        <li>une partie pratique,</li>
                        <li>une ou plusieurs initiations,</li>
                        <li>un livret de formation,</li>
                        <li>un certificat de formation délivré à la fin du stage,</li>
                        <li>21 jours d'auto-traitement à l'issue desquels nous échangeons pour faire le
point.</li>
                    </ul></p>
                    <div class="modal" id="modal" v-if="modal" @click="toggleModal">
                        <div class="modal--content">
                           <i class="fa-solid fa-xmark" ></i>                          
                        <h2>Infos utiles</h2>
                        <ul>
                            <li><strong>Durée :</strong> 2 jours</li>
                            <li><strong>Horaires :</strong> 9h-18h
</li>
                            <li><strong>Lieu :</strong> Couchey (21)</li>
                            <li><strong>Tarif :</strong> 200€ le degré</li>
                            <li>Repas en commun sur le principe
de l’auberge espagnole</li>
                            <li>Pas d’hébergement</li>
                            <li>Un entretien préalable est nécessaire
pour valider votre inscription.</li>
                        </ul>
                        </div>
                    </div>
                    <button class="btn" @click="toggleModal">Plus d'infos</button>
                </div>
                <img src="../../public/images/leafsinthewind2.svg" alt="Feuilles dans le vent">
            </div>
        </section>
</template>

<script>
export default {
name : 'UsuiIntro',
data() {
    return {
        modal: false,
    }
},
methods: {
    toggleModal() {
        this.modal = !this.modal
    }
},
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
            .btn {
                border: none;
                cursor: pointer;
                margin-top: 50px;
            }
            .modal {
                position: fixed;
                inset: 0 0 0 0;
                background-color: rgba($color: $color-005, $alpha: 0.6);
                display: flex;
                justify-content: center;
                align-items: center;
                z-index:1000;
                &--content {
                    background-color: $color-001;
                    padding: 50px;
                    border: 5px solid $color-005;
                    position: relative;
                    i {
                        position: absolute;
                        right: 20px;
                        top: 20px;
                        cursor: pointer;
                    }
                    h2 {
                        margin-bottom: 50px;
                    }

                }
            }
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