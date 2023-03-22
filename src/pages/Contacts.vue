<script>
import axios from 'axios';
const endpoint = 'http://localhost:8000/api/contact-message';
const emptyform = { email: '', object: '', text: '', news_letter: false }
export default {
    name: 'ContactPage',
    data: () => ({
        isLoading: false,
        message: null,
        type: '',
        form: emptyform,
        hasError: false,
        errors: {}
    }),
    methods: {
        validateForm() {
            this.errors = {};
            const errors = {};

            if (!this.form.email) {
                errors.email = 'La mail è obbligatoria'
            }

            if (!this.form.object) {
                errors.object = "L'oggetto è obbligatorio"
            }

            if (!this.form.text) {
                errors.text = 'Il testo è obbligatorio'
            }

            this.errors = errors;
        },
        sendForm() {
            this.validateForm();

            if (!this.hasErrors) {
                this.isLoading = true
                axios.post(endpoint, this.form).then(() => {
                    event.target.form = emptyform;
                    this.message = 'Inviato con successo'
                    this.type = 'success'
                }).catch((err) => {
                    if (err.response.status === 400) {
                        const { errors } = err.response.data;
                        const errormessage = {};
                        for (let key in errors) errormessage[key] = errors[key][0];
                        this.errors = errormessage
                        this.type = 'danger'
                    } else
                        this.errors = { network: 'Si è verificato un errore' }
                    this.hasError = true;

                }).then(() => {
                    this.isLoading = false
                })
            }
        }
    },
    computed: {
        hasErrors() {
            return Object.keys(this.errors).length;
        }
    }
}
</script>

<template>
    <app-alert v-if="hasErrors" @close-alert="hasError = false" type="danger">
        <div v-if="message"> {{ message }}</div>
        <ul v-if="hasErrors">
            <li v-for="(error, key) in errors" :key="key">{{ error }}</li>
        </ul>
    </app-alert>
    <app-loader v-if="isLoading"></app-loader>
    <section id="contacts">
        <h1>Contact</h1>

        <form @submit.prevent="sendForm">
            <!-- Email -->
            <div class="mb-3">
                <label for="email" class="form-label">Indirizzo mail:</label>
                <input type="email" class="form-control" id="email" placeholder="name@example.com" name="email"
                    v-model="form.email">
                <!-- <div v-if="errors.email" class="invalid-feedback">
                        {{ errors.email }}
                    </div> -->
            </div>

            <!-- Oggetto -->
            <div class="mb-3">
                <label for="object" class="form-label">Oggetto:</label>
                <input type="text" class="form-control" id="object" name="object" v-model="form.object">
            </div>

            <!-- Testo -->
            <div class="mb-3">
                <label for="text" class="form-label">Testo:</label>
                <textarea class="form-control" id="text" rows="5" name="text" v-model="form.text"></textarea>
            </div>

            <!-- Iscrizione news letter -->
            <div class="d-flex justify-content-between pt-3">

                <div class="form-check form-check-inline">
                    <input class="form-check-input" type="checkbox" id="news-letter" value="option1"
                        v-model="form.news_letter">
                    <label class="form-check-label" for="news-letter">Iscriviti alla news letter</label>
                </div>

                <button type="submit" class="btn btn-warning">Invia</button>
            </div>
        </form>
    </section>
</template>

<style lang="scss" scoped>
#contacts {
    background-color: rgba($color: #000000, $alpha: 0.6);
    padding: 50px;
    color: white;
}
</style>