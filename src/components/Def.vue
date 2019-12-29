<template>
  <div class="container">
    <div
      v-if="$store.state.loading"
      class="spinner-border text-primary mx-auto"
      role="status"
    >
      <span class="sr-only">Loading...</span>
    </div>
    <transition-group tag="div" class="container" name="fade">
      <div class="card border-primary" v-for="item in defs" :key="item.defid">
        <h5 class="card-header">
          {{ item.word }} | {{ new Date(item.written_on).getFullYear() }}
        </h5>
        <div class="card-body" @click="search_">
          <p class="card-text" v-html="to_badge(item.definition)"></p>
          <p class="card-text" v-html="to_badge(item.example)"></p>
        </div>
        <div class="footer mx-2">
          <a :href="item.permalink" class="btn btn-link btn-sm" role="button">
            <font-awesome-icon icon="external-link-alt" />SOURCE
          </a>
          <div>
            <span class="opinion">
              <font-awesome-icon icon="thumbs-up" />
              : {{ item.thumbs_up }}
            </span>
            <span class="opinion">
              <font-awesome-icon icon="thumbs-down" />
              : {{ item.thumbs_down }}
            </span>
          </div>
        </div>
      </div>
    </transition-group>
  </div>
</template>

<script>
export default {
  name: "Def",
  data() {
    return {
      colors: ["primary", "success", "danger", "info", "dark"]
    };
  },
  computed: {
    defs() {
      return this.$store.state.definitions;
    }
  },
  methods: {
    to_badge: function(sent) {
      return sent.replace(/\[[\w\s'"-]+?\]/g, s => {
        let color = this.colors[Math.floor(Math.random() * this.colors.length)];
        s = s.replace(/[\[\]]/g, "");
        return `<h5 class="d-inline"><a href="#" class="badge badge-${color}">${s}</a></h5>`;
      });
    },
    search_: function(e) {
      e.preventDefault();
      if (e.target.text) {
        this.$store.state.query = e.target.text;
        this.$store.dispatch("search_word");
      }
    }
  },
  beforeRouteEnter(to, from, next) {
    next(vm => {
      vm.$store.state.query = to.params.word;
      vm.$store.dispatch("search_word");
    });
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
}

.card-header {
  text-align: left;
}
.card-body {
  text-align: left;
}
div .card {
  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 50px;
  margin-right: 50px;
  width: calc(100% - 30px);
  border-radius: 5px;
  transition: 0.4s;
}

div .card:hover {
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.4);
  transform: translateY(-1px) scale(1.02);
  transition: all 0.5s ease;
}

.footer {
  display: flex;
  justify-content: space-between;
}

.opinion {
  margin-left: 5px;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
  transform: translateY(30px);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 1.5s;
}
</style>
