<template>
  <div class="checkbox">
    <h3>{{ filterName }}</h3>
    <div class="list" v-if="filterName == 'Type'">
      <div class="item" v-for="type in types" :key="type.type_id">
        <input
          type="checkbox"
          v-model="checkedType"
          name="type.type"
          :value="type.type_id + '-type'"
          :ref="type"
        />
        <label :for="type.type">{{ type.type }}</label>
      </div>
    </div>
    <div class="list" v-else-if="filterName == 'Genre'">
      <div class="item" v-for="subject in genres" :key="subject.subject_id">
        <input
          type="checkbox"
          v-model="checkedGenre"
          name="subject.subject"
          :value="subject.subject_id + '-subject'"
        />
        <label :for="subject.subject">{{ subject.subject }}</label>
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  props: {
    filterName: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      types: [],
      genres: [],
      checkedType: [],
      checkedGenre: [],
    };
  },
  methods: {
    typeVisible(type) {
      return type;
    },
    getSelectedTypes() {
        return this.data.checkedType;
    }
  },
  mounted() {
    axios.get("http://localhost:5000/types").then((resp) => {
      this.types = resp.data;
    });
    axios.get("http://localhost:5000/subjects").then((resp) => {
      this.genres = resp.data;
    });
  },
};
</script>
