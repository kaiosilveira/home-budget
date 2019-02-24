<template>
    <div>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-list two-line subheader>
                    <div class="box-title">
                        <div>
                            <h2>Categorias</h2>
                        </div>
                    </div>

                    <v-list-tile
                        v-for="item in items"
                        :key="item.title"
                        avatar
                    >
                        <v-list-tile-avatar>
                            <v-icon :class="[item.iconClass]">{{ item.icon }}</v-icon>
                        </v-list-tile-avatar>

                        <v-list-tile-content>
                            <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            <v-list-tile-sub-title>{{ item.subtitle }}</v-list-tile-sub-title>
                        </v-list-tile-content>
                    </v-list-tile>
                    </v-list>
                </v-card>
            </v-flex>

            <div class="text-xs-center">
            <v-dialog
                v-model="dialog"
                width="500"
            >
            <v-card>
                <v-card-title>
                <span class="headline">Adicionar Categorias</span>
                </v-card-title>

                <v-card-text>
                    <v-flex xs12 sm6 md4>
                        <v-text-field label="Nome da Categoria*" required></v-text-field>
                    </v-flex>
                </v-card-text>

                <v-divider></v-divider>

                <v-card-actions>
                <v-btn color="blue darken-1" flat @click="dialog = false">Fechar</v-btn>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" flat @click="dialog = false; snackbar = true">Salvar</v-btn>
                </v-card-actions>
            </v-card>
            </v-dialog>
        </div>

            <v-snackbar
            v-model="snackbar"
            :bottom="y === 'bottom'"
            :multi-line="mode === 'multi-line'"
            :right="x === 'right'"
            :timeout="timeout"
            >
            {{ text }}
            <v-btn
                color="pink"
                flat
                @click="snackbar = false"
            >
                Fechar
            </v-btn>
            </v-snackbar>
        </v-layout>

        <v-card id="create">
            <v-speed-dial
                v-model="fab"
                :top="top"
                :bottom="bottom"
                :right="right"
                :left="left"
                :direction="direction"
                :open-on-hover="hover"
                :transition="transition"
            >
            <v-btn
                slot="activator"
                v-model="fab"
                color="blue darken-2"
                dark
                fab
            >
                <v-icon>apps</v-icon>
                <v-icon>close</v-icon>
            </v-btn>
            <v-btn
                fab
                dark
                small
                color="green"
            >
                <v-icon>edit</v-icon>
            </v-btn>
            <v-btn
                fab
                dark
                small
                color="indigo"
                @click="dialog = true"
            >
                <v-icon>add</v-icon>
            </v-btn>
            <v-btn
                fab
                dark
                small
                color="red"
            >
                <v-icon>delete</v-icon>
            </v-btn>
            </v-speed-dial>
        </v-card>
    </div>

</template>

<script>
  export default {
    computed: {
      activeFab () {
        switch (this.tabs) {
          case 'one': return { 'class': 'purple', icon: 'account_circle' }
          case 'two': return { 'class': 'red', icon: 'edit' }
          case 'three': return { 'class': 'green', icon: 'keyboard_arrow_up' }
          default: return {}
        }
      }
    },

    watch: {
      top (val) {
        this.bottom = !val
      },
      right (val) {
        this.left = !val
      },
      bottom (val) {
        this.top = !val
      },
      left (val) {
        this.right = !val
      }
    },

    data () {
      return {
        direction: 'top',
        fab: false,
        fling: false,
        hover: false,
        tabs: null,
        top: false,
        right: true,
        bottom: true,
        left: false,
        transition: 'slide-y-reverse-transition',

        dialog: false,
        snackbar: false,
        y: 'bottom',
        x: 'right',
        mode: 'multi-line',
        timeout: 3000,
        text: 'Adicionado com sucesso.',
        
        items: [
          { icon: 'assignment', iconClass: 'blue white--text', title: 'Transporte', subtitle: 'Jan 20, 2014', router: '/dashboard' },
          { icon: 'assignment', iconClass: 'amber white--text', title: 'Casa', subtitle: 'Jan 10, 2014', router: '/dashboard' }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
    .box-title {
        padding: 3%;
        border-bottom: .5px solid rgba($color: #000000, $alpha: .1)
    }

    #create .v-speed-dial {
        position: fixed;
    }

    #create .v-btn--floating {
        position: relative;
    }
</style>
