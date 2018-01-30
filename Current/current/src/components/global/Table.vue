<template>
  <div class="component-layout">
    <section class="header-panel" :style="tableProps.headerStyle">
      <span class="header-item" v-for="(header, current) in tableProps.header" :key="current" :style="double(header.dropdown)">
        <p>{{header.name}}</p>
        <i class="fa fa-caret-down" v-if="header.dropdown"></i>
      </span>
    </section>
    <section class="rows-panel">
      <div class="row-item" v-for="(row, index) in tableProps.rows" :key="index">
        <span class="rows-item" :style="{gridTemplateColumns: tableProps.headerStyle.gridTemplateColumns}" @click="selected">
          <span v-for="(item, current) in tableProps.rows[index]" :key="current" :style="double(item.icon)">
            <p v-if="!item.url">{{item[Object.keys(item)[0]]}}</p>
            <i v-if="!item.url" :class="item.icon" :style="{color: item.iconColor}"></i>
            <img v-if="item.url" :src="item.url">
          </span>
        </span>
      </div>
    </section>
  </div>
</template>

<style scoped>
.component-layout {
  display: grid;
  grid-row-gap: 5px;
  cursor: default;
}
/*HEADER*/
.header-panel {
  font-size: 14px;
  color: white;
  border-radius: 3px;
  font-weight: 500;
  display: grid;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.header-item {
  padding: 20px;
  border-right: solid 1px #cb15d6;
  display: grid;
  align-items: center;
  justify-content: center;
  grid-column-gap: 5px;
  letter-spacing: 0.5px;
}
.header-item:first-child {
  justify-content: start;
}
.header-item:last-child {
  border-right: none;
}
.header-item > i {
  font-size: 10px;
  opacity: 0.8;
}

/*ROWS*/
.rows-panel {
  border-radius: 3px;
  background-color: #f7f7f7;
  display: grid;
  grid-row-gap: 1px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
}
.row-item {
  background-color: white;
}
.row-item * {
  box-sizing: border-box;
}
.row-item:first-child {
  border-radius: 3px 3px 0 0;
}
.row-item:last-child {
  border-radius: 0 0 3px 3px;
}
.rows-item {
  font-size: 14px;
  color: white;
  display: grid;
  color: #585b7b;
  padding: 20px 0;
  font-size: 13px;
  transition: 0.3s;
}
.rows-item:hover {
  background-color: #f8f8f8;
}
.rows-item > span {
  width: 100%;
  justify-content: center;
  align-items: center;
  display: grid;
  border-right: solid 1px #f7f7f7;
  grid-column-gap: 10px;
}
.rows-item > span:first-child {
  justify-content: start;
  padding-left: 20px;
  font-weight: 500;
  letter-spacing: 0.5px;
  color: black;
}
.rows-item > span:last-child {
  border-right: none;
}
.rows-item > span > i {
  margin-bottom: 1px;
  opacity: 0.5;
}
img {
  width: 23px;
  image-rendering: auto;
}
</style>

<script>
export default {
  props: {
    tableProps: Object
  },
  methods: {
    selected() {
      this.$router.push(this.tableProps.push);
    },
    double(doubleColumn) {
      if (doubleColumn) {
        return "gridTemplateColumns: repeat(2, max-content)";
      }
    }
  }
};
</script>
