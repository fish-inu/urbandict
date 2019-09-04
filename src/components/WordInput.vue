<template>
  <div>
    <form class="form-inline my-2 my-lg-0" _lpchecked="1" id="form" >
      <input
        autofocus
        class="form-control mr-sm-2"
        type="text"
        placeholder="Type whatever you want"
        v-model="query"
      >
      <button type="submit" class="btn btn-primary" @click="passup_query">Search
      </button>
    </form>
  </div>
</template>

<script>
import $ from "jquery";
import Bloodhound from 'corejs-typeahead/dist/bloodhound';
import typeahead from 'corejs-typeahead/dist/typeahead.jquery';
//
export default {
  name: "WordInput",
  data() {
    return {
      query: ''
    }
  },
  methods: {
    passup_query: function() {
      //传递的event参数删除后消除了首次搜索凭空刷新的bug
      this.$store.state.query = this.query
      this.$store.commit('search_word')
    }
  },
  mounted() {
      var hound = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace("term"),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
          url:
            "http://api.urbandictionary.com/v0/autocomplete-extra?key=ab71d33b15d36506acf1e379b0ed07ee&term=%query",
          wildcard: "%query",
          transform: function(res) {
            return res.results;
          }
        }
      });
      console.log(hound)
      //
      $("input.form-control").typeahead(
        {
          hint: true,
          highlight: true,
          minLength: 2,
          classNames: {
            dataset: 'dropdown-menu show tt-dataset'
          }
        },
        {
          name: "wow",
          source: hound.ttAdapter(),
          display: function(datum) {
            return datum.term
          },
          templates: {
            suggestion: function(datum) {
  return `<a class="dropdown-item" href="#">${datum.term}</a>`
          }
          }
        }
      );
      //
      $('input').bind('typeahead:select', (ev, suggestion) => {
        this.$store.state.query=suggestion.term;
        this.$store.commit('search_word')
});
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#form {
  display: flex;
  justify-content: center;
}
</style>
