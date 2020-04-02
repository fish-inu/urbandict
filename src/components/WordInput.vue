<template>
  <div>
    <form class="d-flex justify-content-center" _lpchecked="1" id="form">
      <input
        autofocus
        class="form-control"
        type="text"
        placeholder="Type whatever you want"
        v-model="query"
      />
      <transition name='fade' mode="out-in"
        ><button type="submit" class="btn btn-primary ml-2" @click="passup_query" :key="this.$store.state.loading" >
          {{ this.$store.state.loading ? "Loading" : "Search" }}
        </button></transition>
      <div class="custom-control custom-switch">
        <input
          type="checkbox"
          class="custom-control-input"
          id="customSwitch1"
          v-model="isDark"
          @change="dark"
        />
        <label class="custom-control-label" for="customSwitch1"
          >Light | Dark</label
        >
      </div>
    </form>
  </div>
</template>

<script>
import $ from "jquery";
import Bloodhound from "corejs-typeahead/dist/bloodhound";
import typeahead from "corejs-typeahead/dist/typeahead.jquery";
//
export default {
  name: "WordInput",
  data() {
    return {
      query: "",
      isDark: false
    };
  },
  methods: {
    passup_query: function(e) {
      //传递的event参数删除后消除了首次搜索凭空刷新的bug
      e.preventDefault();
      this.$store.state.query = this.query;
      this.$store.dispatch("search_word");
    },
    dark: function() {
      let cards = document.querySelectorAll(".card");
      let nav_bar = document.querySelector(".navbar");
      let body_tag = document.querySelector("body");
      body_tag.classList.add("dark_mode");
      if (this.isDark == true) {
        cards.forEach(card => {
          card.classList.add("text-white", "bg-secondary");
          card.classList.remove("border-primary");
        });
        nav_bar.classList.replace("bg-primary", "bg-dark");
      } else {
        body_tag.classList.remove("dark_mode");
        cards.forEach(card => {
          card.classList.remove("text-white", "bg-secondary");
          card.classList.add("border-primary");
        });
        nav_bar.classList.replace("bg-dark", "bg-primary");
      }
    }
  },
  mounted() {
    var hound = new Bloodhound({
      datumTokenizer: Bloodhound.tokenizers.obj.whitespace("term"),
      queryTokenizer: Bloodhound.tokenizers.whitespace,
      remote: {
        url:
          "https://api.urbandictionary.com/v0/autocomplete-extra?key=ab71d33b15d36506acf1e379b0ed07ee&term=%query",
        wildcard: "%query",
        transform: function(res) {
          return res.results;
        }
      }
    });
    console.log(hound);
    //
    $("input.form-control").typeahead(
      {
        hint: true,
        highlight: true,
        minLength: 2,
        classNames: {
          dataset: "dropdown-menu show tt-dataset"
        }
      },
      {
        name: "wow",
        source: hound.ttAdapter(),
        display: function(datum) {
          return datum.term;
        },
        templates: {
          suggestion: function(datum) {
            return `<a class="dropdown-item" href="#">${datum.term}</a>`;
          }
        }
      }
    );
    //
    $("input").bind("typeahead:select", (ev, suggestion) => {
      ev.preventDefault();
      this.$store.state.query = suggestion.term;
      this.$store.dispatch("search_word");
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#form {
  display: flex;
  justify-content: center;
}

.custom-control {
  margin-left: 10px;
}

body.dark_mode {
  background-color: #2c3e50;
}

.fade-enter-active, .fade-leave-active {
  transition: all 0.2s;
}

.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>
